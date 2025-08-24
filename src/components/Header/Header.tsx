import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import "./header.css";

export default function Header() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const topLine = useRef<HTMLSpanElement | null>(null);
  const midLine = useRef<HTMLSpanElement | null>(null);
  const botLine = useRef<HTMLSpanElement | null>(null);

  const [open, setOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    if (!headerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!panelRef.current || !cardRef.current) return;
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ paused: true, defaults: { ease: "power3.out" } })
        .set(panelRef.current, { display: "flex" })
        .fromTo(
          panelRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.25 },
          0
        )
        .from(cardRef.current, { y: -14, opacity: 0, duration: 0.3 }, 0.05);

      gsap.set([topLine.current, midLine.current, botLine.current], {
        transformOrigin: "50% 50%",
      });
    });
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!tl.current) return;
    if (open) {
      tl.current.play();
      document.body.classList.add("menu-open");
      gsap.to(topLine.current, { y: 6, rotate: 45, duration: 0.25 });
      gsap.to(midLine.current, { opacity: 0, duration: 0.2 });
      gsap.to(botLine.current, { y: -6, rotate: -45, duration: 0.25 });
    } else {
      tl.current.reverse();
      document.body.classList.remove("menu-open");
      gsap.to(topLine.current, { y: 0, rotate: 0, duration: 0.25 });
      gsap.to(midLine.current, { opacity: 1, duration: 0.2, delay: 0.05 });
      gsap.to(botLine.current, { y: 0, rotate: 0, duration: 0.25 });
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="site-header" ref={headerRef}>
        <div className="container header-inner">
          <div className="brand" aria-label="4EIGHTYSIX Home">
            <span className="dash" />
            <span className="name">4EIGHTYSIX</span>
            <span className="tag" aria-hidden>
              <span className="line">Innovative Software Solutions</span>
              <span className="line">Company based in Oradea, Romania</span>
            </span>
          </div>

          <nav className="nav" aria-label="Primary">
            <a href="#adaptive">Adaptive Solutions</a>
            <a href="#specialties">Our Specialities</a>
            <a href="#team">Our Team</a>
            <a href="#contact">Let’s Talk</a>
          </nav>

          <button
            className="burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-haspopup="true"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="burger-lines" aria-hidden>
              <span ref={topLine}></span>
              <span ref={midLine}></span>
              <span ref={botLine}></span>
            </span>
          </button>
        </div>
      </header>
      <div
        className="mobile-panel"
        ref={panelRef}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div
          id="mobile-menu"
          className="mobile-card"
          ref={cardRef}
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-intro muted">
            <div>Innovative Software Solutions</div>
            <div>Company based in Oradea, Romania</div>
          </div>

          <nav className="mobile-links">
            <a href="#adaptive" onClick={() => setOpen(false)}>
              Adaptive Solutions
            </a>
            <a href="#specialties" onClick={() => setOpen(false)}>
              Our Specialities
            </a>
            <a href="#team" onClick={() => setOpen(false)}>
              Our Team
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Let’s Talk
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
