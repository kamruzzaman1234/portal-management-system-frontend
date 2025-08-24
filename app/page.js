import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import VideoBanner from "@/components/HomePage/VideoBanner/VideoBanner";
import Announcement from "@/components/HomePage/Announcement/Announcement";
import Facility from "@/components/HomePage/Facility/Facility";
import Offers from "@/components/HomePage/Offers/Offers";
import Faculties from "@/components/HomePage/Faculties/Faculties";
import Testimonial from "@/components/HomePage/Testimonial/Testimonial";
import RecentEvent from "@/components/HomePage/RecentEvent/RecentEvent";

export default function Home() {
  return (
    <div>
      <main>
          <VideoBanner></VideoBanner>
          <Offers></Offers>
          <Announcement></Announcement>
          <Facility></Facility>
          
          <Faculties></Faculties>
          <RecentEvent></RecentEvent>
          <Testimonial></Testimonial>
      </main>
    </div>
  );
}
