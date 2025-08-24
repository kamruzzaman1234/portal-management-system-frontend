"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Cinzel, Inter } from "next/font/google";

const cinzel = Cinzel({
    subsets:["latin"],
    weight:["400", "500", "600", "700", "800"],
    display:"swap"

})

const inter = Inter({
    subsets:["latin"],
    weight:["400", "500", "600", "700", "800"],
    display:"swap"

})


const Help_Desk = ()=>{
     const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
    return(
        <div>
              <div className="max-w-5xl mx-auto p-8 mt-10 bg-white rounded-2xl shadow-xl">
      {/* Title */}
      <h1 className={`${cinzel.className} text-4xl font-bold text-center text-black mb-4`}>Help Desk</h1>
      <p className={`${inter.className} text-center text-black mb-8`}>
        Have any issues or questions? Contact us through the form below or check our FAQs.
      </p>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-4">Contact Form</h2>
          {success && <p className="text-green-600 mb-4">Your message has been sent!</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="bg-green-400 text-white px-6 py-3 rounded-lg hover:bg-green-400 transition duration-300 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* FAQ / Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-black mb-4">Contact Info</h2>
          <div className="flex items-center gap-3 text-gray-800">
            <FaEnvelope className="text-green-400 text-xl" />
            <span>support@university.edu</span>
          </div>
          <div className="flex items-center gap-3 text-gray-800">
            <FaPhone className="text-green-400 text-xl" />
            <span>+880123456789</span>
          </div>
          <div className="flex items-center gap-3 text-gray-800">
            <FaMapMarkerAlt className="text-green-400 text-xl" />
            <span>Building A, University Campus, Dhaka, Bangladesh</span>
          </div>

          <h2 className="text-2xl font-semibold text-black mt-6">FAQs</h2>
          <ul className="space-y-2">
            <li className="bg-indigo-50 p-3 rounded-lg shadow-sm">
              <strong>Q:</strong> How do I reset my password?<br />
              <strong>A:</strong> Click on "Forgot Password" on the login page and follow the instructions.
            </li>
            <li className="bg-indigo-50 p-3 rounded-lg shadow-sm">
              <strong>Q:</strong> How can I check my course enrollment?<br />
              <strong>A:</strong> Log in to your student portal and navigate to "My Courses".
            </li>
            <li className="bg-indigo-50 p-3 rounded-lg shadow-sm">
              <strong>Q:</strong> How do I contact my department?<br />
              <strong>A:</strong> Use the email or phone number listed above for direct contact.
            </li>
          </ul>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Help_Desk;