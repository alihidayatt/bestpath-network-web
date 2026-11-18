import {
  Wika_ico, Asdp_ico, Telkomsel_ico, Pins_ico, Telkompcc_ico, Djp_ico,
  Bangli_ico, Kopassus_ico, Pjt_ico, Apsf_ico, Swa_ico, Bpkp_ico,
  Bnpb_ico, Imigrasi_ico, Kemenkeu_ico, Bkkbn_ico, Dc_noc_img,
  Dc_pupr_img, Dc_basic_img, Dc_ikn_img, Dc_jip_img, Dc_sipil2_img,
  Dc_sipil_img, Pln_ico, Telkom_ico, Pertamina_ico, Kemenpora_ico,
  Bssn_ico, Tik_polri_ico, Polri_ico, Kominfo_ico,
} from "../components/Bpn_imgs";

export default function Clients() {
  return (
    <div className="wrap">
      <header className="page-intro" data-enter>
        <p className="eyebrow">Our clients</p>
        <h1>Clients and data center work</h1>
        <p className="lead">Our existing client directory and photographs of data center work, grouped for reference.</p>
      </header>
      <section className="content-section" aria-labelledby="data-center-heading">
        <h2 className="section-heading" id="data-center-heading">Data center</h2>
        <div className="photo-grid">
          <Dc_sipil_img />
          <Dc_sipil2_img />
          <Dc_jip_img />
          <Dc_ikn_img />
          <Dc_basic_img />
          <Dc_pupr_img />
          <Dc_noc_img />
        </div>
      </section>
      <section className="content-section" aria-labelledby="government-heading">
        <h2 className="section-heading" id="government-heading">Government</h2>
        <div className="logo-grid">
          <Bssn_ico />
          <Tik_polri_ico />
          <Polri_ico />
          <Kominfo_ico />
          <Kemenpora_ico />
          <Bkkbn_ico />
          <Kemenkeu_ico />
          <Imigrasi_ico />
          <Bnpb_ico />
          <Bpkp_ico />
          <Swa_ico />
          <Apsf_ico />
          <Pjt_ico />
          <Kopassus_ico />
          <Bangli_ico />
          <Djp_ico />
        </div>
      </section>
      <section className="content-section" aria-labelledby="enterprise-heading">
        <h2 className="section-heading" id="enterprise-heading">State-owned enterprises</h2>
        <div className="logo-grid">
          <Telkompcc_ico />
          <Telkom_ico />
          <Pins_ico />
          <Pln_ico />
          <Telkomsel_ico />
          <Asdp_ico />
          <Wika_ico />
          <Pertamina_ico />
        </div>
      </section>
    </div>
  );
}
