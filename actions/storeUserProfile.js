import { sql } from '@vercel/postgres';

const storeUserProfile = async (data) => {
  try {
    // Ensure the profile table exists
    await sql`
      CREATE TABLE IF NOT EXISTS farmtotable_profile (
        user_id INT NOT NULL,
        user_email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255) NOT NULL,
        state VARCHAR(255) NOT NULL,
        district VARCHAR(255) NOT NULL,
        pincode INT NOT NULL,
        address VARCHAR(1000),
        FOREIGN KEY (user_id) REFERENCES farmtotable_users (id),
        FOREIGN KEY (user_email) REFERENCES farmtotable_users (email)
      )
    `;

    // Check if profile already exists for the user
    const result = await sql`SELECT * FROM farmtotable_profile WHERE user_email = ${data.email}`;

    if (result.rows.length > 0) {
      // Update existing profile
      await sql`
        UPDATE farmtotable_profile
        SET name = ${data.name}, state = ${data.state}, district = ${data.district}, pincode = ${data.pincode}, address = ${data.address}
        WHERE user_email = ${data.email}
      `;
    } else {
      // Insert new profile
      const user = await getEmailId(data.email);
      await sql`
        INSERT INTO farmtotable_profile (user_id, user_email, name, state, district, pincode, address)
        VALUES (${user.id}, ${data.email}, ${data.name}, ${data.state}, ${data.district}, ${data.pincode}, ${data.address})
      `;
    }
  } catch (error) {
    console.error('Error storing user profile:', error);
  }
};

export default storeUserProfile;
