"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import project from "../icon-component/img/implement_4.jpg";

export default function Footer() {
  const home = usePathname() === "/";
  return (
    <>
      {!home && <section className="inquiry-section" aria-labelledby="inquiry-heading"><div className="wrap inquiry-grid"><div><h2 id="inquiry-heading">Discuss your next network project.</h2><p className="lead">Tell us about your infrastructure or training requirements. Our sales team is your point of contact.</p><a className="text-link" href="mailto:sales@bestpath-network.com">Email the sales team <span aria-hidden="true">↗</span></a></div><figure className="develop inquiry-photo" data-moment="picture-develops" data-moment-opts='{"look":"film"}'><Image src={project} alt="Bestpath engineer inspecting network equipment" sizes="(min-width: 1024px) 40vw, 100vw" /></figure></div></section>}
      <footer className="footer footer--dark closing site-footer" id="contact-us" aria-labelledby="contact-heading">
        <div className="wrap">
          <div className="closing__cta close--type"><h2 id="contact-heading">Talk networks.<br />Plan your next step.</h2><a className="btn btn--primary btn--xl" href="mailto:sales@bestpath-network.com">Discuss your requirements</a></div>
          <div className="closing__links">
            <div className="footer-grid"><div className="footer-identity"><Link href="/" aria-label="Bestpath Network home"><Image src="/logo-forweb.svg" width={180} height={72} alt="Bestpath Network" /></Link><p>Network services and technical training.</p><address>Jalan Lombok 2 No. 154 Perumnas 1,<br />Kota Tanggerang, 15138</address><a href="mailto:sales@bestpath-network.com">sales@bestpath-network.com</a><a href="tel:+6287891448413">+62 878 914 48413</a></div>
              <nav className="footer-col" aria-label="Explore"><h3>Explore</h3><Link href="/training-class">Training classes</Link><Link href="/training">Training events</Link><Link href="/ebook">Ebooks</Link><Link href="/#services">Network services</Link><Link href="/clients">Clients and work</Link></nav>
              <nav className="footer-col" aria-label="Company"><h3>Company</h3><Link href="/#aboutus">About Bestpath</Link><Link href="/teams">Our team</Link><Link href="/business-partners">Business partners</Link><Link href="/cooperating-vendors">Cooperating vendors</Link></nav>
            </div>
            <div className="footer__legal"><p>© {new Date().getFullYear()} Bestpath Network. All rights reserved.</p><p>Product names and logos are trademarks of their owners.</p></div>
          </div>
        </div>
      </footer>
    </>
  );
}
