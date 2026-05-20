import { motion } from "motion/react";
import { Sparkles, Users, Rocket } from "lucide-react";

export default function Vision() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <p className="text-sm text-gray-300">Join the Movement</p>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Built by{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Builders
            </span>
            ,<br />
            for Builders
          </h2>

          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            We're creating a new kind of social platform where every minute spent makes
            you better. Where your feed inspires action, not envy. Where your community
            holds you accountable, not just entertained.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Users className="w-10 h-10 text-blue-400 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <p className="text-gray-400">Early Adopters</p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Rocket className="w-10 h-10 text-purple-400 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-white mb-2">500K+</div>
              <p className="text-gray-400">Habits Tracked</p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="w-10 h-10 text-yellow-400 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-white mb-2">92%</div>
              <p className="text-gray-400">Success Rate</p>
            </motion.div>
          </div>

          <motion.div
            className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-2xl text-white italic leading-relaxed">
              "The only social network that actually makes me feel productive. I've built
              more consistent habits in 30 days than I did all last year."
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-500" />
              <div className="text-left">
                <p className="text-white font-semibold">Sarah Chen</p>
                <p className="text-gray-400 text-sm">Software Engineer</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
