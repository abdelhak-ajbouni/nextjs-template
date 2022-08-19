import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { prisma } from "server/db/client";
import configs from "configs"

const { debug, google } = configs;

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: google.clientId!,
      clientSecret: google.clientSecret!,
    }),
    // ...add more providers here
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     name: {
    //       label: "Name",
    //       type: "text",
    //       placeholder: "Enter your name",
    //     },
    //   },
    //   // TODO: refactor authorize in CredentialsProvider
    //   async authorize(credentials, _req) {
    //     const user = { id: 1, name: credentials?.name ?? "J Smith" };
    //     return user;
    //   },
    // }),
  ],
  pages: {
    signIn: '/auth/login',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  },
  debug: debug,
};

export default NextAuth(authOptions);
