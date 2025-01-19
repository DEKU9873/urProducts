import { FaNetworkWired, FaLock, FaMobileAlt, FaExclamationTriangle, FaRecycle, FaShieldAlt, FaCloud } from "react-icons/fa";
import Heading from "../Shared/Heading";

const FourthApp = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="pt-4 bg-white shadow-lg rounded-lg overflow-hidden w-full">
        {/* Header Section */}
        <Heading
          title="برمجيات الأمن السيبراني وأمن البيانات والمعلومات"
          subtitle="تعزيز الحماية التقنية"
        />

        {/* Content Section */}
        <div className="p-6 space-y-6 text-gray-700">
          {/* أمن الشبكات */}
          <div className="flex items-center space-x-4">
            <FaNetworkWired className="text-blue-600 text-2xl" />
            <div>
              <h2 className="text-xl font-bold text-blue-600">أمن الشبكات</h2>
              <p>حماية الشبكات باستخدام جدران الحماية وأنظمة الكشف عن الاختراق.</p>
            </div>
          </div>

          {/* حماية البيانات */}
          <div className="flex items-center space-x-4">
            <FaLock className="text-blue-600 text-2xl" />
            <div>
              <h2 className="text-xl font-bold text-blue-600">حماية البيانات</h2>
              <p>تشفير البيانات والتوثيق متعدد العوامل لضمان الأمان.</p>
            </div>
          </div>

          {/* أمن الأجهزة والمستخدمين */}
          <div className="flex items-center space-x-4">
            <FaMobileAlt className="text-blue-600 text-2xl" />
            <div>
              <h2 className="text-xl font-bold text-blue-600">أمن الأجهزة والمستخدمين</h2>
              <p>حماية الأجهزة الفردية باستخدام برامج مكافحة الفيروسات وإدارة الأجهزة.</p>
            </div>
          </div>

          {/* إدارة الحوادث والتهديدات */}
          <div className="flex items-center space-x-4">
            <FaExclamationTriangle className="text-blue-600 text-2xl" />
            <div>
              <h2 className="text-xl font-bold text-blue-600">إدارة الحوادث</h2>
              <p>رصد وتحليل الحوادث الأمنية باستخدام نظم SIEM.</p>
            </div>
          </div>

          {/* الاستجابة للطوارئ والتعافي */}
          <div className="flex items-center space-x-4">
            <FaRecycle className="text-blue-600 text-2xl" />
            <div>
              <h2 className="text-xl font-bold text-blue-600">التعافي من الكوارث</h2>
              <p>استعادة البيانات بسرعة وتقليل وقت التوقف باستخدام أدوات النسخ الاحتياطي.</p>
            </div>
          </div>

          {/* أمن التطبيقات */}
          <div className="flex items-center space-x-4">
            <FaShieldAlt className="text-blue-600 text-2xl" />
            <div>
              <h2 className="text-xl font-bold text-blue-600">أمن التطبيقات</h2>
              <p>اختبارات الأمان لتقليل الثغرات في التطبيقات البرمجية.</p>
            </div>
          </div>

          {/* أدوات الأمان السحابية */}
          <div className="flex items-center space-x-4">
            <FaCloud className="text-blue-600 text-2xl" />
            <div>
              <h2 className="text-xl font-bold text-blue-600">الأمان السحابي</h2>
              <p>تأمين البيانات المخزنة في السحابة باستخدام التشفير والمراقبة.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthApp;
