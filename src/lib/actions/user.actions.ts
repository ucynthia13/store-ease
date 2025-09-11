"use server"

import { ID, Query } from "node-appwrite"
import { createAdminClient } from ".."
import { appwriteConfig } from "../appwrite/config"
import { parseStringify } from "../utils"
import { toast } from "sonner"

const getUserByEmail = async(email: string) => {
    const { databases } = await createAdminClient()

    const result = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.usersCollectionId,
        [Query.equal("email", [email])],
    )

    return result.total > 0 ? result.documents[0] : null;
}

const handleError = (error: unknown, message: string) => {
    console.log(error, message);
    throw error;
}

export const sendEmailOTP = async({userId, email}: {userId: string, email:string}) => {
    const { account } = await createAdminClient()
    try {
        const session = await account.createEmailToken(userId, email)
        toast.success("OTP sent to your email!")
        return session.userId;
    } catch (error) {
        handleError(error, "failed to send OTP")
    }
}

export const verifyEmailOTP = async({accountId, otp}: {accountId: string, otp:string}) => {
    try {
        const { account } = await createAdminClient()
        const session = await account.createSession(accountId, otp)
        return session.userId;
    } catch (error) {
        handleError(error, "failed to verify OTP")
    }
}

export const createAccount = async({
    fullName,
    email,
}: {
    fullName: string, 
    email: string,
}) => {
    const existingUser = await getUserByEmail(email);
    let accountId: string;

    if(!existingUser) {
        const { databases } = await createAdminClient();
        const newAccountId = ID.unique();

        await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            newAccountId,
            {
                fullName,
                email,
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthLaDjda8fg603o2NNtK6XQGaB-gIY8OSzYG435gvgZCWgh4QJcgIk3g&s",
                accountId: newAccountId
            }
        )
        accountId = newAccountId;
    } else {
        accountId = existingUser.accountId;
    }

    const otpResult = await sendEmailOTP({userId: accountId, email});

    if(!otpResult) throw new Error("Failed to send OTP!");

    return parseStringify({accountId});
}

