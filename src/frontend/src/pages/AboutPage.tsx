import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  Brain,
  ChevronRight,
  Code2,
  Database,
  Globe,
  GraduationCap,
  Heart,
  Layers,
  Lightbulb,
  Server,
  Shield,
  Target,
  Users,
} from "lucide-react";

const missionItems = [
  {
    icon: Globe,
    title: "Our Mission",
    description:
      "Democratize world-class tech education by making it completely free and accessible to every learner — regardless of geography, background, or financial status.",
  },
  {
    icon: Target,
    title: "Our Vision",
    description:
      "A world where anyone with curiosity and dedication can build a rewarding tech career. We believe the next great engineers shouldn't be gatekept by expensive bootcamps.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Quality over quantity, community over competition, and practical skills over theoretical fluff. Every course is built to get you job-ready — not just certificate-ready.",
  },
];

const stats = [
  { value: "10,000+", label: "Active Students" },
  { value: "50+", label: "Expert Courses" },
  { value: "20+", label: "Expert Instructors" },
  { value: "95%", label: "Completion Rate" },
  { value: "8", label: "Tech Domains" },
  { value: "100%", label: "Free Forever" },
];

const domains = [
  { icon: Layers, label: "Full Stack Dev" },
  { icon: Code2, label: "Frontend Dev" },
  { icon: Server, label: "Backend Dev" },
  { icon: Brain, label: "AI & ML" },
  { icon: BarChart3, label: "Data Analysis" },
  { icon: Database, label: "Databases" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Globe, label: "Web Development" },
];

export function AboutPage() {
  return (
    <Layout>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section
          className="relative py-24 sm:py-32 bg-background overflow-hidden"
          aria-labelledby="about-hero-heading"
          data-ocid="about.hero.section"
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
          <div
            className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <Badge
              variant="outline"
              className="mb-6 border-primary/40 text-primary bg-primary/10 text-xs px-3 py-1"
            >
              Our Story
            </Badge>
            <h1
              id="about-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6"
            >
              About <span className="text-primary">TechLearn Academy</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're on a mission to close the global tech skills gap by
              providing the highest quality, free education in Full Stack
              Development, AI/ML, and modern software engineering.
            </p>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section
          className="py-20 bg-muted/30 border-y border-border"
          aria-labelledby="mission-heading"
          data-ocid="about.mission.section"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge
                variant="outline"
                className="mb-4 border-primary/40 text-primary bg-primary/10 text-xs"
              >
                What We Stand For
              </Badge>
              <h2
                id="mission-heading"
                className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              >
                Mission, Vision &amp; Values
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {missionItems.map((item, i) => (
                <article
                  key={item.title}
                  className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary/40 transition-all duration-200"
                  data-ocid={`about.mission.item.${i + 1}`}
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section
          className="py-20 bg-background"
          aria-labelledby="stats-heading"
          data-ocid="about.stats.section"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge
                variant="outline"
                className="mb-4 border-primary/40 text-primary bg-primary/10 text-xs"
              >
                By the Numbers
              </Badge>
              <h2
                id="stats-heading"
                className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              >
                TechLearn Academy in Numbers
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Real impact measured in students helped, careers changed, and
                skills built.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-xl p-5 flex flex-col items-center gap-2 text-center hover:border-primary/40 transition-all duration-200"
                  data-ocid={`about.stat.item.${i + 1}`}
                >
                  <span className="text-2xl sm:text-3xl font-bold text-primary">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section
          className="py-20 bg-muted/30 border-y border-border"
          aria-labelledby="story-heading"
          data-ocid="about.story.section"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <Badge
                  variant="outline"
                  className="mb-4 border-primary/40 text-primary bg-primary/10 text-xs"
                >
                  How We Started
                </Badge>
                <h2
                  id="story-heading"
                  className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
                >
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    TechLearn Academy began in 2022 when a group of senior
                    engineers from leading tech companies noticed a stark
                    reality: brilliant aspiring developers in emerging markets
                    were being priced out of quality education by bootcamp fees
                    ranging from $10,000 to $30,000.
                  </p>
                  <p>
                    We built TechLearn Academy as the answer — a curriculum
                    crafted by engineers who've worked at Google, Meta, Amazon,
                    and top startups, delivered entirely free. Every lesson is
                    designed to be immediately applicable, every project mirrors
                    real-world engineering challenges.
                  </p>
                  <p>
                    Today, over 10,000 students across 80+ countries use
                    TechLearn Academy to build careers in software development,
                    AI, and data science. Our graduation rates outperform most
                    paid programs — because we focus on building engineers, not
                    collecting fees.
                  </p>
                </div>
              </div>
              <div className="shrink-0 flex flex-col gap-4">
                <div className="w-48 h-48 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <GraduationCap className="w-20 h-20 text-primary" />
                </div>
                <div className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                  <Lightbulb className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Founded 2022
                    </p>
                    <p className="text-xs text-muted-foreground">
                      80+ Countries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Domains */}
        <section
          className="py-20 bg-background"
          aria-labelledby="domains-heading"
          data-ocid="about.domains.section"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge
                variant="outline"
                className="mb-4 border-primary/40 text-primary bg-primary/10 text-xs"
              >
                What We Teach
              </Badge>
              <h2
                id="domains-heading"
                className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              >
                Tech Domains We Cover
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                From frontend to AI, we cover the full stack of modern tech
                skills.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {domains.map((domain, i) => (
                <div
                  key={domain.label}
                  className="bg-card border border-border rounded-xl p-4 flex flex-col items-center gap-3 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-default"
                  data-ocid={`about.domain.item.${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <domain.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">
                    {domain.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20 bg-muted/30 border-y border-border"
          aria-label="Call to action"
          data-ocid="about.cta.section"
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join 10,000+ students already building real skills with TechLearn
              Academy — completely free.
            </p>
            <Link to="/courses">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 px-8 py-3 text-base font-semibold shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                data-ocid="about.cta_button"
              >
                Browse All Courses
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
