import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../DBconfig/MongoDB";
import UserModal from "../../../DBconfig/models/userSchema";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {},
      async authorize(credentials, req) {
        await connectMongoDB();
        const user = await UserModal.findOne({
          // @ts-ignore
          email: credentials?.email,
        });

        if (user) {
          const match = await bcrypt.compare(
            // @ts-ignore
            credentials?.password,
            user.password
          );

          if (match) {
            return user;
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
