import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

const saltRounds = 10;

const storeUserLogin = async (email) => {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS farmtotable_users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        is_profile_complete BOOLEAN DEFAULT FALSE
      )
    `;

    const checkResult = await sql`SELECT * FROM farmtotable_users WHERE email = ${email}`;

    if (checkResult.rowCount > 0) {
      // User already exists, handle accordingly
      return;
    } else {
      const password = 'google'; // Password for Google authentication, could be a placeholder
      const hash = await bcrypt.hash(password, saltRounds);
      
      await sql`
        INSERT INTO farmtotable_users (email, password, is_profile_complete) 
        VALUES (${email}, ${hash}, ${false})
      `;
    }
  } catch (err) {
    console.error('Error registering user:', err);
  }
};

export default storeUserLogin;
