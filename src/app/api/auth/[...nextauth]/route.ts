import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";
// import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!, // TODO: Try to remove `!`
      clientSecret: process.env.GOOGLE_SECRET!, // TODO: Try to remove `!`
    }),
    // GitHubProvider({
    //   clientId: process.env.GOOGLE_ID!, // TODO: Try to remove `!`
    //   clientSecret: process.env.GOOGLE_SECRET!, // TODO: Try to remove `!`
    // }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Username", type: "text" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   authorize(credentials: any) {
    //     // database operations
    //     return {
    //       id: "1",
    //       Email: credentials.email,
    //     };
    //   },
    // }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
