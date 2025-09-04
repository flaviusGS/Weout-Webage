import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./team.css";
import FlaviusImg from "./Weout-Webage/src/components/Team/img/Flavius.png";
import CipriImg from "./Weout-Webage/src/img/Cipri.png";
import AndreiImg from "./Weout-Webage/src/img/Andrei.png";
import BogdanImg from "./Weout-Webage/src/img/Bogdan.png";

gsap.registerPlugin(ScrollTrigger);

type Member = {
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
};

const MEMBERS: Member[] = [
  {
    name: "Flavius Stasac",
    role: "Co-Founder & General Manager",
    photo: FlaviusImg,
    linkedin: "https://www.linkedin.com/in/USERNAME",
  },
  {
    name: "Ciprian Negruț",
    role: "Co-Founder & Software Developer",
    photo: CipriImg,
    linkedin: "https://www.linkedin.com/in/USERNAME",
  },
  {
    name: "Andrei Havasi",
    role: "Co-Founder & Software Developer",
    photo: AndreiImg,
    linkedin: "https://www.linkedin.com/in/USERNAME",
  },
  {
    name: "Bogdan Pupeza",
    role: "Co-Founder & Software Developer",
    photo: BogdanImg,
    linkedin: "https://www.linkedin.com/in/USERNAME",
  },
];

export default function Team() {
  const root = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".member-card", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="team" className="team-wrap" ref={root}>
      <div className="container">
        <div className="team-head">
          <h2 className="team-title">Our Team Members</h2>
          <div className="team-index">03</div>
        </div>

        {/* fără offset */}
        <div className="team-grid">
          {MEMBERS.map((m) => (
            <article className="member-card" key={m.name} tabIndex={0}>
              <figure className="member-photo">
                <img src={m.photo} alt={m.name} loading="lazy" />
              </figure>

              <div className="member-info">
                <h3 className="member-name">{m.name}</h3>
                <p className="member-role">{m.role}</p>
                {/* {m.linkedin && (
                  <a
                    className="member-link"
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open LinkedIn profile for ${m.name}`}
                  >
                    View profile
                  </a>
                )} */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
