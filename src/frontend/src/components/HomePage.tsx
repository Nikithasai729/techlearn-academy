import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  Globe,
  Layers,
  Server,
  Shield,
  Smartphone,
} from "lucide-react";

const stats = [
  { value: "80+", label: "Courses" },
  { value: "10K+", label: "Students" },
  { value: "10", label: "Categories" },
  { value: "100%", label: "Free" },
];

const featuredCourses = [
  {
    icon: Layers,
    title: "Full Stack Development",
    description:
      "Build complete web applications from database to UI. Master React, Node.js, REST APIs, and deployment pipelines.",
    badge: "Most Popular",
    badgeVariant: "default" as const,
    lessons: "50+ Lessons",
    level: "Beginner Friendly",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Dive into neural networks, deep learning, Python, TensorFlow, and practical ML model deployment.",
    badge: "Trending",
    badgeVariant: "secondary" as const,
    lessons: "60+ Lessons",
    level: "Intermediate",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Master HTML5, CSS3, JavaScript ES6+, React, and modern tooling for building polished web interfaces.",
    badge: "Beginner",
    badgeVariant: "outline" as const,
    lessons: "40+ Lessons",
    level: "All Levels",
  },
];

const values = [
  {
    icon: Globe,
    title: "Democratize Tech Education",
    description:
      "Free, high-quality tech education accessible to anyone, anywhere in the world — no tuition fees, no barriers.",
  },
  {
    icon: BookOpen,
    title: "Expert-Led Content",
    description:
      "Courses crafted by senior engineers from top tech companies with real-world project experience.",
  },
  {
    icon: Shield,
    title: "Career-Ready Skills",
    description:
      "Practical, job-market-aligned curriculum that prepares you for real engineering roles from day one.",
  },
];

const learningPath = [
  {
    step: "01",
    title: "Beginner",
    description:
      "Start with fundamentals — HTML, CSS, Python basics, and computer science concepts. No prior experience needed.",
    milestones: [
      "Build your first webpage",
      "Understand programming logic",
      "Complete 3 mini-projects",
    ],
    color: "text-chart-3",
    bg: "bg-chart-3/10",
    border: "border-chart-3/30",
  },
  {
    step: "02",
    title: "Intermediate",
    description:
      "Level up with frameworks, databases, and APIs. Build full features and connect front to back.",
    milestones: [
      "Build REST APIs",
      "Learn React or Vue",
      "Deploy a live project",
    ],
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/30",
  },
  {
    step: "03",
    title: "Advanced",
    description:
      "Master system design, cloud architecture, AI integration, and production-grade engineering practices.",
    milestones: [
      "System design interviews",
      "Cloud deployment",
      "Contribute to open source",
    ],
    color: "text-chart-4",
    bg: "bg-chart-4/10",
    border: "border-chart-4/30",
  },
];

const testimonials = [
  {
    quote:
      "TechLearn Academy transformed my career. I went from zero coding knowledge to landing a junior developer role in 8 months.",
    name: "Priya Sharma",
    course: "Full Stack Development",
    avatar: "PS",
  },
  {
    quote:
      "The AI/ML course is incredibly well-structured. The projects are practical and the explanations are crystal clear.",
    name: "Marcus Chen",
    course: "AI & Machine Learning",
    avatar: "MC",
  },
  {
    quote:
      "Best free resource I've found. The frontend curriculum is on par with paid bootcamps costing thousands of dollars.",
    name: "Aisha Okonkwo",
    course: "Frontend Development",
    avatar: "AO",
  },
];

export function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background"
        aria-labelledby="hero-heading"
        data-ocid="hero.section"
      >
        {/* Dot-grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(14,165,233,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        {/* Glow orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge
            variant="outline"
            className="mb-6 border-primary/40 text-primary bg-primary/10 text-xs px-3 py-1"
          >
            🚀 10,000+ Students Learning Today
          </Badge>
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6"
          >
            Master the Skills That{" "}
            <span className="text-primary">Shape the Future</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Join 10,000+ students learning Full Stack, AI/ML, and more from
            expert engineers — completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 px-8 py-3 text-base font-semibold shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                data-ocid="hero.explore_courses_button"
              >
                Explore Courses
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <Link to="/learn-more">
              <Button
                size="lg"
                variant="outline"
                className="border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200 px-8 py-3 text-base"
                data-ocid="hero.learn_more_button"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        className="bg-card border-y border-border py-8"
        aria-label="Key statistics"
        data-ocid="stats.section"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-primary">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section
        className="py-20 bg-background"
        aria-labelledby="featured-heading"
        data-ocid="featured.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 border-primary/40 text-primary bg-primary/10 text-xs"
            >
              Featured Courses
            </Badge>
            <h2
              id="featured-heading"
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Start With Our Best
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Hand-picked courses covering today's most in-demand technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCourses.map((course, i) => (
              <article
                key={course.title}
                className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary/40 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                data-ocid={`featured.course.item.${i + 1}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <course.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge
                    variant={course.badgeVariant}
                    className="text-xs shrink-0"
                  >
                    {course.badge}
                  </Badge>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto">
                  <span>{course.lessons}</span>
                  <span>·</span>
                  <span>{course.level}</span>
                </div>
                <Link to="/courses">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    data-ocid={`featured.explore_button.${i + 1}`}
                  >
                    Explore Course
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/courses">
              <Button
                variant="outline"
                size="lg"
                className="border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                data-ocid="featured.view_all_button"
              >
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-muted/30 border-y border-border"
        aria-labelledby="about-heading"
        data-ocid="about.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 border-primary/40 text-primary bg-primary/10 text-xs"
            >
              About Us
            </Badge>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Education Without Barriers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              TechLearn Academy was founded on a simple belief: world-class tech
              education should be accessible to everyone. Our mission is to
              close the skills gap by providing structured, practical, and
              completely free learning paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <article
                key={value.title}
                className="bg-card border border-border rounded-xl p-6 flex flex-col gap-3"
                data-ocid={`about.value.item.${i + 1}`}
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section
        className="py-20 bg-background"
        aria-labelledby="path-heading"
        data-ocid="path.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 border-primary/40 text-primary bg-primary/10 text-xs"
            >
              Learning Path
            </Badge>
            <h2
              id="path-heading"
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Your Journey to Mastery
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A clear progression from first principles to production-grade
              engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connector line on desktop */}
            <div
              className="hidden md:block absolute top-8 left-[calc(16.5%+1rem)] right-[calc(16.5%+1rem)] h-0.5 bg-border"
              aria-hidden="true"
            />

            {learningPath.map((step, i) => (
              <article
                key={step.title}
                className={`bg-card border ${step.border} rounded-xl p-6 flex flex-col gap-4 relative`}
                data-ocid={`path.step.item.${i + 1}`}
              >
                <div
                  className={`w-12 h-12 rounded-full ${step.bg} border ${step.border} flex items-center justify-center`}
                >
                  <span className={`font-bold text-sm ${step.color}`}>
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3 className={`font-bold text-xl ${step.color} mb-2`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <ul className="space-y-2 mt-auto">
                  {step.milestones.map((m) => (
                    <li
                      key={m}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2
                        className={`w-4 h-4 mt-0.5 shrink-0 ${step.color}`}
                      />
                      {m}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-20 bg-muted/30 border-y border-border"
        aria-labelledby="testimonials-heading"
        data-ocid="testimonials.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 border-primary/40 text-primary bg-primary/10 text-xs"
            >
              Student Stories
            </Badge>
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              What Our Students Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <article
                key={t.name}
                className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4"
                data-ocid={`testimonials.card.item.${i + 1}`}
              >
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">
                      {t.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.course}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-16 bg-primary/10 border-y border-primary/20"
        aria-labelledby="cta-heading"
        data-ocid="cta.section"
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            id="cta-heading"
            className="text-3xl font-bold text-foreground mb-4"
          >
            Ready to Start Learning?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of developers who've accelerated their careers with
            TechLearn Academy.
          </p>
          <Link to="/courses">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-3 text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-primary/25"
              data-ocid="cta.start_button"
            >
              Browse All Courses
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
