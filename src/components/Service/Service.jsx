import React from "react";
import { GrCloudSoftware } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";
import { MdEngineering } from "react-icons/md";
import { MdOutlineNetworkWifi3Bar } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { LuHandHelping } from "react-icons/lu";
import Heading from "../Shared/Heading";
import { useTranslation } from "react-i18next"; // استيراد useTranslation

const ServiceData = [
  {
    id: 1,
    icon: <GrCloudSoftware className="text-4xl md:text-5xl text-primary" />,
    title: {
      en: "Design and implementation of new programs",
      ar: "تصميم وتنفيذ البرمجيات الحديثة",
    },
    desc: {
      en: "According to the needs of the beneficiaries",
      ar: "وفقًا لاحتياجات المستفيدين",
    },
  },
  {
    id: 2,
    icon: <GoProjectSymlink className="text-4xl md:text-5xl text-primary" />,
    title: {
      en: "Implementation of integrated projects",
      ar: "تنفيذ المشاريع المتكاملة",
    },
    desc: {
      en: "Specializing in the transfer of knowledge and modern technology",
      ar: "التخصص في نقل المعرفة والتكنولوجيا الحديثة",
    },
  },
  {
    id: 3,
    icon: <MdEngineering className="text-4xl md:text-5xl text-primary" />,
    title: {
      en: "Providing training services",
      ar: "تقديم خدمات التدريب",
    },
    desc: {
      en: "Covering the fields of information and communication technology",
      ar: "تغطية مجالات تكنولوجيا المعلومات والاتصالات",
    },
  },
  {
    id: 4,
    icon: (
      <MdOutlineNetworkWifi3Bar className="text-4xl md:text-5xl text-primary" />
    ),
    title: {
      en: "Implementation of network projects",
      ar: "تنفيذ مشاريع الشبكات",
    },
    desc: {
      en: "From design, preparation of supplies and implementation",
      ar: "من التصميم، تجهيز المستلزمات والتنفيذ",
    },
  },
  {
    id: 5,
    icon: <FaHandsHelping className="text-4xl md:text-5xl text-primary" />,
    title: {
      en: "Advice",
      ar: "استشارات",
    },
    desc: {
      en: "In the field of physical components",
      ar: "في مجال المكونات الفيزيائية",
    },
  },
  {
    id: 6,
    icon: <LuHandHelping className="text-4xl md:text-5xl text-primary" />,
    title: {
      en: "Providing consultations",
      ar: "تقديم الاستشارات",
    },
    desc: {
      en: "In the field of information technology and development of automated work systems",
      ar: "في مجال تكنولوجيا المعلومات وتطوير أنظمة العمل المؤتمتة",
    },
  },
];

const Service = () => {
  const { t, i18n } = useTranslation(); // استخدام useTranslation

  return (
    <div id="service" className="pt-20" >
      <div className="container my-14 md:my-10">
        <Heading
          title={t("Heading.Our Services")}
          subtitle={t("Subtitle.Explore our services")}
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
          {ServiceData.map((data, index) => (
            <div
              key={data.id}
              className="flex flex-col items-start sm:flex-row gap-4"
            >
              {data.icon}
              <div className="">
                <h1 className="lg:text-xl font-bold">
                  {i18n.language === "ar" ? data.title.ar : data.title.en}{" "}
                  {/* التبديل بين العناوين */}
                </h1>
                <h1 className="text-gray-400 text-sm">
                  {i18n.language === "ar" ? data.desc.ar : data.desc.en}{" "}
                  {/* التبديل بين الوصف */}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
