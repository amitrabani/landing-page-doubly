import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VisualProblem from '@/components/VisualProblem';
import BrainDumpDemo from '@/components/BrainDumpDemo';
import Plan from '@/components/Plan';
import TaskSplitDemo from '@/components/TaskSplitDemo';
import TwoQuestions from '@/components/TwoQuestions';
import HabitDemo from '@/components/HabitDemo';
import Success from '@/components/Success';
import Stakes from '@/components/Stakes';
import Testimonials from '@/components/Testimonials';
import ToolsSection from '@/components/ToolsSection';
import FinalCTA from '@/components/FinalCTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import AmbientBackground from '@/components/AmbientBackground';
import SmoothScroll from '@/components/motion/SmoothScroll';
import ScrollProgress from '@/components/motion/ScrollProgress';
import Preloader from '@/components/motion/Preloader';
import CustomCursor from '@/components/motion/CustomCursor';
import { defaultLocale, type Locale } from '@/i18n/config';

// The full marketing homepage. Rendered by both the default-locale route
// ((main)/page.tsx) and the localized route ([locale]/page.tsx); the active
// language is supplied by the TranslationProvider in each tree's root layout.
// `locale` is threaded to the server-rendered sections (ToolsSection) that
// can't read the client-side provider.
export default function HomePage({ locale = defaultLocale }: { locale?: Locale }) {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <SmoothScroll />
      <ScrollProgress />
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <VisualProblem />
        <TaskSplitDemo />
        <BrainDumpDemo />
        <Plan />
        <TwoQuestions />
        <HabitDemo />
        <Success />
        <Stakes />
        <Testimonials />
        <ToolsSection locale={locale} />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
