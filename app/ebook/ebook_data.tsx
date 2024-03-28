import React from "react";
import {
  Ebook_bgec_front_img,
  Ebook_bgec_img,
  Ebook_h_stacking_cisco_front_img,
  Ebook_h_stacking_cisco_img,
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
    author: "M. Danu Wiyoto, S.kom, CCIE RS #48413, Shefa Heidi Ramadiva",
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
];

export { ebook_data };
