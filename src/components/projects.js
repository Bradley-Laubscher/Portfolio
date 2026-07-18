import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";

const projects = [
  {
    name: "SquadSync",
    description:
      "A football group tracker for managing sessions, seasons, players, stats and more.",
    tech: ["C#", ".NET", "Flutter"],
    demo: "https://squadsync.bradleylaubscher.workers.dev/",
    source: null, // private repository
    image: "/resources/squadsync.png",
  },
  {
    name: "NextUp",
    description:
      "A game tracking tool with notifications for updates and sales, powered by the IGDB (Twitch) and Steam APIs.",
    tech: ["C#", ".NET"],
    demo: "https://next-up-8qce.onrender.com",
    source: "https://github.com/Bradley-Laubscher/next-up",
    image: "/resources/NextUp.png",
  },
  {
    name: "Surf Spot",
    description:
      "Displays surf conditions for Cape Town's local spots and notifies subscribers when conditions are good, using the Open-Meteo marine API.",
    tech: ["Dart", "Flutter"],
    demo: "https://surfspot.netlify.app/",
    source: "https://github.com/Bradley-Laubscher/surfspot",
    image: "/resources/Surfboards.jpg",
  },
  {
    name: "Marketplace",
    description: "A dynamic marketplace for multiple merchant types.",
    tech: ["Dart", "Flutter"],
    demo: "https://bradley-laubscher.github.io/marketplace/",
    source: "https://github.com/Bradley-Laubscher/marketplace",
    image: "/resources/Marketplace.jpg",
  },
  {
    name: "Duly Noted",
    description:
      "A notepad webapp for taking notes, organising them into categories, and filtering, updating or removing them.",
    tech: ["React", "Redux", "JavaScript"],
    demo: "https://dulynoted-webapp.netlify.app/",
    source: "https://github.com/Bradley-Laubscher/DulyNoted",
    image: "/resources/NotePad.jpeg",
  },
  {
    name: "Top Travel Destinations",
    description:
      "Information on top travel destinations around the world, along with a few tips for traveling.",
    tech: ["Next.js", "React"],
    demo: "https://top-travel-destinations.vercel.app/",
    source: "https://github.com/Bradley-Laubscher/Top-Travel-Destinations",
    image: "/resources/Travel.jpg",
  },
];

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, transition: { type: "tween", duration: 1 } }}
      animate={{ opacity: 1, transition: { type: "tween", duration: 1 } }}
      exit={{
        x: window.innerWidth,
        opacity: 0,
        transition: { type: "tween", duration: 1 },
      }}
    >
      <section className="projects-container">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
              role="img"
              aria-label={`${project.name} preview`}
            />
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="tech-tags">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt aria-hidden="true" /> Live demo
                </a>
                {project.source ? (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <FaGithub aria-hidden="true" /> Source
                  </a>
                ) : (
                  <span className="private-note" title="Source available on request">
                    <FaLock aria-hidden="true" /> Private codebase
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </motion.div>
  );
}

export default Projects;
