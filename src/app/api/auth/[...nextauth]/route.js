import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",   // optional: custom login page
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // After login, redirect to products page
      return "/products";
    },
  },
});

export { handler as GET, handler as POST };
