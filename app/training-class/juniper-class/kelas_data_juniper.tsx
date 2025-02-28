import React from "react";

import {
   syllabus_jnciajunos,
   syllabus_jncissp,
   syllabus_jncisent,


  } from "./kelas_juniper_syllabus";
  

import {
  Cisco_ccna_ico,
  Juniper_jnciajunos_ico,
  Juniper_jncissp_ico,
  Juniper_jncisent_ico





} from "../../components/Bpn_imgs";

interface Juniperdata {
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

const juniper_data: Juniperdata[] = [
  {
    id: 1,
    img: <Juniper_jnciajunos_ico/>,
    img_big: <Cisco_ccna_ico/>,
    title: "JNCIA JUNOS",
    duration: "4 days",
overview: "the juniper networks certified internet associate (jncia) is an entry-level certification for networking professionals,it validates foundational knowledge of networking concepts, juniper products, and junos os ,this certification is ideal for those starting their journey with juniper networks and aims to build skills for managing and configuring junos-based devices",
prerequisite: "basic computer knowledge",
level: "Beginner",
goals: "learn to configure and manage junos-based devices",
lab: "yes",
intended: "fresh graduate, network engineer, students or graduates aspiring to work with juniper networks", 
    investment: "1.990.000" ,
    investment_p: "2.990.000" ,
    syllabus: syllabus_jnciajunos ,
    comingSoon: false,
  },

  {
    id: 2,
    img: <Juniper_jncissp_ico/>,
    img_big: <Cisco_ccna_ico/>,
    title: "JNCIS SP",
    duration: "5 days",
    overview: "the jncis-sp (juniper networks certified internet specialist - service provider) certification validates intermediate-level knowledge and skills in service provider networks,it focuses on routing, switching, and network implementation in service provider environments using juniper devices",
    prerequisite: "jncia-junos (juniper networks certified internet associate – junos) certification",
    level: "Intermediate",
    goals: "develop skills in configuring, troubleshooting, and optimizing service provider networks",
    lab: "yes",
    intended: "network engineers specializing in service provider networks, it professionals, it engineers seeking to validate their advanced junos skills in the service provider domain",
    investment: "2.990.000" ,
    investment_p: "4.990.000" ,
    syllabus: syllabus_jncissp,
    comingSoon: false,
  },

  {
    id: 3,
    img: <Juniper_jncisent_ico/>,
    img_big: <Cisco_ccna_ico/>,
    title: "JNCIS ENT",
    duration: "5 days",
overview: "the juniper networks certified internet specialist – enterprise (jncis-ent) certification focuses on the knowledge and skills required to configure, monitor, and troubleshoot junos-based devices in an enterprise network ,this course covers topics such as routing and switching protocols, firewall filters, vpns, and advanced network troubleshooting, all using junos os",
prerequisite: "jncia-junos (juniper networks certified internet associate – junos) certification",
level: "Intermediate",
goals: "gain proficiency in monitoring and managing junos devices within enterprise networks",
lab: "yes",
intended: "network engineers who want to specialize in junos-based enterprise networks, individuals preparing for more advanced juniper certifications (e.g., jncip-ent)",
    investment: "2.990.000" ,
    investment_p: "4.990.000" ,
    syllabus: syllabus_jncisent,
    comingSoon: false,
  },

];

export { juniper_data };