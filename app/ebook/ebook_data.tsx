import React from "react";
import {
  Ebook_bgec_front_img,
  Ebook_bgec_img,
  Ebook_h_stacking_cisco_front_img,
  Ebook_h_stacking_cisco_img,
  Zoom_img,
  Zoom_front_img,
  Cucm_img,
  Cucm_front_img,
  Mpls_img,
  Mpls_front_img,
} from "../components/Bpn_imgs";

interface EbookData {
  id: number;
  img: React.JSX.Element;
  frontImg: React.JSX.Element;
  title: string;
  author: string;
  description: string;
  link: string;
}

const ebook_data: EbookData[] = [
  {
    id: 1,
    img: <Ebook_bgec_img />,
    frontImg: <Ebook_bgec_front_img />,
    title: "THE ULTRA INSTINCT NETWORK INFRASTRUCTURE TOPOLOGY",
    author: "M. Danu Wiyoto S.kom CCIE RS #48413, Shefa Heidi Ramadiva",
    description:
      "Didalam buku ini akan diperlihatkan bagaimana Infrastruktur jaringan didirikan, didalam buku ini kita mengambil contoh dari pengelihatan sebuah Telco/ISP, dikarenakan fitur-fitur dan juga infrastruktur yang mereka dirikan bisa dibilang sudah cukup lengkap dan berskala besar. Infrastruktur-infrastruktur tersebut lalu kami gabungkan menjadi satu yang berupa suatu Ultra Instinct Network Infrastructure Topology, dan juga pecahan-pecahan dari Ultra Instinct Network Infrastructure Topology, tersebut, serta dilengkapi dengan penjelasan singkat mengenai topology yang ditampilkan.",
    link: "https://public.bl.files.1drv.com/y4mTK4o2jHbOh04IHwz3WMfCPweQLB6xfMDYChFE3ZLo02uFtMAnNc2GYz3I7fJL7DjMop4RUBi0svtf3-gRoiRI0o01Xtp0j4DohnjgxtvrQzbUNh7w13MbuDjMXNBFAdNR6dMeLxl-tVTt0-0Z7G6JLEUmocnKyys2QY86vaKsj4_X8zskhF1Nhcp4oowkbszDyfbFPV6jLgzKniHwwYsSEe3bqhd7JbHofB3wHDMdrw",
  },
  {
    id: 2,
    img: <Ebook_h_stacking_cisco_img />,
    frontImg: <Ebook_h_stacking_cisco_front_img />,
    title: "HANDBOOK STACKING CISCO SWITCH 3750",
    author: "Danang Kurniawan",
    description:
      "Handbook Stacking ini disusun agar dapat membantu para pembaca dalam mempelajari konsep-konsep Switch Stacking serta mempermudah mempelajari materi Switch Stacking terutama bagi yang belum mengenal konsep stacking itu sendiri.",
    link: "https://gbzv1a.bl.files.1drv.com/y4muFCE6bGTkQlxJX2M8mZ5NHjPEXrJnPdsxccmoCcl_oSHh437zv59g17ZWGxvxJy6lLrNJlamwtCI6Xi_M6WZ7CnmSqBuu7jTpnycumav01MSkJgzLtSpV5-sgMdAb4x6ct17JdbqWHSxUVyEb4DZDROJo0kg2RDVXVey7CUjqsmYwOdMPd9laXiehbIj5nb2txl03stsiPqIolGDwUYlFw",
  },
  {
    id: 3,
    img: <Mpls_img />,
    frontImg: <Mpls_front_img />,
    title: "WORKBOOK MPLS",
    author: "M. Danu Wiyoto S.kom CCIE RS #48413",
    description:
      "Didalam buku Workbook MPLS ini akan dijelaskan secara singkat mengenai materi MPLS (Multi Protocol Label Switching), mengapa hanya penjelasan singkat? Karena tujuan utama dari buku ini ialah agar pembaca bisa memahami konsep dasar MPLS melalui praktik lab, yang dimana diharapkan bisa membantu pembaca untuk memiliki suatu bayangan akan bagaimana MPLS diterapkan meskipun tidak menjamin akan menghadapi case yang sama seperti dibuku ini dengan implementasi sebenarnya di dunia kerja. Buku ini mencakup materi mulai dari MPLS dasar sampai ke MPLS VPN dasar.",
    link: "https://hrwlvg.bl.files.1drv.com/y4mSmuo2AhtBLGwF6j9hoXRwWnXWhu5xr2caDn5KCsRASKHO1INCYn43sQzzGhqEUcPdeW1zuY1r-IHNhjYln9an_QFB3oKyQLNkOJkAPDC2vuuEQSk2aqJBe2BIYAb4k3r4Ym5IJHEwd70L_qa6vaTSeVDqLiL-bXuoj_vfvECUklCWaT2btyN3gUdqPoWRnAGGZ2phxwv7Jo96Wl0r9Sdzw",
  },
  {
    id: 4,
    img: <Zoom_img />,
    frontImg: <Zoom_front_img />,
    title: "HANDBOOK ZOOM CLOUD MEETING",
    author: "Jeki Hendrian",
    description:
      "Didalam handbook ini akan dijelaskan panduan dalam penggunaan software zoom cloud meeting serta memberikan petunjuk praktis agar pembaca mendapatkan gambaran dengan jelas mengenai software zoom cloud meeting. Dimana pada handbook ini akan dibahas mulai dari defenisi sampai tutorial instalasi serta praktik menggunakan software zoom cloud meeting.",
    link: "https://hrwlvg.bl.files.1drv.com/y4mU2NlkJdqiLPjnz7XrEUVG6YAyrh_lYXvPuJ8J0jJ1IaLE-trVvKODAZtg1cVlayEzETolhxQ3euu8CSUCUhP-7bibVfFyCE1aw3S8NC5IMQlkACaoZM8e-Y6CA-iaDWpzD0rXYvotTZ7muCEOnybmKVD9ajat7MQ3k1c1ykD75oqLOn1F0dlWqPN5TvGneZYlI6DObwtCwLUvdvDrdD6iA",
  },
  {
    id: 5,
    img: <Cucm_img />,
    frontImg: <Cucm_front_img />,
    title: "E-BOOK TUTORIAL REGISTRASI IP PHONE DENGAN CUCM",
    author: "Itang Asep S",
    description:
      "Tujuan dibuatnya E-book ( Tutorial Registrasi IP-Phone CP-6921 dengan Cisco Unified Communications Manager ) ini yaitu sebagai panduan untuk menginstalasi atau meregistrasi IP-Phone dengan mengunakan Cisco Unified Communications Manager server. Diharapkan setelah membaca serta memahami E-book ini kita dapat membangun serta memanaged VOIP ( Voice Over IP ) di jaringan skala LAN ( Local Area Network ) sehingga untuk berkomunikasi dapat menggunakan VOIP ini , katakanlah dalam sebuah perusahaan yang masih satu Gedung si perusahaan tersebut tidak perlu untuk membayar kepada pihak lain untuk menggunakan layanan VOIP ini.",
    link: "https://hrwlvg.bl.files.1drv.com/y4mgQ8EWOHxjiPGrf2d245fA3dpeqaDXzhVezlNYbUAY7gkQAFUNcE7Q5CGK2WnKuwnTLFDS3XUcDZgfiQA4wl1V9rz0VvkfIpRJq1DCTe8BbDbofPqUoOFukiMxw6TE_RG2yN56NGmK7DLB5uSqFb5bOpCxv7FcqiVZSlDihjC3RSKf7-8T-iFh7D7mONNaxzoec7Di03rscnARAs83MWMUQ",
  },
];

export { ebook_data };
