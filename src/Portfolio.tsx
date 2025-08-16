import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  Briefcase,
  Link as LinkIcon,
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
    className={`px-4 py-2 bg-slate-900 text-white rounded-xl hover:bg-slate-700 transition ${className}`}
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
  <div className={`bg-white border rounded-xl shadow-sm ${className}`}>
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

const CardFooter = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`px-4 pb-4 flex ${className}`}>{children}</div>;

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 text-xs font-medium bg-slate-100 rounded-full">
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
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">
          {ME.name}
        </a>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <a className="hover:underline" href="#projects">
            Projects
          </a>
          <a className="hover:underline" href="#skills">
            Skills
          </a>
          <a className="hover:underline" href="#experience">
            Experience
          </a>
          <a className="hover:underline" href="#contact">
            Contact
          </a>
        </nav>
        <a href={ME.resumeUrl} target="_blank" rel="noreferrer">
          <Button className="bg-slate-100 text-slate-900 hover:bg-slate-200">
            <Download className="h-4 w-4 mr-1" /> Resume
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
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <motion.h1
              style={{ y: yText }}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
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
                  className="w-full h-56 object-cover rounded-xl"
                  whileHover={{ scale: 1.02 }}
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
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Nav />
      <ParallaxHero />
      <main className="max-w-6xl mx-auto px-4 pb-20 space-y-14">
        <StickyShowcase />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {ME.name}. Built with React, Tailwind &
        Framer Motion.
      </footer>
    </div>
  );
}
