import React from "react";
import {
  Training_bssn_img,
  Training_cyberops_ntt_img,
  Training_hypernet_img,
  Training_pertamina_img,
  Training_singapore_mpls_img,
  Training_mega_img,
  Training_trainocate_img,
  Training_ptcc_img,
  Training_bi_img,
  Training_jasmikom_img,
  Training_politala_img,
  Training_nse_img,
  Training_csi_img,
  Training_kalos_img,
  Workshop_img,
  Training_deekai_img,
  Training_ca_img,
  Training_cgp_img,
  Training_pins_img,
  Training_nse4_img,
} from "../components/Bpn_imgs";

interface TrainingData {
  id: number;
  img: React.JSX.Element;
  title: string;
}

const TData: TrainingData[] = [
  {
    id: 1,
    img: <Training_bssn_img />,
    title: "Training BSSN",
  },
  {
    id: 2,
    img: <Training_cyberops_ntt_img />,
    title: "Training Cyberops NTT",
  },
  {
    id: 3,
    img: <Training_hypernet_img />,
    title: "Training Hypernet",
  },
  {
    id: 4,
    img: <Training_pertamina_img />,
    title: "Training Pertamina",
  },
  {
    id: 5,
    img: <Training_singapore_mpls_img />,
    title: "Training Singapore MPLS",
  },
  {
    id: 6,
    img: <Training_mega_img />,
    title: "Training Bank Mega",
  },
  {
    id: 7,
    img: <Training_trainocate_img />,
    title: "Training Trainocate",
  },
  {
    id: 8,
    img: <Training_ptcc_img />,
    title: "Training Online PTCC",
  },
  {
    id: 9,
    img: <Training_bi_img />,
    title: "Training Online Bank Indonesia",
  },
  {
    id: 10,
    img: <Training_jasmikom_img />,
    title: "Training PT.Jasmikom",
  },
  {
    id: 11,
    img: <Training_politala_img />,
    title: "Training Politala",
  },
  {
    id: 12,
    img: <Training_nse_img />,
    title: "Training NSE 7 SDWAN",
  },
  {
    id: 13,
    img: <Training_csi_img />,
    title: "Training Cyber Securite Incident",
  },
  {
    id: 14,
    img: <Training_kalos_img />,
    title: "Training Kalos",
  },
  {
    id: 15,
    img: <Workshop_img />,
    title: "Workshop Vulnerability Assessment Indonesia Stock Exchange",
  },
  {
    id: 16,
    img: <Training_deekai_img />,
    title: "Training Deekai",
  },
  {
    id: 17,
    img: <Training_ca_img />,
    title: "Training Cyberops Associate",
  },
  {
    id: 18,
    img: <Training_cgp_img />,
    title: "Training CGP Security",
  },
  {
    id: 19,
    img: <Training_pins_img />,
    title: "Training Online PINS",
  },
  {
    id: 20,
    img: <Training_nse4_img />,
    title: "Training NSE 4 Core Global Edu",
  },
];

export default function Training() {
  return (
    <div className="wrap">
      <header className="page-intro" data-enter>
        <p className="eyebrow">Training in practice</p>
        <h1>Training and workshops</h1>
        <p className="lead">A record of our training sessions and workshops, with 20 events from the existing gallery.</p>
        <a className="btn btn--primary" href="/training-class">Find training classes</a>
      </header>
      <div className="photo-grid">
        {TData.map((event) => (
          <article key={event.id} aria-labelledby={`training-${event.id}`}>
            <h2 id={`training-${event.id}`}>{event.title}</h2>
            {event.img}
          </article>
        ))}
      </div>
    </div>
  );
}
