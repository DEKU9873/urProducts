import React from "react";
import { useTranslation } from "react-i18next"; // استيراد useTranslation
import Heading from "../Shared/Heading";
import { Link } from "react-router-dom";
import { FaServer, FaBuilding, FaTools } from "react-icons/fa"; // استيراد الأيقونات

const DataCenterData = [
  {
    id: 1,
    title: "Data Center Planning and Design",
    titleAr: "تخطيط وتصميم مراكز البيانات",
    dec: "We provide comprehensive services for planning and designing data centers that ensure achieving the highest levels of performance and security. This includes site selection, infrastructure design, and optimal distribution planning of equipment and resources.",
    decAr: "نقدم خدمات شاملة لتخطيط وتصميم مراكز البيانات التي تضمن تحقيق أعلى مستويات الأداء والأمان. يشمل ذلك اختيار المواقع، تصميم البنية التحتية، والتخطيط الأمثل لتوزيع المعدات والموارد.",
    icon: <FaBuilding /> // إضافة أيقونة خاصة
  },
  {
    id: 2,
    title: "Infrastructure Construction and Development",
    titleAr: "بناء وتطوير البنية التحتية",
    dec: "We build the infrastructure for data centers, including cooling systems, power distribution, networks, and security systems. We ensure the use of the latest technologies to guarantee sustainability and high efficiency.",
    decAr: "نقوم ببناء البنية التحتية لمراكز البيانات، بما في ذلك أنظمة التبريد، توزيع الطاقة، الشبكات، وأنظمة الأمان. نضمن استخدام أحدث التقنيات لضمان الاستدامة والكفاءة العالية.",
    icon: <FaServer /> // إضافة أيقونة خاصة
  },
  {
    id: 3,
    title: "Provision and Installation of Specialized Equipment",
    titleAr: "توفير وتركيب المعدات المتخصصة",
    dec: "We provide the latest specialized equipment for data centers, including servers, storage devices, routing and switching devices, and network solutions. We ensure that each component is equipped to guarantee optimal performance.",
    decAr: "نوفر أحدث المعدات المتخصصة لمراكز البيانات، بما في ذلك الخوادم، أجهزة التخزين، أجهزة التوجيه والتبديل، وحلول الشبكات. نضمن تجهيز كل عنصر لضمان الأداء الأمثل.",
    icon: <FaTools /> // إضافة أيقونة خاصة
  },
];

const DataCenter = () => {
  const { i18n, t } = useTranslation(); // استخدام useTranslation

  return (
    <div id="datacenter" className="bg-gray-100 dark:bg-gray-900 flex flex-col items-center p-6 pt-20">
      <Heading
        title={t("Heading.Data Center Service")} // الترجمة
        subtitle={t("Subtitle.Explore our Data Center Services")} // الترجمة
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {DataCenterData.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-500 border rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-3 gap-4">
              <div className="mr-3 text-2xl text-blue-600 dark:text-black">
                {item.icon} {/* الأيقونة */}
              </div>
              <h2 className="text-[18px] font-semibold text-blue-600 dark:text-black ">
                {i18n.language === "ar" ? item.titleAr : item.title} {/* اختيار النص بناءً على اللغة */}
              </h2>
            </div>
            <p className="text-gray-600 text-justify dark:text-white">
              {i18n.language === "ar" ? item.decAr : item.dec} {/* اختيار النص بناءً على اللغة */}
            </p>
          </div>
        ))}
      </div>
      <Link to={"/alldatacenter"}>
        <div className="flex justify-center items-center text-center mt-8">
          <div className="flex justify-center items-center px-8 py-3 w-[200px] bg-primary text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
            {t("View More")} {/* الترجمة */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DataCenter;
