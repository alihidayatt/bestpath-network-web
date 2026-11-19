import Image from "next/image";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { MotionReady } from "./components/SiteMotion";
import engineer from "./components/icon-component/img/implement_1.jpg";
import maintenance from "./components/icon-component/img/implement_3.jpg";
import training from "./components/icon-component/img/training_bssn.jpg";
import workshop from "./components/icon-component/img/training_hypernet.jpg";
import {
  DanuCircleImg,
  AldiCircleImg,
  DamarCircleImg,
  AnggaCircleImg,
  Cisco_ico,
  Mikrotik_ico,
  Fortinet_ico,
  Juniper_ico,
} from "./components/Bpn_imgs";

export default function Home() {
  return (
    <>
      <section
        className="hero home-hero"
        data-enter
        aria-labelledby="home-title"
      >
        <div className="wrap">
          <div className="hero-text">
            <div className="hero-copy">
              <p className="eyebrow">Bestpath Network / Indonesia</p>
              <h1 id="home-title">
                Network services.
                <br />
                <span>Engineer training.</span>
              </h1>
              <p className="hero__lead">
                We plan, build, and maintain your network—and train the
                engineers who run it.
              </p>
              <div className="btn-row">
                <a
                  className="btn btn--primary btn--xl btn--email"
                  href="mailto:sales@bestpath-network.com"
                >
                  <EnvelopeIcon aria-hidden="true" />
                  Discuss your project
                </a>
                <Link className="btn btn--secondary" href="/training-class">
                  Find training classes
                </Link>
              </div>
              <p className="hero-fact">
                <strong>9 vendor families.</strong> Infrastructure, security and
                hands-on training.
              </p>
            </div>
            <div
              className="network-fabric"
              data-m-loop
            >
              <svg
                viewBox="0 0 560 560"
                fill="none"
                role="img"
                aria-label="Abstract connected network: interwoven paths link infrastructure and engineer learning, with two connected hubs and a constellation of network nodes."
              >
                <defs>
                  <radialGradient id="fabric-glow">
                    <stop stopColor="#52d9d0" stopOpacity=".18" />
                    <stop offset="1" stopColor="#52d9d0" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="fabric-route" x1="90" y1="140" x2="470" y2="440" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7ce7e0" stopOpacity=".15" />
                    <stop offset=".5" stopColor="#a8fff0" />
                    <stop offset="1" stopColor="#70b8ed" stopOpacity=".35" />
                  </linearGradient>
                </defs>
                <circle cx="280" cy="280" r="270" fill="url(#fabric-glow)" />
                <g className="network-fabric__orbits">
                  <circle cx="280" cy="280" r="236" />
                  <circle cx="280" cy="280" r="178" />
                  <circle cx="280" cy="280" r="118" />
                  <path d="M44 280H516M280 44V516" strokeDasharray="2 10" />
                </g>
                <g className="network-fabric__mesh">
                  <path d="M96 174L200 112L338 90L458 190L484 344L392 460L226 490L96 384L64 280Z" />
                  <path d="M96 174L206 232L200 112L354 338L458 190L206 232L96 384L354 338L392 460M64 280L206 232L226 490M338 90L206 232L484 344L354 338L226 490M200 112L458 190M96 384L392 460" />
                </g>
                <g className="network-fabric__routes">
                  <path d="M96 174H154Q174 174 174 194V200Q174 232 206 232H292Q324 232 324 264V306Q324 338 354 338H426Q458 338 458 370V398" />
                  <path d="M200 112V156Q200 176 220 176H334Q354 176 354 196V338Q354 394 298 394H258Q226 394 226 426V490" />
                  <path d="M64 280H158Q206 280 206 232M354 338V282Q354 260 376 260H450Q484 260 484 294V344" />
                </g>
                <g className="network-fabric__nodes">
                  {[[96, 174], [200, 112], [338, 90], [458, 190], [484, 344], [392, 460], [226, 490], [96, 384], [64, 280]].map(([cx, cy]) => (
                    <g key={`${cx}-${cy}`}>
                      <circle cx={cx} cy={cy} r="10" />
                      <circle cx={cx} cy={cy} r="3" />
                    </g>
                  ))}
                </g>
                <g className="network-fabric__hub">
                  <circle cx="206" cy="232" r="46" />
                  <circle cx="206" cy="232" r="32" />
                  <path d="M190 232H222M206 216V248M194 220L218 244M194 244L218 220" />
                  <circle cx="206" cy="232" r="7" />
                </g>
                <g className="network-fabric__hub network-fabric__hub--learning">
                  <circle cx="354" cy="338" r="46" />
                  <circle cx="354" cy="338" r="32" />
                  <path d="M337 331L354 322L371 331L354 340ZM343 337V348Q354 356 365 348V337M371 331V345" />
                </g>
                <g className="network-fabric__packets">
                  <circle cx="270" cy="232" r="4" />
                  <circle cx="354" cy="280" r="4" />
                  <circle cx="258" cy="394" r="4" />
                </g>
                <g className="network-fabric__labels">
                  <text x="206" y="305" textAnchor="middle">NETWORK SERVICES</text>
                  <text x="354" y="411" textAnchor="middle">ENGINEER TRAINING</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section home-section ground-surface"
        id="services"
        aria-labelledby="services-heading"
      >
        <div className="wrap">
          <h2 id="services-heading">
            Build your network.
            <br />
            Train your engineers.
          </h2>
          <div className="offer-grid">
            <article className="offer card card--open">
              <h3>Network services</h3>
              <p>
                Consulting, planning, implementation and maintenance for
                government institutions and private companies.
              </p>
              <a
                className="text-link"
                href="mailto:sales@bestpath-network.com?subject=Network%20services%20inquiry"
              >
                Discuss a network project <span aria-hidden="true">↗</span>
              </a>
              <div className="offer-photo m-zoom">
                <Image
                  src={engineer}
                  alt="Engineer configuring equipment alongside a network rack"
                  sizes="(min-width: 768px) 44vw, 100vw"
                />
              </div>
            </article>
            <article className="offer card card--open">
              <h3>Technical training</h3>
              <p>
                Explore vendor-specific classes. Compare levels, duration and
                investment, then read the full syllabus.
              </p>
              <Link className="text-link" href="/training-class">
                Browse training classes <span aria-hidden="true">↗</span>
              </Link>
              <div className="offer-photo m-zoom">
                <Image
                  src={training}
                  alt="Participants working at laptops in a Bestpath training classroom"
                  sizes="(min-width: 768px) 44vw, 100vw"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className="section home-section"
        id="work"
        aria-labelledby="work-heading"
      >
        <div className="wrap">
          <div className="section-head section-head--row">
            <h2 id="work-heading">Network work, in practice.</h2>
            <Link className="text-link" href="/clients">
              Explore clients and data center work{" "}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="work-grid">
            <div className="work-copy">
              <p className="lead">
                From the equipment rack to the training room.
              </p>
              <p>
                Our project archive covers network implementation and data
                center work. Our training gallery records workshops and
                technical sessions.
              </p>
              <Link className="text-link" href="/training">
                Explore training events <span aria-hidden="true">↗</span>
              </Link>
              <Image
                src={workshop}
                alt="Small-group network training with laptops and lab equipment"
                sizes="(min-width: 1024px) 35vw, 100vw"
              />
            </div>
            <figure
              className="develop work-photo"
              data-moment="picture-develops"
              data-moment-opts='{"look":"film"}'
            >
              <Image
                src={maintenance}
                alt="Network engineer testing a connection at a server rack"
                sizes="(min-width: 1024px) 52vw, 100vw"
              />
            </figure>
          </div>
        </div>
      </section>

      <section
        className="section home-section ground-surface"
        id="aboutus"
        aria-labelledby="about-heading"
      >
        <div className="wrap">
          <h2 id="about-heading">
            A team for the network
            <br />
            and the people behind it.
          </h2>
          <div className="company-intro" id="company">
            <p className="lead">
              Bestpath Network works across planning, implementation and
              maintenance, alongside technical training.
            </p>
            <div>
              <p>
                Our team includes network consultants, engineers, trainers and
                an IT security engineer.
              </p>
              <Link className="text-link" href="/teams">
                Meet the team and review credentials{" "}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="home-team" aria-label="Bestpath team">
            <Link
              className="m-zoom"
              href="/teams#danu-wiyoto"
              aria-label="Meet Danu Wiyoto"
            >
              <span>Danu Wiyoto</span>
              <DanuCircleImg />
            </Link>
            <Link
              className="m-zoom"
              href="/teams#aldi-arya-putra-pebriana"
              aria-label="Meet Aldi Arya Putra Pebriana"
            >
              <span>Aldi Arya Putra Pebriana</span>
              <AldiCircleImg />
            </Link>
            <Link
              className="m-zoom"
              href="/teams#damar-galih-kalicki"
              aria-label="Meet Damar Galih Kalicki"
            >
              <span>Damar Galih Kalicki</span>
              <DamarCircleImg />
            </Link>
            <Link
              className="m-zoom"
              href="/teams#angga-daffa-prasetya"
              aria-label="Meet Angga Daffa Prasetya"
            >
              <span>Angga Daffa Prasetya</span>
              <AnggaCircleImg />
            </Link>
          </div>
          <div className="partner-directory" id="partners">
            <div>
              <h3>Partners and vendors</h3>
              <p>Explore our published relationship directories.</p>
              <div className="directory-links">
                <Link className="text-link" href="/business-partners">
                  Business partners
                </Link>
                <Link className="text-link" href="/cooperating-vendors">
                  Cooperating vendors
                </Link>
              </div>
            </div>
            <div className="partner-marks">
              <Cisco_ico />
              <Mikrotik_ico />
              <Fortinet_ico />
              <Juniper_ico />
            </div>
          </div>
        </div>
      </section>
      <MotionReady />
    </>
  );
}
