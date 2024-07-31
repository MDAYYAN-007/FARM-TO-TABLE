"use server"
import { sql } from '@vercel/postgres';

const getUserProfile = async (email) => {
  try {
    const response = await sql`SELECT * FROM farmtotable_profile WHERE user_email = ${email}`;
    if (response && response.rows && response.rows.length > 0) {
      return response.rows[0];
    }
    return {};
  } catch (err) {
    console.error('Error fetching user profile:', err);
    return {};
  }
}

export default getUserProfile;
