import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./hero.css";

export default function Hero() {
  const root = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });
      gsap.from(".hero-title span", {
        yPercent: 120,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.05,
        delay: 0.1,
      });
      gsap.from(".hero-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.2,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-wrap" ref={root}>
      <div className="hero-bg static">
        <div className="static-row">
          <div className="hero-card card-v">
            <img
              src="https://images.unsplash.com/photo-1633280605337-5766f7eb3319?q=80&w=1000&auto=format&fit=crop"
              alt=""
            />
          </div>

          <div className="hero-card card-h">
            <img
              src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1800&auto=format&fit=crop"
              alt=""
            />
          </div>

          <div className="hero-card card-v">
            <img
              src="https://images.unsplash.com/photo-1644219037677-2703bc509933?q=80&w=1000&auto=format&fit=crop"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="container hero-foreground">
        <p className="hero-eyebrow">Welcome to the World of Innovation!</p>
        <h1
          className="hero-title"
          aria-label="Leading a dynamic team to turn ideas into powerful digital tools."
        >
          {"Leading a dynamic team to turn ideas into powerful digital tools."
            .split(" ")
            .map((w, i) => (
              <span key={i}>{w}&nbsp;</span>
            ))}
        </h1>
      </div>

      <div className="scroll-indicator">
        <span className="line">
          <span className="dot"></span>
        </span>
        <span className="label">SCROLL</span>
      </div>
    </section>
  );
}
