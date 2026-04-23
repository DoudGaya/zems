"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Layers, ArrowDown } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, delay },
});

const PILLARS = [
  {
    title: "Centralise",
    desc: "One unified platform. All education data — schools, students, staff, and infrastructure — in a single source of truth.",
    color: "from-emerald-600 to-teal-600",
  },
  {
    title: "Monitor",
    desc: "Real-time dashboards and automated KPIs give the Commissioner and Governor instant visibility into every school in the state.",
    color: "from-blue-600 to-cyan-600",
  },
  {
    title: "Analyse",
    desc: "AI-assisted predictive analytics identify dropout risks, performance gaps, and resource shortfalls before they become crises.",
    color: "from-violet-600 to-purple-600",
  },
  {
    title: "Transform",
    desc: "Evidence-based budgeting, targeted intervention, and continuous improvement — turning data into measurable education reform.",
    color: "from-amber-600 to-orange-600",
  },
];

const TIERS = [
  {
    level: "Ministry Level",
    items: ["Executive Dashboards", "Policy Analytics", "KPI Monitoring", "State-wide Reporting"],
    bg: "bg-emerald-950/60 border-emerald-700/40",
    text: "text-emerald-400",
  },
  {
    level: "EMIS Platform Core",
    items: ["Student SIS", "Teacher TMIS", "School Admin", "Assessment Engine", "Infrastructure Module"],
    bg: "bg-blue-950/60 border-blue-700/40",
    text: "text-blue-400",
  },
  {
    level: "LGA / School Level",
    items: ["Attendance Entry", "School Profiles", "Staff Records", "Result Submission"],
    bg: "bg-slate-800/60 border-slate-600/40",
    text: "text-slate-300",
  },
];

export default function Solution() {
  return (
    <div className="relative min-h-screen bg-[#04111f] py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(16,185,129,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Eyebrow */}
        <motion.p {...fadeUp(0)} className="text-emerald-500 font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          The Solution
        </motion.p>
        <motion.h2 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-bold text-white text-center mb-4 leading-tight">
          One Platform.{" "}
          <span className="gradient-text">Complete Visibility.</span>
        </motion.h2>
        <motion.p {...fadeUp(0.2)} className="text-slate-400 text-lg text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          The Zamfara EMIS is not just software — it is a governance reform platform that connects every level of the education system into one intelligent, data-driven environment.
        </motion.p>

        {/* Four pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {PILLARS.map(({ title, desc, color }, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.1 * i + 0.25)}
              className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`text-3xl font-black gradient-text mb-3 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Architecture tiers */}
        <motion.div {...fadeUp(0.55)}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Layers className="w-5 h-5 text-emerald-500" />
            <h3 className="text-white font-bold text-xl">System Architecture Overview</h3>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {TIERS.map(({ level, items, bg, text }, i) => (
              <div key={i}>
                <motion.div
                  {...fadeUp(0.1 * i + 0.6)}
                  className={`border rounded-xl p-5 ${bg}`}
                >
                  <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${text}`}>{level}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
                {i < TIERS.length - 1 && (
                  <div className="flex justify-center my-1">
                    <ArrowDown className="w-4 h-4 text-emerald-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key capabilities row */}
        <motion.div {...fadeUp(0.9)} className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Web + Mobile Access",
            "Offline Sync Capability",
            "Role-Based Security",
            "NDPR Compliant",
            "GIS School Mapping",
            "Predictive Analytics",
            "API-First Design",
            "Multi-Tenant Architecture",
          ].map((cap) => (
            <div key={cap} className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              {cap}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
