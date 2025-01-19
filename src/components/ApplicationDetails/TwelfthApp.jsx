import React from "react";
import { FaMobileAlt, FaLaptop, FaTasks, FaMoneyBillAlt } from "react-icons/fa";
import Heading from "../Shared/Heading";

const TwelfthApp = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="pt-4 bg-white shadow-lg rounded-lg overflow-hidden w-full">
        {/* Header Section */}
        <Heading
          title="التطبيقات العامة والمتخصصة عبر جميع المنصات"
          subtitle="حلول متكاملة عبر الأجهزة المختلفة"
        />

        {/* Content Section */}
        <div className="p-6 space-y-6 text-gray-700">
          {/* General Apps */}
          <div className="flex items-center space-x-4">
            <FaMobileAlt className="text-blue-600 text-2xl" />
            <p>
              <span className="font-bold">التطبيقات العامة:</span> مثل Facebook و WhatsApp التي تعمل عبر الأجهزة المختلفة وتوفر تجارب متكاملة للمستخدم.
            </p>
          </div>

          {/* Specialized Apps */}
          <div className="flex items-center space-x-4">
            <FaLaptop className="text-blue-600 text-2xl" />
            <p>
              <span className="font-bold">التطبيقات المتخصصة:</span> مثل MyFitnessPal و Duolingo التي تركز على مجالات محددة مثل الصحة والتعليم.
            </p>
          </div>

          {/* Business and Management Apps */}
          <div className="flex items-center space-x-4">
            <FaMoneyBillAlt className="text-blue-600 text-2xl" />
            <p>
              <span className="font-bold">التطبيقات التجارية:</span> مثل QuickBooks و Shopify التي تساعد في إدارة الأعمال الصغيرة وإتمام المعاملات المالية.
            </p>
          </div>

          {/* Productivity Apps */}
          <div className="flex items-center space-x-4">
            <FaTasks className="text-blue-600 text-2xl" />
            <p>
              <span className="font-bold">التطبيقات الإنتاجية:</span> مثل Todoist و Microsoft Teams التي تساعد في تنظيم المهام وتحسين الإنتاجية.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwelfthApp;
