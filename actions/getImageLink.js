"use server";

import axios from "axios";

const getImageLink = async(query) => {
    try {
        const response = await axios.get(
          `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_API}&q=${encodeURIComponent(query)}&image_type=photo&pretty=true`
        );
        const imageLinks = response.data.hits.map(hit => hit.webformatURL); // You can use other properties like 'largeImageURL' or 'fullHDURL' if needed

        return imageLinks
      } catch (error) {
        console.error("Error fetching images from Pixabay:", error);
      }
}

export default getImageLink
