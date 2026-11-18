import { Cisco_ico, Mikrotik_ico, Ruijie_ico, Fortinet_ico, Juniper_ico, H3c_ico, Huawei_ico } from "../components/Bpn_imgs";

export default function CooperatingVendors() {
  return (
    <div className="wrap">
      <header className="page-intro" data-enter>
        <p className="eyebrow">Vendor directory</p>
        <h1>Cooperating vendors</h1>
        <p className="lead">Cisco, MikroTik, Ruijie, Fortinet, Juniper, H3C, and Huawei are listed in our cooperating vendor directory.</p>
      </header>
      <div className="logo-grid" aria-label="Cooperating vendor logos">
        <Cisco_ico />
        <Mikrotik_ico />
        <Ruijie_ico />
        <Fortinet_ico />
        <Juniper_ico />
        <H3c_ico />
        <Huawei_ico />
      </div>
    </div>
  );
}
