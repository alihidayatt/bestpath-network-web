import React from "react";

import {
         syllabus_ricxi,
         syllabus_rasza,
         syllabus_rcni,
         syllabus_rcwa,
  } from "./kelas_ruckus_syllabus";
  

import {
  Cisco_ccna_ico,
  Ruckus_ricxi_ico,
  Ruckus_rasza_ico,
  Ruckus_rcni_ico,
  Ruckus_rcwa_ico
  
} from "../../components/Bpn_imgs";

interface ruckusdata {
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

const Ruckus_data: ruckusdata[] = [
  {
    id: 1,
    img: <Ruckus_ricxi_ico/>,
    img_big: <Cisco_ccna_ico/>,
    title: "RICXI",
    duration: "3 days",
overview: "the RICXI training provides a comprehensive understanding of the fundamentals of managing and implementing Ruckus ICX switches. participants will learn how to configure, monitor, and troubleshoot ICX-based networks, including features like VLAN, spanning tree, link aggregation, and more",  
prerequisite: "recommended for those who already have a RCNI certificate",  
level: "Beginner",  
goals: "understand the architecture and key features of Ruckus ICX switches",  
lab: "yes",  
intended: "fresh graduate, network engineer, technicians, individuals preparing for advanced RICXI certifications",  
    investment: "2.990.000" ,
    investment_p: "4.990.000" ,
    syllabus: syllabus_ricxi,
    comingSoon: false,
  },

  {
    id: 2,
    img: <Ruckus_rasza_ico/>,
    img_big: <Cisco_ccna_ico/>,
    title: "RASZA",
    overview: "the RASZA (Ruckus Accredited SmartZone Administrator) certification is designed for network professionals who manage, configure, and troubleshoot Ruckus SmartZone controllers. the training covers the core principles of wireless networking, the configuration of SmartZone controllers, and troubleshooting methods for Ruckus Wireless devices",  
prerequisite: "recommended for those who already have a RCWA certificate",  
level: "Intermediate",  
goals: "configure and manage Ruckus SmartZone controllers and access points",  
lab: "yes",  
intended: "network engineer, technicians, individuals preparing for advanced RASZA certifications",  
    duration: "3 Hari",
    investment: "2.990.000" ,
    investment_p: "4.990.000" ,
    syllabus: syllabus_rasza,
    comingSoon: false,
  },

  {
    id: 3,
    img: <Ruckus_rcni_ico/>,
    img_big: <Cisco_ccna_ico/>,
    title: "RCNI",
    overview: "the Ruckus Certified Networking Implementer (RCNI) certification is designed for network engineers who are involved in the design, deployment, and maintenance of Ruckus networking solutions. this certification demonstrates the ability to implement Ruckus products and solutions in various network environments, ensuring optimal performance, reliability, and security",  
prerequisite: "basic computer knowledge",  
level: "Beginner",  
goals: "gain expertise in configuring and deploying Ruckus products for various network environments",  
lab: "yes",  
intended: "fresh graduate, network engineer, technicians, individuals preparing for advanced RCNI certifications",  
    duration: "5 Hari",
    investment: "2.990.000" ,
    investment_p: "4.990.000" ,
    syllabus: syllabus_rcni,
    comingSoon: false,
  },

  {
    id: 4,
    img: <Ruckus_rcwa_ico/>,
    img_big: <Cisco_ccna_ico/>,
    title: "RCWA",
    overview: "RCWA is an entry-level certification designed to provide foundational knowledge of Wi-Fi network concepts, design, operation, and management of Ruckus solutions. this certification equips participants with the skills needed to effectively handle Ruckus Wi-Fi solutions",  
prerequisite: "recommended for those who already have a RCNI certificate",  
level: "Beginner",  
goals: "understand the fundamentals of Wi-Fi networks and wireless technologies",  
lab: "yes",  
intended: "fresh graduate, network engineer, technicians",  
    duration: "5 Hari",
    investment: "2.990.000" ,
    investment_p: "4.990.000" ,
    syllabus: syllabus_rcwa,
    comingSoon: false,
  },
];

export { Ruckus_data };