import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  Briefcase,
  CalendarDays,
  Phone,
} from "lucide-react";

// ---------------- Minimal UI Components ----------------
const Button = ({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`px-4 py-2 bg-slate-900 text-white rounded-xl hover:bg-slate-700 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-white/70 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ${className}`}
  >
    {children}
  </div>
);

const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="px-4 pt-4">{children}</div>
);

const CardTitle = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <h3 className={`font-semibold text-lg ${className}`}>{children}</h3>;

const CardDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm text-gray-500">{children}</p>
);

const CardContent = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`px-4 pb-4 ${className}`}>{children}</div>;

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 text-xs font-medium bg-black/5 hover:bg-black/10 transition-colors rounded-full">
    {children}
  </span>
);

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
  />
);

const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...props}
    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
  />
);

// ---------------- Config ----------------
const ME = {
  name: "Hamza Mushtaq",
  role: "Software Engineer • Full-Stack (.NET / Angular)",
  summary:
    "I ship production-ready software end-to-end: high-performance search, robust APIs, and clean, usable UIs.",
  location: "Lahore, Pakistan",
  email: "hamza.mushtaq181@amalacademy.org",
  phone: "+92 347 845 2651",
  github: "https://github.com/hamzatoor251",
  linkedin: "https://www.linkedin.com/in/hamza-mushtaq-toor/",
  resumeUrl: "/Hamza Mushtaq - Resume.pdf",
  avatarUrl: "/hamza.jpg",
};

const SKILLS = [
  { group: "Languages", items: ["C#", "TypeScript", "JavaScript", "SQL"] },
  {
    group: "Backend",
    items: [
      ".NET 6/7",
      "ASP.NET Core",
      "REST APIs",
      "ElasticSearch",
      "RabbitMQ",
    ],
  },
  {
    group: "Frontend",
    items: ["Angular (v17)", "HTML", "CSS", "Web Forms (legacy)"],
  },
  { group: "Platforms", items: ["Azure CI/CD", "AWS S3", "IIS"] },
  { group: "Databases", items: ["SQL Server", "Elastic Indexes"] },
  { group: "Testing", items: ["Postman", "JMeter"] },
  { group: "Tools", items: ["Git/GitHub", "VS", "VS Code", "TortoiseGit"] },
];

const EXPERIENCE = [
  {
    company: "CureMD Healthcare IT",
    role: "Software Engineer",
    period: "2022 – Present",
    bullets: [
      "Technical authority for the team; mentor juniors and drive Scrum execution.",
      "R&D on emerging tools; propose system enhancements and improve processes.",
      "Collaborate with PO/stakeholders to scope and prioritize high-value work.",
      "Own complex production incidents and client issue resolution end-to-end.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Global Patient Search",
    blurb:
      "Integratable Angular component + .NET 6 API with ElasticSearch. Designed indexing/queries to scan 1M+ records with ~100ms avg response.",
    tags: ["Angular", ".NET 6", "ElasticSearch", "Azure Pipelines"],
  },
  {
    title: "Push Notification Service",
    blurb:
      "Centralized .NET 6 service integrated with FCM to push time-critical notifications across web & mobile; deployed via Azure CI/CD.",
    tags: [".NET 6", "FCM", "Azure", "Microservice"],
  },
  {
    title: "Progress Note (Provider Workflow)",
    blurb:
      "Angular 17 app enabling providers to author notes, prescribe meds, lab & radiology orders, and education—with S3 clinical document storage.",
    tags: ["Angular 17", "AWS S3", "UX"],
  },
];

const CONTACT_NOTE =
  "Prefer email or LinkedIn for faster response. Open to full-time roles, freelance, and meaningful collaborations.";

// ---------------- Helpers ----------------
const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-20%" },
  transition: { duration: 0.5 },
};

// ---------------- Sections ----------------
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <motion.div {...fadeIn} className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-lg">
          {ME.name}
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-black/60 transition-colors" href="#projects">
            Projects
          </a>
          <a className="hover:text-black/60 transition-colors" href="#skills">
            Skills
          </a>
          <a
            className="hover:text-black/60 transition-colors"
            href="#experience"
          >
            Experience
          </a>
          <a className="hover:text-black/60 transition-colors" href="#contact">
            Contact
          </a>
        </nav>
        <a href={ME.resumeUrl} target="_blank" rel="noreferrer">
          <Button>
            <Download className="h-4 w-4 mr-2" /> Resume
          </Button>
        </a>
      </div>
    </header>
  );
}

function ParallaxHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scaleBadge = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={ref} id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-transparent to-purple-50/50"></div>
        <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-radial-t from-blue-100/20 to-transparent"></div>
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Decorative developer-style SVG behind title (subtle, non-distracting) */}
        <svg
          className="absolute left-1/4 top-12 w-[720px] h-[420px] opacity-10 pointer-events-none"
          viewBox="0 0 720 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.08" />
            </linearGradient>
            <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.7" fill="#000" fillOpacity="0.06" />
            </pattern>
          </defs>

          <rect x="0" y="0" width="720" height="420" fill="url(#g1)" />

          {/* angled faint grid lines */}
          <g stroke="#000" strokeOpacity="0.03" strokeWidth="1">
            <path d="M-50 370 L770 -90" />
            <path d="M-10 410 L810 -50" />
            <path d="M30 440 L850 -20" />
          </g>

          {/* small code glyph boxes */}
          <g transform="translate(60,60)" fill="#ffffff">
            <rect x="0" y="0" rx="6" ry="6" width="84" height="52" fill="url(#g1)" fillOpacity="0.06" />
            <rect x="110" y="30" rx="6" ry="6" width="120" height="46" fill="url(#g1)" fillOpacity="0.04" />
            <rect x="270" y="10" rx="6" ry="6" width="220" height="72" fill="url(#g1)" fillOpacity="0.03" />
          </g>

          {/* angle brackets glyphs */}
          <g transform="translate(420,40)" fill="#000" fillOpacity="0.06">
            <text x="0" y="28" fontFamily="monospace" fontSize="56">{`</>`}</text>
          </g>

          {/* dot texture on top */}
          <rect x="0" y="0" width="720" height="420" fill="url(#dots)" />
        </svg>

        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 -right-4 w-72 h-72 bg-gradient-to-br from-rose-400/20 to-orange-500/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-12 relative">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <motion.h1
              style={{ y: yText }}
              className="text-[2.5rem] md:text-[4.5rem] font-extrabold tracking-[-0.02em] leading-[1.1]"
            >
              {ME.role}
            </motion.h1>
            <motion.p
              style={{ y: yText }}
              className="mt-4 text-lg text-gray-600"
            >
              {ME.summary}
            </motion.p>
            <motion.div
              style={{ scale: scaleBadge }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a href={ME.github} target="_blank" rel="noreferrer">
                <Button>
                  <Github className="h-4 w-4 mr-2" /> GitHub
                </Button>
              </a>
              <a href={ME.linkedin} target="_blank" rel="noreferrer">
                <Button>
                  <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                </Button>
              </a>
              <a href={`mailto:${ME.email}`}>
                <Button>
                  <Mail className="h-4 w-4 mr-2" /> Contact
                </Button>
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent>
                <motion.img
                  src={ME.avatarUrl}
                  alt="headshot"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-56 object-cover rounded-xl bg-gray-100 motion-safe:hover:scale-102"
                  whileHover={
                    window.matchMedia("(prefers-reduced-motion: no-preference)")
                      .matches
                      ? { scale: 1.02 }
                      : undefined
                  }
                />
                <div className="mt-4 text-sm space-y-2">
                  <div className="flex gap-2">
                    <MapPin className="h-4 w-4" /> {ME.location}
                  </div>
                  <div className="flex gap-2">
                    <Briefcase className="h-4 w-4" /> 3+ yrs full-stack
                  </div>
                  <div className="flex gap-2">
                    <CalendarDays className="h-4 w-4" /> Open to roles
                  </div>
                  <div className="flex gap-2">
                    <Phone className="h-4 w-4" /> {ME.phone}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills & Tools">
      <div className="grid md:grid-cols-2 gap-4">
        {SKILLS.map((s) => (
          <Card key={s.group}>
            <CardHeader>
              <CardTitle>{s.group}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <Badge key={i}>{i}</Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function StickyShowcase() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const opacity1 = useTransform(scrollYProgress, [0.0, 0.15], [1, 0.15]);
  const opacity2 = useTransform(scrollYProgress, [0.33, 0.48], [0.15, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.66, 0.81], [0.15, 1]);

  return (
    <Section id="projects" title="Selected Projects">
      <div ref={ref} className="h-[200vh] relative">
        <div className="sticky top-24 space-y-6">
          <motion.div style={{ opacity: opacity1 }}>
            <ProjectCard p={PROJECTS[0]} />
          </motion.div>
          <motion.div style={{ opacity: opacity2 }}>
            <ProjectCard p={PROJECTS[1]} />
          </motion.div>
          <motion.div style={{ opacity: opacity3 }}>
            <ProjectCard p={PROJECTS[2]} />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function ProjectCard({ p }: { p: (typeof PROJECTS)[number] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{p.title}</CardTitle>
        <CardDescription>{p.tags.join(" • ")}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{p.blurb}</p>
      </CardContent>
    </Card>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      {EXPERIENCE.map((e) => (
        <Card key={e.company}>
          <CardHeader>
            <CardTitle>{e.role}</CardTitle>
            <CardDescription>
              {e.company} ({e.period})
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {e.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Get in touch</CardTitle>
            <CardDescription>{CONTACT_NOTE}</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-3">
                <Input required placeholder="Your name" />
                <Input required type="email" placeholder="Email" />
              </div>
              <Input placeholder="Subject" />
              <Textarea
                required
                rows={5}
                placeholder="Tell me a bit about your project..."
              />
              <Button type="submit">Send</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Direct</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${ME.email}`} className="underline">
                {ME.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <a href={ME.github} className="underline">
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              <a href={ME.linkedin} className="underline">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> {ME.phone}
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

// ---------------- Main ----------------
export default function Portfolio() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) =>
      setTheme(e.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#111] text-gray-100"
          : "bg-[#f5f5f7] text-slate-900"
      }`}
    >
      <div
        className={`fixed inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-900/30 to-black/30"
            : "bg-gradient-to-br from-blue-50 to-rose-50 opacity-50"
        }`}
      />
      <div className="relative">
        <Nav />
        <ParallaxHero />
        <main className="max-w-6xl mx-auto px-4 pb-20 space-y-24">
          <StickyShowcase />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <footer className="border-t border-black/5 py-12 text-center text-sm text-gray-500 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-4">
            © {new Date().getFullYear()} {ME.name}. Built with React, Tailwind &
            Framer Motion.
          </div>
        </footer>
      </div>
    </div>
  );
}
