"use server";
import { sql } from "@vercel/postgres";

const getVegetablesData = async (email) => {
  try {
    // Get the user ID for the given email
    const userResult = await sql`SELECT id FROM farmtotable_users WHERE email = ${email}`;
    const userId = userResult.rows[0].id;

    const response = await sql`
      SELECT * FROM farmtotable_products WHERE product_type = 'vegetables' AND user_id != ${userId} AND available_units != 0;
    `;

    if (response && response.rows && response.rows.length > 0) {
      return response.rows;
    }
    return [];
  } catch (error) {
    console.error('Error fetching vegetables data:', error);
    return [];
  }
};

export default getVegetablesData;
