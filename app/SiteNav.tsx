"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "关于" },
  { href: "#video-works", label: "VIDEO" },
  { href: "#image-works", label: "IMAGES" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#strengths", label: "STRENGTHS" },
  { href: "#contact", label: "CONTACT" },
];

export default function SiteNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-28% 0px -58%", threshold: [0, 0.15, 0.35] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="editorial-nav" aria-label="主导航">
      <a className="editorial-logo" href="#home" aria-label="返回首页">THEO ZHOU</a>
      <div className="editorial-nav-links">
        {links.map((link) => (
          <a className={active === link.href.slice(1) ? "is-active" : undefined} href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <a className="hero-menu" href="#contact" aria-label="联系 Theo"><span aria-hidden="true">•••</span></a>
    </nav>
  );
}
