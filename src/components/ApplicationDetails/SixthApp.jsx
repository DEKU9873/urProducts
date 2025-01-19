import React from "react";
import { FaCarAlt, FaRoute, FaShip } from "react-icons/fa";
import Heading from "../Shared/Heading";

const SixthApp = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="pt-4 bg-white shadow-lg rounded-lg overflow-hidden w-full">
        {/* Header Section */}
        <Heading
          title="التطبيقات الذكية لإدارة المواقف، المركبات، والموانئ"
          subtitle="حلول ذكية لتحسين الكفاءة وتقليل التكاليف"
        />

        {/* Content Section */}
        <div className="p-6 space-y-6 text-gray-700">
          {/* Centralized Parking */}
          <div className="flex items-center space-x-4">
            <FaCarAlt className="text-blue-600 text-2xl" />
            <p>
              <span className="font-bold">الربط المركزي لمواقف السيارات:</span> إدارة المساحات وتحسين تجربة الركن عبر الدفع الإلكتروني والتوجيه الذكي.
            </p>
          </div>

          {/* Vehicle Tracking */}
          <div className="flex items-center space-x-4">
            <FaRoute className="text-blue-600 text-2xl" />
            <p>
              <span className="font-bold">تتبع المركبات وإدارتها:</span> استخدام GPS وتقنيات IoT لمراقبة المركبات وتحسين الكفاءة التشغيلية.
            </p>
          </div>

          {/* Port Management */}
          <div className="flex items-center space-x-4">
            <FaShip className="text-blue-600 text-2xl" />
            <p>
              <span className="font-bold">إدارة الموانئ:</span> تنظيم حركة السفن، تحسين العمليات اللوجستية، وتخطيط الشحنات بفعالية.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthApp;
