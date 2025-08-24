"use client";

import { Nunito, Cinzel } from "next/font/google";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const TeacherForm = () => {
  const [loading, setLoading] = useState(false);

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Collect form data
    const form = e.target;
    const teacherData = {
      full_name: form.full_name.value,
      email: form.email.value,
      phone: form.phone.value,
      password: form.password.value,
      gender: form.gender.value,
      date: form.date.value,
      type: form.type.value,
      teacher_id: form.teacher_id.value,
      department: form.department.value,
      designation: form.designation.value,
      qualification: form.qualification.value,
      address: form.address.value,
      joining_date: form["joining-date"].value,
      profile_url: form.profile_url.value,
    };

    try {
      // POST request using fetch
      const res = await fetch(`http://localhost:6060/teacher`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(teacherData),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Teacher information submitted successfully!");
        form.reset();
      } else {
        toast.error(result.message || "Failed to submit! Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-full w-full">
      <div className="px-3 py-6 border-2 w-full lg:w-[550px] shadow-lg border-gray-100">
        <div className="bg-[#0066ff] py-3 mb-12">
          <h3
            className={`${nunito.className} text-lg font-bold text-center text-white`}
          >
            Teacher Form
          </h3>
        </div>

        {/* Form Starts */}
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-6 flex flex-col gap-4">
            <label htmlFor="name" className={`${cinzel.className} text-lg font-bold`}>
              Full Name
            </label>
            <input
              type="text"
              name="full_name"
              className="input input-bordered w-full"
              placeholder="Enter Your Name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6 flex flex-col gap-4">
            <label htmlFor="email" className={`${cinzel.className} text-lg font-bold`}>
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Enter Your email"
              required
            />
          </div>

        {/* Password */}

        <div className="mb-6 flex flex-col gap-4">
  <label htmlFor="password" className={`${cinzel.className} text-lg font-bold`}>
    Password
  </label>
  <input
    type="password"
    name="password"
    className="input input-bordered w-full"
    placeholder="Enter Password"
    required
  />
</div>


          {/* Phone */}
          <div className="mb-6 flex flex-col gap-4">
            <label htmlFor="phone" className={`${cinzel.className} text-lg font-bold`}>
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="input input-bordered w-full"
              placeholder="+880......."
              required
            />
          </div>

          {/* Gender */}
          <div className="mb-6 flex flex-col gap-4">
            <label htmlFor="gender" className={`${cinzel.className} text-lg font-bold`}>
              Gender
            </label>
            <select
              name="gender"
              className="w-full border rounded-lg p-2 focus:ring-gray-500 focus:outline-none"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div className="mb-6 flex flex-col gap-4">
            <label htmlFor="data of birth" className={`${cinzel.className} text-lg font-bold`}>
              Date of Birth
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Type */}
          <div className="mb-6 flex flex-col gap-4">
            <label htmlFor="type" className={`${cinzel.className} text-lg font-bold`}>
              Type
            </label>
            <select
              name="type"
              className="w-full border rounded-lg p-2 focus:ring-gray-500 focus:outline-none"
              required
            >
              <option value="">Select Type</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Teacher ID */}
          <div className="mb-6 flex flex-col gap-4">
            <label htmlFor="teacher_id" className={`${cinzel.className} text-lg font-bold`}>
              Teacher Id
            </label>
            <input
              type="text"
              name="teacher_id"
              className="input input-bordered w-full"
              placeholder="Enter Your Teacher Id"
            />
          </div>

          {/* Department */}
          <div className="mb-6 flex flex-col gap-4">
            <label htmlFor="department" className={`${cinzel.className} text-lg font-bold`}>
              Department
            </label>
            <input
              type="text"
              name="department"
              className="input input-bordered w-full"
              placeholder="Enter Your department"
            />
          </div>

          {/* Designation */}
          <div className="mb-6 flex flex-col gap-4">
            <label htmlFor="designation" className={`${cinzel.className} text-lg font-bold`}>
              Designation
            </label>
            <input
              type="text"
              name="designation"
              className="input input-bordered w-full"
              placeholder="Enter Your Designation"
            />
          </div>

          {/* Qualification */}
          <div className="mb-6 flex flex-col gap-4">
            <label htmlFor="qualification" className={`${cinzel.className} text-lg font-bold`}>
              Qualification
            </label>
            <input
              type="text"
              name="qualification"
              className="input input-bordered w-full"
              placeholder="Enter Your qualification"
            />
          </div>

          {/* Address */}
          <div className="mb-6 flex flex-col gap-4">
            <label htmlFor="address" className={`${cinzel.className} text-lg font-bold`}>
              Address
            </label>
            <input
              type="text"
              name="address"
              className="input input-bordered w-full"
              placeholder="Enter Your address"
            />
          </div>

          {/* Joining Date */}
          <div className="mb-6 flex flex-col gap-4">
            <label htmlFor="joining date" className={`${cinzel.className} text-lg font-bold`}>
              Joining Date
            </label>
            <input
              type="date"
              name="joining-date"
              className="input input-bordered w-full"
            />
          </div>

          {/* Profile URL */}
          <div className="mb-6 flex flex-col gap-4">
            <label htmlFor="profile url" className={`${cinzel.className} text-lg font-bold`}>
              Profile Url
            </label>
            <input
              type="text"
              name="profile_url"
              className="input input-bordered w-full"
              placeholder="http://image.jpg"
            />
          </div>

          {/* Submit Button */}
          <div className="mb-6 flex flex-col gap-4">
            <input
              type="submit"
              name="submit"
              disabled={loading}
              value={loading ? "Submitting..." : "Submit"}
              className="input bg-[#0066ff] font-bold text-white input-bordered w-full cursor-pointer"
            />
          </div>
        </form>
        {/* Form Ends */}
      </div>
    </div>
  );
};

export default TeacherForm;
