import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Vision from "./components/Vision";
import CTA from "./components/CTA";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Vision />
      <CTA />
    </div>
  );
}