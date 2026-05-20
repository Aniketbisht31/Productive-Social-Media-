import { motion } from "motion/react";
import { Smartphone, Clock, Brain } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: Smartphone,
      title: "Endless Scrolling",
      description: "Hours wasted on content that adds zero value to your life.",
    },
    {
      icon: Clock,
      title: "Time Theft",
      description: "Your most valuable resource stolen by addictive algorithms.",
    },
    {
      icon: Brain,
      title: "Dopamine Addiction",
      description: "Quick hits of validation instead of real accomplishment.",
    },
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            The Problem is Clear
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Traditional social media hijacks your attention and gives you nothing in
            return. It's time for something different.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-900/5 border border-red-500/20 backdrop-blur-sm hover:border-red-500/40 transition-all duration-300 h-full">
                <problem.icon className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-white">{problem.title}</h3>
                <p className="text-gray-400 leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
