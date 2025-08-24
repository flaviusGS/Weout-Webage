import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./specialities.css";

gsap.registerPlugin(ScrollTrigger);

type Feature = { title: string; body: string };
type Card = {
  img: string;
  title: string;
  body: string;
  f1: Feature;
  f2: Feature;
};

const CARDS: Card[] = [
  {
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1800&auto=format&fit=crop",
    title: "Custom Software Development",
    body: "We deliver custom software tailored to your business needs, optimizing processes and boosting productivity.",
    f1: {
      title: "End-to-End Development",
      body: "From idea to launch, with quality and velocity.",
    },
    f2: {
      title: "Scalable Architecture",
      body: "Systems that grow with your business.",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop",
    title: "Web & Mobile App Development",
    body: "We create fast, intuitive web & mobile experiences – from design to functionality.",
    f1: {
      title: "Responsive Design",
      body: "Flawless UI across devices and breakpoints.",
    },
    f2: {
      title: "Cross-Platform Compatibility",
      body: "Smooth apps on both Android and iOS.",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=1800&auto=format&fit=crop",
    title: "Cloud Solutions & DevOps",
    body: "Optimized cloud strategies and seamless DevOps integration for scale and efficiency.",
    f1: {
      title: "Cloud Migration",
      body: "Minimal disruption, maximum results.",
    },
    f2: {
      title: "CI/CD",
      body: "Frequent, reliable releases with minimal user impact.",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop",
    title: "AI & Machine Learning Solutions",
    body: "Add ML to your product for better decisions and automation.",
    f1: {
      title: "Predictive Analytics",
      body: "Anticipate trends and make accurate predictions.",
    },
    f2: {
      title: "Intelligent Automation",
      body: "Boost efficiency with AI-driven workflows.",
    },
  },
];

export default function Specialities() {
  const root = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".sp-card").forEach((el) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="specialties" className="sp-wrap" ref={root}>
      <div className="container">
        <div className="sp-head">
          <h2 className="sp-title">Our Specialities</h2>
          <div className="sp-index">02</div>
        </div>
        <div className="sp-grid offset">
          {CARDS.map((c, i) => (
            <article className="sp-card" key={i}>
              <figure className="sp-cover">
                <img src={c.img} alt="" />
              </figure>

              <div className="sp-body">
                <h3 className="sp-card-title">{c.title}</h3>
                <p className="sp-card-text">{c.body}</p>

                <div className="sp-feats">
                  <div className="sp-feat">
                    <h4 className="sp-feat-title">{c.f1.title}</h4>
                    <p className="sp-feat-text">{c.f1.body}</p>
                  </div>
                  <div className="sp-feat">
                    <h4 className="sp-feat-title">{c.f2.title}</h4>
                    <p className="sp-feat-text">{c.f2.body}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
