import React from "react";
import Heading from "../Shared/Heading";

const FirstApp = () => {
  return (
    <div className=" bg-gray-100 flex items-center justify-center p-4">
      <div className="container  bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <Heading
        title="GPS-Based logistics tracking applications"
        subtitle="Explore our Application and Software"
      />

        {/* Content Section */}
        <div className="p-6 space-y-4 text-gray-700">
          <p>
            A GPS-based logistics tracking application is a powerful tool that allows companies
            to monitor and optimize their entire delivery and transportation process in real-time.
            By leveraging GPS technology, these applications provide accurate and continuous
            location updates for vehicles, shipments, and assets, ensuring complete visibility
            throughout the supply chain.
          </p>

          <h2 className="text-xl font-bold text-blue-600">Core Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time tracking of vehicles and goods</li>
            <li>Route optimization</li>
            <li>Delivery status updates</li>
            <li>Geofencing alerts</li>
            <li>Reporting tools for performance analysis</li>
          </ul>

          <p>
            Users can set up automated alerts to notify managers and customers about the estimated
            time of arrival (ETA), delays, or any unexpected deviations from the planned routes.
          </p>

          <h2 className="text-xl font-bold text-blue-600">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce operational costs by minimizing fuel consumption</li>
            <li>Avoid traffic and improve driver behavior</li>
            <li>Higher efficiency and faster deliveries</li>
            <li>Increased customer satisfaction</li>
          </ul>

          <p>
            With GPS-based tracking apps, companies can also integrate advanced features such as
            temperature monitoring for sensitive goods, cargo security, and predictive maintenance
            for vehicles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstApp;
