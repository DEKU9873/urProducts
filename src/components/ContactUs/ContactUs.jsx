import React, { useState } from "react";
import axios from "axios";
import Heading from "../Shared/Heading";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();

  // State لإدارة البيانات
  const [formData, setFormData] = useState({
    sender_name: "",
    sender_email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // لإدارة حالة الإرسال

  // تحديث بيانات الفورم
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // إرسال البيانات إلى الباك إند
  const handleSubmit = async (e) => {
    e.preventDefault(); // منع السلوك الافتراضي للفورم
    try {
      const response = await axios.post("http://192.168.100.180:8000/api/send-email/", formData);
      if (response.status === 200) {
        setStatus("success");
        // تفريغ الحقول بعد الإرسال
        setFormData({ sender_name: "", sender_email: "", subject: "", message: "" });
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="py-12 bg-gray-50 dark:bg-gray-800 pt-20">
      <div className="container mx-auto px-4">
        <Heading title={t("Heading.Contact Us")} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d833.5285392567453!2d44.442544769597816!3d33.31583089834023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155783a9ab92cdb3%3A0xfdf7a9a52c2c76a9!2sUr%20products!5e0!3m2!1sen!2siq!4v1736747706513!5m2!1sen!2siq"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("Contact.Name")}
                  </label>
                  <input
                    type="text"
                    name="sender_name"
                    value={formData.sender_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2  dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    placeholder={t("Contact.Enter your name")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("Contact.Email")}
                  </label>
                  <input
                    type="email"
                    name="sender_email"
                    value={formData.sender_email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2  dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    placeholder={t("Contact.Enter your email")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t("Contact.Subject")}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2  dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  placeholder={t("Contact.Enter subject")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t("Contact.Message")}
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2  dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  placeholder={t("Contact.Write your message")}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 transition-colors duration-200"
              >
                {t("Contact.Send Message")}
              </button>
            </form>
            {status === "success" && (
              <p className="mt-4 text-green-500">{t("sent successfully!")}</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-500">{t("Failed to send message.")}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
