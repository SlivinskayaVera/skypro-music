// import styles from "./page.module.css";
import Tracks from "@/pages/Tracks/Tracks";
import { MainNavigation } from "@/components/MainNavigation/MainNavigation";
import { MainSidebar } from "@/components/MainSidebar/MainSidebar";
import { MusicBar } from "@/components/MusicBar/MusicBar";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <MainNavigation />
          <Tracks />
          <MainSidebar />
        </main>
        <MusicBar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
