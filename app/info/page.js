"use client";
import { useState, useEffect } from "react";

const Info = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    // Default open first tab
    setActiveTab("tab1");
  }, []);

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className=" mx-auto py-8 flex ">
      {/* Sidebar */}
      <div className="w-1/5 bg-white shadow-md rounded-lg p-4 mr-8 fixed top-32 ml-4">
=======
    <div className="container mx-auto py-8 flex">
      {/* Sidebar */}
      <div className="w-1/5 bg-white shadow-md rounded-lg p-4 mr-8 fixed top-24 mt-2 ">
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
=======
    <div className="container mx-auto py-8 flex">
      {/* Sidebar */}
      <div className="w-1/5 bg-white shadow-md rounded-lg p-4 mr-8 fixed top-24 mt-2 ">
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
        <h2 className="text-xl font-semibold mb-4">Agenda</h2>
        <div className="flex flex-col">
          {[
            "Introduction",
            "Sustainable Farming",
            "Improvised methods of farming",
            "Robotics and Automation",
            "Biotechnology and Genetic Engineering",
            "Seasonal Crops",
            "Logistics Management",
          ].map((text, index) => (
            <button
              key={index}
              className={`tab-link text-left p-2 mb-2 bg-green-100 hover:bg-green-200 rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 ${
                activeTab === `tab${index + 1}` ? "bg-green-300" : ""
              }`}
              onClick={() => openTab(`tab${index + 1}`)}
            >
              {text}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-3/4 ml-auto">
        {/* Tab 1 */}
        <div id="tab1" className={`${activeTab === "tab1" ? "" : "hidden"}`}>
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            Welcome to our information page! Here, you will find a wealth of
            information related to sustainable agriculture, organic farming
            practices, and more. Our mission is to support farmers and promote
            environmentally friendly methods of farming. By sharing knowledge
            and best practices, we can help build a more sustainable and
            resilient agricultural system. This page covers a wide range of
            topics designed to provide valuable insights and practical advice
            for farmers, researchers, and anyone interested in sustainable
            agriculture. Agriculture is the backbone of our society, providing
            the food, fiber, and fuel that sustain our daily lives. However,
            traditional farming practices often come with significant
            environmental costs, such as soil degradation, water pollution, and
            loss of biodiversity. To address these challenges, sustainable
            agriculture aims to create farming systems that are environmentally
            sound, economically viable, and socially responsible. This involves
            adopting practices that conserve natural resources, reduce chemical
            inputs, and enhance the resilience of farming systems to climate
            change and other stressors.
          </p>
        </div>

        {/* Tab 2 */}
        <div id="tab2" className={`${activeTab === "tab2" ? "" : "hidden"}`}>
          <h2 className="text-2xl font-bold mb-4">Sustainable Farming</h2>
          <p className="text-gray-700 mb-4">
            Sustainable farming, also known as sustainable agriculture, is an
            approach to farming that seeks to balance the need for food
            production with the preservation of environmental quality and the
            well-being of farming communities. It focuses on practices that
            maintain or enhance the health of ecosystems, reduce dependency on
            non-renewable resources, and promote biodiversity. Sustainable
            farming techniques include crop rotation, organic fertilization,
            integrated pest management, and conservation tillage. These methods
            help to improve soil health, reduce water and air pollution, and
            support wildlife habitats. Additionally, sustainable farming aims to
            create resilient agricultural systems that can adapt to changing
            climate conditions while providing fair economic opportunities for
            farmers. By adopting these practices, sustainable farming strives to
            meet current food needs without compromising the ability of future
            generations to meet theirs.
          </p>
        </div>

        {/* Tab 3 */}
        <div id="tab3" className={`${activeTab === "tab3" ? "" : "hidden"}`}>
          <h2 className="text-2xl font-bold mb-4">
            Improvised methods of farming
          </h2>
          <p className="text-gray-700 mb-4">
            Improvised methods of farming often refer to innovative or
            alternative techniques that aim to increase efficiency,
            sustainability, or productivity in agriculture. Here are some
            examples:
          </p>
          <ul className="list-disc ml-6">
            <li>
              Vertical Farming: This involves growing crops in vertically
              stacked layers, often in controlled environments like skyscrapers
              or shipping containers. It maximizes space utilization and allows
              for efficient use of resources like water and nutrients.
            </li>
            <li>
              Agroforestry: Agroforestry integrates trees and shrubs into
              agricultural systems, providing multiple benefits such as improved
              soil fertility, biodiversity, and carbon sequestration. It can
              also provide additional products like fruits, nuts, and timber.
            </li>
            <li>
              Integrated Pest Management (IPM): IPM combines biological,
              cultural, physical, and chemical methods to manage pests
              effectively while minimizing economic, health, and environmental
              risks.
            </li>
          </ul>
        </div>

        {/* Tab 4 */}
        <div id="tab4" className={`${activeTab === "tab4" ? "" : "hidden"}`}>
          <h2 className="text-2xl font-bold mb-4">Robotics and Automation</h2>
          <p className="text-gray-700 mb-4">
            Robotics and automation are transforming agriculture by increasing
            efficiency, precision, and sustainability in farming practices.
            These technologies involve the use of robots, sensors, and automated
            systems to perform tasks that were traditionally done by humans. In
            agriculture, robotics and automation are applied in various ways to
            enhance productivity and reduce labor costs.
          </p>
          <p className="text-gray-700 mb-4">
            Robotic systems can automate repetitive tasks such as planting,
            weeding, and harvesting. For example, autonomous tractors and drones
            are used for planting seeds, monitoring crop health, and applying
            fertilizers and pesticides. These robots are equipped with advanced
            sensors and imaging technologies that enable them to perform tasks
            with high accuracy and consistency. Automated harvesters can pick
            fruits and vegetables at optimal ripeness, reducing waste and
            ensuring better yields.
          </p>
          <p className="text-gray-700 mb-4">
            In addition to physical tasks, automation in agriculture also
            includes the use of data-driven technologies to make informed
            decisions. Precision agriculture technologies, such as GPS-guided
            equipment and soil moisture sensors, help farmers optimize resource
            use and manage crops more effectively. These technologies provide
            real-time data on soil conditions, weather patterns, and crop
            health, enabling farmers to make precise adjustments to improve
            yields and reduce environmental impact. Overall, robotics and
            automation in agriculture contribute to more efficient farming
            practices, increased crop yields, and reduced environmental
            footprints, paving the way for a more sustainable and productive
            agricultural future.
          </p>
        </div>

        {/* Tab 5 */}
        <div id="tab5" className={`${activeTab === "tab5" ? "" : "hidden"}`}>
          <h2 className="text-2xl font-bold mb-6">
            Biotechnology and Genetic Engineering
          </h2>
          <p className="text-gray-700 mb-4">
            In agriculture, biotechnology and genetic engineering are pivotal in
            developing innovative solutions to enhance crop production, improve
            food security, and promote sustainable farming practices. These
            advanced technologies leverage biological processes to create crops
            with desirable traits that address various agricultural challenges.
          </p>
          <p className="text-gray-700 mb-4">
            Biotechnology in agriculture encompasses a range of techniques and
            tools, including tissue culture, genetic modification, and molecular
            markers. Through these methods, scientists can develop crops with
            improved traits such as increased resistance to pests and diseases,
            better tolerance to environmental stresses, and enhanced nutritional
            content. For example, biotechnological techniques like genetic
            modification have led to the creation of genetically modified (GM)
            crops such as Bt corn and Roundup Ready soybeans. Bt corn produces a
            protein that is toxic to specific insect pests, reducing the need
            for chemical pesticides, while Roundup Ready soybeans are engineered
            to tolerate glyphosate herbicide, simplifying weed management.
          </p>
          <p className="text-gray-700 mb-4">
            Genetic Engineering, a subset of biotechnology, involves directly
            modifying an organism’s DNA to introduce new traits or enhance
            existing ones. In agriculture, genetic engineering has enabled the
            development of crops with traits such as drought resistance,
            improved nutrient uptake, and enhanced growth rates. Techniques like
            CRISPR-Cas9 gene editing allow for precise changes to an organism’s
            genome, offering the potential to create crops that can withstand
            harsh conditions and require fewer inputs. For instance, scientists
            have engineered drought-resistant wheat varieties that maintain high
            yields even in water-scarce conditions.
          </p>
          <p className="text-gray-700 mb-4">
            Both biotechnology and genetic engineering also contribute to
            sustainable agriculture by reducing the reliance on chemical inputs,
            improving resource efficiency, and supporting conservation efforts.
            These technologies enable the development of crops that use water
            and nutrients more efficiently, which can lead to reduced
            environmental impacts and better resource management. Overall,
            biotechnology and genetic engineering are at the forefront of
            agricultural innovation, offering tools and techniques that address
            key challenges in modern farming and help create a more resilient
            and sustainable food system.
          </p>
        </div>

        {/* Tab 6 */}
        <div id="tab6" className={`${activeTab === "tab6" ? "" : "hidden"}`}>
          <h2 className="text-2xl font-bold mb-4">Seasonal Crops</h2>
          <p className="text-gray-700 mb-4">
            Seasonal crops refer to agricultural produce that grows best during
            specific times of the year. Growing seasonal crops can maximize
            yield, improve flavor, and reduce the need for chemical
            interventions. Here are some examples of seasonal crops for
            different seasons:
          </p>
          <ul className="list-disc ml-6">
            <li>Spring: Lettuce, spinach, peas, radishes, strawberries</li>
            <li>Summer: Tomatoes, cucumbers, peppers, corn, watermelon</li>
            <li>
              Fall: Pumpkins, sweet potatoes, carrots, apples, Brussels sprouts
            </li>
            <li>Winter: Kale, cabbage, winter squash, leeks, citrus fruits</li>
          </ul>
        </div>

        {/* Tab 7 */}
        <div id="tab7" className={`${activeTab === "tab7" ? "" : "hidden"}`}>
          <h2 className="text-2xl font-bold mb-4">Logistics Management</h2>
          <p className="text-gray-700 mb-4">
            Logistics management in agriculture involves the planning,
            implementation, and control of the flow of agricultural products
            from farms to consumers. Efficient logistics management is crucial
            for ensuring that products reach the market in a timely manner while
            maintaining quality and minimizing waste. Key aspects of logistics
            management in agriculture include:
          </p>
          <ul className="list-disc ml-6">
            <li>
              Transportation: Choosing the right mode of transportation (e.g.,
              trucks, rail, ships) and optimizing routes to reduce costs and
              improve delivery times.
            </li>
            <li>
              Storage: Proper storage facilities to maintain product quality and
              prevent spoilage, including refrigerated storage for perishable
              goods.
            </li>
            <li>
              Inventory Management: Tracking inventory levels to ensure adequate
              supply and minimize excess or shortage of products.
            </li>
            <li>
              Supply Chain Coordination: Collaborating with suppliers,
              distributors, and retailers to streamline the supply chain and
              enhance overall efficiency.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
