import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 flex max-w-4xl w-full">
        {/* القسم الأيسر: الخريطة */}
        <div className="w-1/2 pr-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Our Location</h2>
          <div className="w-full h-64 rounded-md overflow-hidden shadow-md">
            <iframe
              title="Company Location"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093816!2d-122.41941508468143!3d37.77492977975947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581543f5e50df%3A0xa9b8a0bfcf0b4509!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1698400000000!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* القسم الأيمن: نموذج الاتصال */}
        <div className="w-1/2 pl-4">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Contact Us</h1>
          <p className="text-gray-600 text-center mb-6">
            We'd love to hear from you! Fill out the form below to get in touch.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Enter your message"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
