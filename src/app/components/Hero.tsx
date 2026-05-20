import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <p className="text-sm text-gray-300">A social network for self-growth</p>
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-br from-white via-white to-gray-400 bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Stop Scrolling.
          <br />
          Start Improving.
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Replace mindless scrolling with meaningful progress. Track habits, build
          streaks, and stay accountable with a community focused on growth.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="group px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
            Join the Waitlist
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/5 text-white rounded-full font-medium text-lg border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
            Learn More
          </button>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-8 shadow-2xl">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-3">
                  <div className="w-6 h-6 rounded-full bg-green-500" />
                </div>
                <div className="h-2 w-3/4 bg-white/20 rounded mb-2" />
                <div className="h-2 w-1/2 bg-white/10 rounded" />
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500" />
                </div>
                <div className="h-2 w-3/4 bg-white/20 rounded mb-2" />
                <div className="h-2 w-1/2 bg-white/10 rounded" />
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500" />
                </div>
                <div className="h-2 w-3/4 bg-white/20 rounded mb-2" />
                <div className="h-2 w-1/2 bg-white/10 rounded" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
