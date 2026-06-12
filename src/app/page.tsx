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
import FinalCTA from '@/components/FinalCTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import AmbientBackground from '@/components/AmbientBackground';
import SmoothScroll from '@/components/motion/SmoothScroll';

export default function Home() {
  return (
    <>
      <SmoothScroll />
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
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
