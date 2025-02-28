import React from "react";

import {
         syllabus_rcna_rs,
         syllabus_rcna_wlan,
  } from "./kelas_ruijie_syllabus";
  

import {
  Cisco_ccna_ico,
  Ruijie_rcnars_ico,
  Ruijie_rcnawlan_ico,
  H3c_h3cse_rs_ico,
} from "../../components/Bpn_imgs";

interface ruijiedata {
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

const ruijie_data: ruijiedata[] = [
  {
    id: 1,
    img: <Ruijie_rcnars_ico/>,
    img_big: <Cisco_ccna_ico/>,
    title: "RCNA RS",
    duration: "4 days",
overview: "ruijie Certified Network Associate Routing & Switching (RCNA RS) is an entry-level certification that validates fundamental skills in configuring, managing, and troubleshooting networks using Ruijie devices. it is designed for beginners looking to establish a strong foundation in networking with Ruijie technologies"  ,
prerequisite: "basic computer knowledge"  ,
level: "Beginner",  
goals: "understand fundamental networking concepts and principles",  
lab: "no"  ,
intended: "fresh graduate, network engineer, individuals preparing for advanced Ruijie certifications"  ,
    investment: "1.990.000" ,
    investment_p: "2.990.000" ,
    syllabus: syllabus_rcna_rs,
    comingSoon: false,
  },

  {
    id: 2,
    img: <Ruijie_rcnawlan_ico />,
    img_big: <Cisco_ccna_ico/>,
    title: "RCNA WLAN",
    duration: "3 days",
    overview: "the RCNA WLAN certification is an entry-level qualification designed to provide foundational knowledge of wireless local area network (WLAN) technologies. it focuses on understanding WLAN concepts, installation, configuration, and troubleshooting of Ruijie devices, along with modern WLAN standards",  
prerequisite: "this training does not have prerequisite for the people who want to register",  
level: "Beginner",  
goals: "equip candidates with basic knowledge of WLAN technology",  
intended: "fresh graduate, network engineer, IT administrators managing WLAN deployments",
    investment: "2.990.000" ,
    investment_p: "4.990.000" ,
    lab: "no",
    syllabus: syllabus_rcna_wlan,
    comingSoon: false,
  },

  ];

export { ruijie_data };