import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  BookOpen,
  Brain,
  ChevronDown,
  ChevronUp,
  Cloud,
  Code2,
  Database,
  Globe,
  Layers,
  Server,
  Shield,
  Smartphone,
} from "lucide-react";
import { useState } from "react";

interface SubCourse {
  title: string;
  level: string;
  duration: string;
  description: string;
}

interface CourseCategory {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  totalLessons: string;
  subCourses: SubCourse[];
}

const courseCategories: CourseCategory[] = [
  {
    id: "full-stack",
    icon: Layers,
    title: "Full Stack Development",
    description:
      "Build complete web applications from database to UI. Master both frontend and backend technologies.",
    totalLessons: "50+ Lessons",
    subCourses: [
      {
        title: "HTML5 & CSS3 Fundamentals",
        level: "Beginner",
        duration: "8h",
        description:
          "Build well-structured web pages using modern HTML5 elements and style them with CSS3 layouts.",
      },
      {
        title: "JavaScript: Zero to Hero",
        level: "Beginner",
        duration: "15h",
        description:
          "Learn JavaScript from variables and functions all the way to async/await and ES6+ features.",
      },
      {
        title: "React.js Complete Guide",
        level: "Intermediate",
        duration: "20h",
        description:
          "Build dynamic single-page applications using React components, hooks, and state management.",
      },
      {
        title: "Node.js & Express APIs",
        level: "Intermediate",
        duration: "12h",
        description:
          "Create RESTful APIs and server-side logic using Node.js and the Express framework.",
      },
      {
        title: "PostgreSQL & MongoDB",
        level: "Intermediate",
        duration: "10h",
        description:
          "Store and query application data in both relational and document-based database systems.",
      },
      {
        title: "Full Stack Projects",
        level: "Advanced",
        duration: "18h",
        description:
          "Combine everything you've learned to ship real-world full-stack applications end to end.",
      },
      {
        title: "Docker & Deployment",
        level: "Advanced",
        duration: "8h",
        description:
          "Containerize your apps with Docker and deploy them to the cloud using modern CI/CD practices.",
      },
    ],
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Dive into neural networks, deep learning, Python, and practical ML model deployment.",
    totalLessons: "60+ Lessons",
    subCourses: [
      {
        title: "Python for Data Science",
        level: "Beginner",
        duration: "10h",
        description:
          "Write Python code confidently and use it to manipulate, analyse, and visualise data.",
      },
      {
        title: "NumPy & Pandas Essentials",
        level: "Beginner",
        duration: "8h",
        description:
          "Efficiently process numerical arrays and tabular datasets using NumPy and Pandas.",
      },
      {
        title: "Machine Learning with Scikit-Learn",
        level: "Intermediate",
        duration: "16h",
        description:
          "Train, evaluate, and tune supervised and unsupervised machine learning models from scratch.",
      },
      {
        title: "Deep Learning with TensorFlow",
        level: "Intermediate",
        duration: "18h",
        description:
          "Design and train deep neural networks for classification, regression, and sequence tasks.",
      },
      {
        title: "Natural Language Processing",
        level: "Advanced",
        duration: "14h",
        description:
          "Build pipelines that understand, classify, and generate human language with modern NLP techniques.",
      },
      {
        title: "Computer Vision with PyTorch",
        level: "Advanced",
        duration: "16h",
        description:
          "Apply convolutional networks to detect objects, segment images, and solve visual recognition tasks.",
      },
      {
        title: "MLOps & Model Deployment",
        level: "Advanced",
        duration: "10h",
        description:
          "Package, monitor, and serve ML models in production using industry-standard MLOps tooling.",
      },
      {
        title: "Generative AI & LLMs",
        level: "Advanced",
        duration: "12h",
        description:
          "Understand and fine-tune large language models to build powerful generative AI applications.",
      },
    ],
  },
  {
    id: "data-analysis",
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "Extract insights from data using Python, SQL, visualization tools, and statistical analysis.",
    totalLessons: "45+ Lessons",
    subCourses: [
      {
        title: "SQL for Data Analysts",
        level: "Beginner",
        duration: "10h",
        description:
          "Write SQL queries to extract, filter, and aggregate data from relational databases.",
      },
      {
        title: "Excel & Google Sheets for Data",
        level: "Beginner",
        duration: "6h",
        description:
          "Use spreadsheet formulas, pivot tables, and charts to explore and summarise datasets.",
      },
      {
        title: "Python Data Analysis with Pandas",
        level: "Intermediate",
        duration: "12h",
        description:
          "Clean, reshape, and analyse structured datasets efficiently using the Pandas library.",
      },
      {
        title: "Data Visualization with Matplotlib & Seaborn",
        level: "Intermediate",
        duration: "8h",
        description:
          "Craft clear, compelling charts and statistical plots to communicate insights visually.",
      },
      {
        title: "Tableau & Power BI",
        level: "Intermediate",
        duration: "10h",
        description:
          "Build interactive business intelligence dashboards without writing a single line of code.",
      },
      {
        title: "Statistics & Probability",
        level: "Intermediate",
        duration: "12h",
        description:
          "Understand distributions, hypothesis testing, and probability to reason rigorously about data.",
      },
      {
        title: "Advanced Analytics & Forecasting",
        level: "Advanced",
        duration: "14h",
        description:
          "Apply time-series models and predictive analytics to forecast trends and business outcomes.",
      },
    ],
  },
  {
    id: "frontend",
    icon: Code2,
    title: "Frontend Development",
    description:
      "Master HTML, CSS, JavaScript, and modern frameworks for building polished web interfaces.",
    totalLessons: "40+ Lessons",
    subCourses: [
      {
        title: "HTML5 Semantic Markup",
        level: "Beginner",
        duration: "5h",
        description:
          "Structure web content meaningfully with semantic HTML5 tags for better accessibility and SEO.",
      },
      {
        title: "CSS3 & Flexbox & Grid",
        level: "Beginner",
        duration: "8h",
        description:
          "Master modern CSS layout techniques to build responsive, pixel-perfect designs.",
      },
      {
        title: "JavaScript Fundamentals",
        level: "Beginner",
        duration: "12h",
        description:
          "Learn the core language features of JavaScript needed to make web pages interactive.",
      },
      {
        title: "TypeScript Essentials",
        level: "Intermediate",
        duration: "8h",
        description:
          "Add static types to your JavaScript codebase to catch bugs early and improve code quality.",
      },
      {
        title: "React & Next.js",
        level: "Intermediate",
        duration: "20h",
        description:
          "Build fast, SEO-friendly React apps with server-side rendering powered by Next.js.",
      },
      {
        title: "Vue.js & Nuxt",
        level: "Intermediate",
        duration: "16h",
        description:
          "Create reactive user interfaces and full-stack apps using Vue.js and the Nuxt framework.",
      },
      {
        title: "Web Performance Optimization",
        level: "Advanced",
        duration: "8h",
        description:
          "Diagnose and fix performance bottlenecks to deliver sub-second load times in production.",
      },
      {
        title: "Accessibility & WCAG Guidelines",
        level: "Intermediate",
        duration: "6h",
        description:
          "Ensure your web interfaces are usable by everyone by following WCAG 2.1 accessibility standards.",
      },
    ],
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend Development",
    description:
      "Build robust server-side systems, APIs, and microservices with modern backend technologies.",
    totalLessons: "45+ Lessons",
    subCourses: [
      {
        title: "Node.js Fundamentals",
        level: "Beginner",
        duration: "10h",
        description:
          "Build server-side JavaScript programs and understand the event loop, modules, and npm ecosystem.",
      },
      {
        title: "Python Django & Flask",
        level: "Intermediate",
        duration: "15h",
        description:
          "Develop full-featured web applications and lightweight REST APIs using Python's top frameworks.",
      },
      {
        title: "Java Spring Boot",
        level: "Intermediate",
        duration: "18h",
        description:
          "Create enterprise-grade backend services quickly with the Spring Boot opinionated framework.",
      },
      {
        title: "REST API Design",
        level: "Intermediate",
        duration: "8h",
        description:
          "Design intuitive, consistent RESTful APIs that are easy to consume and maintain over time.",
      },
      {
        title: "GraphQL APIs",
        level: "Intermediate",
        duration: "10h",
        description:
          "Build flexible, efficient APIs that let clients request exactly the data they need with GraphQL.",
      },
      {
        title: "Microservices Architecture",
        level: "Advanced",
        duration: "14h",
        description:
          "Decompose monolithic systems into independently deployable microservices that scale with demand.",
      },
      {
        title: "Authentication & Security",
        level: "Intermediate",
        duration: "8h",
        description:
          "Implement secure login flows, JWTs, OAuth, and protect APIs from common attack vectors.",
      },
    ],
  },
  {
    id: "database",
    icon: Database,
    title: "Database Engineering",
    description:
      "Design, optimize, and manage both relational and NoSQL databases for scalable applications.",
    totalLessons: "35+ Lessons",
    subCourses: [
      {
        title: "SQL Fundamentals",
        level: "Beginner",
        duration: "8h",
        description:
          "Learn to create, query, and update relational databases using standard SQL syntax.",
      },
      {
        title: "PostgreSQL Deep Dive",
        level: "Intermediate",
        duration: "12h",
        description:
          "Explore advanced PostgreSQL features including indexes, JSON support, and window functions.",
      },
      {
        title: "MySQL & Relational Design",
        level: "Intermediate",
        duration: "10h",
        description:
          "Design normalised relational schemas and optimise queries in production MySQL environments.",
      },
      {
        title: "MongoDB & NoSQL",
        level: "Intermediate",
        duration: "10h",
        description:
          "Model flexible document data and write aggregation pipelines in MongoDB for scalable apps.",
      },
      {
        title: "Redis & Caching Strategies",
        level: "Advanced",
        duration: "8h",
        description:
          "Dramatically speed up applications by implementing smart caching layers with Redis.",
      },
      {
        title: "Database Performance Tuning",
        level: "Advanced",
        duration: "10h",
        description:
          "Identify slow queries, design efficient indexes, and tune database configuration for peak throughput.",
      },
    ],
  },
  {
    id: "devops",
    icon: Cloud,
    title: "DevOps & Cloud",
    description:
      "Automate, deploy, and scale applications with CI/CD pipelines, containers, and cloud platforms.",
    totalLessons: "40+ Lessons",
    subCourses: [
      {
        title: "Linux Command Line Essentials",
        level: "Beginner",
        duration: "8h",
        description:
          "Navigate filesystems, manage processes, and automate tasks using the Linux terminal.",
      },
      {
        title: "Git & GitHub Workflows",
        level: "Beginner",
        duration: "6h",
        description:
          "Version-control your code and collaborate effectively with branching and pull request workflows.",
      },
      {
        title: "Docker & Containerization",
        level: "Intermediate",
        duration: "10h",
        description:
          "Package applications and their dependencies into portable containers using Docker.",
      },
      {
        title: "Kubernetes Orchestration",
        level: "Advanced",
        duration: "16h",
        description:
          "Deploy, scale, and manage containerised workloads across clusters with Kubernetes.",
      },
      {
        title: "AWS Cloud Foundations",
        level: "Intermediate",
        duration: "14h",
        description:
          "Provision and manage core AWS services like EC2, S3, RDS, and IAM for real-world projects.",
      },
      {
        title: "CI/CD with GitHub Actions",
        level: "Intermediate",
        duration: "8h",
        description:
          "Automate testing, building, and deployment pipelines using GitHub Actions workflows.",
      },
      {
        title: "Infrastructure as Code (Terraform)",
        level: "Advanced",
        duration: "12h",
        description:
          "Define and provision cloud infrastructure declaratively using Terraform HCL configurations.",
      },
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Build cross-platform and native mobile applications for iOS and Android.",
    totalLessons: "35+ Lessons",
    subCourses: [
      {
        title: "React Native Fundamentals",
        level: "Beginner",
        duration: "12h",
        description:
          "Build your first cross-platform mobile apps using React Native and JavaScript you already know.",
      },
      {
        title: "Flutter & Dart Basics",
        level: "Beginner",
        duration: "14h",
        description:
          "Create beautiful, natively compiled iOS and Android apps from a single Dart codebase.",
      },
      {
        title: "iOS Development with Swift",
        level: "Intermediate",
        duration: "18h",
        description:
          "Design and ship native iPhone and iPad apps using Swift and the UIKit/SwiftUI frameworks.",
      },
      {
        title: "Android with Kotlin",
        level: "Intermediate",
        duration: "16h",
        description:
          "Build modern Android applications with Kotlin, Jetpack Compose, and Material Design.",
      },
      {
        title: "Mobile App Performance",
        level: "Advanced",
        duration: "8h",
        description:
          "Profile, optimise, and reduce battery/memory usage to deliver smooth 60fps mobile experiences.",
      },
      {
        title: "Publishing to App Stores",
        level: "Intermediate",
        duration: "4h",
        description:
          "Prepare, sign, and submit your app to the Apple App Store and Google Play Store.",
      },
    ],
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect systems and data with ethical hacking, security auditing, and defensive practices.",
    totalLessons: "35+ Lessons",
    subCourses: [
      {
        title: "Cybersecurity Fundamentals",
        level: "Beginner",
        duration: "8h",
        description:
          "Understand the threat landscape, common attack types, and foundational security principles.",
      },
      {
        title: "Network Security",
        level: "Intermediate",
        duration: "10h",
        description:
          "Protect network infrastructure by configuring firewalls, VPNs, and intrusion detection systems.",
      },
      {
        title: "Ethical Hacking & Penetration Testing",
        level: "Advanced",
        duration: "16h",
        description:
          "Learn to think like an attacker and conduct authorised penetration tests on real systems.",
      },
      {
        title: "Web Application Security",
        level: "Intermediate",
        duration: "12h",
        description:
          "Identify and remediate OWASP Top 10 vulnerabilities in web applications you build or audit.",
      },
      {
        title: "Cryptography Basics",
        level: "Intermediate",
        duration: "8h",
        description:
          "Understand symmetric and asymmetric encryption, hashing, and how TLS secures the web.",
      },
      {
        title: "Security Operations (SOC)",
        level: "Advanced",
        duration: "14h",
        description:
          "Monitor, detect, and respond to security incidents using SIEM tools and SOC workflows.",
      },
    ],
  },
  {
    id: "web-dev",
    icon: Globe,
    title: "Web Development",
    description:
      "A comprehensive track covering everything from static sites to dynamic web applications.",
    totalLessons: "45+ Lessons",
    subCourses: [
      {
        title: "Web Fundamentals (HTML/CSS/JS)",
        level: "Beginner",
        duration: "12h",
        description:
          "Build your first functional web pages by combining HTML structure, CSS styles, and JavaScript logic.",
      },
      {
        title: "Responsive Design & Mobile-First",
        level: "Beginner",
        duration: "6h",
        description:
          "Create layouts that look great on every screen size using media queries and mobile-first principles.",
      },
      {
        title: "JavaScript DOM Manipulation",
        level: "Beginner",
        duration: "8h",
        description:
          "Dynamically update page content and respond to user events by manipulating the browser DOM.",
      },
      {
        title: "Modern CSS (Tailwind, CSS-in-JS)",
        level: "Intermediate",
        duration: "8h",
        description:
          "Style components rapidly with utility-first Tailwind CSS and scoped CSS-in-JS approaches.",
      },
      {
        title: "Progressive Web Apps (PWA)",
        level: "Intermediate",
        duration: "10h",
        description:
          "Transform web apps into installable, offline-capable experiences using service workers and manifests.",
      },
      {
        title: "WebSockets & Real-Time Apps",
        level: "Advanced",
        duration: "10h",
        description:
          "Build live chat, dashboards, and collaborative tools using WebSocket bi-directional communication.",
      },
      {
        title: "SEO & Web Analytics",
        level: "Intermediate",
        duration: "6h",
        description:
          "Optimise your site for search engines and measure user behaviour with Google Analytics and Search Console.",
      },
    ],
  },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-chart-3/15 text-chart-3 border-chart-3/30",
  Intermediate: "bg-primary/15 text-primary border-primary/30",
  Advanced: "bg-chart-4/15 text-chart-4 border-chart-4/30",
};

function CategoryCard({ category }: { category: CourseCategory }) {
  const [open, setOpen] = useState(false);
  const Icon = category.icon;

  return (
    <article
      className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-200"
      data-ocid={`courses.category.${category.id}`}
    >
      {/* Header */}
      <button
        type="button"
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-muted/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`subcourses-${category.id}`}
        data-ocid={`courses.category.toggle.${category.id}`}
      >
        <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-foreground">{category.title}</h3>
            <Badge
              variant="outline"
              className="text-xs border-muted text-muted-foreground"
            >
              {category.totalLessons}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-0.5 truncate">
            {category.description}
          </p>
        </div>
        <div className="shrink-0 text-muted-foreground">
          {open ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </button>

      {/* Sub-courses */}
      {open && (
        <div
          id={`subcourses-${category.id}`}
          className="border-t border-border px-5 pb-4 pt-3 bg-background/50"
        >
          <ul className="space-y-2">
            {category.subCourses.map((sub, i) => (
              <li
                key={sub.title}
                className="flex items-start gap-3 py-2 px-3 rounded-lg hover:bg-muted/40 transition-colors"
                data-ocid={`courses.subcourse.${category.id}.item.${i + 1}`}
              >
                <BookOpen className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <span className="text-sm text-foreground block">
                    {sub.title}
                  </span>
                  <span className="text-xs text-muted-foreground block mt-0.5">
                    {sub.description}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0 mt-0.5">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border font-medium ${levelColors[sub.level] ?? ""}`}
                  >
                    {sub.level}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {sub.duration}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export function CoursesPage() {
  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Page Header */}
        <div className="bg-card border-b border-border py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <Badge
              variant="outline"
              className="mb-4 border-primary/40 text-primary bg-primary/10 text-xs"
            >
              Course Catalog
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              All Courses
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              10 comprehensive tracks covering every major area of modern
              software development. Expand any category to browse its
              sub-courses.
            </p>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="space-y-4" data-ocid="courses.list">
            {courseCategories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
