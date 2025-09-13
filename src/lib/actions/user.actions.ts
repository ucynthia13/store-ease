"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient } from "..";
import { appwriteConfig } from "../appwrite/config";
import { parseStringify } from "../utils";
import { cookies } from "next/headers";

const getUserByEmail = async (email: string) => {
  const { databases } = await createAdminClient();

  const result = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    [Query.equal("email", [email])]
  );

  return result.total > 0 ? result.documents[0] : null;
};

const handleError = (error: unknown, message: string) => {
  console.log(error, message);
  throw error;
};

export const sendEmailOTP = async ({
  email,
}: {
  email: string;
}) => {
  const { account } = await createAdminClient();
  try {
    const session = await account.createEmailToken(ID.unique(), email);
    return session.userId
  } catch (error) {
    handleError(error, "failed to send OTP");
  }
};

export const verifyEmailOTP = async ({
  accountId,
  otp,
}: {
  accountId: string;
  otp: string;
}) => {
  try {
    const { account } = await createAdminClient();
    const session = await account.createSession(accountId, otp);
    //create session
    (
      await 
      cookies()
    ).set("appwrite-session", session.secret, {
      httpOnly: true,
      path: "/",
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600,
    });
    return parseStringify({ sessionId: session.$id });
  } catch (error) {
    handleError(error, "failed to verify OTP");
  }
};

export const createAccount = async ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
  const existingUser = await getUserByEmail(email);
  const accountId = await sendEmailOTP({ email });
  if (!accountId) throw new Error("Failed to send OTP!");
  if (!existingUser) {
    const { databases } = await createAdminClient();

    //new db document
    await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      {
        fullName,
        email,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthLaDjda8fg603o2NNtK6XQGaB-gIY8OSzYG435gvgZCWgh4QJcgIk3g&s",
        accountId
      }
    );
  } 
  return parseStringify({ accountId });
};


export const loginUser = async ({
  email
}: {
  email: string;
}) => {
  try {
    const existingUser = await getUserByEmail(email);
    if(existingUser) {
      //send user OTPassword
      await sendEmailOTP({ email });
      return parseStringify({ accountId: existingUser.accountId });
    }
  } catch (error) {
    handleError(error, "failed to login");
  }
}