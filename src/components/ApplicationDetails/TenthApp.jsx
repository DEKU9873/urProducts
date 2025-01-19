import React from "react";
import { FaHospital, FaHeartbeat, FaMoneyBillAlt, FaFileMedical } from "react-icons/fa";
import Heading from "../Shared/Heading";

const TenthApp = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="pt-4 bg-white shadow-lg rounded-lg overflow-hidden w-full">
        {/* Header Section */}
        <Heading
          title="التطبيقات لإدارة مؤسسات الرعاية الصحية"
          subtitle="أدوات لتحسين الكفاءة وضمان الجودة في الرعاية الصحية"
        />

        {/* Content Section */}
        <div className="p-6 space-y-6 text-gray-700">
          {/* Healthcare Management */}
          <div className="flex items-center space-x-4">
            <FaHospital className="text-blue-600 text-2xl" />
            <p>
              <span className="font-bold">إدارة الرعاية الصحية:</span> تشمل أنظمة EHR مثل "Epic Systems" لتخزين السجلات الطبية، إدارة المواعيد، والموارد البشرية.
            </p>
          </div>

          {/* Hospital and Clinic Management */}
          <div className="flex items-center space-x-4">
            <FaHeartbeat className="text-blue-600 text-2xl" />
            <p>
              <span className="font-bold">إدارة المستشفيات والعيادات:</span> تشمل متابعة الأسرة، الأدوية، والمخزون في المستشفيات.
            </p>
          </div>

          {/* Patient Relationship Management */}
          <div className="flex items-center space-x-4">
            <FaFileMedical className="text-blue-600 text-2xl" />
            <p>
              <span className="font-bold">إدارة علاقات المرضى:</span> تشمل التواصل المستمر مع المرضى وتقييمات خدمات الرعاية الصحية.
            </p>
          </div>

          {/* Billing and Insurance Management */}
          <div className="flex items-center space-x-4">
            <FaMoneyBillAlt className="text-blue-600 text-2xl" />
            <p>
              <span className="font-bold">إدارة الفواتير والتأمين الصحي:</span> تشمل إنشاء الفواتير الطبية وإدارة المطالبات التأمينية.
            </p>
          </div>

          {/* Quality and Compliance Management */}
          <div className="flex items-center space-x-4">
            <FaFileMedical className="text-blue-600 text-2xl" />
            <p>
              <span className="font-bold">إدارة الجودة والامتثال:</span> تشمل متابعة المعايير الصحية وضمان الالتزام بالقوانين.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenthApp;
