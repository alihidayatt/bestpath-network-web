import React from "react";

import {
    syllabus_pcnsa,
  } from "./kelas_paloalto_syllabus";
  

import {

  Cisco_ccna_ico,

  
} from "../../components/Bpn_imgs";

interface paloaltodata {
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
  syllabus: string[];
  comingSoon: boolean;
}

const paloalto_data: paloaltodata[] = [
  {
    id: 1,
    img: <Mtcna_img/>,
    img_big: <Cisco_ccna_ico/>,
    title: "PCNSA",
    duration: "4 days",  
    overview: "PCNSA is a certification designed to validate the ability to manage, configure, and operate palo alto networks firewalls, including handling threats and implementing security measures",  
    prerequisite: "basic computer knowledge",  
    level: "beginner",  
    goals: "understand the fundamentals of network security using palo alto networks devices",  
    lab: "yes",  
    intended: "fresh graduate, network engineer, technicians, beginner network security",  
    investment: "2.000.000" ,
    syllabus: syllabus_pcnsa,
    comingSoon: false,
  },

];

export { paloalto_data };