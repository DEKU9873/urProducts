import React from "react";
import Heading from "../Shared/Heading";
import nationalbank from "../assets/systems/nationalbank.png";

const NationalBank = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="container mt-10 bg-gray-100 shadow-md rounded-lg overflow-hidden w-full">
        <Heading title="National Bank for Obsolete Materials" subtitle="Explore our National Bank for Obsolete Materials" />
        {/* Section for Video Centering */}
        <div className="flex items-center justify-center bg-gray-100 p-4">
          <video
            className="w-full md:w-3/4 h-[470px] object-cover rounded-md"
            controls
            src="/video/nationalbank.mp4"
            poster={nationalbank}
          ></video>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">
            Key Features of the System:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-justify">
            <li>
              <strong>Effective Management of Obsolete Materials:</strong> The
              system allows government institutions to register all obsolete and
              slow-moving materials on the platform with detailed information,
              including their condition, quantity, and value.
            </li>
            <li>
              <strong>Achieving Sustainability:</strong> The platform
              contributes to sustainability by converting obsolete and unused
              materials into valuable economic resources. This is achieved by
              redirecting these materials for optimal use, whether through
              selling, recycling, or reallocating them for other projects.
            </li>
            <li>
              <strong>Internal Redistribution:</strong> The system provides a
              mechanism for redistributing materials within different government
              institutions. This allows other institutions to benefit from
              obsolete materials based on their needs, reducing the necessity to
              purchase new materials and improving resource efficiency.
            </li>
            <li>
              <strong>Integration with Government Systems:</strong> The platform
              features the ability to integrate with other government systems
              such as warehouse management, finance, and procurement to ensure
              seamless data flow and improve operational efficiency.
            </li>
            <li>
              <strong>Reports and Analytics:</strong> The system offers periodic
              reports and analytics that help in making informed decisions
              regarding material and inventory management.
            </li>
          </ul>
          <h2 className="text-xl font-bold mt-6 mb-4">Expected Benefits:</h2>
          <ul className="list-disc list-inside space-y-2 text-justify">
            <li>Reducing stockpiling in government warehouses.</li>
            <li>
              Converting obsolete materials into economically valuable assets.
            </li>
            <li>
              Speeding up the legal and transparent disposal of unused
              materials.
            </li>
            <li>
              Enhancing resource utilization and achieving sustainability in
              warehouse management.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NationalBank;
