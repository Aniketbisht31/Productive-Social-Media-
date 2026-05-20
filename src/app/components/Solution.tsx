import { motion } from "motion/react";
import { TrendingUp, Users, Target } from "lucide-react";

export default function Solution() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Replace Dopamine
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                with Discipline
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Productive Social Media transforms your feed into a growth engine. Every
              minute spent here moves you forward, not backward.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Track Real Progress</h4>
                  <p className="text-gray-400">Visualize your growth with data, not likes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Accountability Partners
                  </h4>
                  <p className="text-gray-400">
                    Connect with others who push you to be better.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Built for Focus</h4>
                  <p className="text-gray-400">
                    Time limits and intentional design prevent endless scrolling.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-sm">
              <div className="space-y-4">
                {[
                  { label: "Coding", value: 87, color: "bg-green-500" },
                  { label: "Fitness", value: 92, color: "bg-blue-500" },
                  { label: "Reading", value: 78, color: "bg-purple-500" },
                  { label: "Learning", value: 95, color: "bg-orange-500" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{item.label}</span>
                      <span className="text-gray-400">{item.value}% streak</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${item.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">47</div>
                    <div className="text-sm text-gray-400">Day Streak</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">12</div>
                    <div className="text-sm text-gray-400">Active Habits</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">89%</div>
                    <div className="text-sm text-gray-400">Consistency</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
