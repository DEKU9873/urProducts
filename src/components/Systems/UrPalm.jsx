import React from "react";
import Heading from "../Shared/Heading";
import urpalmposter from "../assets/systems/urpalm.png";
import { useTranslation } from "react-i18next"; // استيراد useTranslation


const UrPalm = () => {
    const { t, i18n } = useTranslation(); // استخدام الترجمة
  
  return (
    <div className="bg-gray-100 flex items-center justify-center dark:bg-gray-900">
      <div className="container mt-10 bg-gray-100 shadow-md rounded-lg overflow-hidden w-full dark:bg-gray-900">
        <Heading title={t("Heading.UR Palm")} subtitle="Explore our UR Palm system" />
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 gap-4 dark:bg-gray-900">
          <video
            className="mx-1 w-full  h-80 my-auto object-cover rounded-md"
            controls
            src="/video/urpalm.mp4"
            poster={urpalmposter}
          ></video>
          <div className="p-6 flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">
              {t("UR Palm.How the UR PALM Biometric Verification System Works")}
            </h1>
            <p className="text-gray-600 mb-4 text-justify dark:text-white">
              {t("UR Palm.How Work1")}
            </p>
            <p className="text-gray-600 mb-4 text-justify dark:text-white">
            {t("UR Palm.How Work2")}
            </p>
            <p className="text-gray-600 mb-4 text-justify dark:text-white">
            {t("UR Palm.How Work3")}
            </p>
            <p className="text-gray-600 mb-4 text-justify dark:text-white">
            {t("UR Palm.How Work4")}
            </p>
          </div>
        </div>
        <div className="flex  justify-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Advantages Section */}
            <div className="p-6 bg-gray-100 dark:bg-gray-900 dark:text-white">
              <h2 className="text-xl font-bold text-gray-800 mb-4 dark:text-white">
                {t("UR Palm.Advantages of the UR PALM System")}
              </h2>
              <ul className="list-disc list-inside text-gray-600 mb-4 dark:text-white">
                <li>
                  <strong>{t("UR Palm.Advantages1")}</strong> {t("UR Palm.decription1")}
                </li>
                <li>
                  <strong>{t("UR Palm.Advantages2")}</strong> {t("UR Palm.decription2")}
                </li>
                <li>
                  <strong>{t("UR Palm.Advantages3")}</strong> {t("UR Palm.decription3")}
                </li>
              </ul>
            </div>

            {/* Applications Section */}
            <div className="p-6 bg-gray-100 dark:bg-gray-900 ">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                {t("UR Palm.Applications and Uses")}
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-white">
                <li>
                  <strong>{t("UR Palm.Use1")}</strong> {t("UR Palm.decription4")}
                </li>
                <li>
                  <strong>{t("UR Palm.Use2")}</strong> {t("UR Palm.decription5")}
                </li>
                <li>
                  <strong>{t("UR Palm.Use3")}</strong> {t("UR Palm.decription6")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrPalm;
