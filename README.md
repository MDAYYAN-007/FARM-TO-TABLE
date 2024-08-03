Here's the updated documentation with the Vercel link included:

```markdown
# FARM TO TABLE

FARM TO TABLE is a web platform that connects local farmers directly with consumers, providing a transparent marketplace for high-quality, sustainable, and fairly priced produce. Our mission is to support local agriculture and promote sustainable practices.

## Try This here

This application can be accessed at [https://farm-to-table-two.vercel.app/](https://farm-to-table-two.vercel.app/). **Note:** This link may not work if the project is taken down for any reason.


## Features

- **Direct Farmer-Consumer Connection:** Eliminate middlemen and support local farmers.
- **User Authentication:** Easy sign-in using Google.
- **Product Display:** Browse products with images, prices, and descriptions.
- **Shopping Cart:** Manage selected items effortlessly.
- **Order Management:** Track orders and their statuses.
- **Responsive Design:** Optimized for various devices.

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** Vercel Postgres
- **Authentication:** NextAuth.js with Google provider
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/MDAYYAN-007/FARM-TO-TABLE
   cd farm-to-table
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up PostgreSQL:**

   Create a PostgreSQL database and update the connection string in your `.env` file.

4. **Configure environment variables:**

   Create a `.env` file in the root directory. Ensure it includes all necessary environment variables for your project. The file should contain variables for:

   - PostgreSQL database connection
   - External APIs
   - Google authentication credentials
   - NextAuth configuration

5. **Run database migrations:**

   ```sh
   npm run migrate
   ```

6. **Start the development server:**

   ```sh
   npm run dev
   ```

   Your application should now be running on [http://localhost:3000](http://localhost:3000).

### Deployment

Deploy your application to Vercel with the following steps:

1. **Sign up for Vercel:** Create an account on [Vercel](https://vercel.com/).

2. **Connect your repository:** Link your GitHub repository to Vercel.

3. **Set environment variables:** In your Vercel dashboard, add the necessary environment variables as specified in your local `.env` file.

4. **Deploy:** Vercel will automatically build and deploy your application.

## Usage

### User Authentication

- **Sign In:** Users can sign in using their Google account.
- **Profile Management:** Users can view and update their profile information.

### Shopping Experience

- **Browse Products:** View all available products with detailed descriptions and prices.
- **Add to Cart:** Select products and add them to your shopping cart.
- **Place Orders:** Proceed to checkout and place orders directly from the platform.

### Orders Management

- **View Orders:** Track your order history and current order status.

## Contributing

We welcome contributions to FARM TO TABLE. To contribute:

1. **Fork the repository:**

   ```sh
   git fork https://github.com/MDAYYAN-007/FARM-TO-TABLE
   ```

2. **Create a feature branch:**

   ```sh
   git checkout -b feature/your-feature-name
   ```

3. **Commit your changes:**

   ```sh
   git commit -m 'Add some feature'
   ```

4. **Push to the branch:**

   ```sh
   git push origin feature/your-feature-name
   ```

5. **Open a pull request:** Submit your changes for review.

## Contact

For any inquiries or issues, please contact us at mdayyanofficial@gmail.com