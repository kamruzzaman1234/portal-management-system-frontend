import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import VideoBanner from "@/components/HomePage/VideoBanner/VideoBanner";
import Announcement from "@/components/HomePage/Announcement/Announcement";
import Facility from "@/components/HomePage/Facility/Facility";
import Offers from "@/components/HomePage/Offers/Offers";
import Faculties from "@/components/HomePage/Faculties/Faculties";

export default function Home() {
  return (
    <div>
      <main>
          <VideoBanner></VideoBanner>
          <Announcement></Announcement>
          <Facility></Facility>
          <Offers></Offers>
          <Faculties></Faculties>
      </main>
    </div>
  );
}
