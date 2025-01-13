import React from 'react';
import { useTranslation } from "react-i18next"; // استيراد useTranslation
import img1 from "../assets/allaplication/1.jpg";
import img2 from "../assets/allaplication/2.jpg";
import img3 from "../assets/allaplication/3.jpg";
import img4 from "../assets/allaplication/4.jpg";
import img5 from "../assets/allaplication/5.jpg";
import img6 from "../assets/allaplication/6.jpg";
import img7 from "../assets/allaplication/7.jpg";
import img8 from "../assets/allaplication/8.jpg";
import img9 from "../assets/allaplication/9.jpg";
import img10 from "../assets/allaplication/10.jpg";
import img11 from "../assets/allaplication/11.jpg";
import img12 from "../assets/allaplication/12.jpg";
import img14 from "../assets/allaplication/13.jpg";
import img15 from "../assets/allaplication/14.jpg";
import img16 from "../assets/allaplication/16.jpg";
import img17 from "../assets/allaplication/17.jpg";
import img18 from "../assets/allaplication/18.jpg";
import Heading from '../Shared/Heading';

// بيانات التطبيقات والبرمجيات مع الترجمة العربية
const ApplicationData = [
  {
    id: 1,
    dec: "GPS-Based logistics tracking applications",
    decAr: " تطبيقات تتبع الخدمات اللوجستية عبر GPS",
    img: img1
  },
  {
    id: 2,
    dec: "Applications and programs for electronic payment operations of all kinds, subscriptions and payment lists",
    decAr: "التطبيقات والبرامج للعمليات الدفع الإلكتروني بجميع أنواعها، الاشتراكات وقوائم الدفع",
    img: img2
  },
  {
    id: 3,
    dec: "Applications and programs for electronic marketing, order management, distribution, sales and e-commerce",
    decAr: "التطبيقات والبرامج للتسويق الإلكتروني، إدارة الطلبات، التوزيع، المبيعات والتجارة الإلكترونية",
    img: img3
  },
  {
    id: 4,
    dec: "Cybersecurity and data/information security software systems.",
    decAr: "برامجيات الامن السيبراني وامن البيانات والمعلومات.",
    img: img4
  },
  {
    id: 5,
    dec: "Applications and programs for all transactions of the Ministry of Justice and the courts",
    decAr: "التطبيقات والبرامج لجميع معاملات وزارة العدل والمحاكم",
    img: img5
  },
  {
    id: 6,
    dec: "Applications and programs for centralized connectivity of parking lots, vehicle tracking and tracking, and port management.",
    decAr: "التطبيقات والبرامج للربط المركزي لمواقف السيارات، تتبع المركبات وإدارتها، وإدارة الموانئ.",
    img: img6
  },
  {
    id: 7,
    dec: "Applications and programs for e-government, one-stop shop",
    decAr: "التطبيقات والبرامج للحكومة الإلكترونية، ونظام الشباك الواحد",
    img: img7
  },
  {
    id: 8,
    dec: "Applications and programs for financial and banking transactions, electronic wallet, production and extraction of digital currencies, and bank management",
    decAr: "التطبيقات والبرامج للمعاملات المالية والمصرفية، المحفظة الإلكترونية، إنتاج واستخراج العملات الرقمية، وإدارة البنوك",
    img: img8
  },
  {
    id: 9,
    dec: "Applications and software for property, real estate, asset, project, and investment management",
    decAr: "التطبيقات والبرامج لإدارة العقارات، العقارات، الأصول، المشاريع، والاستثمارات",
    img: img9
  },
  {
    id: 10,
    dec: "Applications and software for managing healthcare institutions of all types and related services",
    decAr: "التطبيقات والبرامج لإدارة مؤسسات الرعاية الصحية بأنواعها وخدماتها المتعلقة",
    img: img10
  },
  {
    id: 11,
    dec: "Applications and software for employee performance management, tracking, and performance analysis for institutions (ERP)",
    decAr: "التطبيقات والبرامج لإدارة أداء الموظفين، وتتبعهم، وتحليل الأداء للمؤسسات (ERP)",
    img: img11
  },
  {
    id: 12,
    dec: "General and specialized applications and software on all platforms (iOS, Android, PC)",
    decAr: "التطبيقات والبرامج العامة والمتخصصة على جميع المنصات (iOS، Android، PC)",
    img: img12
  },
  {
    id: 13,
    dec: "Applications and software for surveillance cameras, radar systems, traffic management, and all related processes",
    decAr: "التطبيقات والبرامج لكاميرات المراقبة، أنظمة الرادار، إدارة المرور، وجميع العمليات المتعلقة",
    img: img17
  },
  {
    id: 14,
    dec: "Educational applications and software: e-learning systems, blended learning, and virtual labs",
    decAr: "التطبيقات والبرامج التعليمية: أنظمة التعلم الإلكتروني، التعلم المدمج، والمختبرات الافتراضية",
    img: img14
  },
  {
    id: 15,
    dec: "Applications and software for production processes, manufacturing, factory management, and industrial automation",
    decAr: "التطبيقات والبرامج لعمليات الإنتاج، التصنيع، إدارة المصانع، والأتمتة الصناعية",
    img: img16
  },
  {
    id: 16,
    dec: "Applications and software for governorates, municipal departments, and Baghdad Municipality services",
    decAr: "التطبيقات والبرامج للمحافظات، الإدارات البلدية، وخدمات بلدية بغداد",
    img: img18
  },
];

const Application = () => {
  const { t, i18n } = useTranslation(); 

  return (
    <div className="mx-auto py-8 px-4">
      <Heading
        title={t("Heading.Application and Software")} 
        subtitle={t("Subtitle.Explore our Application and Software")} 
      />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ApplicationData.map((app) => (
          <div
            key={app.id}
            className="bg-white dark:bg-gray-600 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={app.img}
              alt="Application"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-700 dark:text-white text-justify text-sm">
                {i18n.language === "ar" ? app.decAr : app.dec} 
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Application;
