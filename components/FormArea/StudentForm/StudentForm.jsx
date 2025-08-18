"use client";

import { Nunito, Cinzel } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

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

// const submitHandler = async (e) => {

//   e.preventDefault();

//   const form = e.target;
//   const allInfo = {
//     full_name: form.full_name.value,
//     email: form.email.value,
//     phone: form.phone.value,
//     gender: form.gender.value,
//     password:form.password.value,
//     father_name: form.father_name.value,
//     mother_name: form.mother_name.value,
//     nationality: form.nationality.value,
//     religion: form.religion.value,
//     date: form.date.value,
//     type: form.type.value,
//     student_id: form.student_id.value, 
//     department: form.department.value,
//     qualification: form.qualification.value,
//     address: form.address.value,
//     joining_date: form.joining_date.value,
//     profile_url: form.profile_url.value,
//   };

//   try {
//     const res = await fetch("http://localhost:6060/students_signup", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(allInfo),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       toast.success("Student registered successfully!");
//       form.reset(); 

//      setTimeout(() => {
//           router.push("/signin"); // তুমি চাইলে এই route পরিবর্তন করতে পারো
//         }, 1500);

//     } else {
//       toast.error(`Error: ${data.message || "Something went wrong"}`);
//     }


    

//     console.log("Server Response:", data);
//   } catch (error) {
//     toast.error("Server error! Try again later.");
//     console.error("Error:", error);
//   }
// };

const StudentForm = () => {
    const router = useRouter();

    
const submitHandler = async (e) => {

  e.preventDefault();

  const form = e.target;
  const allInfo = {
    full_name: form.full_name.value,
    email: form.email.value,
    phone: form.phone.value,
    gender: form.gender.value,
    password:form.password.value,
    father_name: form.father_name.value,
    mother_name: form.mother_name.value,
    nationality: form.nationality.value,
    religion: form.religion.value,
    date: form.date.value,
    type: form.type.value,
    student_id: form.student_id.value, 
    department: form.department.value,
    qualification: form.qualification.value,
    address: form.address.value,
    joining_date: form.joining_date.value,
    profile_url: form.profile_url.value,
  };

  try {
    const res = await fetch("http://localhost:6060/students_signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(allInfo),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Student registered successfully!");
      form.reset(); 

     setTimeout(() => {
          router.push("/signin"); 
        }, 1500);

    } else {
      toast.error(`Error: ${data.message || "Something went wrong"}`);
    }


    

    console.log("Server Response:", data);
  } catch (error) {
    toast.error("Server error! Try again later.");
    console.error("Error:", error);
  }
};

  return (
    <div className="max-w-full w-full">
      <div className="px-3 py-6 border-2 w-full lg:w-[550px] shadow-lg border-gray-100">
        <div className="bg-[#0066ff] py-3 mb-12">
          <h3
            className={`${nunito.className} text-lg font-bold text-center text-white`}
          >
            Student Form
          </h3>
        </div>

        {/* Form */}
        <form action="" onSubmit={submitHandler}>
          <div className="mb-6 flex flex-col gap-4">
            <label
              htmlFor="name"
              className={`${cinzel.className} text-lg font-bold`}
            >
              Full Name
            </label>
            <input
              type="text"
              name="full_name"
              className="input input-bordered w-full"
              placeholder="Enter Your Name"
            />
          </div>

          <div className="mb-6 flex flex-col gap-4">
            <label
              htmlFor="email"
              className={`${cinzel.className} text-lg font-bold`}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Enter Your email"
            />
          </div>

          <div className="mb-6 flex flex-col gap-4">
            <label
              htmlFor="password"
              className={`${cinzel.className} text-lg font-bold`}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full"
              placeholder="Enter Your Password"
            />
          </div>

          <div className="mb-6 flex flex-col gap-4">
            <label
              htmlFor="phone"
              className={`${cinzel.className} text-lg font-bold`}
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="input input-bordered w-full"
              placeholder="+880......."
            />
          </div>

          <div className="mb-6 flex flex-col gap-4">
            <label
              htmlFor="gender"
              className={`${cinzel.className} text-lg font-bold`}
            >
              Gender
            </label>
            <select
              name="gender"
              className="w-full border rounded-lg p-2 
                                         focus:ring-gray-500 focus:outline-none"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-6 flex flex-col gap-4">
            <label
              htmlFor="father name"
              className={`${cinzel.className} text-lg font-bold`}
            >
              Father Name
            </label>
            <input
              type="text"
              name="father_name"
              className="input input-bordered w-full"
              placeholder="Enter Your Father name"
            />
          </div>

          <div className="mb-6 flex flex-col gap-4">
            <label
              htmlFor="Mother name"
              className={`${cinzel.className} text-lg font-bold`}
            >
              Mother Name
            </label>
            <input
              type="text"
              name="mother_name"
              className="input input-bordered w-full"
              placeholder="Enter Your Mother name"
            />
          </div>

          <div className="mb-6 flex flex-col gap-4">
            <label
              htmlFor="nationality"
              className={`${cinzel.className} text-lg font-bold`}
            >
              Nationality
            </label>
            <input
              type="text"
              name="nationality"
              className="input input-bordered w-full"
              placeholder="Enter Your Nationality"
            />
          </div>

          <div className="mb-6 flex flex-col gap-4">
            <label
              htmlFor="religion"
              className={`${cinzel.className} text-lg font-bold`}
            >
              Religion
            </label>
            <input
              type="text"
              name="religion"
              className="input input-bordered w-full"
              placeholder="Enter Your religion"
            />
          </div>

          <div className="mb-6 flex flex-col gap-4">
            <label
              htmlFor="data of birth"
              className={`${cinzel.className} text-lg font-bold`}
            >
              Date of Birth
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered w-full"
              placeholder=""
            />
          </div>

          <div className="mb-6 flex flex-col gap-4">
            <label
              htmlFor="type"
              className={`${cinzel.className} text-lg font-bold`}
            >
              Type
            </label>
            <select
              name="type"
              className="w-full border rounded-lg p-2 
                                         focus:ring-gray-500 focus:outline-none"
            >
              <option value="">Select Type</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-6 flex flex-col gap-4">
            <label
              htmlFor="student_id"
              className={`${cinzel.className} text-lg font-bold`}
            >
              Student Id
            </label>
            <input
              type="text"
              name="student_id"
              className="input input-bordered w-full"
              placeholder="Enter Your Student Id"
            />
          </div>

          <div className="mb-6 flex flex-col gap-4">
            <label
              htmlFor="department"
              className={`${cinzel.className} text-lg font-bold`}
            >
              Department
            </label>
            <input
              type="text"
              name="department"
              className="input input-bordered w-full"
              placeholder="Enter Your department"
            />
          </div>

          <div className="mb-6 flex flex-col gap-4">
            <label
              htmlFor="qualification"
              className={`${cinzel.className} text-lg font-bold`}
            >
              Qualification
            </label>
            <input
              type="text"
              name="qualification"
              className="input input-bordered w-full"
              placeholder="Enter Your qualification"
            />
          </div>

          <div className="mb-6 flex flex-col gap-4">
            <label
              htmlFor="address"
              className={`${cinzel.className} text-lg font-bold`}
            >
              Adress
            </label>
            <input
              type="text"
              name="address"
              className="input input-bordered w-full"
              placeholder="Enter Your address"
            />
          </div>

          <div className="mb-6 flex flex-col gap-4">
            <label
              htmlFor="joining date"
              className={`${cinzel.className} text-lg font-bold`}
            >
              Joining Date
            </label>
            <input
              type="date"
              name="joining_date"
              className="input input-bordered w-full"
              placeholder="Enter Your Joining Date"
            />
          </div>

          <div className="mb-6 flex flex-col gap-4">
            <label
              htmlFor="profile ulr"
              className={`${cinzel.className} text-lg font-bold`}
            >
              Profile Url
            </label>
            <input
              type="text"
              name="profile_url"
              className="input input-bordered w-full"
              placeholder="http://image.jpg"
            />
          </div>

          <div className="mb-6 flex flex-col gap-4">
            <input
              type="submit"
              name="submit"
              className="input bg-[#0066ff] 
                                    font-bold text-white input-bordered w-full cursor-pointer"
              value="Submit"
            />
          </div>
        </form>
      </div>

      {/* Toast container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default StudentForm;
