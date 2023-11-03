import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/util/db";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";



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
        return null
      },
    })
  ],
  // session: {
  //   strategy: "jwt",
  // },
})

export default NextAuth(authOptions)