"use server"
import { sql } from "@vercel/postgres";

const getCartItems = async (email) => {
  try {
    const userResult = await sql`SELECT id FROM farmtotable_users WHERE email = ${email}`;
    const userId = userResult.rows[0].id;

    const cartItems = await sql`
      SELECT product_id, product_name, price, product_image AS image, quantity, (price * quantity) AS total_cost
      FROM farmtotable_cart
      WHERE user_id = ${userId}
    `;
    return cartItems.rows;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw new Error("Failed to fetch cart items");
  }
};

export default getCartItems;
