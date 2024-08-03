"use server";
import { sql } from "@vercel/postgres";

const placeOrder = async (email) => {
  try {
    // Get the user ID for the given email
    const userResult = await sql`SELECT id FROM farmtotable_users WHERE email = ${email}`;
    if (userResult.rows.length === 0) {
      return { success: false, message: "User not found" };
    }
    const userId = userResult.rows[0].id;

    // Get cart items for the user
    const cartItemsResult = await sql`SELECT * FROM farmtotable_cart WHERE user_id = ${userId}`;
    const cartItems = cartItemsResult.rows;

    if (cartItems.length === 0) {
      return { success: false, message: "No items in cart" };
    }

    // Check if quantities are available
    for (const item of cartItems) {
      const productResult = await sql`SELECT available_units FROM farmtotable_products WHERE id = ${item.product_id}`;
      if (productResult.rows.length === 0) {
        return { success: false, message: `Product with ID ${item.product_id} not found` };
      }

      const availableUnits = productResult.rows[0].available_units;
      if (item.quantity > availableUnits) {
        return { success: false, message: `Not enough units available for product ${item.product_name}` };
      }
    }

    // Create orders table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS farmtotable_orders (
        id SERIAL PRIMARY KEY,
        seller_id INT NOT NULL,
        buyer_id INT NOT NULL,
        product_id INT NOT NULL,
        product_name VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        product_image TEXT NOT NULL,
        quantity INT NOT NULL,
        order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (seller_id) REFERENCES farmtotable_users(id),
        FOREIGN KEY (buyer_id) REFERENCES farmtotable_users(id),
        FOREIGN KEY (product_id) REFERENCES farmtotable_products(id)
      );
    `;

    // Update product quantities, insert into orders table, and clear the cart
    for (const item of cartItems) {
      await sql`UPDATE farmtotable_products SET available_units = available_units - ${item.quantity} WHERE id = ${item.product_id}`;

      // Assuming seller_id is stored in the products table
      const productDetails = await sql`SELECT user_id FROM farmtotable_products WHERE id = ${item.product_id}`;
      const sellerId = productDetails.rows[0].user_id;
      console.log(sellerId)

      // Insert order details into the orders table
      await sql`
        INSERT INTO farmtotable_orders (seller_id, buyer_id, product_id, product_name, price, product_image, quantity)
        VALUES (${sellerId}, ${userId}, ${item.product_id}, ${item.product_name}, ${item.price}, ${item.product_image}, ${item.quantity});
      `;
    }

    await sql`DELETE FROM farmtotable_cart WHERE user_id = ${userId}`;

    return { success: true, message: "Order placed successfully" };
  } catch (error) {
    console.error("Error placing order:", error);
    return { success: false, message: "An error occurred while placing the order" };
  }
};

export default placeOrder;
