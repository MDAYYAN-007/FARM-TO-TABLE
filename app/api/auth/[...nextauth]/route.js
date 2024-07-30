import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { sql } from '@vercel/postgres';
import storeUserLogin from '@/actions/storeUserLoginData';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await storeUserLogin(user.email);
      return true;
    },
    async session({ session }) {
      if (session.user && session.user.email) {
        const result = await sql`SELECT is_profile_complete FROM farmtotable_users WHERE email = ${session.user.email}`;
        session.user.isProfileComplete = result.rows[0]?.is_profile_complete || false;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
