import React from "react";

import {
    
  } from "./kelas_comptiasecurity_syllabus";
  

import {
  Mtcna_img,
  Cisco_ccna_ico,
  Mtcre_img,
  
} from "../../components/Bpn_imgs";

interface comptiasecuritydata {
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

const comptiasecurity_data: comptiasecuritydata[] = [
  {
    id: 1,
    img: <Mtcna_img/>,
    img_big: <Cisco_ccna_ico/>,
    title: "SECURITY+",
    duration: "3 days",
overview: "CompTIA Security+ is a globally recognized certification that validates the foundational skills necessary to perform core security functions in IT. it covers essential principles for securing systems, networks, and devices, focusing on threat analysis, risk management, and security best practices,"  
prerequisite: "basic networking knowledge,"  
level: "Beginner,"  
goals: "identify and mitigate various types of security threats and vulnerabilities,"  
lab: "yes,"  
intended: "fresh graduate, security analysts or consultants aiming to validate their skills, engineer, people who are interested in IT security field,"  
    investment: "2.000.000" ,
    syllabus: syllabus_security+,
    comingSoon: false,
  },

  {
    id: 2,
    img: <Mtcre_img/>,
    img_big: <Cisco_ccna_ico/>,
    title: "CySA+",
    overview: "CompTIA Cybersecurity Analyst (CySA+) is an intermediate-level certification focused on threat detection, vulnerability management, and incident response. it is designed for professionals looking to enhance their skills in cybersecurity analysis and operational security,"  
prerequisite: "familiarity with basic cybersecurity concepts, IT infrastructure, and networking fundamentals,"  
level: "Intermediate,"  
goals: "identify and analyze cyber threats and determine appropriate responses,"  
lab: "yes,"  
intended: "cybersecurity analysts, vulnerability assessors, security operation center, people who are interested in cybersecurity field,"  
    duration: "3 Hari",
    investment: "2.500.000" ,
    syllabus: syllabus_cysa+,
    comingSoon: false,
  },

 ];

export { comptiasecurity_data };