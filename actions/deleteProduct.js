"use server"
import { sql } from "@vercel/postgres"; // Assuming you are using Vercel's postgres library

const deleteProduct = async (productId) => {
  try {
    // Update the available_units to 0
    await sql`
      UPDATE farmtotable_products
      SET available_units = 0
      WHERE id = ${productId}
    `;
    console.log(`Product with ID ${productId} availability updated to 0.`);
  } catch (error) {
    console.error('Error updating product availability:', error);
  }
};

export default deleteProduct
