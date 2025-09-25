import React from "react";
import {
  Ebook_bgec_front_img,
  Ebook_bgec_img,
  Ebook_6cara_front_img,
  Ebook_6cara_img,
  Ebook_10strategi_front_img,
  Ebook_10strategi_img,
  Ebook_7asyik_front_img,
  Ebook_7asyik_img,
  Ebook_lulustkj_front_img,
  Ebook_lulustkj_img,
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
  link1: string;
  link2: string;
  bayar: boolean;
  harga: string;
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
    link1: "https://bpn.li/ebook-desain",
    link2: "https://forms.gle/f74BJDeNpEvpZWqJ7",
    bayar: false,
    harga: "Gratis!",
  },
  {
    id: 2,
    img: <Ebook_h_stacking_cisco_img />,
    frontImg: <Ebook_h_stacking_cisco_front_img />,
    title: "HANDBOOK STACKING CISCO SWITCH 3750",
    author: "Danang Kurniawan",
    description:
      "Handbook Stacking ini disusun agar dapat membantu para pembaca dalam mempelajari konsep-konsep Switch Stacking serta mempermudah mempelajari materi Switch Stacking terutama bagi yang belum mengenal konsep stacking itu sendiri.",
    link1: "https://bpn.li/ebook-stacking",
    link2: "https://forms.gle/f74BJDeNpEvpZWqJ7",
    bayar: false,
    harga: "Gratis!",
  },
  {
    id: 3,
    img: <Ebook_6cara_img />,
    frontImg: <Ebook_6cara_front_img />,
    title: "6 CARA OUT OF THE BOX JADI JAGO NETWORK ENGINEER",
    author: "Foryanto J. Wiguna",
    description:
      "Mini Ebook ini menyajikan strategi unik dan “keluar jalur mainstream” untuk kamu yang ingin jadi Network Engineer jempolan. Cocok banget buat yang bosen belajar teori melulu dan pengin leveling up dengan cara yang lebih praktis, fun, dan langsung nyambung ke dunia kerja. Penulis mengajak kamu menyelam lebih dalam ke dunia jaringan dengan pendekatan yang beda, mulai dari personal branding, project based learning, sampai cara bangun relasi di dunia IT. Bukan cuma teori, tapi juga mindset dan tips real-world yang bisa langsung kamu terapkan!",
    link1: "https://drive.google.com/file/d/1ktWv5p4qZ8rm5_jMy8ZLMkHB1vRIP1jx/view",
    link2: "https://forms.gle/f74BJDeNpEvpZWqJ7",
    bayar: true,
    harga: "Rp. 15000",
  },
  {
    id: 4,
     img: <Ebook_lulustkj_img />,
    frontImg: <Ebook_lulustkj_front_img />,
    title: "LULUS TKJ, TERUS NGAPAIN? 7 LANGKAH NYATA BIAR SKILL KAMU DILIRIK INDUSTRI IT",
    author: "Foryanto J. Wiguna",
    description:
      "Buat kamu yang baru lulus dari jurusan TKJ (Teknik Komputer dan Jaringan) dan lagi galau mau ngapain, Mini EBook ini wajib kamu baca. Di sini, Penulis membedah tujuh langkah konkret yang bisa kamu ambil biar nggak nyasar setelah lulus. Mulai dari eksplorasi minat di bidang IT, bangun portfolio digital, sampai belajar tools dan sertifikasi yang lagi hits di industri. Bahasanya santai, isinya padat, dan pastinya relate banget sama realita anak TKJ zaman now. Biar skill kamu nggak cuma cakep di atas kertas, tapi juga dilirik recruiter beneran!",
    link1: "https://drive.google.com/file/d/17RRNj-e0fxzkE4n5fTNujDQJUUjrqZSR/view",
    link2: "https://forms.gle/f74BJDeNpEvpZWqJ7",
   bayar: true,
    harga: "Rp. 15000",
  },
  {
    id: 5,
    img: <Cucm_img />,
    frontImg: <Cucm_front_img />,
    title: "E-BOOK TUTORIAL REGISTRASI IP PHONE DENGAN CUCM",
    author: "Itang Asep S",
    description:
      "Tujuan dibuatnya E-book ( Tutorial Registrasi IP-Phone CP-6921 dengan Cisco Unified Communications Manager ) ini yaitu sebagai panduan untuk menginstalasi atau meregistrasi IP-Phone dengan mengunakan Cisco Unified Communications Manager server. Diharapkan setelah membaca serta memahami E-book ini kita dapat membangun serta memanaged VOIP ( Voice Over IP ) di jaringan skala LAN ( Local Area Network ) sehingga untuk berkomunikasi dapat menggunakan VOIP ini , katakanlah dalam sebuah perusahaan yang masih satu Gedung si perusahaan tersebut tidak perlu untuk membayar kepada pihak lain untuk menggunakan layanan VOIP ini.",
    link1: "https://bpn.li/ebook-cucm",
    link2: "https://forms.gle/f74BJDeNpEvpZWqJ7",
    bayar: false,
    harga: "Gratis!",
  },
   {
    id: 6,
    img: <Mpls_img />,
    frontImg: <Mpls_front_img />,
    title: "WORKBOOK MPLS",
    author: "M. Danu Wiyoto S.kom CCIE RS #48413",
    description:
      "Didalam buku Workbook MPLS ini akan dijelaskan secara singkat mengenai materi MPLS (Multi Protocol Label Switching), mengapa hanya penjelasan singkat? Karena tujuan utama dari buku ini ialah agar pembaca bisa memahami konsep dasar MPLS melalui praktik lab, yang dimana diharapkan bisa membantu pembaca untuk memiliki suatu bayangan akan bagaimana MPLS diterapkan meskipun tidak menjamin akan menghadapi case yang sama seperti dibuku ini dengan implementasi sebenarnya di dunia kerja. Buku ini mencakup materi mulai dari MPLS dasar sampai ke MPLS VPN dasar.",
    link1: "https://bpn.li/ebook-mpls",
    link2: "https://forms.gle/f74BJDeNpEvpZWqJ7",
    bayar: false,
    harga: "Gratis!",
  },
  {
    id: 7,
    img: <Ebook_10strategi_img />,
    frontImg: <Ebook_10strategi_front_img />,
    title: "10 Strategi Jitu Jadi Network Engineer Expert Incaran Perusahaan Besar",
    author: "M. Danu Wiyoto & Foryanto J. Wiguna",
    description:
      "Sekarang saatnya kamu naik level di dunia IT! Dengan strategi yang tepat kamu bisa makin expert dan benar-benar stand out di dunia IT. Mini eBook ini akan mengajak kamu menyelami dunia jaringan dari akar-akarnya, mengenal tools wajib untuk troubleshooting agar pekerjaan makin sat set, hingga membangun personal branding profesional yang membuatmu semakin dikenal. Tak hanya itu, rahasia sertifikasi dan lab yang dirancang khusus juga akan membantu kamu naik level dan terlihat semakin legit. Lengkap dengan pembahasan soft skill yang mendukung kemampuan leadership, serta tips dan studi kasus nyata dari dua engineer berpengalaman lebih dari 15 tahun, eBook ini siap jadi panduan praktis buat kamu yang serius berkembang di dunia IT.",
    link1: "https://drive.google.com/file/d/1nXtErh2kHadVl8mYPJFdHnpxAu5-twZI/view?usp=sharing",
    link2: "https://forms.gle/f74BJDeNpEvpZWqJ7",
    bayar: true,
    harga: "Rp. 40000",
  },
   {
    id: 8,
    img: <Ebook_7asyik_img />,
    frontImg: <Ebook_7asyik_front_img />,
    title: "7 Cara Asyik Belajar IT Buat Pemula",
    author: "Foryanto J. Wiguna",
    description:
      "Belajar IT nggak harus bikin pusing! Mini Ebook ini ngasih 7 cara seru dan friendly buat kamu yang baru mulai nyemplung ke dunia teknologi. Cocok banget buat pemula yang bingung mulai dari mana. Dari belajar lewat YouTube, main proyek kecil-kecilan, sampai ikut komunitas online, semuanya dibahas dengan gaya santai dan praktis. Nggak cuma bikin paham, tapi juga bikin nagih buat terus belajar. Mini Ebook ini jadi gerbang awal yang pas buat kamu yang pengin jadi jagoan di dunia IT tanpa harus ribet dan overthinking.",
    link1: "https://drive.google.com/file/d/1PPn3n4tAD0t2YPP498i455TLp1MsQdAH/view",
    link2: "https://forms.gle/f74BJDeNpEvpZWqJ7",
    bayar: false,
    harga: "Gratis!",
  },
   {
    id: 9,
    img: <Zoom_img />,
    frontImg: <Zoom_front_img />,
    title: "HANDBOOK ZOOM CLOUD MEETING",
    author: "Jeki Hendrian",
    description:
      "Didalam handbook ini akan dijelaskan panduan dalam penggunaan software zoom cloud meeting serta memberikan petunjuk praktis agar pembaca mendapatkan gambaran dengan jelas mengenai software zoom cloud meeting. Dimana pada handbook ini akan dibahas mulai dari defenisi sampai tutorial instalasi serta praktik menggunakan software zoom cloud meeting.",
    link1: "https://bpn.li/ebook-zoom",
    link2: "https://forms.gle/f74BJDeNpEvpZWqJ7",
    bayar: false,
    harga: "Gratis!",
  },
];

export { ebook_data };