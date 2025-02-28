import React from "react";

import {
    syllabus_hciadatacom,
  } from "./kelas_huawei_syllabus";
  

import {
  Cisco_ccna_ico,
  Huawei_hciadatacom_ico,
} from "../../components/Bpn_imgs";

interface huaweidata {
  id: number;
  img: React.JSX.Element;
  img_big: React.JSX.Element;
  title: string;
  overview: string;
  prerequisite: string;
  level: string;
  goals: string;
  lab: string;
  intended: string;
  duration: string;
  investment: string;
  investment_p: string;
  syllabus: string[];
  comingSoon: boolean;
}

const huawei_data: huaweidata[] = [
  {
    id: 1,
    img: < Huawei_hciadatacom_ico/>,
    img_big: <Cisco_ccna_ico/>,
    title: "HCIA-Datacom",
    duration: "5 days",
overview: "the hcia-datacom certification provides foundational knowledge of data communication technologies and solutions ,it covers networking concepts, ip addressing, routing, switching, and network security, with a focus on huawei's datacom products and solutions,this certification is ideal for individuals starting their careers in data communications or it networking",
prerequisite: "basic computer knowledge",
level: "beginner",
goals: "build a strong foundation in data communication technologies",
lab: "yes",
intended: "fresh graduate, network engineer, technicians, individuals preparing for advanced huawei certifications",
    investment: "2.990.000" ,
    investment_p: "4.990.000" ,
    syllabus: syllabus_hciadatacom ,
    comingSoon: false,
  },

];

export { huawei_data };