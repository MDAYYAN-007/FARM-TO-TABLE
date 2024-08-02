"use server"
import { sql } from "@vercel/postgres"; // Assuming you are using Vercel's postgres library

const deleteProduct = async (productId) => {
  try {
    await sql`DELETE FROM farmtotable_products WHERE id = ${productId}`;
    console.log(`Product with ID ${productId} deleted successfully.`);
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};

export default deleteProduct