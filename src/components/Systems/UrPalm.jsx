import React from "react";
import Heading from "../Shared/Heading";
import urpalmposter from "../assets/systems/urpalm.png";

const UrPalm = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="container mt-10 bg-gray-100 shadow-md rounded-lg overflow-hidden w-full">
        <Heading title="UR Palm" subtitle="Explore our UR Palm system" />
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 gap-4">
          <video
            className="mx-1 w-full  h-80 my-auto object-cover rounded-md"
            controls
            src="/video/urpalm.mp4"
            poster={urpalmposter}
          ></video>
          <div className="p-6 flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              How the UR PALM Biometric Verification System Works
            </h1>
            <p className="text-gray-600 mb-4 text-justify">
              1. Infrared Imaging: A device is used to capture images of the
              blood vessels beneath the skin using infrared rays. These rays
              clearly and accurately reveal the vascular pattern.
            </p>
            <p className="text-gray-600 mb-4 text-justify">
              2. Image Analysis: The captured image is analyzed to extract the
              unique features of the blood vessels, such as their arrangement,
              size, and shape. These features are converted into unique digital
              data.
            </p>
            <p className="text-gray-600 mb-4 text-justify">
              3. Data Storage: The extracted data is stored in a secure database
              and can be used later for identity verification.
            </p>
            <p className="text-gray-600 mb-4 text-justify">
              4. Verification Process: When attempting to access the system, a
              new infrared image of the blood vessels is captured and compared
              with the stored data. If the data matches, identity is confirmed,
              and access is granted.
            </p>
          </div>
        </div>
        <div className="flex  justify-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Advantages Section */}
            <div className="p-6 bg-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Advantages of the UR PALM System
              </h2>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>
                  <strong>High Accuracy:</strong> Since vascular patterns are
                  unique to each individual, verification using infrared
                  technology is extremely accurate.
                </li>
                <li>
                  <strong>Strong Security:</strong> It is difficult to replicate
                  or forge vascular patterns, making this system reliable and
                  secure.
                </li>
                <li>
                  <strong>Fast Verification:</strong> The system can perform
                  verification quickly and accurately without requiring
                  prolonged interaction from the user.
                </li>
              </ul>
            </div>

            {/* Applications Section */}
            <div className="p-6 bg-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Applications and Uses
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>
                  <strong>Security:</strong> The system is used in sensitive
                  security environments, such as entrances to government
                  buildings or private institutions.
                </li>
                <li>
                  <strong>Identity Verification:</strong> It can be integrated
                  with other identity verification systems to enhance security
                  levels.
                </li>
                <li>
                  <strong>Physical Access:</strong> It is used at secure access
                  points that require high levels of verification.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrPalm;
