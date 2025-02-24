import React from "react";
import {
  syllabus_jncia_junos,
  syllabus_jncis_sp,
} from "./kelas_juniper_syllabus";

import {
  Juniper_jnciajunos_ico,
  Juniper_jncissp_ico,
  Cucm_img,
  Mpls_img,
} from "../../components/Bpn_imgs";

interface juniperdata {
  id: number;
  img: React.JSX.Element;
  title: string;
  overview: string;
  prasyarat: string;
  tingkat: string;
  tujuan: string;
  ditujukan: string;
  durasi: string;
  biaya: string;
  comingSoon: boolean;
  syllabus: string[];
}

const juniper_data: juniperdata[] = [
  {
    id: 1,
    img: <Juniper_jnciajunos_ico/>,
    title: "JNCIA Junos",
    overview: "Juniper Networks Certified Internet Associate (JNCIA) adalah sertifikasi tingkat pemula untuk profesional jaringan. Sertifikasi ini memvalidasi pengetahuan dasar tentang konsep jaringan, produk Juniper, dan Junos OS. Sertifikasi ini ideal bagi mereka yang memulai perjalanan dengan Juniper Networks dan bertujuan untuk membangun keterampilan dalam mengelola dan mengonfigurasi perangkat berbasis Junos.",
    prasyarat: "Pelatihan ini tidak memiliki prasyarat bagi peserta yang ingin mendaftar.",
    tingkat: "Beginner",
    tujuan: "Belajar mengonfigurasi dan mengelola perangkat berbasis Junos.",
    ditujukan: "Lulusan baru, Teknisi Jaringan, Mahasiswa atau lulusan yang bercita-cita bekerja dengan Juniper Networks.",
    durasi: "4 Hari",
    biaya: "2.000.000" ,
    syllabus: syllabus_jncia_junos,
    comingSoon: false,
  },

  {
    id: 2,
    img: <Juniper_jncissp_ico/>,
    title: "JNCIS SP",
    overview: "Juniper Networks Certified Internet Associate (JNCIA) adalah sertifikasi tingkat pemula untuk profesional jaringan. Sertifikasi ini memvalidasi pengetahuan dasar tentang konsep jaringan, produk Juniper, dan Junos OS. Sertifikasi ini ideal bagi mereka yang memulai perjalanan dengan Juniper Networks dan bertujuan untuk membangun keterampilan dalam mengelola dan mengonfigurasi perangkat berbasis Junos.",
    prasyarat: "Pelatihan ini tidak memiliki prasyarat bagi orang yang ingin mendaftar.",
    tingkat: "Intermediate",
    tujuan: "Belajar mengonfigurasi dan mengelola perangkat berbasis Junos.",
    ditujukan: "Lulusan baru, Teknisi Jaringan, Mahasiswa atau lulusan yang bercita-cita bekerja dengan Juniper Networks.",
    durasi: "5 Hari",
    biaya: "3.000.000" ,
    syllabus: syllabus_jncis_sp,
    comingSoon: false,
  },
];

export { juniper_data };