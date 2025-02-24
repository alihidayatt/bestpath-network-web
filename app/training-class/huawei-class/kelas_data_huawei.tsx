import React from "react";
import {
  syllabus_hcia_datacom,
} from "./kelas_huawei_syllabus";

import {
  Hcia_datacom_img,
  Cucm_img,
  Mpls_img,
} from "../../components/Bpn_imgs";

interface huaweidata {
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

const huawei_data: huaweidata[] = [
  {
    id: 1,
    img: <Hcia_datacom_img/>,
    title: "HCIA Datacom",
    duration: "5 Days",
overview: "The HCIA-Datacom certification provides foundational knowledge of data communication technologies and solutions. It covers networking concepts, IP addressing, routing, switching, and network security, with a focus on Huawei's Datacom products and solutions. This certification is ideal for individuals starting their careers in data communications or IT networking",
prerequisite: "Basic Computer Knowledge",
level: "Beginner",
goals: "Build a strong foundation in data communication technologies",
lab: "Yes",
intended: "Fresh graduate, Network Engineer, Technicians, Individuals preparing for advanced Huawei certifications",
    investment: "2.800.000" ,
    syllabus: syllabus_hcia_datacom,
    comingSoon: false,
  },

];

export { huawei_data };