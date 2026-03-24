import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Guide from '@/components/Guide';
import BrainDumpDemo from '@/components/BrainDumpDemo';
import Plan from '@/components/Plan';
import TaskSplitDemo from '@/components/TaskSplitDemo';
import TwoQuestions from '@/components/TwoQuestions';
import Features from '@/components/Features';
import HabitDemo from '@/components/HabitDemo';
import Success from '@/components/Success';
import Stakes from '@/components/Stakes';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TaskSplitDemo />
        <TwoQuestions />
        <Problem />
        <Guide />
        <BrainDumpDemo />
        <Plan />
        <Features />
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
