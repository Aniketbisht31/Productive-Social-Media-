import { motion } from "motion/react";
import {
  CheckCircle2,
  Flame,
  Users,
  Timer,
  Bot,
  BarChart3,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: CheckCircle2,
      title: "Habit Tracking",
      description:
        "Create custom habits and track your daily progress with beautiful, intuitive interfaces.",
      gradient: "from-green-500/20 to-emerald-900/5",
      border: "border-green-500/20",
      iconColor: "text-green-400",
    },
    {
      icon: Flame,
      title: "Streak System",
      description:
        "Build momentum with daily streaks. Never break the chain and watch your consistency soar.",
      gradient: "from-orange-500/20 to-red-900/5",
      border: "border-orange-500/20",
      iconColor: "text-orange-400",
    },
    {
      icon: Users,
      title: "Social Accountability",
      description:
        "Connect with accountability partners who keep you honest and celebrate your wins.",
      gradient: "from-blue-500/20 to-indigo-900/5",
      border: "border-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Timer,
      title: "Time-Limited Usage",
      description:
        "Built-in time limits prevent endless scrolling. Be intentional, not addicted.",
      gradient: "from-purple-500/20 to-violet-900/5",
      border: "border-purple-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: Bot,
      title: "AI Habit Coach",
      description:
        "Get personalized insights and recommendations from an AI that understands your goals.",
      gradient: "from-pink-500/20 to-rose-900/5",
      border: "border-pink-500/20",
      iconColor: "text-pink-400",
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description:
        "Deep insights into your behavior patterns with beautiful charts and actionable data.",
      gradient: "from-cyan-500/20 to-teal-900/5",
      border: "border-cyan-500/20",
      iconColor: "text-cyan-400",
    },
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Built for Growth
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to transform your habits and build the life you want.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`h-full p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} border ${feature.border} backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer`}
              >
                <feature.icon
                  className={`w-12 h-12 ${feature.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
                />
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
