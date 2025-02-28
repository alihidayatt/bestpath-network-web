import React from "react";

import {
    syllabus_network,
  } from "./kelas_comptia_syllabus";
  

import {
  Cisco_ccna_ico,
  Comptia_network_ico,
} from "../../components/Bpn_imgs";

interface comptiadata {
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

const comptia_data: comptiadata[] = [
  {
    id: 1,
    img: < Comptia_network_ico/>,
    img_big: <Cisco_ccna_ico/>,
    title: "NETWORK+",
    duration: "5 days",
overview: "comptia network+ is a vendor-neutral certification designed to validate the foundational skills and knowledge required to design, manage, and troubleshoot both wired and wireless networks ,it ensures professionals are well-versed in the basics of networking and capable of supporting it infrastructure",
prerequisite: "basic computer knowledge",
level: "Beginner",
goals: "understand and implement basic network concepts and operations",
lab: "no",
intended: "fresh graduate, noc, engineer, people who are interested in it networking field",
    investment: "7.990.000",
    investment_p: "11.990.000" ,
    syllabus: syllabus_network ,
    comingSoon: false,
  },

];

export { comptia_data };