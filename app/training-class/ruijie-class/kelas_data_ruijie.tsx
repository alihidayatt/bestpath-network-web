import React from "react";
import {
  syllabus_rcna_rs,
  syllabus_rcna_wlan,
} from "./kelas_ruijie_syllabus";

import {
  Rcna_img,
} from "../../components/Bpn_imgs";

interface ruijiedata {
  id: number;
  img: React.JSX.Element;
  title: string;
  overview: string;
  prerequisite: string;
  level: string;
  goals: string;
  lab: string;
  intended: string;
  duration: string;
  investment: string;
  comingSoon: boolean;
  syllabus: string[];
}

const ruijie_data: ruijiedata[] = [
  {
    id: 1,
    img: <Rcna_img/>,
    title: "RCNA R&S",
    duration: "4 Days",
overview: "Ruijie Certified Network Associate Routing & Switching (RCNA-RS) is an entry-level certification that validates fundamental skills in configuring, managing, and troubleshooting networks using Ruijie devices. It is designed for beginners looking to establish a strong foundation in networking with Ruijie technologies",
prerequisite: "Basic Computer Knowledge",
level: "Beginner",
goals: "Understand fundamental networking concepts and principles, Configure and manage Ruijie devices in a network",
lab: "No",
intended: "Fresh graduate, Network Engineer, Individuals preparing for advanced Ruijee certifications",
    investment: "2.800.000" ,
    syllabus: syllabus_rcna_rs,
    comingSoon: false,
  },

  {
    id: 2,
    img: <Rcna_img/>,
    title: "RCNA WLAN",
    overview: "Sertifikasi RCNA-WLAN adalah kualifikasi level pemula yang dirancang untuk memberikan pengetahuan dasar tentang teknologi jaringan area lokal nirkabel (WLAN). Sertifikasi ini berfokus pada pemahaman konsep WLAN, instalasi, konfigurasi, dan pemecahan masalah perangkat Ruijie, serta standar WLAN modern.",
    prerequisite: "Pelatihan ini tidak memiliki prerequisite bagi peserta yang ingin mendaftar.",
    level: "Beginner",
    goals: "Membekali kandidat dengan pengetahuan dasar tentang teknologi WLAN.",
    lab: "No",
    intended: " Lulusan baru, Teknisi Jaringan, Administrator TI yang mengelola penerapan WLAN.",
    duration: "3 Hari",
    investment: "2.800.000" ,
    syllabus: syllabus_rcna_wlan,
    comingSoon: false,
  },

];

export { ruijie_data };