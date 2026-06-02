import {
  Outlet,
  createHashHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { AuthLayout } from "./components/AuthLayout";
import { DashboardPage } from "./components/DashboardPage";
import { HomePage } from "./components/HomePage";
import { Layout } from "./components/Layout";
import { PlayerRoute } from "./components/PlayerRoute";
import { QuizBuilder } from "./components/QuizBuilder";
import { QuizzesPage } from "./components/QuizzesPage";
import { ReportPage } from "./components/ReportPage";
import { ReportsListPage } from "./components/ReportsListPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CoursesPage } from "./pages/CoursesPage";
import { LearnMorePage } from "./pages/LearnMorePage";

const rootRoute = createRootRoute({
  component: Outlet,
});

// TechLearn Academy public routes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Home() {
    return (
      <Layout>
        <HomePage />
      </Layout>
    );
  },
});

const coursesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses",
  component: CoursesPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const learnMoreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/learn-more",
  component: LearnMorePage,
});

// Auth layout wraps all host routes
const authLayout = createRoute({
  getParentRoute: () => rootRoute,
  id: "auth",
  component: AuthLayout,
});

const dashboardRoute = createRoute({
  getParentRoute: () => authLayout,
  path: "/",
  component: DashboardPage,
});

const quizzesRoute = createRoute({
  getParentRoute: () => authLayout,
  path: "quizzes",
  component: QuizzesPage,
});

const builderNewRoute = createRoute({
  getParentRoute: () => authLayout,
  path: "builder",
  component: function NewQuizBuilder() {
    return <QuizBuilder quizId={null} />;
  },
});

const builderEditRoute = createRoute({
  getParentRoute: () => authLayout,
  path: "builder/$quizId",
  component: function EditQuizBuilder() {
    const { quizId } = builderEditRoute.useParams();
    return <QuizBuilder quizId={Number(quizId)} />;
  },
});

const reportsListRoute = createRoute({
  getParentRoute: () => authLayout,
  path: "reports",
  component: ReportsListPage,
});

const reportRoute = createRoute({
  getParentRoute: () => authLayout,
  path: "reports/$reportId",
  component: function ReportDetail() {
    const { reportId } = reportRoute.useParams();
    return <ReportPage reportId={Number(reportId)} />;
  },
});

// Player route — no auth required
const joinRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "join",
  component: PlayerRoute,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  coursesRoute,
  contactRoute,
  aboutRoute,
  learnMoreRoute,
  authLayout.addChildren([
    dashboardRoute,
    quizzesRoute,
    builderNewRoute,
    builderEditRoute,
    reportsListRoute,
    reportRoute,
  ]),
  joinRoute,
]);

export const router = createRouter({
  routeTree,
  history: createHashHistory(),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
