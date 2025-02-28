import React from "react";

import {
  syllabus_fcf,
  syllabus_fca,
  syllabus_nse4,
  syllabus_nse7,
  } from "./kelas_fortinet_syllabus";
  

import {
  Cisco_ccna_ico,
  Fortinet_fca_ico,
  
} from "../../components/Bpn_imgs";

interface fortinetdata {
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

const fortinet_data: fortinetdata[] = [
  {
    id: 1,
    img: <Fortinet_img/>,
    img_big: <Cisco_ccna_ico/>,
    title: "Fortinet Certified Fundamentals",
    duration: "3 days",  
overview: "the fortinet certified fundamentals (FCF) cyber security training is a comprehensive introduction to fortinet security products, including fortigate firewalls this 3-day training focuses on the fundamental skills and knowledge required to protect network infrastructures and manage security effectively it covers core network security concepts, fortinet-specific solutions, and best practices for implementing security policies, VPNs, and threat management systems",  
prerequisite: "basic computer knowledge",  
level: "Beginner",  
goals: "learn the basics of network security and fortinet solutions",  
lab: "yes",  
intended: "fresh graduate, beginners in cybersecurity, engineer, people who are interested in IT network security field",  
    investment: "2.000.000" ,
    syllabus: syllabus_fcf,
    comingSoon: false,
  },

  {
    id: 2,
    img: <Fortinet_img/>,
    img_big: <Cisco_ccna_ico/>,
    title: "Fortinet Certified Associate",
    duration: "3 Hari", 
overview: "the fortinet certified associate (FCA) certification is an entry-level credential designed to validate foundational knowledge in cybersecurity and fortinet technologies individuals new to network security or looking to start their journey with fortinet solutions",  
prerequisite: "basic computer knowledge",  
level: "beginner",  
goals: "understanding basic configure fortinet NGFW and mitigate common security threats",  
lab: "yes",  
intended: "fresh graduate, beginners in cybersecurity, engineer, people who are interested in IT network security field",  
    investment: "2.500.000" ,
    syllabus: syllabus_fca,
    comingSoon: false,
  },

  {
    id: 3,
    img: <Fortinet_img/>,
    img_big: <Cisco_ccna_ico/>,
    title: "Fortinet Certified NSE4",
    duration: "3 days",  
overview: "the fortinet NSE 4 certification focuses on the configuration and management of fortigate firewalls enables IT professionals to learn the fundamentals of network security, including basic firewall configuration, VPN setup, security profiles, and advanced routing participants will gain practical experience in managing, maintaining, and troubleshooting fortigate devices in various network environments",  
prerequisite: "recommended for those who are already FCA certified",  
level: "intermediate",  
goals: "configure and manage fortigate firewalls using both CLI and GUI",  
lab: "yes",  
intended: "network engineers, security engineers, individuals seeking to advance their knowledge of fortigate firewall technologies",  
    investment: "2.800.000" ,
    syllabus: syllabus_nse4,
    comingSoon: true,
  },

  {
    id: 4,
    img: <Fortinet_img/>,
    img_big: <Cisco_ccna_ico/>,
    title: "Fortinet Certified NSE7",
    duration: "3 days",  
overview: "the fortinet NSE 7 - SD-WAN certification validates the advanced skills required to implement and manage fortinet's SD-WAN solutions configuring, troubleshooting, and optimizing SD-WAN deployments using fortigate devices professionals who manage large, complex SD-WAN solutions in enterprise environments, ensuring secure and efficient wide-area network traffic management",  
prerequisite: "recommended for those who are already NSE4 certified",  
level: "advanced",  
goals: "master the configuration, troubleshooting, and management of SD-WAN technologies in fortigate devices",  
lab: "yes",  
intended: "network engineers, security engineers, IT professionals",  
    investment: "2.800.000" ,
    syllabus: syllabus_nse7,
    comingSoon: true,
  },
];

export { fortinet_data };