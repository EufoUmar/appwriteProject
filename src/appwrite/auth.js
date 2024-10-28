import {Client, ID, Account  } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
    client = new Client()

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
       this.account = new Account(this.client) 
    }
    async createAccount(email, password, name) {
        try {
           const userAccount = await this.account.create(ID.unique(), email, password, name)
           if (userAccount) {
            
           } else {
            return userAccount;
           }
        } catch (error) {
            throw error;
        }
    }
}

const autheServices = new AuthService()

export default AuthService