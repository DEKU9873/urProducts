import React from "react";
import { FaRegCreditCard, FaWallet, FaBitcoin } from "react-icons/fa";
import Heading from "../Shared/Heading";

const SeventhApp = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="pt-4 bg-white shadow-lg rounded-lg overflow-hidden w-full">
        {/* Header Section */}
        <Heading
          title="التطبيقات الذكية للحوكمة الإلكترونية ونظام النافذة الواحدة"
          subtitle="التكنولوجيا في خدمة النظام الاقتصادي الحديث"
        />

        {/* Content Section */}
        <div className="p-6 space-y-6 text-gray-700">
          {/* Financial Transactions */}
          <div className="flex items-center space-x-4">
            <FaRegCreditCard className="text-blue-600 text-2xl" />
            <p>
              <span className="font-bold">التطبيقات للمعاملات المالية والمصرفية:</span> تسهيل التحويلات ودفع الفواتير عبر الخدمات المصرفية الإلكترونية.
            </p>
          </div>

          {/* E-wallets */}
          <div className="flex items-center space-x-4">
            <FaWallet className="text-blue-600 text-2xl" />
            <p>
              <span className="font-bold">المحفظة الإلكترونية:</span> أدوات مبتكرة لتخزين وإدارة الأموال، مثل باي بال وجوجل باي.
            </p>
          </div>

          {/* Cryptocurrency Mining */}
          <div className="flex items-center space-x-4">
            <FaBitcoin className="text-blue-600 text-2xl" />
            <p>
              <span className="font-bold">إنتاج العملات الرقمية (Mining):</span> استخدام قوة الحوسبة لإنتاج العملات الرقمية مثل البيتكوين.
            </p>
          </div>

          {/* Bank Management */}
          <h2 className="text-xl font-bold text-blue-600">إدارة البنوك باستخدام البرمجيات</h2>
          <p>
            البرمجيات المصرفية الحديثة تدير الحسابات والقروض، وتضمن الأمان السيبراني وتحليل الأداء المالي.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeventhApp;
