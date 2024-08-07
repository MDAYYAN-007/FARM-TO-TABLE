"use server";
import { sql } from "@vercel/postgres";

const getProductsData = async (email) => {
  try {
    const response = await sql`
      SELECT 
        products.*, 
        profile.name, 
        profile.state, 
        profile.district, 
        profile.pincode, 
        profile.address
      FROM 
        farmtotable_products AS products
      JOIN 
        farmtotable_profile AS profile
      ON 
        products.user_id = profile.user_id
      WHERE
        profile.user_email = ${email}
      ORDER BY products.available_units DESC;
    `;

    if (response && response.rows && response.rows.length > 0) {
      return response.rows;
    }
    return [];
  } catch (error) {
    console.error('Error fetching products data:', error);
    return [];
  }
};

export default getProductsData;
