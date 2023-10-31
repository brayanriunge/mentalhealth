import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/util/db";
import { NextAuthOptions } from "next-auth";



export const authOptions: NextAuthOptions= ({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // session: {
  //   strategy: "jwt",
  // },
})

export default NextAuth(authOptions)