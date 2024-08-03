"use server";
import { sql } from "@vercel/postgres";

const addToCart = async (data, quantity, email) => {
  try {
    // Create table if it doesn't exist with seller_id column
    await sql`
      CREATE TABLE IF NOT EXISTS farmtotable_cart (
        id SERIAL PRIMARY KEY,
        product_id INT NOT NULL,
        product_name VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        product_image TEXT NOT NULL,
        quantity INT NOT NULL,
        user_id INT NOT NULL,
        seller_id INT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES farmtotable_users(id) ON DELETE CASCADE,
        FOREIGN KEY (seller_id) REFERENCES farmtotable_users(id) ON DELETE CASCADE
      );
    `;

    try {
      // Get the user ID for the given email
      const userResult = await sql`SELECT id FROM farmtotable_users WHERE email = ${email}`;
      if (userResult.rows.length === 0) {
        console.error('User not found for the given email:', email);
        return;
      }
      const userId = userResult.rows[0].id;

      // Get the seller ID for the given product
      const sellerResult = await sql`SELECT user_id FROM farmtotable_products WHERE id = ${data.id}`;
      if (sellerResult.rows.length === 0) {
        console.error('Product not found for the given ID:', data.id);
        return;
      }
      const sellerId = sellerResult.rows[0].user_id;

      // Check if the product already exists in the cart for the user
      const cartResult = await sql`
        SELECT * FROM farmtotable_cart WHERE product_id = ${data.id} AND user_id = ${userId};
      `;

      if (cartResult.rows.length > 0) {
        // Update the quantity if the product is already in the cart
        await sql`
          UPDATE farmtotable_cart
          SET quantity = ${quantity}
          WHERE product_id = ${data.id} AND user_id = ${userId};
        `;
      } else {
        // Insert a new item into the cart
        await sql`
          INSERT INTO farmtotable_cart (product_id, product_name, price, product_image, quantity, user_id, seller_id)
          VALUES (${data.id}, ${data.product_name}, ${data.price}, ${data.product_image}, ${quantity}, ${userId}, ${sellerId});
        `;
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  } catch (error) {
    console.error("Error setting up cart schema:", error);
  }
};

export default addToCart;
