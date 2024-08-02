"use server"
import { sql } from '@vercel/postgres';

const storeProductData = async (data, email, imageLink) => {
  try {
    // Ensure the products table exists
    await sql`
      CREATE TABLE IF NOT EXISTS farmtotable_products (
        id SERIAL PRIMARY KEY,
        user_id INT NOT NULL,
        product_name VARCHAR(255) NOT NULL,
        product_type VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        available_units INT NOT NULL,
        product_desc TEXT NOT NULL,
        product_image VARCHAR(1000) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES farmtotable_users (id) ON DELETE CASCADE
      )
    `;

    // Get the user ID for the given email
    const userResult = await sql`SELECT id FROM farmtotable_users WHERE email = ${email}`;
    const userId = userResult.rows[0].id;

    // Insert the product data
    await sql`
      INSERT INTO farmtotable_products (user_id, product_name, product_type, price, available_units, product_desc, product_image)
      VALUES (${userId}, ${data.productName}, ${data.productType}, ${data.price}, ${data.availableUnits}, ${data.description}, ${imageLink})
    `;
  } catch (error) {
    console.error('Error storing product data:', error);
  }
}

export default storeProductData;
