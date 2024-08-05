import Link from "next/link";
export default function Home() {
  return (
    <>
      <div
        className="min-h-84vh w-full"
        style={{
          backgroundImage: "url('/images/home_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center min-h-84vh flex justify-center items-center min-w-screen h-full">
          <div className="bg-black bg-opacity-30 p-10 rounded-lg inline-block w-5/6">
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to FarmToTable
            </h1>
            <p className="text-xl text-white mb-8 max-xsm:text-sm">
              {/* At FarmToTable, we are committed to promoting sustainable
              agriculture and supporting local farmers. Our platform connects
              consumers directly with farmers, ensuring fair prices and
              high-quality produce. Join us in making a difference in your
              community! */}
              Our demo project only simplifies the process of ordering products directly from local farmers. Users can browse available items, add them to their cart, and place orders. The platform ensures that users only see products in stock, and they can manage their orders efficiently. With seamless Google authentication, users can quickly sign in and access their order history. The project focuses on providing a user-friendly interface and supports local agriculture by connecting consumers directly with producers.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-slate-300 to-slate-400 w-full">
        <div className="container mx-auto py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            OUR SERVICES
          </h1>
          <p className="text-lg text-white">
            At FarmFresh, we offer a range of services dedicated to promoting
            sustainable agriculture and supporting local farmers. Explore how we
            can help you buy and sell fresh, organic produce while fostering
            community support and agricultural education.
          </p>
        </div>
      </div>

      <div
        className="h-auto py-7 flex items-center justify-center gap-6 w-full flex-wrap text-black max-sm:flex-col"
        style={{
          backgroundImage: "url('/images/home_bg2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[46%]  flex justify-end max-xsm:justify-center">
          {" "}
          <div className="flex h-80 w-72 min-w-72 p-3 flex-col items-center justify-center gap-5 rounded-2xl bg-gray-100 bg-opacity-30 border-2 border-gray-300 shadow-md backdrop-filter backdrop-blur-sm">


            <h1 className="text-3xl font-medium">BUY</h1>
            <p className="text-center">
              Buy fresh, organic fruits, vegetables, and grains directly from
              farmers at fair prices, supporting local agriculture.
            </p>

            <button className="home-buy rounded px-4 py-2 font-bold text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              <Link href="/buy">Buy Now</Link>
            </button>
            
          </div>
        </div>
        <div className="w-[46%]  flex justify-start max-xsm:justify-center">
          <div className="flex h-80 w-72 min-w-72 p-3 flex-col items-center justify-center gap-5 rounded-2xl bg-gray-100 bg-opacity-30 border-2 border-gray-300 shadow-md backdrop-filter backdrop-blur-sm">
            <h1 className="text-3xl font-medium">SELL</h1>
            <p className="text-center">
              Sell your fresh, organic produce directly to consumers at fair
              prices, promoting sustainability and community support.
            </p>
            <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <Link href="/sell">Sell Now</Link>
            </button>
          </div>
        </div>
        <div className="w-[46%]  flex justify-end max-xsm:justify-center">
          <div className="flex h-80 w-72 min-w-72 p-3 flex-col items-center justify-center gap-5 rounded-2xl bg-gray-100 bg-opacity-30 border-2 border-gray-300 shadow-md backdrop-filter backdrop-blur-sm">
            <h1 className="text-center text-2xl font-medium">
              PLANT THE SEEDS OF KNOWLEDGE
            </h1>
            <p className="text-center">
              By embracing continuous learning in agriculture, you can cultivate
              sustainable practices and achieve higher yields, ensuring a
              prosperous future for generations to come.
            </p>
            <button className="bg-yellow-500 rounded px-4 py-2 font-bold text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
              <Link href="/info">Acknowledge</Link>
            </button>
          </div>
        </div>
        <div className="w-[46%]  flex justify-start max-xsm:justify-center">
          <div className="flex h-80 w-72 min-w-72 p-3 flex-col items-center justify-center gap-3 rounded-2xl bg-gray-100 bg-opacity-30 border-2 border-gray-300 shadow-md backdrop-filter backdrop-blur-sm">
            <h1 className="text-center text-2xl font-medium">
              PROTECT YOUR CROPS
            </h1>
            <p className="text-center">
              Utilize advanced weather forecasting to safeguard your crops from
              adverse conditions. Our innovative approach ensures your fields
              stay productive and resilient against unpredictable weather.
            </p>
            <button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50">
              <Link href="/crop_safety">Discover How</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
