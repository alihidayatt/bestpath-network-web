const syllabus_jncia_junos: string[] = [
  "Day 1 – Introduction Networking and Junos Fundamentals",
  "Core networking concepts: Subnetting, ARP, and routing fundamentals",
  "Introduction to Junos OS architecture and CLI basics",
  "Initial device setup and user interface options (CLI and J-Web)",
  "Basic device configuration and verification",
  "Day 2 – Routing Protocols and Layer 2 Switching",
  "Static routing and introduction to dynamic protocols (OSPF, BGP overview)",
  "Layer 2 concepts: VLANs, STP, and trunking",
  "Configuring and verifying VLANs and inter-VLAN routing",
  "Setting up routing and Layer 2 switching",
  "Day 3 – Security and Policies",
  "Firewall filters and security zones in Junos OS",
  "Configuring and managing NAT",
  "Overview of Juniper’s security concepts",
  "Hands-on Lab: Implementing security policies and NAT",
  "Day 4 – Network Management and Operations",
  "Monitoring and logging with Junos OS",
  "Using operational commands for troubleshooting",
  "Backup, restore, and upgrading Junos OS",
  "Network diagnostics and Junos OS upgrades",
  ];
  
  const syllabus_jncis_sp: string[] = [
    "Day 1 – OSPF (One Shortest Path First)",
"Describe the concepts, operation and functionality of OSPF",
"Various OSPF LSA types",
"Flooding of LSAs in an OSPF network",
"SPF algorithm",
"OSPF metrics, including external metric types",
"OSPF authentication options",
"OSPF area types and operations, including stub areas and NSSAs",
"Summarize and restrict routes",
"Purpose of virtual links",
"Key differences between OSPFv2 and OSPFv3",
"Given a scenario, demonstrate knowledge of how to configure and monitor single-area and multi-area OSPF",
"Implement OSPF routing policy",
"Day 2 – IS-IS (Intermediate System-to-Intermediate System)",
"Describe the concepts, operation and functionality of IS-IS",
"Various IS-IS link-state PDU (LSP) types",
"IS-IS adjacency rules",
"Interpret the LSDB",
"IS-IS metrics, including wide metrics",
"IS-IS authentication options",
"Default operation in multi-area IS-IS",
"IS-IS route summarization and route leaking methods",
"Given a scenario, demonstrate knowledge of how to configure and monitor single-area and multi-area IS-IS",
"Implement IS-IS routing policy",
"Given a scenario, demonstrate knowledge of how to configure and monitor single-area and multi-area OSPF",
"Implement OSPF routing policy",
"Day 3 – BGP (Border Gateway Protocol)",
"Describe the concepts, operation and functionality of BGP",
"BGP route selection process",
"How to alter the route selection process",
"Various BGP attributes and explain the operation of those attributes",
"Purpose and function of BGP communities",
"Utilize regular expressions for route selection",
"Describe, configure and monitor BGP route damping",
"Manipulate BGP attributes using routing policy",
"Multiprotocol BGP",
"Given a scenario, demonstrate knowledge of how to configure and monitor BGP",
"Implement BGP routing policy",
"Describe and configure BGP scaling mechanisms, including route reflection and confederations",
"Day 4 – MPLS (Multi Protocol Label Switching)",
"Describe the concepts, operation and functionality of MPLS",
"Common MPLS terms",
"How a router forwards MPLS packets",
"MPLS packet flow from an ingress node to an egress node",
"Examine the Label Information Base",
"Functionality of the two common label distribution protocols used by the Junos OS",
"Function and interrelationship of LSP priority and preemption",
"Compare the operation of fast reroute, link protection and node protection",
"LSP optimization options",
"Routing table integration options for traffic engineering",
"Use of routing policies to control path selection",
"Additional MPLS features, such as automatic bandwidth, TTL handling, and MPLS pings",
"Describe the concepts, operation and functionality of Constrained Shortest Path First (CSPF)",
"IGP extensions needed to build and maintain a traffic engineering database (TED)",
"How the CSPF algorithm selects the best path",
"Configure a router to perform MPLS forwarding",
"Given a scenario, demonstrate knowledge of how to configure and monitor MPLS, LDP and RSVP",
"Configure a router to perform MPLS forwarding",
"Configure RSVP-signaled and LDP-signaled LSPs",
"Implement MPLS routing policy",
"Configure the components of CSPF",
"Configure traffic protection mechanisms",
"Day 5 – Layer 3 VPNs & Layer 2 VPNs",
"Day 5A - L3VPNs",
"Describe the concepts, operation and functionality of L3 VPNs",
"Roles of P, PE, and CE routers",
"Format of VPN-IPv4 addresses",
"Function of a route distinguisher",
"Operation and flow of the control and data planes",
"Various L3 VPN CoS mechanisms",
"How to support communications between sites attached to a common PE router",
"Benefits and requirements of using a hub-and-spoke topology",
"Methods to scale L3 VPNs",
"Compare L3 VPN Internet access options",
"Given a scenario, demonstrate knowledge of how to configure, monitor and troubleshoot L3 VPNs",
"Given a scenario, demonstrate knowledge of the operation and configuration of multicast VPNs",
"Concepts, operation and functionality of next-generation MVPNs (NG-MVPN)",
"Flow of control and data traffic in a NG-MVPN",
"Configure and monitor NG-MVPNs",
"Describe Junos support for carrier of carrier and interprovider VPN models",
"Day 5B - L2VPNs",
"Describe the concepts, operation and functionality of BGP L2 VPNs",
"Roles of a CE, PE, and P router in an L2 VPN",
"Flow of control and data traffic for a BGP L2 VPN",
"Benefits and requirements of over-provisioning",
"Methods to scale BGP L2 VPNs",
"Various BGP L2 VPN CoS mechanisms",
"Describe the concepts, operation and functionality of LDP L2 circuits",
"Flow of control and data traffic for an LDP L2 circuit",
"Describe the concepts, operation and functionality of VPLS",
"Purpose of the PE, CE, and P devices",
"Signaling, learning and forwarding process of VPLS",
"Given a scenario, demonstrate knowledge of how to configure, monitor and troubleshoot L2 VPNs",
"Configure, monitor and troubleshoot BGP L2 VPNs",
"Configure, monitor and troubleshoot LDP L2 circuits",
"Configure, monitor and troubleshoot VPLS",
  ];
  
  const syllabus_ccie: string[] = [
    "Day 1 – Network Design Principles",
    "Day 2 – Advanced Routing and Switching",
    "Day 3 – Network Security Best Practices",
    "Day 4 – Service Provider Solutions",
    "Day 5 – Network Automation for Enterprises",
  ];
  
  export { syllabus_jncia_junos, syllabus_jncis_sp, syllabus_ccie };
  