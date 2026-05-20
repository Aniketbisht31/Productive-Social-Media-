import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-green-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Ready to Start
            <br />
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Your Transformation?
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of builders, creators, and high-performers who are replacing
            scrolling with growth. Be among the first to experience the future of social
            media.
          </p>

          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="group px-8 py-4 bg-white text-black rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get Early Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            ) : (
              <motion.div
                className="p-6 rounded-2xl bg-green-500/20 border border-green-500/40 backdrop-blur-sm"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-green-400 font-semibold text-lg">
                  🎉 You're on the list! Check your email for next steps.
                </p>
              </motion.div>
            )}

            <p className="text-sm text-gray-500 mt-4">
              Join 10,000+ people on the waitlist. No spam, ever.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 pt-16 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-500 text-sm mb-4">
              © 2026 Productive Social Media. All rights reserved.
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
