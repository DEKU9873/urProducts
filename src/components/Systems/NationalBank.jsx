import React from "react";
import Heading from "../Shared/Heading";
import nationalbank from "../assets/systems/nationalbank.png";
import { useTranslation } from "react-i18next"; // استيراد useTranslation


const NationalBank = () => {
      const { t, i18n } = useTranslation(); // استخدام الترجمة
  
  return (
    <div className="bg-gray-100 flex items-center justify-center dark:bg-gray-900">
      <div className="container mt-10 bg-gray-100 shadow-md rounded-lg overflow-hidden w-full dark:bg-gray-900">
        <Heading title={t("Heading.National Bank for Obsolete Materials")} subtitle="Explore our National Bank for Obsolete Materials" />
        {/* Section for Video Centering */}
        <div className="flex items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
          <video
            className="w-full md:w-3/4 h-[470px] object-cover rounded-md"
            controls
            src="/video/nationalbank.mp4"
            poster={nationalbank}
          ></video>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">
            {t("National Bank.Key Features of the System:")}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-justify">
            <li>
              <strong>{t("National Bank.Feature1")}</strong> {t("National Bank.decription1")}
            </li>
            <li>
              <strong>{t("National Bank.Feature2")}</strong> {t("National Bank.decription2")}
            </li>
            <li>
              <strong>{t("National Bank.Feature3")}</strong> {t("National Bank.decription3")}
            </li>
            <li>
              <strong>{t("National Bank.Feature4")}</strong> {t("National Bank.decription4")}
            </li>
            <li>
              <strong>{t("National Bank.Feature5")}</strong> {t("National Bank.decription5")}
            </li>
          </ul>
          <h2 className="text-xl font-bold mt-6 mb-4">{t("National Bank.Expected Benefits:")}</h2>
          <ul className="list-disc list-inside space-y-2 text-justify">
            <li>{t("National Bank.Benefit1")}</li>
            <li>
            {t("National Bank.Benefit2")}
            </li>
            <li>
            {t("National Bank.Benefit3")}
            </li>
            <li>
            {t("National Bank.Benefit4")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NationalBank;
