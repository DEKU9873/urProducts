import React from "react";
import Heading from "../Shared/Heading"; // استيراد مكون العنوان
import { useTranslation } from "react-i18next"; // استيراد useTranslation
import erpImage from "../assets/systems/ERP.png";

const Erp = () => {
  const { t } = useTranslation(); // استخدام الترجمة

  return (
    <div className="bg-gray-100 flex items-center justify-center dark:bg-gray-900 ">
      <div className="container mt-10 bg-gray-100 shadow-md rounded-lg overflow-hidden w-full dark:bg-gray-900">
        <Heading title={t("ERP.Heading")} subtitle={t("ERP.Subtitle")} />
        {/* قسم الفيديو */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 p-6 gap-4 dark:bg-gray-900">

        <div className="flex items-center justify-center bg-gray-100 p-2 dark:bg-gray-900">
          <img
            className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px]  
                        sm:scale-105 lg:scale-150
                        object-contain mx-auto
                        drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)"
            src={erpImage}
            alt="ERP"
          />
        </div>
        
          <div className="p-6 flex flex-col justify-center ">
            <h2 className="text-xl font-bold mb-4">
              {t("ERP.MainComponents")}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-justify">
              <li>
                <strong>{t("ERP.Finance")}</strong>{" "}
                {t("ERP.FinanceDescription")}
              </li>
              <li>
                <strong>{t("ERP.HR")}</strong> {t("ERP.HRDescription")}
              </li>
              <li>
                <strong>{t("ERP.SCM")}</strong> {t("ERP.SCMDescription")}
              </li>
              <li>
                <strong>{t("ERP.CRM")}</strong> {t("ERP.CRMDescription")}
              </li>
              <li>
                <strong>{t("ERP.ProjectManagement")}</strong>{" "}
                {t("ERP.ProjectManagementDescription")}
              </li>
            </ul>
          </div>

          <div className="p-6 flex flex-col justify-center mx ">
            <h2 className="text-xl font-bold mt-6 mb-4">{t("ERP.Benefits")}</h2>
            <ul className="list-disc list-inside space-y-2 text-justify">
              <li>{t("ERP.Benefit1")}</li>
              <li>{t("ERP.Benefit2")}</li>
              <li>{t("ERP.Benefit3")}</li>
              <li>{t("ERP.Benefit4")}</li>
              <li>{t("ERP.Benefit5")}</li>
            </ul>
          </div>

          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-xl font-bold mt-6 mb-4">{t("ERP.Types")}</h2>
            <ul className="list-disc list-inside space-y-2 text-justify">
              <li>
                <strong>{t("ERP.OnPremise")}</strong>{" "}
                {t("ERP.OnPremiseDescription")}
              </li>
              <li>
                <strong>{t("ERP.Cloud")}</strong> {t("ERP.CloudDescription")}
              </li>
              <li>
                <strong>{t("ERP.Hybrid")}</strong> {t("ERP.HybridDescription")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Erp;
