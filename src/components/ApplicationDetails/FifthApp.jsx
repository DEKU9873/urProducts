import React from "react";
import { FaGavel, FaBalanceScale, FaFolderOpen, FaFileSignature, FaUserShield } from "react-icons/fa";
import Heading from "../Shared/Heading";

const FifthApp = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center p-4"> 
      <div className="pt-4 bg-white shadow-lg rounded-lg overflow-hidden w-full">
        {/* Header Section */}
        <Heading
          title="التطبيقات والبرامج القضائية"
          subtitle="حلول تقنية لتسهيل الإجراءات القانونية"
        />

        {/* Content Section */}
        <div className="p-6 space-y-6 text-gray-700">
          <div className="flex items-center space-x-4">
            <FaGavel className="text-blue-600 text-2xl" />
            <p>إدارة القضايا: متابعة القضايا وتحديد المواعيد بسهولة.</p>
          </div>

          <div className="flex items-center space-x-4">
            <FaBalanceScale className="text-blue-600 text-2xl" />
            <p>التقاضي الإلكتروني: تقديم القضايا والمستندات عبر الإنترنت.</p>
          </div>

          <div className="flex items-center space-x-4">
            <FaFolderOpen className="text-blue-600 text-2xl" />
            <p>إدارة السجلات: الوصول السريع للوثائق القانونية.</p>
          </div>

          <div className="flex items-center space-x-4">
            <FaFileSignature className="text-blue-600 text-2xl" />
            <p>التصديق الإلكتروني: توقيع الوثائق دون الحضور الشخصي.</p>
          </div>

          <div className="flex items-center space-x-4">
            <FaUserShield className="text-blue-600 text-2xl" />
            <p>الدعم القانوني: استشارات وتوجيهات قانونية عبر التطبيقات.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthApp;
