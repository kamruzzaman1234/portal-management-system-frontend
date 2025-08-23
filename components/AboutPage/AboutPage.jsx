"use client";

import VideoBanner from "../HomePage/VideoBanner/VideoBanner";
import AboutDetails from "./AboutDetails/AboutDetails";
import AboutHead from "./AboutHead/AboutHead";
import Alumni from "./Alumni/Alumni";
import Mission_Vission from "./Mission_Vission/Mission_Vission";
import Our_Staf from "./Our_Staf/Our_Staf";

export default function AboutPage() {
  return (
        <div>
            <AboutHead></AboutHead>
            <AboutDetails></AboutDetails>
            <Our_Staf></Our_Staf>
            <Alumni></Alumni>
            <Mission_Vission></Mission_Vission>
        </div>
  );
}
