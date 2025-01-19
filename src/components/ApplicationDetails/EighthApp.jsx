import React from "react";
import { FaBuilding, FaChartLine, FaMoneyBillAlt, FaRegHandshake } from "react-icons/fa";
import Heading from "../Shared/Heading";

const EighthApp = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="pt-4 bg-white shadow-lg rounded-lg overflow-hidden w-full">
        {/* Header Section */}
        <Heading
          title="التطبيقات لإدارة العقارات والاستثمار الأمثل"
          subtitle="التكنولوجيا في خدمة إدارة العقارات وتحقيق الاستثمارات"
        />

        {/* Content Section */}
        <div className="p-6 space-y-6 text-gray-700">
          {/* Real Estate Management */}
          <div className="flex items-center space-x-4">
            <FaBuilding className="text-blue-600 text-2xl" />
            <p>
              <span className="font-bold">إدارة العقارات:</span> برامج تساعد في تنظيم الإيجارات، الصيانة، والمستأجرين.
            </p>
          </div>

          {/* Asset Management */}
          <div className="flex items-center space-x-4">
            <FaChartLine className="text-blue-600 text-2xl" />
            <p>
              <span className="font-bold">إدارة الأصول:</span> أدوات لتحليل وتتبع الأصول المالية والعقارية.
            </p>
          </div>

          {/* Real Estate Project Management */}
          <div className="flex items-center space-x-4">
            <FaBuilding className="text-blue-600 text-2xl" />
            <p>
              <span className="font-bold">إدارة المشاريع العقارية:</span> تنسيق الجداول الزمنية، الموارد، والميزانية.
            </p>
          </div>

          {/* Real Estate Investment Management */}
          <div className="flex items-center space-x-4">
            <FaMoneyBillAlt className="text-blue-600 text-2xl" />
            <p>
              <span className="font-bold">إدارة الاستثمارات العقارية:</span> مراقبة وتحليل محفظة الاستثمارات العقارية.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EighthApp;
