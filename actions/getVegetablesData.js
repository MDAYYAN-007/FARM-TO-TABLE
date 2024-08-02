"use server";
import { sql } from "@vercel/postgres";

const getVegetablesData = async () => {
  try {
    const response = await sql`
      SELECT * FROM farmtotable_products WHERE product_type = 'vegetables';
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
