import React from "react";
import { useTranslation } from "react-i18next"; // استيراد useTranslation
import { FaCogs, FaBuilding, FaServer, FaTools, FaWrench, FaHeadset } from "react-icons/fa"; // استيراد الأيقونات
import Heading from "../Shared/Heading";

const DataCenterData = [
  {
    id: 1,
    title: {
      en: "Data Center Planning and Design",
      ar: "تخطيط وتصميم مراكز البيانات",
    },
    dec: {
      en: "We provide comprehensive services for planning and designing data centers that ensure achieving the highest levels of performance and security. This includes site selection, infrastructure design, and optimal distribution planning of equipment and resources.",
      ar: "نقدم خدمات شاملة لتخطيط وتصميم مراكز البيانات التي تضمن تحقيق أعلى مستويات الأداء والأمان. يشمل ذلك اختيار المواقع، تصميم البنية التحتية، والتخطيط الأمثل لتوزيع المعدات والموارد.",
    },
    icon: <FaBuilding />, // أيقونة لتخطيط وتصميم مراكز البيانات
  },
  {
    id: 2,
    title: {
      en: "Infrastructure Construction and Development",
      ar: "بناء وتطوير البنية التحتية",
    },
    dec: {
      en: "We build the infrastructure for data centers, including cooling systems, power distribution, networks, and security systems. We ensure the use of the latest technologies to guarantee sustainability and high efficiency.",
      ar: "نقوم ببناء البنية التحتية لمراكز البيانات، بما في ذلك أنظمة التبريد، توزيع الطاقة، الشبكات، وأنظمة الأمان. نضمن استخدام أحدث التقنيات لضمان الاستدامة والكفاءة العالية.",
    },
    icon: <FaCogs />, // أيقونة للبنية التحتية والتطوير
  },
  {
    id: 3,
    title: {
      en: "Provision and Installation of Specialized Equipment",
      ar: "توفير وتركيب المعدات المتخصصة",
    },
    dec: {
      en: "We provide the latest specialized equipment for data centers, including servers, storage devices, routing and switching devices, and network solutions. We ensure that each component is equipped to guarantee optimal performance.",
      ar: "نوفر أحدث المعدات المتخصصة لمراكز البيانات، بما في ذلك الخوادم، أجهزة التخزين، أجهزة التوجيه والتبديل، وحلول الشبكات. نضمن تجهيز كل عنصر لضمان الأداء الأمثل.",
    },
    icon: <FaServer />, // أيقونة للمعدات المتخصصة
  },
  {
    id: 4,
    title: {
      en: "System Programming and Operation",
      ar: "برمجة وتشغيل الأنظمة",
    },
    dec: {
      en: "We install and program the equipment and systems in data centers to ensure smooth and efficient operation. This includes configuring systems to meet specific client needs and providing advanced solutions for performance monitoring and resource management.",
      ar: "نقوم بتثبيت وبرمجة المعدات والأنظمة في مراكز البيانات لضمان التشغيل السلس والفعال. يشمل ذلك تهيئة الأنظمة لتلبية احتياجات العملاء المحددة وتوفير حلول متقدمة لمراقبة الأداء وإدارة الموارد.",
    },
    icon: <FaTools />, // أيقونة للبرمجة والتشغيل
  },
  {
    id: 5,
    title: {
      en: "System Qualification and Development",
      ar: "تأهيل وتطوير الأنظمة",
    },
    dec: {
      en: "We work on qualifying and upgrading existing systems in data centers to align with the latest standards and technologies, enhancing performance and extending the lifespan of the systems.",
      ar: "نعمل على تأهيل وترقية الأنظمة الحالية في مراكز البيانات لتتماشى مع أحدث المعايير والتقنيات، مما يعزز الأداء ويطيل عمر الأنظمة.",
    },
    icon: <FaWrench />, // أيقونة لتأهيل الأنظمة
  },
  {
    id: 6,
    title: {
      en: "Maintenance and Technical Support",
      ar: "الصيانة والدعم الفني",
    },
    dec: {
      en: "We provide regular and preventive maintenance services for data centers to ensure continuous efficient operation. This includes 24/7 technical support.",
      ar: "نقدم خدمات الصيانة الدورية والوقائية لمراكز البيانات لضمان التشغيل المستمر والفعال. يشمل ذلك الدعم الفني على مدار الساعة.",
    },
    icon: <FaHeadset />, // أيقونة للدعم الفني
  },
];

const AllDataCenter = () => {
  const { i18n, t } = useTranslation(); // استخدام الترجمة

  return (
    <div className="bg-gray-100 flex flex-col items-center p-8 pb-20">
      <Heading
        title={t("Heading.Data Center Service")} // الترجمة
        subtitle={t("Subtitle.Explore our Data Center Services")} // الترجمة
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {DataCenterData.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-3 gap-4">
              <div className="mr-3 text-2xl text-blue-600">
                {item.icon} {/* الأيقونة */}
              </div>
              <h2 className="text-xl font-semibold text-blue-600 ">
                {i18n.language === "ar" ? item.title.ar : item.title.en} {/* اختيار النص بناءً على اللغة */}
              </h2>
            </div>
            <p className="text-gray-600 text-justify">
              {i18n.language === "ar" ? item.dec.ar : item.dec.en} {/* اختيار النص بناءً على اللغة */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDataCenter;
