"use client";

import { motion } from "framer-motion";
import { ChevronDown, GraduationCap, Users, MapPin, School, LayoutDashboard } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const STATS = [
  { icon: School,         label: "Schools",           value: 1013, suffix: "+" },
  { icon: GraduationCap,  label: "Students",          value: 500000, suffix: "+" },
  { icon: Users,          label: "Education Staff",   value: 4639, suffix: "+" },
  { icon: MapPin,         label: "LGAs Covered",      value: 14 },
  { icon: LayoutDashboard,label: "Education Zones",   value: 8 },
];

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#040d18]">

      {/* Background layers */}
      <div className="absolute inset-0 line-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(16,185,129,0.12)_0%,transparent_70%)]" />
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-emerald-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-teal-900/20 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-16">

        {/* Ministry badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-emerald-950/70 border border-emerald-700/50 rounded-full px-5 py-2 text-emerald-400 text-sm font-semibold mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Zamfara State Ministry of Education — Concept Proposal 2026
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight"
        >
          <span className="text-white">Transforming</span>{" "}
          <span className="gradient-text glow-text">Education</span>
          <br className="hidden md:block" />
          <span className="text-white"> Governance in </span>
          <span className="gradient-text-gold">Zamfara State</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          A unified, statewide digital platform to manage schools, students, staff,
          and performance — giving Government <span className="text-emerald-400 font-semibold">real-time visibility and control</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="text-slate-500 text-base mb-12"
        >
          Education Management Information System (EMIS) &mdash; A Strategic Reform Initiative
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12"
        >
          {STATS.map(({ icon: Icon, label, value, suffix }, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-5 text-center hover:border-emerald-500/30 hover:bg-emerald-950/20 transition-all duration-300 group"
            >
              <Icon className="w-5 h-5 text-emerald-500 mx-auto mb-2 group-hover:text-emerald-400 transition-colors" />
              <div className="text-2xl md:text-3xl font-bold text-white">
                <AnimatedCounter target={value} suffix={suffix ?? ""} />
              </div>
              <div className="text-xs text-slate-500 mt-1 font-medium">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("solution")}
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore the System
          </button>
          <button
            onClick={() => scrollTo("analytics")}
            className="px-8 py-4 bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white font-semibold rounded-xl border border-slate-700 hover:border-emerald-700 transition-all duration-200"
          >
            View Live Analytics
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        onClick={() => scrollTo("challenge")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600 hover:text-emerald-500 transition-colors text-xs font-medium cursor-pointer"
      >
        <span>Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.button>
    </div>
  );
}
