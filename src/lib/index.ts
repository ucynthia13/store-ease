"use server"
import { Account, Client, Databases, Storage, Avatars } from "node-appwrite"
import { appwriteConfig } from "./appwrite/config";
import { cookies } from "next/headers";

//client instance with client-level permissions
export const createSessionClient = async () => {
    const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)

    const session = (await cookies()).get('appwrite-session')
    console.log(session)
    if(!session || !session.value) throw new Error("No Session")

    client.setSession(session.value)

    return{
        //returning new account
        get account(){
            return new Account(client)
        },
        //returning databases from Appwrite
        get databases(){
            return new Databases(client)
        }
    }
}

//client instance with admin-level permissions
export const createAdminClient = async () => {
    const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.secretId)
    
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
