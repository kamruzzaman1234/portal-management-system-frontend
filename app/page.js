import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import VideoBanner from "@/components/HomePage/VideoBanner/VideoBanner";
import Announcement from "@/components/HomePage/Announcement/Announcement";

export default function Home() {
  return (
    <div>
      <main>
          <VideoBanner></VideoBanner>
          <Announcement></Announcement>
      </main>
    </div>
  );
}
