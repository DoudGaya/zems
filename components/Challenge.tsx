"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FileX, UserX, Building, BarChart2, AlertCircle, Clock,
  HelpCircle,
} from "lucide-react";

const CHALLENGES = [
  {
    icon: FileX,
    title: "Fragmented Student Records",
    desc: "Enrollment is tracked in scattered manual registers — making accurate learner counts impossible and policy decisions unreliable.",
    color: "rose",
  },
  {
    icon: UserX,
    title: "lost data & Duplicate Students",
    desc: "Without digital verification, payrolls carry inactive staff and reports inflate enrollment with duplicate or non-existent records.",
    color: "orange",
  },
  {
    icon: Building,
    title: "No Infrastructure Visibility",
    desc: "The Ministry cannot see classroom conditions, sanitation, or equipment gaps across schools without expensive field inspections.",
    color: "amber",
  },
  {
    icon: BarChart2,
    title: "Limited Performance Monitoring",
    desc: "Examination results and learner progress are not tracked systematically, so struggling schools receive no early intervention.",
    color: "rose",
  },
  {
    icon: AlertCircle,
    title: "Weak Attendance Tracking",
    desc: "Student and teacher absenteeism is not measured in real time, concealing chronic patterns that directly reduce learning outcomes.",
    color: "orange",
  },
  {
    icon: Clock,
    title: "Delayed & Inaccurate Reporting",
    desc: "Paper-based annual school census data arrives months late, leaving Government making decisions based on outdated information.",
    color: "amber",
  },
];

const colorMap: Record<string, { card: string; icon: string; iconBg: string }> = {
  rose:   { card: "hover:border-rose-500/40",   icon: "text-rose-400",   iconBg: "bg-rose-500/10 border-rose-500/20" },
  orange: { card: "hover:border-orange-500/40", icon: "text-orange-400", iconBg: "bg-orange-500/10 border-orange-500/20" },
  amber:  { card: "hover:border-amber-500/40",  icon: "text-amber-400",  iconBg: "bg-amber-500/10 border-amber-500/20" },
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, delay },
});

export default function Challenge() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="relative min-h-screen bg-[#060d1a] py-24 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(239,68,68,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Eyebrow */}
        <motion.p {...fadeUp(0)} className="text-rose-500 font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          The Problem
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-bold text-white text-center mb-4 leading-tight">
          Why the Current System{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
            Must Change
          </span>
        </motion.h2>

        <motion.p {...fadeUp(0.2)} className="text-slate-400 text-lg text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          Effective education governance depends on reliable, timely data. Without it, resources are wasted, problems go undetected, and children fall through the cracks.
        </motion.p>

        {/* Challenge cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CHALLENGES.map(({ icon: Icon, title, desc, color }, i) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={i}
                {...fadeUp(0.1 * i + 0.25)}
                className={`glass-card rounded-2xl p-6 transition-all duration-300 group ${c.card} hover:-translate-y-1`}
              >
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 transition-all duration-300 ${c.iconBg}`}>
                  <Icon className={`w-5 h-5 ${c.icon}`} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 leading-snug">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* The big question */}
        <motion.div {...fadeUp(0.85)} className="mt-14 p-6 md:p-8 bg-gradient-to-r from-amber-950/40 to-orange-950/40 border border-amber-700/30 rounded-2xl text-center">
          <HelpCircle className="w-8 h-8 text-amber-400 mx-auto mb-3" />
          <p className="text-amber-300 text-xl md:text-2xl font-semibold leading-snug">
            &ldquo;How can Government improve what it cannot clearly see?&rdquo;
          </p>
          <p className="text-amber-600 text-sm mt-2">
            A statewide EMIS answers this question — permanently.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
