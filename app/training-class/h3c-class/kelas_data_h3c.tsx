import React from "react";

import {
  syllabus_h3cners,
  syllabus_h3cse_rs,
} from "./kelas_h3c_syllabus";

import {
  Cisco_ccna_ico,
  H3c_h3cne_rs_ico,
  H3c_h3cse_rs_ico,

} from "../../components/Bpn_imgs";

interface H3CData {
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

const h3c_data: H3CData[] = [
  {
    id: 1,
    img: <H3c_h3cne_rs_ico/>,
    img_big: <Cisco_ccna_ico />,
    title: "H3CNE-RS+",
    duration: "5 Days",
    overview:
      "H3CNE-RS+ is a foundational certification for IT professionals focusing on network routing and switching technologies. The program equips participants with essential knowledge and skills to configure, manage, and maintain enterprise-level H3C network devices. This certification provides a strong base for advancing to higher-level H3C certifications.",
    prerequisite: "Basic computer knowledge",
    level: "Beginner",
    goals: "Understand the principles of H3C network routing and switching technologies",
    lab: "Yes",
    intended: "Fresh graduates, NOC engineers, and people interested in IT networking",
    investment: "2.990.000",
    investment_p: "4.990.000",
    syllabus: syllabus_h3cners,
    comingSoon: false,
  },
  {
    id: 2,
    img: <H3c_h3cse_rs_ico />,
    img_big: <Cisco_ccna_ico />,
    title: "H3CSE-RS",
    duration: "3 Days",
    overview:
      "The H3C Certified Senior Engineer for Routing & Switching (H3CSE Routing & Switching) certificate demonstrates mastery of the full range of theoretical knowledge and operational skills required to deploy campus networks, including routing, switching, multicast, QoS, and basic security features. This certification also ensures competence in the construction and management of large- and medium-sized complex networks.",
    prerequisite: "Basic understanding of networking concepts and H3CNE qualification",
    level: "Intermediate",
    goals: "Master advanced concepts of switching, routing, and security in H3C networks",
    lab: "Yes",
    intended: "Engineers working for H3C’s agents, NOC engineers, and college students majoring in computer technology",
    investment: "2.990.000",
    investment_p: "4.990.000",
    syllabus: syllabus_h3cse_rs,
    comingSoon: false,
  },
];

export { h3c_data };
