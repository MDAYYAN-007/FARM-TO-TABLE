"use server";
import { sql } from "@vercel/postgres";

const getOrdersRecieved = async (email) => {
  try {
    // Get the user ID for the given email
    const userResult = await sql`SELECT id FROM farmtotable_users WHERE email = ${email}`;
    if (userResult.rows.length === 0) {
      throw new Error("User not found");
    }
    const userId = userResult.rows[0].id;

    // Fetch orders for the user
    const ordersResult = await sql`
      SELECT o.id, o.product_name, o.price, o.quantity, o.product_image, o.buyer_id,o.product_image
      FROM farmtotable_orders o
      JOIN farmtotable_users u ON o.seller_id = u.id
      WHERE o.seller_id = ${userId}
    `;
    
    // Return the orders data
    return ordersResult.rows;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("An error occurred while fetching orders");
  }
};

export default getOrdersRecieved;