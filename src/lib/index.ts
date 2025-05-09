"use server"
import { Account, Client, Databases, Storage, Avatars } from "node-appwrite"
import { appwriteConfig } from "./appwrite/config";
import { cookies } from "next/headers";

export const createSession = async () => {
    const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)

    const session = (await cookies()).get('appwrite-session')
    console.log(session)
    if(!session || !session.value) throw new Error("No Session")

    client.setSession(session.value)

    return{
        get account(){
            return new Account(client)
        },

        get databases(){
            return new Databases(client)
        }
    }
}

export const createAdminClient = async () => {
    const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.secretId)

    const session = (await cookies()).get('appwrite-session')
    console.log(session)
    if(!session || !session.value) throw new Error("No session")

    client.setSession(session.value)

    return {
        get account(){
            return new Account(client)
        },
        get databases(){
            return new Databases(client)
        },
        get storage(){
            return new Storage(client)
        },
        get avatars(){
            return new Avatars(client)
        }
    }

}
