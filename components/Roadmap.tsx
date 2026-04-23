"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const PHASES = [
  {
    phase: "01",
    title: "Inception & Assessment",
    duration: "Months 1–2",
    color: "emerald",
    items: ["Stakeholder consultations", "Needs & gap assessment", "Governance setup"],
  },
  {
    phase: "02",
    title: "Requirements & Design",
    duration: "Months 3–5",
    color: "teal",
    items: ["Functional requirements", "System architecture", "Data model design"],
  },
  {
    phase: "03",
    title: "Development",
    duration: "Months 6–12",
    color: "cyan",
    items: ["Platform build", "Module configuration", "Dashboard development"],
  },
  {
    phase: "04",
    title: "Data Preparation",
    duration: "Months 10–13",
    color: "blue",
    items: ["School profiling", "Legacy data migration", "Quality validation"],
  },
  {
    phase: "05",
    title: "Pilot Deployment",
    duration: "Months 13–16",
    color: "violet",
    items: ["Selected LGA pilot", "User training", "Feedback & iteration"],
  },
  {
    phase: "06",
    title: "Statewide Rollout",
    duration: "Months 16–21",
    color: "purple",
    items: ["All schools onboarded", "Full user rollout", "Helpdesk operations"],
  },
  {
    phase: "07",
    title: "Institutionalisation",
    duration: "Months 21–24+",
    color: "pink",
    items: ["EMIS unit established", "Continuous training", "Maintenance & upgrades"],
  },
];

const colorMap: Record<string, { border: string; phase: string; badge: string; check: string; line: string }> = {
  emerald: { border: "border-emerald-500/40", phase: "text-emerald-400",  badge: "bg-emerald-600",    check: "text-emerald-400", line: "bg-emerald-800" },
  teal:    { border: "border-teal-500/40",    phase: "text-teal-400",     badge: "bg-teal-600",       check: "text-teal-400",    line: "bg-teal-800" },
  cyan:    { border: "border-cyan-500/40",    phase: "text-cyan-400",     badge: "bg-cyan-600",       check: "text-cyan-400",    line: "bg-cyan-800" },
  blue:    { border: "border-blue-500/40",    phase: "text-blue-400",     badge: "bg-blue-600",       check: "text-blue-400",    line: "bg-blue-800" },
  violet:  { border: "border-violet-500/40",  phase: "text-violet-400",   badge: "bg-violet-600",     check: "text-violet-400",  line: "bg-violet-800" },
  purple:  { border: "border-purple-500/40",  phase: "text-purple-400",   badge: "bg-purple-600",     check: "text-purple-400",  line: "bg-purple-800" },
  pink:    { border: "border-pink-500/40",    phase: "text-pink-400",     badge: "bg-pink-600",       check: "text-pink-400",    line: "bg-pink-800" },
};

export default function Roadmap() {
  return (
    <div className="relative bg-[#060d1a] py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(16,185,129,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-emerald-500 font-semibold text-sm uppercase tracking-widest mb-3 text-center"
        >
          Implementation Roadmap
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
        >
          From Concept to{" "}
          <span className="gradient-text">Full Deployment</span>
          <br />in 24 Months
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg text-center max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          A structured, phased rollout that minimises risk, ensures adoption, and delivers visible value at every stage — from pilot schools to statewide coverage.
        </motion.p>

        {/* Phase timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {PHASES.map(({ phase, title, duration, color, items }, i) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: 0.08 * i + 0.2 }}
                className={`glass-card border rounded-2xl p-5 ${c.border} hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4`}
              >
                {/* Phase number & badge */}
                <div className="flex items-start justify-between gap-2">
                  <span className={`text-4xl font-black ${c.phase} opacity-60 leading-none`}>{phase}</span>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full text-white whitespace-nowrap ${c.badge}`}>
                    {duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-base leading-snug">{title}</h3>

                {/* Items */}
                <ul className="space-y-1.5">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${c.check}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

          {/* Total duration card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.65 }}
            className="glass-card border border-emerald-500/30 rounded-2xl p-5 bg-emerald-950/20 flex flex-col items-center justify-center text-center gap-2"
          >
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Total Duration</p>
            <p className="text-5xl font-black text-white">24</p>
            <p className="text-emerald-400 font-bold">Months</p>
            <p className="text-slate-500 text-xs mt-2 leading-relaxed">
              From project inception to full statewide operationalisation
            </p>
          </motion.div>
        </div>

        {/* Sustainability note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.7 }}
          className="mt-12 p-6 glass-card border border-emerald-800/40 rounded-2xl text-center"
        >
          <p className="text-white font-semibold text-lg mb-1">
            Sustainability is built in from Day One
          </p>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
            A dedicated EMIS unit within the Ministry, a Training-of-Trainers model, annual maintenance budget, and a 4-tier support structure ensure the system remains operational and valuable long after initial deployment.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
