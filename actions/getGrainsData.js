"use server";
import { sql } from "@vercel/postgres";

const getGrainsData = async (email) => {
  try {
    // Get the user ID for the given email
    const userResult = await sql`SELECT id FROM farmtotable_users WHERE email = ${email}`;
    const userId = userResult.rows[0].id;

    const response = await sql`
      SELECT * FROM farmtotable_products WHERE product_type = 'grains' AND user_id != ${userId};
    `;

    if (response && response.rows && response.rows.length > 0) {
      return response.rows;
    }
    return [];
  } catch (error) {
    console.error('Error fetching grains data:', error);
  }
};

export default getGrainsData;
