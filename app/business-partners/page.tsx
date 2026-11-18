import { Topas_ico, Fresscom_ico, Epi_ico } from "../components/Bpn_imgs";

export default function BusinessPartners() {
  return (
    <div className="wrap">
      <header className="page-intro" data-enter>
        <p className="eyebrow">Business relationships</p>
        <h1>Business partners</h1>
        <p className="lead">Fresscom, Topas, and EPI are listed in our business partner directory.</p>
      </header>
      <div className="logo-grid" aria-label="Business partner logos">
        <Fresscom_ico />
        <Topas_ico />
        <Epi_ico />
      </div>
    </div>
  );
}
