"use server";
import { sql } from "@vercel/postgres";

const getFruitsData = async (email) => {
  try {
    // Get the user ID for the given email
    const userResult = await sql`SELECT id FROM farmtotable_users WHERE email = ${email}`;
    const userId = userResult.rows[0].id;

    // Fetch products where product_type is 'fruits', user_id is not the given userId, and available_units is not 0
    const response = await sql`
      SELECT * FROM farmtotable_products
      WHERE product_type = 'fruits' 
        AND user_id != ${userId}
        AND available_units != 0;
    `;
    if (response && response.rows && response.rows.length > 0) {
      return response.rows;
    }
  } catch (error) {
    console.error('Error fetching fruits data:', error);
    return [];
  }
};

export default getFruitsData;
