const syllabus_acsa: string[] = [
    "Day 1 – Introduction to Aruba and Switch Networking",  
"Introduction to Aruba and ArubaOS-Switch",  
"Switch Architecture and Basic Concepts",  
"Basic Switch Configuration and Management",  
"VLAN: Introduction, Configuration, and Use",  
"VLAN Ports and Trunking",  
"Basic Switch Configuration",  
"Switch Management and Maintenance",  

"Day 2 – Routing and Network Management",  
"Introduction to Routing on ArubaOS-Switch",  
"Dynamic Routing: RIPv2, OSPF",  
"Static Routing and Basic Configuration",  
"Using Layer 3 Switches in Aruba Networks",  
"Virtual Routing and Forwarding (VRF)",  
"Multicast Implementation on ArubaOS-Switch",  
"Network Management and Troubleshooting",  

"Day 3 – Network Security and QoS",  
"Introduction to Network Security on Aruba",  
"802.1X and Port Security Management",  
"Access Control Lists (ACLs) and Traffic Filtering",  
"Using RADIUS/TACACS+ for Authentication",  
"Quality of Service (QoS) Implementation",  
"Traffic Prioritization",  
"Layer 2 and Layer 3 Security on ArubaOS-Switch",  

"Day 4 – Wireless Services and Remote Networking",  
"Aruba Wireless LAN and Integration with Switches",  
"Configuring Aruba Instant Access Points",  
"Configuring VAP (Virtual Access Points) and SSID",  
"Implementing Remote Access and VPN",  
"Aruba AirWave Configuration for Network Monitoring",  
"Managing and Maintaining Wireless Services",  
"Wireless Network Planning and Design",  

"Day 5 – Network Management and Monitoring",  
"Aruba Central: Cloud-Based Network Management",  
"Using SNMP, Syslog, and Traps",  
"Aruba Network Monitoring Tools",  
"Troubleshooting on ArubaOS-Switch",  
  ];
  
  const syllabus_acsp: string[] = [
    "Day 1 – introduction to aruba switching & basic configuration",  
    "overview of switches and architecture",  
    "key features and benefits",  
    "netedit overview",  
    "centralized configuration management",  
    "switch groups/templates",  
    "aos-cx mobile app: overview and setup",  
    "network analytics engine (nae)",  
    "configuration and core features",  
    "nae feature lab",  
    "basic switch configuration",  
    "initial switch configuration",  
    "vlan, trunking, and port settings",  
    
    "Day 2 – advanced switching techniques and vsx",  
    "advanced switching concepts: sflow, local/remote mirror",  
    "vsx overview",  
    "role-based design: control, data, and management planes",  
    "components (isl, keepalive, lag, etc.)",  
    "vsx and active gateway concepts",  
    "split brain scenario in vsx",  
    "upstream connectivity options with multiple vrfs",  
    "north-south traffic flow and unicast traffic in vsx",  
    "vsx configuration",  
    "firmware updates, vsx and active gateway",  
    "troubleshooting vsx",  
    
    "Day 3 – security and acls configuration",  
    "access control lists (acls)",  
    "types: mac acl, standard acl, extended acl",  
    "wildcard bits, logging, pacl, vacl, raci",  
    "classifier-based policies",  
    "802.1x authentication",  
    "role-based authentication, requirements, and configuration",  
    "dynamic port configuration: avp, qos, vlan",  
    "port-based vs. user-based authentication",  
    "radius service tracking and critical vlans",  
    "mac authentication",  
    "radius-based mac auth configuration",  
    
    "Day 4 – routing technologies & advanced qos",  
    "advanced ospf",  
    "multi-area setup and aggregation",  
    "ospf tuning: costs, bfd, gr, vrrp, virtual links",  
    "area-types: stub, totally stub, nssa",  
    "bgp overview",  
    "bgp as numbers and best path selection",  
    "route filtering, transit prevention",  
    "quality of service (qos)",  
    "voq (virtual output queue) setup",  
    "trust levels, queue configuration, and policies",  
    "rate limiters and interaction with user roles",  
    "lldp-med configuration",  
    "qos integration with lldp-med",  
    
    "Day 5 – multicast, dynamic segmentation, and guest solutions",  
    "igmp snooping and querier configuration",  
    "handling unknown multicasts",  
    "multicast routing with pim (pim-dm, pim-sm)",  
    "dynamic segmentation",  
    "leverage dynamic segmentation features",  
    "configure tunneled-node on aos-cx switches",  
    "high availability and fallback switching for tunneled-node",  
    "captive portal authentication",  
    "overview of guest solutions",  
    "built-in web authentication and clearpass redirect with cppm",  
    "additional routing technologies",  
    "vrf management and policy-based routing (pbr)",  
    "mdns and pim-sm",  
    
  ];
  
    
  export { syllabus_acsa, syllabus_acsp, };
  