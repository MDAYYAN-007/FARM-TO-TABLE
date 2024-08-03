"use server"
import { sql } from "@vercel/postgres";

const deleteFromCart = async (productId, email) => {
  try {
    // Get the user ID for the given email
    const userResult = await sql`SELECT id FROM farmtotable_users WHERE email = ${email}`;
    const userId = userResult.rows[0].id;

    // Delete the item from the cart
    await sql`
      DELETE FROM farmtotable_cart 
      WHERE product_id = ${productId} AND user_id = ${userId}
    `;
  } catch (error) {
    console.error("Error removing item from cart:", error);
    throw new Error("Failed to remove item from cart");
  }
};

export default deleteFromCart;
