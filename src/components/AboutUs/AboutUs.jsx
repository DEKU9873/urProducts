import React from 'react'
import { useTranslation } from "react-i18next"; // استيراد useTranslation
import Heading from "../Shared/Heading";
import { Link } from "react-router-dom";
import { FaServer, FaBuilding, FaTools } from "react-icons/fa"; // استيراد الأيقونات

const DataCenterData = [
  {
    id: 1,
    title: "About Us",
    titleAr: "من نحن",
    dec: "UR it is the trademark of the products of the General Company for Electronic Systems, which is the formations of the Iraqi Ministry of Industry.",
    decAr: "اور هي العلامة التجارية لمنتجات الشركة العامة للانظمة الالكترونية التي هي احدى تشكيلات وزارة الصناعة والمعادن العراقية.",
    icon: <FaBuilding /> 
  },
  {
    id: 2,
    title: "Our Vision",
    titleAr: "رؤيتنا",
    dec: "In the next years, we are working with a strong will to build an industrial institution that covers the needs of the public and private sectors and encourages the national product.",
    decAr: "نعمل خلال السنوات المقبلة بارادة قوية لبناء مؤسسة صناعية تغطي احتياحات القطاعين العام و الخاص وتشجع المنتج الوطني وتستقطب الكفاءات العراقية.",
    icon: <FaServer /> 
  },
  {
    id: 3,
    title: "Our Massage",
    titleAr: "رسالتنا",
    dec: "Creating a professional work environment that attracts competencies that spreads the spirit of belonging to the company in the hearts of employees",
    decAr: "خلق بيئة عمل احترافية جاذبة للكفاءات تبث روح الانتماء للشركة في نفوس المواطنين.",
    icon: <FaTools /> 
  },
];

const AboutUs = () => {
    const { i18n, t } = useTranslation(); 
  return (
    <div id='about' className="dark:bg-gray-900 flex flex-col items-center p-6 pt-20">

    <Heading
      title={t("Heading.About US")} 
    />
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {DataCenterData.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-gray-500 border rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center mb-3">
            
            <h2 className="text-2xl font-bold mx-auto text-blue-600 dark:text-black ">
              {i18n.language === "ar" ? item.titleAr : item.title} 
            </h2>
          </div>
          <p className="text-gray-600 text-justify dark:text-white">
            {i18n.language === "ar" ? item.decAr : item.dec} 
          </p>
        </div>
      ))}
    </div>
    
  </div>
  )
}

export default AboutUs
