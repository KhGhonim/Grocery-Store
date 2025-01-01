import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import UserModal from "../../../../Config/models/userSchema";
import bcrypt from "bcrypt";
import { connectMongoDB } from "../../../../Config/MongoDB";

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
            return {
              id: user._id,
              email: user.email,
              name: user.fristname,
            };
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

  callbacks: {
    async session({ session, token }) {
      // Attach user information to the session object
      if (token) {
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.id = token.id;
      }
      return session;
    },

    async jwt({ token, user }) {
      // Add user information to token when user is authenticated 
      if (user) {
        token.email = user.email;
        token.name = user.name;
        token.id = user.id;
      }
      return token;
    },

  },


};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
