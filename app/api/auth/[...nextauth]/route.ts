import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {compare} from 'bcrypt';
import { userValidator } from "@/lib/validators/userValidator";
import userModel from "@/models/userModel";

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
        credentials: {
            email: {},
            password: {}
          },
          async authorize(credentials, req): Promise<any> {
            const email = credentials?.email;
            const password = credentials?.password;
            // console.log(credentials);
            // const { error } = userValidator.validate(email || password);
            // if (error) {
            //   throw new Error(error.message);
            // }
            if (!email || !password) {
              console.error("Invalid email or password");
              throw new Error("Please enter a valid email address and password before you can login");
            }
            const user = await userModel.findOne({ email: email});
            console.log("User found", user);
            if (!user) {
              console.error("User not found");
              throw new Error("Please enter a valid email address and password before you can login");
            }
            const passwordMatch = await compare(password, user.password);
            console.log(passwordMatch)
            if (!passwordMatch) {
              console.log("Password mismatch")
              throw new Error("Please enter a valid email address and password before you can login");
            }
            if (passwordMatch) {
              const { _id, email, createdAt, updatedAt } = user;
              const data = {
                userId: _id,
                email,
                createdAt,
                updatedAt
              }
              console.log ("Password match", data);
              return data;
            }
            
            return null
          }
    })
  ]
})

export { handler as GET, handler as POST }