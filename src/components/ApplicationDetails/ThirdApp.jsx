import React from "react";
import { FaBullhorn, FaCartArrowDown, FaShippingFast, FaChartLine, FaStore, FaCog, FaUsers, FaMoneyBillWave } from "react-icons/fa";
import Heading from "../Shared/Heading";

const ThirdApp = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="pt-4 bg-white shadow-lg rounded-lg overflow-hidden w-full">
        {/* Header Section */}
        <Heading
          title="التطبيقات والبرامج للتسويق الإلكتروني وإدارة الطلبات"
          subtitle="التجارة الإلكترونية"
        />

        {/* Content Section */}
        <div className="p-6 space-y-4 text-gray-700">
          <p>
            الحلول الرقمية للتجارة الإلكترونية أصبحت ضرورة لتعزيز الكفاءة وتحسين تجربة العملاء وزيادة أرباح الشركات.
          </p>

          <h2 className="text-xl font-bold text-blue-600">
            <FaBullhorn className="inline text-blue-500 mr-2" />
            التسويق الإلكتروني
          </h2>
          <p>
            أدوات تسويقية متقدمة تتيح تحسين استراتيجيات الإعلانات عبر وسائل التواصل والبريد الإلكتروني، مما يزيد من عائد الاستثمار.
          </p>

          <h2 className="text-xl font-bold text-blue-600">
            <FaCartArrowDown className="inline text-blue-500 mr-2" />
            إدارة الطلبات
          </h2>
          <p>
            تنظيم واستلام الطلبات بسهولة، مع تتبع حالة الطلبات وإشعارات العملاء لضمان الشفافية وتقليل الأخطاء.
          </p>

          <h2 className="text-xl font-bold text-blue-600">
            <FaShippingFast className="inline text-blue-500 mr-2" />
            التوزيع واللوجستيات
          </h2>
          <p>
            تحسين الشحن والتوصيل عبر تتبع الشحنات في الوقت الحقيقي، تقليل تكاليف النقل، وضمان التسليم بدقة.
          </p>

          <h2 className="text-xl font-bold text-blue-600">
            <FaChartLine className="inline text-blue-500 mr-2" />
            المبيعات
          </h2>
          <p>
            تحليل اتجاهات السوق وتوقع الاحتياجات المستقبلية، مما يساعد في تحسين استراتيجيات البيع وزيادة الإيرادات.
          </p>

          <h2 className="text-xl font-bold text-blue-600">
            <FaStore className="inline text-blue-500 mr-2" />
            التجارة الإلكترونية
          </h2>
          <p>
            إدارة متكاملة للمتاجر الإلكترونية، من تصميم المواقع إلى إدارة المنتجات والمدفوعات، مع ميزات مثل برامج الولاء ومراجعات العملاء.
          </p>

          <h2 className="text-xl font-bold text-blue-600">الفوائد العامة</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <FaCog className="inline text-green-500 mr-2" />
              <span className="font-bold">أتمتة العمليات:</span> تقليل المهام اليدوية وزيادة الكفاءة.
            </li>
            <li>
              <FaUsers className="inline text-green-500 mr-2" />
              <span className="font-bold">تحسين تجربة العملاء:</span> تجربة شراء سلسة مع شفافية في الطلبات والتوصيل.
            </li>
            <li>
              <FaMoneyBillWave className="inline text-green-500 mr-2" />
              <span className="font-bold">تقليل التكاليف:</span> تحسين العمليات التشغيلية لتقليل النفقات.
            </li>
            <li>
              <FaChartLine className="inline text-green-500 mr-2" />
              <span className="font-bold">تحليل البيانات:</span> قرارات مبنية على تقارير دقيقة لتحسين الأداء.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThirdApp;
