"use server";

import axios from "axios";

const getImageLink = async(query) => {
    // try {
    //     const response = await axios.get(
    //       `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_API}&q=${encodeURIComponent(query)}&image_type=photo&pretty=true`
    //     );
    //     const imageLinks = response.data.hits.map(hit => hit.webformatURL);

    //     return imageLinks
    //   } catch (error) {
    //     console.error("Error fetching images from Pixabay:", error);
    //   }
    try {
      // Fetch images from Pexels API
      const response = await axios.get(`https://api.pexels.com/v1/search`, {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_PIXEL_API,
        },
        params: {
          query: query,
          per_page: 10, // Number of results per page
        },
      });
  
      // Extract image URLs from the response
      const imageLinks = response.data.photos.map(photo => photo.src.medium); // Use `photo.src.original` for full-size images
  
      return imageLinks;
    } catch (error) {
      console.error("Error fetching images from Pexels:", error);
      throw new Error("Unable to fetch images from Pexels");
    }
}

export default getImageLink
