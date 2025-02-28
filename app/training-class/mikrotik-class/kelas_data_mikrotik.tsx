import React from "react";

import {
    syllabus_mtcre,
    syllabus_mtcwe,
    syllabus_mtctce,
    syllabus_mtcume,
    syllabus_mtcipv6,
    syllabus_mtcine,
    syllabus_mtcna,




  } from "./kelas_mikrotik_syllabus";
  

import {
  Cisco_ccna_ico,
  Mikrotik_mtcre_ico,
  Mikrotik_mtcwe_ico,
  Mikrotik_mtctce_ico,
  Mikrotik_mtcume_ico,
  Mikrotik_mtcipv6_ico,
  Mikrotik_mtcine_ico,
  Mikrotik_mtcna_ico,




} from "../../components/Bpn_imgs";

interface Mikrotikdata {
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

const Mikrotik_data: Mikrotikdata[] = [
  {
    id: 1,
    img: <Mikrotik_mtcna_ico/>,
    img_big: <Cisco_ccna_ico/>,
    title: "MTCNA",
    duration: "3 days",
overview: "the MikroTik Certified Network Associate (MTCNA) certification is an entry-level program designed to provide participants with a strong foundation in MikroTik RouterOS and RouterBoard configurations , it equips individuals with the skills to configure, manage, and troubleshoot basic networks using MikroTik devices",
prerequisite: "basic computer knowledge",
level: "Beginner",
goals: "understand the fundamentals of networking and Mikrotik RouterOS",
lab: "yes",
intended: "fresh graduate, network engineer, individuals preparing for advanced MikroTik certifications",
    investment: "1.990.000" ,
    investment_p: "2.990.000" ,
    syllabus: syllabus_mtcna,
    comingSoon: false,
  },
  
  {
    id: 2,
    img: <Mikrotik_mtcre_ico/>,
    img_big: <Cisco_ccna_ico/>,
    title: "MTCRE",
    duration: "3 days",  
overview: "the mikrotik certified routing engineer (mtcre) is an advanced certification from mikrotik focusing on routing techniques, including ospf, tunneling, and load balancing configuration. it aims to enhance the skills of networking professionals in designing and managing complex routing solutions using routeros",  
prerequisite: "recommended have a certificate mtcna",  
level: "Intermediate",  
goals: "understand static and dynamic routing concepts, tunneling",  
lab: "yes",  
intended: "fresh graduate, network engineer, individuals preparing for advanced mikrotik certifications",  
    investment: "2.990.000" ,
    investment_p: "4.990.000" ,
    syllabus: syllabus_mtcre ,
    comingSoon: false,
  },

  {
    id: 3,
    img: <Mikrotik_mtcwe_ico/>,
    img_big: <Cisco_ccna_ico/>,
    title: "MTCWE",
   duration: "3 days",
   overview: "mtcwe focuses on advanced wireless networking concepts and configurations using mikrotik devices. this certification is designed to provide participants with the expertise to deploy, optimize, and troubleshoot wireless networks in various environments",
   prerequisite: "recommended for those who already have an mtcna certificate",
   level: "Intermediate",
   goals: "understand advanced wireless networking principles",
   lab: "yes",
   intended: "wireless internet service providers (wisps), network engineer, individuals preparing for advanced mikrotik certifications",
   investment: "2.990.000" ,
    investment_p: "4.990.000" ,
    syllabus: syllabus_mtcwe,
    comingSoon: false,
  },

  {
    id: 4,
    img: <Mikrotik_mtctce_ico/>,
    img_big: <Cisco_ccna_ico/>,
    title: "MTCTCE",
    duration: "3 days",
overview: "MTCTCE is a MikroTik certification focused on managing and controlling network traffic using advanced features in RouterOS. It covers concepts and practices such as Firewall, QoS, caching, and traffic shaping to optimize network performance",
prerequisite: "recommended for those who already have an MTCNA certificate",
level: "Intermediate",
goals: "learn traffic management techniques using MikroTik features",
lab: "yes",
intended: "network administrators aiming to manage network traffic effectively, network engineer, individuals preparing for advanced MikroTik certifications",
    investment: "7.990.000" ,
    investment_p: "11.990.000" ,
    syllabus: syllabus_mtctce,
    comingSoon: false,
  },

  {
    id: 5,
    img: <Mikrotik_mtcipv6_ico/>,
    img_big: <Cisco_ccna_ico/>,
    title: "MTCIPV6",
    duration: "3 days",
    overview: "the MikroTik Certified IPv6 (MTCIPv6) course is designed to provide in-depth knowledge and hands-on experience in implementing IPv6 on MikroTik devices , this course covers IPv6 addressing, routing, security, and transition mechanisms to ensure seamless network operations in dual-stack or IPv6-only environments",
prerequisite: "recommended for those who already have an MTCNA certificate",
level: "Intermediate",
goals: "configure and manage IPv6 on MikroTik devices",
lab: "yes",
intended: "technician, network engineer, people who want to deepen MikroTik",
    investment: "4.500.000" ,
    investment_p: "6.990.000" ,
    syllabus: syllabus_mtcipv6,
    comingSoon: false,
  },

  {
    id: 6,
    img: <Mikrotik_mtcine_ico/>,
    img_big: <Cisco_ccna_ico/>,
    title: "MTCINE",
    duration: "3 days",
    overview: "the MikroTik Certified IPv6 (MTCIPv6) course is designed to provide in-depth knowledge and hands-on experience in implementing IPv6 on MikroTik devices , this course covers IPv6 addressing, routing, security, and transition mechanisms to ensure seamless network operations in dual-stack or IPv6-only environments",
prerequisite: "recommended for those who already have an MTCNA certificate",
level: "Advanced",
goals: "configure and manage IPv6 on MikroTik devices",
lab: "yes",
intended: "technician, network engineer, people who want to deepen MikroTik",
    investment: "4.990.000" ,
    investment_p: "7.990.000" ,
    syllabus: syllabus_mtcine,
    comingSoon: false,
  },
  
  {
    id: 7,
    img: <Mikrotik_mtcume_ico/>,
    img_big: <Cisco_ccna_ico/>,
    title: "MTCUME",
    duration: "3 days",
overview: "the MikroTik Certified User Management Engineer (MTCUME) certification focuses on advanced user management, network security, and leveraging MikroTik features for efficient network administration",
prerequisite: "recommended for those who already have an MTCNA certificate",
level: "Advanced",
goals: "gain the skills to manage secure and efficient MikroTik-based networks",
lab: "yes",
intended: "network engineer, people who want to deepen MikroTik",
    investment: "2.990.000" ,
    investment_p: "4.990.000" ,
    syllabus: syllabus_mtcume,
    comingSoon: false,
  },

];

export { Mikrotik_data };