import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/util/db";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcryptjs"

const loginUserSchema= z.object({
  name: z.string(),
  email: z.string().regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g, "Invalid email"),
  password: z.string().min(5,"Minimum characters should be 5 ")
})


export const authOptions: NextAuthOptions= ({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      credentials: {
        name: {type: 'text', placeholder: 'Username'},
        email: {type: 'text', placeholder: "Email"},
        password:{type:'text', placeholder: "Password"}
      },
      async authorize(credentials, req) {
        const {email, name, password}= loginUserSchema.parse(credentials)

        const user = await prisma.user.findUnique({
          where: {email}
       })
       //check if user exists
       if(!user) throw new Error("email does not exist")

       const isPasswordValid = await bcrypt.compare(password, user.password)
       if(!isPasswordValid) throw new Error("Invalid password")

        return user
      },
    })
  ],

  callbacks:{
    session({token, session}){
      session.user.id = token.id
      return session
    },
    
   async jwt({ token, account, user }) {
    // Persist the OAuth access_token and or the user id to the token right after signin
     if (account) {
       token.accessToken = account.access_token
       token.id = user.id
      }
     return token
    }
  },

  pages:{
    signIn: "/login"
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.JWT_SECRET
})

export default NextAuth(authOptions)