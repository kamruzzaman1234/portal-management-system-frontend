"use client";

import { useEffect, useState } from "react";
import ProfileNavbar from "@/components/StudentProfile/ProfileNavbar/ProfileNavbar";
import AllStudents from "@/components/StudentProfile/AllStudents/AllStudents";


const StudentProfile = () => {
  
  return (
    <div>
      {/* <ProfileNavbar /> */}
      <AllStudents></AllStudents>
    </div>
  );
};

export default StudentProfile;
