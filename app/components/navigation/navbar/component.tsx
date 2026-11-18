"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel, DialogTitle, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import training from "../../icon-component/img/training_hypernet.jpg";

const groups = [
  { title: "Training", links: [["Training classes", "/training-class"], ["Training events", "/training"]] },
  { title: "Services", links: [["Network services", "/#services"], ["Selected work", "/#work"], ["Clients", "/clients"]] },
  { title: "Resources", links: [["Ebooks", "/ebook"]] },
  { title: "Company", links: [["About Bestpath", "/#aboutus"], ["Our team", "/teams"], ["Business partners", "/business-partners"], ["Cooperating vendors", "/cooperating-vendors"]] },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (media.matches) setOpen(false); };
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);
  return (
    <header className="nav nav-mega site-nav">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="wrap nav__bar">
        <Logo />
        <nav className="desktop-navigation" aria-label="Main navigation">
          {groups.map(group => (
            <Menu as="div" className="site-menu" key={group.title}>
              <MenuButton className="site-nav-link">{group.title}<ChevronDownIcon aria-hidden="true" /></MenuButton>
              <MenuItems transition className="site-mega-panel">
                <div className="wrap mega-grid">
                  <div className="mega-links">
                    <p className="eyebrow">{group.title}</p>
                    {group.links.map(([label, href]) => <MenuItem key={href}><Link href={href} aria-current={pathname === href ? "page" : undefined}>{label}<span aria-hidden="true">↗</span></Link></MenuItem>)}
                  </div>
                  <div className="mega-note"><p>Network services.<br />Technical training.</p><p>Planning, implementation and maintenance, with training for the people operating your network.</p></div>
                  <Image src={training} alt="Engineers attending a Bestpath training session" sizes="300px" />
                </div>
              </MenuItems>
            </Menu>
          ))}
        </nav>
        <div className="site-nav-actions">
          <a className="btn btn--secondary btn--email nav-inquiry" href="mailto:sales@bestpath-network.com"><EnvelopeIcon aria-hidden="true" />Email sales</a>
          <button className="mobile-toggle" type="button" aria-label="Open navigation menu" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}><Bars3Icon aria-hidden="true" /></button>
        </div>
      </div>
      <Dialog open={open} onClose={setOpen} className="mobile-dialog">
        <DialogPanel transition className="mobile-sheet" id="mobile-navigation">
          <div className="mobile-sheet-top"><Logo /><button className="mobile-toggle" aria-label="Close navigation menu" onClick={() => setOpen(false)}><XMarkIcon aria-hidden="true" /></button></div>
          <DialogTitle className="sr-only">Site navigation</DialogTitle>
          <nav aria-label="Mobile navigation">
            {groups.map(group => <div className="mobile-group" key={group.title}><p>{group.title}</p>{group.links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={pathname === href ? "page" : undefined}>{label}<span aria-hidden="true">↗</span></Link>)}</div>)}
            <a className="btn btn--secondary btn--email" href="mailto:sales@bestpath-network.com" onClick={() => setOpen(false)}><EnvelopeIcon aria-hidden="true" />Email sales</a>
          </nav>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
