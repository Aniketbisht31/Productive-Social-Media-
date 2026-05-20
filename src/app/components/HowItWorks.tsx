import { motion } from "motion/react";
import { Target, TrendingUp, Trophy } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Target,
      title: "Create Your Habits",
      description:
        "Define the habits you want to build. Coding, fitness, reading, meditation - anything that moves you forward.",
      color: "text-green-400",
      gradient: "from-green-500/20",
    },
    {
      number: "02",
      icon: TrendingUp,
      title: "Track Daily Progress",
      description:
        "Check in daily, mark completions, and watch your streaks grow. Simple actions compound into massive results.",
      color: "text-blue-400",
      gradient: "from-blue-500/20",
    },
    {
      number: "03",
      icon: Trophy,
      title: "Stay Accountable",
      description:
        "Share updates, get feedback, and celebrate wins with a community that actually cares about your growth.",
      color: "text-purple-400",
      gradient: "from-purple-500/20",
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three simple steps to transform your daily routine into a growth machine.
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex flex-col items-center md:items-start">
                  <div
                    className={`text-8xl font-bold bg-gradient-to-br ${step.gradient} to-transparent bg-clip-text text-transparent mb-4`}
                  >
                    {step.number}
                  </div>
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} to-transparent border border-white/10 flex items-center justify-center`}
                  >
                    <step.icon className={`w-10 h-10 ${step.color}`} />
                  </div>
                </div>

                <div className="md:w-2/3 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-10 top-full h-12 w-0.5 bg-gradient-to-b from-white/20 to-transparent mx-auto" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
