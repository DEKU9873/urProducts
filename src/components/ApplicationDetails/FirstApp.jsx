import React from "react";
import { FaTruck, FaRoute, FaBell, FaChartBar, FaGasPump, FaSmile, FaClock } from "react-icons/fa";
import Heading from "../Shared/Heading";

const FirstApp = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center p-4 ">
      <div className="pt-4 bg-white shadow-lg rounded-lg overflow-hidden w-full">
        {/* قسم العنوان */}
        <Heading
          title="تطبيقات تتبع اللوجستيات المعتمدة على GPS"
          subtitle="استكشف تطبيقاتنا وبرامجنا"
        />

        {/* قسم المحتوى */}
        <div className="p-6 space-y-4 text-gray-700">
          <p>
            تطبيقات التتبع GPS تساعد الشركات على مراقبة الشحنات والمركبات وتحسين الكفاءة في الوقت الفعلي.
          </p>

          <h2 className="text-xl font-bold text-blue-600">الميزات الأساسية</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <FaTruck className="inline text-blue-500 mr-2" />
              تتبع المركبات والبضائع
            </li>
            <li>
              <FaRoute className="inline text-blue-500 mr-2" />
              تحسين المسارات
            </li>
            <li>
              <FaBell className="inline text-blue-500 mr-2" />
              تنبيهات المناطق الجغرافية
            </li>
            <li>
              <FaChartBar className="inline text-blue-500 mr-2" />
              أدوات إعداد التقارير
            </li>
          </ul>

          <h2 className="text-xl font-bold text-blue-600">الفوائد</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <FaGasPump className="inline text-green-500 mr-2" />
              تقليل استهلاك الوقود
            </li>
            <li>
              <FaClock className="inline text-green-500 mr-2" />
              تسليم أسرع
            </li>
            <li>
              <FaSmile className="inline text-green-500 mr-2" />
              زيادة رضا العملاء
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FirstApp;
