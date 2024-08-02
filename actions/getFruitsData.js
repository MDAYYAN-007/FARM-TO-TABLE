"use server";
import { sql } from "@vercel/postgres";

const getFruitsData = async () => {
  try {
    const response = await sql`
      SELECT * FROM farmtotable_products WHERE product_type = 'fruits';
    `;

    if (response && response.rows && response.rows.length > 0) {
      return response.rows;
    }
    return [];
  } catch (error) {
    console.error('Error fetching fruits data:', error);
    return [];
  }
};

export default getFruitsData;
