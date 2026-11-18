import { DanuCircleImg, AldiCircleImg, DamarCircleImg, AnggaCircleImg } from "../components/Bpn_imgs";

export default function Teams() {
  return (
    <div className="wrap">
      <header className="page-intro" data-enter>
        <p className="eyebrow">Our team</p>
        <h1>Network engineers and trainers</h1>
        <p className="lead">Meet the four people listed on our team, with their certifications and areas of work.</p>
      </header>
      <div className="team-grid">
        <article className="team-member" id="danu-wiyoto">
          <DanuCircleImg />
          <h2>Danu Wiyoto, S.Kom</h2>
          <p>CCNA, CCNP EI, CCDP, CCNP SP, CCIE EI #48413, H3CNE, H3CSE, ACSA, ACSP, MTCNA</p>
          <ul>
            <li>Network Consultant</li>
            <li>Trainer</li>
            <li>Network Engineer</li>
            <li>Network Planning & Design</li>
          </ul>
        </article>
        <article className="team-member" id="aldi-arya-putra-pebriana">
          <AldiCircleImg />
          <h2>Aldi Arya Putra Pebriana</h2>
          <p>CCNA, CCNP - EI, MTCNA, MTCRE, RCNA RS, RSE - Reyee</p>
          <ul>
            <li>Network Engineer</li>
            <li>Trainer</li>
            <li>Project Manager</li>
          </ul>
        </article>
        <article className="team-member" id="damar-galih-kalicki">
          <DamarCircleImg />
          <h2>Damar Galih Kalicki</h2>
          <p>CCNA, CCENT, CCNP - EI, MTCNA, MTCRE, NSE 1, NSE 2</p>
          <ul>
            <li>Trainer</li>
            <li>Network Engineer</li>
          </ul>
        </article>
        <article className="team-member" id="angga-daffa-prasetya">
          <AnggaCircleImg />
          <h2>Angga Daffa Prasetya</h2>
          <p>CCNA, CCOA, CCNP - EI, NSE7-SDWAN, FCA, FCF</p>
          <ul>
            <li>Trainer</li>
            <li>IT Security Engineer</li>
          </ul>
        </article>
      </div>
    </div>
  );
}
