import React from "react";

import {
  syllabus_acsa,
  syllabus_acsp
      } from "./kelas_aruba_syllabus";
  

import {
  Aruba_acsa_ico,
  Cisco_ccna_ico,
  Aruba_acsp_ico
  
} from "../../components/Bpn_imgs";

interface arubadata {
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

const aruba_data: arubadata[] = [
  {
    id: 1,
    img: <Aruba_acsa_ico/>,
    img_big: <Cisco_ccna_ico/>,
    title: "ACSA",
    duration: "5 days",
overview: "the Aruba Certified Switching Associate (ACSA) certification validates the skills and knowledge required to manage and configure Aruba switch solutions in enterprise environments. this certification focuses on the configuration and management of ArubaOS-Switch, including VLANs, routing, security, and network management",  
prerequisite: "basic computer knowledge",  
level: "Beginner",  
goals: "understand ArubaOS-Switch and the fundamentals of switching technologies",  
lab: "yes",  
intended: "fresh graduate, network engineer, individuals preparing for the Aruba Certified Switching Associate (ACSA)",   
    investment: "1.990.000" ,
    investment_p: "2.990.000" ,
    syllabus: syllabus_acsa,
    comingSoon: false,
  },

  {
    id: 2,
    img: <Aruba_acsp_ico/>,
    img_big: <Cisco_ccna_ico/>,
    title: "ACSP",
    overview: "the Aruba Certified Switching Professional (ACSP) certification validates advanced skills in managing and optimizing Aruba networking solutions. this certification focuses on deploying, configuring, managing, and troubleshooting complex Aruba switch environments, including Layer 2 and Layer 3 switching, routing, security, and network management for large-scale enterprise networks",  
prerequisite: "recommended for those who are already ACSA certified",  
level: "Intermediate",  
goals: "configure and deploy Layer 2 and Layer 3 switching solutions using ArubaOS-Switch",  
intended: "IT professionals, network engineer, individuals preparing for the Aruba Certified Switching Professional (ACSP)",  
    duration: "5 Hari",
    investment: "2.990.000" ,
    investment_p: "4.990.000" ,
    lab: "yes",
    syllabus: syllabus_acsp,
    comingSoon: false,
  },

 ];

export { aruba_data };