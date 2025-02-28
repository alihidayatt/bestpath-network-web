const syllabus_ricxi: string[] = [
   "Day 1 – Foundation Campus Concepts and Campus Products & Solutions",
"Define the Campus Fabric topology",
"Explain the components of the Switch Port Extender (802.1BR) environment",
"Configure the control bridge and port extenders",
"Purpose and benefits of virtual Ethernet interfaces",
"Purpose and benefits of loopback interfaces",
"Purpose and benefits of ICX hardware features (PoE, port numbering, replaceable components)",
"Identify ICX products and their design purpose",
"Concept of stacking and long-distance stacking benefits",
"Features and benefits of multi-gig",
"Supported optics and DAC for ICX platforms",
"Define supported Spanning Tree Protocols and their benefits",
"Multi-chassis Trunking (MCT): purpose and benefits",
"Discovery protocols overviews",

"Day 2 – Device Management, Firmware, and Campus Solution Implementation",
"Purpose and benefits of the management port",
"Structure and hierarchy of the ICX CLI",
"Password recovery process",
"Logging and monitoring concepts (syslog, SNMP, terminal monitoring)",
"Characteristics of ICX firmware types (switch vs router)",
"Firmware upgrade process (boot monitor, PoE firmware, UFI, TFTP)",
"USB usage for upgrades",
"Identify and install the appropriate firmware version",
"Describe the software licensing options and installation process",
"Configure initial device connection (console, Telnet, SSH, HTTP/HTTPS)",
"Management port configuration",
"Configure user accounts and authentication (AAA, RADIUS, TACACS+)",
"Setup device monitoring (external syslog servers)",
"Configure VLANs, VEs, and various STP types",
"Stacking (interactive setup and zero-touch stacking)",

"Day 3 – Advanced Implementation, Validation, and Troubleshooting",
"Apply Layer 3 addressing to physical and virtual ports",
"Configure port speed/duplex",
"Assign ports to VLANs (tagged/untagged)",
"Configure dynamic and static LAGs",
"Set PoE port parameters",
"Verify interface configuration and port status",
"Reset the switch to factory default settings",
"Configure ICX SmartZone connectivity",
"Collect technical support information (show tech)",
"Use ICMP tools (ping, traceroute)",
"Analyze show command output to troubleshoot basic issues",
"Validate and verify features like STP, LAGs, and VLANs",
"Backup and restore configurations",
"Replace and add stack/Campus Fabric members",
  ];
  
  const syllabus_rasza: string[] = [
   "Day 1 – RUCKUS SmartZone Overview & Basic Configuration",  
"Overview of RUCKUS SmartZone hardware and software",  
"Explain the architecture of the SmartZone controller",  
"Install and upgrade the SmartZone controller",  
"Configure Domains and Zones",  
"Create and assign Administrator accounts and roles",  

"Day 2 – Access Point Configuration & WLAN Setup",  
"Successfully register RUCKUS Access Points to the controller",  
"Perform advanced Access Point configuration",  
"Create Basic WLANs",  
"Edit WLAN advanced settings",  
"Manage clustering and fault tolerance",  

"Day 3 – Troubleshooting, Management & Administration",  
"Monitor and troubleshoot wireless operations",  
"Understand Event management and event tools",  
"Create WLAN Groups, schedules, and VLAN Pools",  
"Manage firewall policies and profiles",  
"Authenticate WLAN users with AAA",  
"Deploy authentication portals",  
"Authenticate guests using Guest Passes",  
"Configure and manage RUCKUS ICX switches using SmartZone",  
  ];
  
const syllabus_rcni: string[] = [
   "Day 1 – Foundational Networking Concepts & RUCKUS Products",  
"VLAN Design or Configuration",  
"STP or Loop Prevention Protocols",  
"PoE Requirements",  
"Basic LAN Concepts",  
"Layer 3 Routing Configurations",  
"Basic QoS Concepts",  
"ICX Product Line",  

"Day 2 – ICX Solution Implementation",  
"ICX Software Management",  
"Stacking Capabilities of the ICX",  
"PoE Configuration",  
"Using Layer 2/3 Protocols and ICX Services",  
"Configuring/Verifying IPv4 or IPv6 Addressing on a Switch Interface",  
"Methods to Manage an ICX Switch",  
"Configuring Multicast and Security Features",  

"Day 3 – ICX Solution Troubleshooting",  
"Basic Networking Troubleshooting",  
"Performing ICX Switch Recovery",    
  ];

const syllabus_rcwa: string[] = [
   "Day 1 – Introduction to RF Concepts, Wi-Fi Standards, and RUCKUS Technologies",  
"RF concepts and relations to 802.11 standard",  
"802.11 channelization and frequency bands",  
"Antenna patterns and characteristics",  
"Fresnel Zone, Mesh, and P2P bridge",  
"OFDM and OFDMA",  
"Wi-Fi authentication methods",  
"Certificate signing, management, and PKI",  
"Hotspot 2.0, 802.11u, and WebAuth",  
"Client roaming concepts",  
"Overview of RUCKUS proprietary technologies",  

"Day 2 – RUCKUS Products and Wi-Fi Solution Design",  
"RUCKUS controllers and access points",  
"SmartZone options and data planes",  
"Licensing, registration, and support tools",  
"Clustering, geo-redundancy, and failover",  
"Wireless planning and site survey basics",  
"Gathering design requirements and system needs",  
"Network segmentation and traffic planning",  
"Load balancing and security strategies",  

"Day 3 – System Configuration and Advanced Wi-Fi Features",  
"Setting up SmartZone and access points",  
"Licensing implementation and AP provisioning",  
"Discovery methods and migration processes",  
"Basics of VLAN tagging and zone planning",  
"Advanced WLAN configurations",  
"Traffic management and VLAN pooling",  
"SmartMesh and Zero Touch deployment",  
"Security planning, RBAC, and guest access configuration",  

"Day 4 – Optimization, Troubleshooting, and Management",  
"Wi-Fi performance tuning and load balancing",  
"Channel selection and power optimization",  
"Troubleshooting tools and connectivity analysis",  
"Logs, packet captures, and troubleshooting controllers",  
"Solution management with SmartZone",  
"Backup, restoration, and reporting",  
"Rogue AP detection and resolution",  
  ];

  export { syllabus_ricxi, syllabus_rasza, syllabus_rcni, syllabus_rcwa, };
  