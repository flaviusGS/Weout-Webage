import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./solutions.css";

type Item = { tag: string; title: string; body: string };

const ITEMS: Item[] = [
  {
    tag: "#WEBAPPS",
    title: "Tailored Web Applications for Your Business",
    body: "From simple landing pages to complex platforms, we build custom web applications that are fast, secure and scalable. Using modern frameworks and a meticulous UX process, we deliver measurable outcomes.",
  },
  {
    tag: "#CLOUDSOLUTIONS",
    title: "Seamlessly Integrate with the Cloud",
    body: "Migrate, optimize or build cloud-native services. We leverage AWS/Azure best practices for cost, security and reliability so your team ships faster.",
  },
  {
    tag: "#ENTERPRISETECH",
    title: "Robust Solutions for Enterprise Needs",
    body: "Microservices, event-driven architectures, data pipelines, SSO/SCIM and observability. We design dependable systems for demanding environments.",
  },
  {
    tag: "#USEREXPERIENCE",
    title: "Designing Interfaces That Users Love",
    body: "From research and wireframes to polished UI kits and design systems. Accessibility, performance and clarity are first-class concerns.",
  },
  {
    tag: "#TECHGUIDANCE",
    title: "Expert Guidance for Your Technical Challenges",
    body: "Architecture reviews, audits, mentoring, roadmaps. We embed with your team to unlock velocity and reduce risk.",
  },
];

export default function Solutions() {
  const root = useRef<HTMLDivElement | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useLayoutEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".sol-item").forEach((el) => {
        gsap.from(el, { y: 24, opacity: 0, duration: 0.5, ease: "power3.out" });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="adaptive" className="solutions-wrap" ref={root}>
      <div className="container">
        <div className="solutions-head">
          <h2 className="solutions-title">Solutions Tailored to Your Needs</h2>
          <div className="solutions-index">01</div>
        </div>

        <ul className="solutions-list" role="list">
          {ITEMS.map((it, idx) => {
            const open = openIndex === idx;
            return (
              <li key={idx} className="sol-item">
                <button
                  className={`sol-row ${open ? "open" : ""}`}
                  onClick={() => setOpenIndex(open ? null : idx)}
                  aria-expanded={open}
                >
                  <span className="sol-sign" aria-hidden>
                    {open ? "×" : "+"}
                  </span>
                  <span className="sol-content">
                    <span className="sol-tag">{it.tag}</span>
                    <span className="sol-title">{it.title}</span>
                  </span>
                </button>

                <div
                  className="sol-body"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="sol-body-inner">{it.body}</div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="tech-marquee">
          <div className="tech-track">
            {TECH_LOGOS.concat(TECH_LOGOS).map((t, i) => (
              <div className="tech-pill" key={i}>
                <img src={t.src} alt={t.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const TECH_LOGOS = [
  {
    alt: "React",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    alt: "Next.js",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    alt: "Node.js",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    alt: "TypeScript",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    alt: "JavaScript",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    alt: "JAVA",
    src: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
  },
  {
    alt: "Vite",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg",
  },
  {
    alt: "Tailwind",
    src: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
  },
  {
    alt: "AWS",
    src: "https://img.icons8.com/?size=100&id=e6uRfPIDgoXi&format=png&color=000000",
  },
  {
    alt: "Docker",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
  },
  {
    alt: "SpringBoot",
    src: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000",
  },
  {
    alt: "Flutter",
    src: "https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000",
  },
];
