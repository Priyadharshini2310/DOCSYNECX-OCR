import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function OcrContactInfo() {
  return (
    <div className="w-full mx-auto py-16 px-4 bg-white" id="ocrlancontact">
     <div className="max-w-6xl mx-auto py-16 px-4 bg-white ">
     <h2 className="text-teal-500 text-md font-semibold mb-2">Contact</h2>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in touch</h1>
      <p className="text-gray-600 mb-10">Our friendly team is always here to chat.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Email Section */}
        <div className="bg-gray-50   shadow-2xl shadow-teal-50 rounded-xl flex flex-col items-start p-10">
          <FaEnvelope className="text-teal-500 text-3xl mb-4" />
          <h3 className="text-lg font-semibold mb-2 mt-3 sm:mt-10">Send us a mail</h3>
          <p className="text-gray-600 mb-2">For general </p>
          <a href="mailto:hello@docsynecx.com" className="text-black font-semibold">hello@docsynecx.com</a>
          <p className="text-gray-600 mt-2">For Sales </p>
          <a href="mailto:success@docsynecx.com" className="text-black font-semibold ">success@docsynecx.com</a>
        </div>

        {/* Call Section */}
        <div className="bg-gray-50  rounded-xl shadow-xl shadow-teal-50 flex flex-col items-start p-10">
          <FaPhoneAlt className="text-teal-500 text-3xl mb-4 " />
          <h3 className="text-lg font-semibold mb-2 mt-3 sm:mt-10">Call us</h3>
          <p className="text-gray-600 mb-2 ">Mon-Fri from 9am to 6pm.</p>
          <p className="text-black font-semibold">0422 2212342</p>
          <p className="text-gray-600 mt-2">For Whatsapp</p>
          <p className="text-black font-semibold">+91 93447 76623</p>
        </div>

        {/* Address Section */}
        <div className="bg-gray-50 rounded-xl shadow-teal-50  shadow-xl flex flex-col items-start p-10">
          <FaMapMarkerAlt className="text-teal-500 text-3xl mb-4 " />
          <h3 className="text-lg font-semibold mb-2 mt-3 sm:mt-10">Meet us</h3>
          <p className="text-gray-600 mb-2">Visit our Office</p>
          <p className="text-black font-semibold">Coimbatore, India 641108</p>
        </div>
      </div>
     </div>
    </div>
  );
}
