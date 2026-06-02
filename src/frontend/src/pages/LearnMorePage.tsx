import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Code2,
  Database,
  GraduationCap,
  Layers,
  MessageCircle,
  Server,
  Shield,
  Star,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

const steps = [
  {
    num: "01",
    icon: BookOpen,
    title: "Browse Courses",
    description:
      "Explore our library of 50+ courses across Full Stack, AI/ML, Web Dev, Data Analysis, and more. Filter by skill level, duration, or topic to find what's right for you.",
  },
  {
    num: "02",
    icon: GraduationCap,
    title: "Enroll for Free",
    description:
      "Create your free account and enroll in as many courses as you like. No credit card, no hidden fees — just your curiosity and commitment.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Learn at Your Pace",
    description:
      "Watch video lessons, complete coding exercises, and build real projects on your own schedule. Resume exactly where you left off, any time, any device.",
  },
  {
    num: "04",
    icon: Trophy,
    title: "Get Certified",
    description:
      "Complete a course and earn a shareable certificate of completion. Showcase your skills on LinkedIn, your resume, and your portfolio.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Self-Paced Learning",
    description:
      "No deadlines, no pressure. Learn on your schedule — during lunch breaks, weekends, or late nights. Progress is always saved.",
  },
  {
    icon: Star,
    title: "Expert Instructors",
    description:
      "Every course is built by senior engineers with 5–15 years of industry experience at top tech companies.",
  },
  {
    icon: Code2,
    title: "Hands-On Projects",
    description:
      "Each track includes multiple real-world projects. Build a portfolio you can show employers before you graduate.",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Join a community of 10,000+ learners. Ask questions, share wins, and get code reviews from peers and mentors.",
  },
  {
    icon: Shield,
    title: "Always Up to Date",
    description:
      "Curriculum is reviewed and updated every quarter to reflect the latest industry tools, frameworks, and best practices.",
  },
  {
    icon: Trophy,
    title: "Verified Certificates",
    description:
      "Earn certificates recognised by 500+ hiring companies. Each certificate includes a unique verification link.",
  },
];

const tracks = [
  {
    icon: Layers,
    title: "Full Stack Development",
    topics: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "Node.js",
      "REST APIs",
      "DevOps",
    ],
    count: "50+ lessons",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    topics: [
      "HTML5/CSS3",
      "Tailwind",
      "React",
      "TypeScript",
      "Animations",
      "UI/UX",
    ],
    count: "40+ lessons",
  },
  {
    icon: Server,
    title: "Backend Development",
    topics: ["Node.js", "Express", "Python", "GraphQL", "Auth", "Databases"],
    count: "45+ lessons",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    topics: ["Python", "TensorFlow", "Neural Nets", "NLP", "CV", "Deployment"],
    count: "60+ lessons",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    topics: ["Python", "Pandas", "NumPy", "SQL", "Matplotlib", "Excel"],
    count: "35+ lessons",
  },
  {
    icon: Database,
    title: "Databases",
    topics: ["SQL", "PostgreSQL", "MongoDB", "Redis", "ORMs", "Schema Design"],
    count: "30+ lessons",
  },
];

const faqs = [
  {
    q: "Is TechLearn Academy really free?",
    a: "Yes — 100% free, forever. No premium tier, no paywalled lessons. We believe education should never be gated behind a paywall. Every course, every project, every certificate is completely free.",
  },
  {
    q: "Do I need prior experience to start?",
    a: "Not at all. Our curriculum is designed with a clear beginner path. You can start with absolute zero programming knowledge and progress to an advanced level through our structured tracks.",
  },
  {
    q: "How long does it take to complete a course?",
    a: "It depends on the course and your pace. Most tracks take 4–12 weeks at 1–2 hours per day. Our self-paced format means you can go faster or slower — you're in control.",
  },
  {
    q: "Will I get a certificate when I finish?",
    a: "Yes! Every completed course earns you a shareable, verifiable certificate. You can add it to your LinkedIn profile, include a link in your resume, or share it directly with employers.",
  },
  {
    q: "How are the courses structured?",
    a: "Each course is split into modules, with video lessons, reading material, coding exercises, and a capstone project. Quizzes after each module check your understanding before you move on.",
  },
];

export function LearnMorePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <div className="flex flex-col">
        {/* Hero */}
        <section
          className="relative py-24 sm:py-32 bg-background overflow-hidden"
          aria-labelledby="learn-hero-heading"
          data-ocid="learn.hero.section"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(14,165,233,0.07) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <Badge
              variant="outline"
              className="mb-6 border-primary/40 text-primary bg-primary/10 text-xs px-3 py-1"
            >
              How It Works
            </Badge>
            <h1
              id="learn-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6"
            >
              Everything You Need to{" "}
              <span className="text-primary">Succeed in Tech</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              TechLearn Academy is a structured, self-paced platform designed to
              take you from beginner to job-ready engineer — completely free.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section
          className="py-20 bg-muted/30 border-y border-border"
          aria-labelledby="how-heading"
          data-ocid="learn.how.section"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge
                variant="outline"
                className="mb-4 border-primary/40 text-primary bg-primary/10 text-xs"
              >
                The Process
              </Badge>
              <h2
                id="how-heading"
                className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              >
                How It Works
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Four simple steps from signing up to earning your certificate.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <article
                  key={step.title}
                  className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary/40 transition-all duration-200"
                  data-ocid={`learn.step.item.${i + 1}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-primary">
                        {step.num}
                      </span>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section
          className="py-20 bg-background"
          aria-labelledby="benefits-heading"
          data-ocid="learn.benefits.section"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge
                variant="outline"
                className="mb-4 border-primary/40 text-primary bg-primary/10 text-xs"
              >
                Why TechLearn
              </Badge>
              <h2
                id="benefits-heading"
                className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              >
                Why Students Choose Us
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <article
                  key={b.title}
                  className="bg-card border border-border rounded-xl p-6 flex flex-col gap-3 hover:border-primary/40 transition-all duration-200"
                  data-ocid={`learn.benefit.item.${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {b.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Course Tracks */}
        <section
          className="py-20 bg-muted/30 border-y border-border"
          aria-labelledby="tracks-heading"
          data-ocid="learn.tracks.section"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge
                variant="outline"
                className="mb-4 border-primary/40 text-primary bg-primary/10 text-xs"
              >
                Course Library
              </Badge>
              <h2
                id="tracks-heading"
                className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              >
                Explore Course Tracks
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Each track is a complete learning journey — from foundations to
                advanced real-world projects.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tracks.map((track, i) => (
                <article
                  key={track.title}
                  className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary/40 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  data-ocid={`learn.track.item.${i + 1}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <track.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm">
                        {track.title}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {track.count}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {track.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-md px-2 py-0.5"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <Link to="/courses" className="mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      data-ocid={`learn.track.explore_button.${i + 1}`}
                    >
                      Explore Track
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-20 bg-background"
          aria-labelledby="faq-heading"
          data-ocid="learn.faq.section"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge
                variant="outline"
                className="mb-4 border-primary/40 text-primary bg-primary/10 text-xs"
              >
                FAQ
              </Badge>
              <h2
                id="faq-heading"
                className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              >
                Frequently Asked Questions
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <div
                  key={faq.q}
                  className="bg-card border border-border rounded-xl overflow-hidden"
                  data-ocid={`learn.faq.item.${i + 1}`}
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-expanded={openFaq === i}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    data-ocid={`learn.faq.toggle.${i + 1}`}
                  >
                    <span className="font-medium text-foreground text-sm">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20 bg-muted/30 border-y border-border"
          aria-label="Call to action"
          data-ocid="learn.cta.section"
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Dive In?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Start your tech journey today. Free forever, self-paced, and built
              by engineers who've been where you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 px-8 py-3 text-base font-semibold shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                  data-ocid="learn.browse_courses_button"
                >
                  Browse Courses
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200 px-8 py-3 text-base"
                  data-ocid="learn.contact_button"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
