import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Difficulty = "Beginner" | "Intermediate" | "Advanced";

interface SubCourse {
  title: string;
  difficulty: Difficulty;
  duration: string;
  description: string;
}

interface CourseCategory {
  id: string;
  icon: string;
  name: string;
  subCourses: SubCourse[];
}

const CATEGORIES: CourseCategory[] = [
  {
    id: "fullstack",
    icon: "🗂",
    name: "Full Stack Development",
    subCourses: [
      {
        title: "HTML, CSS & JavaScript Fundamentals",
        difficulty: "Beginner",
        duration: "20h",
        description: "Build the foundation of every web page",
      },
      {
        title: "React.js Mastery",
        difficulty: "Intermediate",
        duration: "30h",
        description: "Master component-based UI development",
      },
      {
        title: "Node.js & Express Backend",
        difficulty: "Intermediate",
        duration: "25h",
        description: "Build scalable server-side applications",
      },
      {
        title: "Database Design & SQL",
        difficulty: "Intermediate",
        duration: "20h",
        description: "Design and query relational databases",
      },
      {
        title: "REST API Development",
        difficulty: "Intermediate",
        duration: "15h",
        description: "Design and consume RESTful services",
      },
      {
        title: "Authentication & Security",
        difficulty: "Advanced",
        duration: "15h",
        description: "Implement JWT, OAuth and security best practices",
      },
      {
        title: "DevOps & CI/CD",
        difficulty: "Advanced",
        duration: "20h",
        description: "Automate testing and deployment pipelines",
      },
      {
        title: "Full Stack Capstone Project",
        difficulty: "Advanced",
        duration: "40h",
        description: "Build and deploy a production-ready full stack app",
      },
    ],
  },
  {
    id: "frontend",
    icon: "🎨",
    name: "Frontend Development",
    subCourses: [
      {
        title: "HTML & CSS Fundamentals",
        difficulty: "Beginner",
        duration: "15h",
        description: "Master markup and styling from scratch",
      },
      {
        title: "JavaScript Essentials",
        difficulty: "Beginner",
        duration: "20h",
        description: "Core JS concepts: closures, async, DOM",
      },
      {
        title: "React.js from Zero to Hero",
        difficulty: "Intermediate",
        duration: "30h",
        description: "Components, hooks, context, routing",
      },
      {
        title: "Vue.js Fundamentals",
        difficulty: "Intermediate",
        duration: "20h",
        description: "Progressive framework for modern UIs",
      },
      {
        title: "CSS Frameworks: Tailwind & Bootstrap",
        difficulty: "Beginner",
        duration: "10h",
        description: "Utility-first and component-based styling",
      },
      {
        title: "Web Performance Optimization",
        difficulty: "Advanced",
        duration: "15h",
        description: "Lazy loading, code splitting, Core Web Vitals",
      },
      {
        title: "Frontend Testing",
        difficulty: "Intermediate",
        duration: "12h",
        description:
          "Unit and integration testing with Jest and React Testing Library",
      },
      {
        title: "TypeScript for Frontend",
        difficulty: "Intermediate",
        duration: "15h",
        description: "Add type safety to your JavaScript projects",
      },
    ],
  },
  {
    id: "backend",
    icon: "⚙️",
    name: "Backend Development",
    subCourses: [
      {
        title: "Node.js Fundamentals",
        difficulty: "Beginner",
        duration: "20h",
        description: "Event loop, streams, modules, npm",
      },
      {
        title: "Express.js & REST APIs",
        difficulty: "Intermediate",
        duration: "20h",
        description: "Build production-grade web services",
      },
      {
        title: "Python & Django",
        difficulty: "Intermediate",
        duration: "25h",
        description: "Full-featured web framework for Python",
      },
      {
        title: "Authentication & JWT",
        difficulty: "Intermediate",
        duration: "12h",
        description: "Secure user authentication from scratch",
      },
      {
        title: "Microservices Architecture",
        difficulty: "Advanced",
        duration: "25h",
        description: "Design scalable distributed systems",
      },
      {
        title: "WebSockets & Real-time",
        difficulty: "Intermediate",
        duration: "15h",
        description: "Build live chat and notification systems",
      },
      {
        title: "Backend Testing & TDD",
        difficulty: "Advanced",
        duration: "15h",
        description: "Test-driven development for APIs",
      },
    ],
  },
  {
    id: "webdev",
    icon: "🌐",
    name: "Web Development",
    subCourses: [
      {
        title: "Web Fundamentals",
        difficulty: "Beginner",
        duration: "10h",
        description: "How the internet works, HTTP, browsers",
      },
      {
        title: "Responsive Web Design",
        difficulty: "Beginner",
        duration: "15h",
        description: "Flexbox, Grid, media queries",
      },
      {
        title: "SEO Fundamentals",
        difficulty: "Beginner",
        duration: "10h",
        description: "On-page SEO, structured data, performance",
      },
      {
        title: "Web Accessibility (a11y)",
        difficulty: "Intermediate",
        duration: "12h",
        description: "WCAG guidelines, screen readers, ARIA",
      },
      {
        title: "Progressive Web Apps (PWA)",
        difficulty: "Intermediate",
        duration: "15h",
        description: "Service workers, offline support, installable apps",
      },
      {
        title: "Web Security Basics",
        difficulty: "Intermediate",
        duration: "12h",
        description: "XSS, CSRF, Content Security Policy",
      },
      {
        title: "Static Site Generators",
        difficulty: "Beginner",
        duration: "10h",
        description: "Build fast sites with Next.js, Astro, Hugo",
      },
    ],
  },
  {
    id: "aiml",
    icon: "🤖",
    name: "AI & Machine Learning",
    subCourses: [
      {
        title: "Python for Machine Learning",
        difficulty: "Beginner",
        duration: "15h",
        description: "NumPy, Pandas, Python ML environment",
      },
      {
        title: "Statistics for Data Science",
        difficulty: "Beginner",
        duration: "15h",
        description: "Probability, distributions, hypothesis testing",
      },
      {
        title: "Supervised Learning",
        difficulty: "Intermediate",
        duration: "20h",
        description: "Regression, classification, decision trees",
      },
      {
        title: "Unsupervised Learning",
        difficulty: "Intermediate",
        duration: "15h",
        description: "Clustering, dimensionality reduction",
      },
      {
        title: "Deep Learning with TensorFlow",
        difficulty: "Advanced",
        duration: "30h",
        description: "Neural networks, CNNs, RNNs",
      },
      {
        title: "Natural Language Processing (NLP)",
        difficulty: "Advanced",
        duration: "25h",
        description: "Text processing, transformers, LLMs",
      },
      {
        title: "Computer Vision",
        difficulty: "Advanced",
        duration: "20h",
        description: "Image recognition, object detection with OpenCV",
      },
      {
        title: "ML Model Deployment",
        difficulty: "Advanced",
        duration: "15h",
        description: "Docker, FastAPI, cloud deployment of ML models",
      },
    ],
  },
  {
    id: "dataanalysis",
    icon: "📊",
    name: "Data Analysis",
    subCourses: [
      {
        title: "Data Analysis Fundamentals",
        difficulty: "Beginner",
        duration: "10h",
        description: "Data types, sources, and the analytics workflow",
      },
      {
        title: "Excel for Data Analysis",
        difficulty: "Beginner",
        duration: "12h",
        description: "Pivot tables, VLOOKUP, data validation",
      },
      {
        title: "SQL for Data Analysis",
        difficulty: "Intermediate",
        duration: "15h",
        description: "Complex queries, aggregations, window functions",
      },
      {
        title: "Python with Pandas & NumPy",
        difficulty: "Intermediate",
        duration: "20h",
        description: "Data wrangling and manipulation at scale",
      },
      {
        title: "Data Visualization",
        difficulty: "Intermediate",
        duration: "15h",
        description: "Matplotlib, Seaborn, Plotly dashboards",
      },
      {
        title: "Statistical Analysis",
        difficulty: "Intermediate",
        duration: "18h",
        description: "A/B testing, regression analysis, correlation",
      },
      {
        title: "Big Data with Spark",
        difficulty: "Advanced",
        duration: "20h",
        description: "Distributed data processing with PySpark",
      },
    ],
  },
  {
    id: "devops",
    icon: "☁️",
    name: "DevOps & Cloud",
    subCourses: [
      {
        title: "Linux Essentials",
        difficulty: "Beginner",
        duration: "12h",
        description: "Command line, file system, shell scripting",
      },
      {
        title: "Docker Fundamentals",
        difficulty: "Beginner",
        duration: "15h",
        description: "Containers, images, Docker Compose",
      },
      {
        title: "Kubernetes Basics",
        difficulty: "Intermediate",
        duration: "20h",
        description: "Orchestrate containers at scale",
      },
      {
        title: "AWS Cloud Fundamentals",
        difficulty: "Beginner",
        duration: "15h",
        description: "EC2, S3, IAM, VPC core services",
      },
      {
        title: "CI/CD with GitHub Actions",
        difficulty: "Intermediate",
        duration: "15h",
        description: "Automated testing and deployment pipelines",
      },
      {
        title: "Infrastructure as Code",
        difficulty: "Intermediate",
        duration: "18h",
        description: "Terraform and CloudFormation",
      },
      {
        title: "Cloud Security",
        difficulty: "Advanced",
        duration: "15h",
        description: "IAM best practices, encryption, compliance",
      },
      {
        title: "Monitoring & Observability",
        difficulty: "Intermediate",
        duration: "15h",
        description: "Prometheus, Grafana, ELK stack",
      },
    ],
  },
  {
    id: "mobile",
    icon: "📱",
    name: "Mobile Development",
    subCourses: [
      {
        title: "React Native Basics",
        difficulty: "Beginner",
        duration: "20h",
        description: "Build cross-platform mobile apps with React",
      },
      {
        title: "Flutter & Dart",
        difficulty: "Intermediate",
        duration: "25h",
        description: "Google's UI toolkit for mobile and web",
      },
      {
        title: "iOS Development with Swift",
        difficulty: "Intermediate",
        duration: "25h",
        description: "Native iOS apps with SwiftUI",
      },
      {
        title: "Android with Kotlin",
        difficulty: "Intermediate",
        duration: "25h",
        description: "Native Android apps with Jetpack Compose",
      },
      {
        title: "Mobile UI/UX Design Principles",
        difficulty: "Beginner",
        duration: "10h",
        description: "Touch targets, navigation patterns, performance",
      },
      {
        title: "App Store & Play Store Deployment",
        difficulty: "Beginner",
        duration: "8h",
        description: "Signing, publishing, and store optimization",
      },
    ],
  },
  {
    id: "database",
    icon: "🗄️",
    name: "Database & SQL",
    subCourses: [
      {
        title: "SQL Fundamentals",
        difficulty: "Beginner",
        duration: "12h",
        description: "SELECT, INSERT, UPDATE, DELETE basics",
      },
      {
        title: "Database Design & Modeling",
        difficulty: "Intermediate",
        duration: "15h",
        description: "ERDs, normalization, relationships",
      },
      {
        title: "PostgreSQL Deep Dive",
        difficulty: "Intermediate",
        duration: "20h",
        description: "Advanced queries, indexing, performance tuning",
      },
      {
        title: "MongoDB & NoSQL",
        difficulty: "Intermediate",
        duration: "15h",
        description: "Document databases, aggregation pipeline",
      },
      {
        title: "Redis & Caching",
        difficulty: "Intermediate",
        duration: "12h",
        description: "Key-value stores, pub/sub, session management",
      },
      {
        title: "Query Optimization",
        difficulty: "Advanced",
        duration: "15h",
        description: "Explain plans, indexes, execution strategy",
      },
      {
        title: "Transactions & ACID",
        difficulty: "Advanced",
        duration: "12h",
        description: "Concurrency, isolation levels, locking",
      },
    ],
  },
  {
    id: "cybersecurity",
    icon: "🔒",
    name: "Cybersecurity",
    subCourses: [
      {
        title: "Security Fundamentals",
        difficulty: "Beginner",
        duration: "12h",
        description: "CIA triad, threat modeling, security mindset",
      },
      {
        title: "Network Security Basics",
        difficulty: "Beginner",
        duration: "15h",
        description: "Firewalls, VPNs, network protocols",
      },
      {
        title: "Cryptography Essentials",
        difficulty: "Intermediate",
        duration: "15h",
        description: "Encryption, hashing, PKI, TLS",
      },
      {
        title: "Penetration Testing",
        difficulty: "Advanced",
        duration: "25h",
        description: "Ethical hacking, Metasploit, vulnerability assessment",
      },
      {
        title: "Web Application Security",
        difficulty: "Intermediate",
        duration: "20h",
        description: "OWASP Top 10, SQL injection, XSS",
      },
      {
        title: "Incident Response",
        difficulty: "Advanced",
        duration: "15h",
        description: "Detection, containment, forensics, recovery",
      },
      {
        title: "Secure Coding Practices",
        difficulty: "Intermediate",
        duration: "15h",
        description: "Input validation, output encoding, secure SDLC",
      },
    ],
  },
];

const DIFFICULTY_STYLES: Record<
  Difficulty,
  { label: string; className: string }
> = {
  Beginner: {
    label: "Beginner",
    className: "bg-emerald-950 text-emerald-400 border border-emerald-800",
  },
  Intermediate: {
    label: "Intermediate",
    className: "bg-amber-950 text-amber-400 border border-amber-800",
  },
  Advanced: {
    label: "Advanced",
    className: "bg-red-950 text-red-400 border border-red-800",
  },
};

function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const style = DIFFICULTY_STYLES[difficulty];
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${style.className}`}
    >
      {style.label}
    </span>
  );
}

function SubCourseRow({
  course,
  index,
  categoryId,
}: { course: SubCourse; index: number; categoryId: string }) {
  return (
    <div
      data-ocid={`courses.${categoryId}.item.${index + 1}`}
      className="grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-2 sm:gap-4 items-start sm:items-center py-3 px-4 border-b border-border/40 last:border-0 hover:bg-muted/20 transition-colors duration-150"
    >
      <div className="min-w-0">
        <p className="font-semibold text-foreground text-sm leading-snug truncate">
          {course.title}
        </p>
        <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">
          {course.description}
        </p>
      </div>
      <div className="flex items-center gap-2 sm:justify-end flex-wrap">
        <DifficultyBadge difficulty={course.difficulty} />
        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
          {course.duration}
        </span>
      </div>
    </div>
  );
}

function AccordionItem({
  category,
  isOpen,
  onToggle,
}: { category: CourseCategory; isOpen: boolean; onToggle: () => void }) {
  const panelId = `panel-${category.id}`;
  const triggerId = `trigger-${category.id}`;

  return (
    <div
      data-ocid={`courses.category.${category.id}`}
      className={`rounded-lg border transition-all duration-200 ${
        isOpen
          ? "border-primary/50 shadow-[0_0_0_1px_rgba(14,165,233,0.15),0_4px_20px_rgba(14,165,233,0.08)]"
          : "border-border hover:border-border/80"
      }`}
    >
      <button
        id={triggerId}
        type="button"
        data-ocid={`courses.category.${category.id}.toggle`}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className={`w-full flex items-center gap-3 px-4 py-4 text-left rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
          isOpen
            ? "bg-card border-l-2 border-l-primary rounded-l-none"
            : "bg-card hover:bg-muted/30"
        }`}
      >
        <span className="text-2xl select-none flex-shrink-0" aria-hidden="true">
          {category.icon}
        </span>
        <span className="flex-1 font-semibold text-foreground text-base min-w-0 truncate">
          {category.name}
        </span>
        <Badge
          variant="secondary"
          className="flex-shrink-0 text-xs bg-primary/10 text-primary border border-primary/20 font-medium"
        >
          {category.subCourses.length} courses
        </Badge>
        <ChevronDown
          aria-hidden="true"
          className={`flex-shrink-0 w-5 h-5 text-muted-foreground transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>

      <section
        id={panelId}
        aria-labelledby={triggerId}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${category.subCourses.length * 80}px` : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="border-t border-border/40">
          {category.subCourses.map((course, index) => (
            <SubCourseRow
              key={course.title}
              course={course}
              index={index}
              categoryId={category.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export function CoursesPage() {
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  function toggleCategory(id: string) {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  const totalCourses = CATEGORIES.reduce(
    (sum, c) => sum + c.subCourses.length,
    0,
  );

  return (
    <section
      data-ocid="courses.page"
      className="min-h-screen bg-background py-12 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Page header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {CATEGORIES.length} Categories · {totalCourses} Courses
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-3">
            Course Catalog
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Explore our comprehensive tech curriculum
          </p>
        </div>

        {/* Expand/Collapse all controls */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground">
            {openCategories.size} of {CATEGORIES.length} expanded
          </p>
          <div className="flex gap-2">
            <button
              data-ocid="courses.expand_all_button"
              type="button"
              onClick={() =>
                setOpenCategories(new Set(CATEGORIES.map((c) => c.id)))
              }
              className="text-xs text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
            >
              Expand all
            </button>
            <span className="text-muted-foreground text-xs">·</span>
            <button
              data-ocid="courses.collapse_all_button"
              type="button"
              onClick={() => setOpenCategories(new Set())}
              className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
            >
              Collapse all
            </button>
          </div>
        </div>

        {/* Accordion list */}
        <div data-ocid="courses.list" className="flex flex-col gap-2">
          {CATEGORIES.map((category) => (
            <AccordionItem
              key={category.id}
              category={category}
              isOpen={openCategories.has(category.id)}
              onToggle={() => toggleCategory(category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesPage;
