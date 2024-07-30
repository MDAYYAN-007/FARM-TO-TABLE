import React from 'react';

const About = () => {
  return (
    <div
<<<<<<< HEAD
<<<<<<< HEAD
      className="min-h-80vh flex items-center justify-center"
=======
      className="h-screen flex items-center justify-center"
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
=======
      className="h-screen flex items-center justify-center"
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
      style={{
        backgroundImage: "url('/images/about_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg max-w-4xl w-full mx-4 md:mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">About Us</h1>
        <p className="text-gray-700 text-lg mb-6">
          Welcome to our fresh produce marketplace! Our mission is to connect local farmers with consumers who value fresh, high-quality produce. We believe in supporting sustainable farming practices and helping small farmers thrive.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Our platform allows farmers to list their fresh vegetables, fruits, and grains, making it easy for consumers to find and purchase local produce. With our user-friendly cart functionality, you can easily add products to your cart and proceed to checkout seamlessly.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Join us in supporting local farmers and enjoy the freshest produce available. Thank you for being a part of our community!
        </p>
        <a href="/" className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default About;
