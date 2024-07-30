import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
<<<<<<< HEAD
<<<<<<< HEAD
import { sql } from '@vercel/postgres';
import storeUserLogin from '@/actions/storeUserLoginData';
=======

console.log("Google Client ID:",process.env.GOOGLE_CLIENT_ID);
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
=======

console.log("Google Client ID:",process.env.GOOGLE_CLIENT_ID);
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
=======
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
});

export { handler as GET, handler as POST };
