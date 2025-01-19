import React from "react";
import { FaCreditCard, FaWallet, FaUniversity, FaMobileAlt, FaShieldAlt, FaSmile, FaListAlt } from "react-icons/fa";
import Heading from "../Shared/Heading";

const SecondApp = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="pt-4 bg-white shadow-lg rounded-lg overflow-hidden w-full">
        {/* Header Section */}
        <Heading
          title="التطبيقات والبرامج للعمليات الدفع الإلكتروني"
          subtitle="الاشتراكات وقوائم الدفع"
        />

        {/* Content Section */}
        <div className="p-6 space-y-4 text-gray-700">
          <p>
            تطبيقات الدفع الإلكتروني تُسهّل إدارة المعاملات المالية بأمان وكفاءة.
          </p>

          <h2 className="text-xl font-bold text-blue-600">طرق الدفع المدعومة</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <FaCreditCard className="inline text-blue-500 mr-2" />
              البطاقات الائتمانية
            </li>
            <li>
              <FaWallet className="inline text-blue-500 mr-2" />
              المحافظ الرقمية
            </li>
            <li>
              <FaUniversity className="inline text-blue-500 mr-2" />
              التحويلات البنكية
            </li>
            <li>
              <FaMobileAlt className="inline text-blue-500 mr-2" />
              الدفع عبر الهواتف المحمولة
            </li>
          </ul>

          <h2 className="text-xl font-bold text-blue-600">الفوائد</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <FaShieldAlt className="inline text-green-500 mr-2" />
              معاملات آمنة بتقنيات التشفير وكشف الاحتيال
            </li>
            <li>
              <FaSmile className="inline text-green-500 mr-2" />
              تجربة دفع مريحة وسلسة
            </li>
            <li>
              <FaListAlt className="inline text-green-500 mr-2" />
              إدارة الاشتراكات والعضويات الشهرية بسهولة
            </li>
            <li>
              <FaListAlt className="inline text-green-500 mr-2" />
              إنشاء قوائم دفع للمدفوعات المتكررة
            </li>
          </ul>

          <p>
            تساعد هذه التطبيقات على تحسين إدارة التدفق النقدي، تقليل المهام اليدوية، وتجنب تأخير المدفوعات. كما يمكن دمجها مع أنظمة المحاسبة وأدوات CRM.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondApp;
