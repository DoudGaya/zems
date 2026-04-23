"use client";

import { motion } from "framer-motion";
import {
  Users, Building2, UserCog, BookOpen,
  FileText, BarChart3, Wrench, ShieldCheck,
} from "lucide-react";

const MODULES = [
  {
    icon: Users,
    title: "Student Information System",
    desc: "Enrollment, unique learner IDs (NIN-linked), attendance tracking, academic history, transfers, and health/welfare records.",
    tag: "SIS",
    color: { ring: "border-emerald-500/30", icon: "text-emerald-400", bg: "bg-emerald-500/10", badge: "bg-emerald-950 text-emerald-400" },
  },
  {
    icon: Building2,
    title: "School Administration",
    desc: "School registration and profiling, class management, timetables, staff assignment, accreditation, and compliance tracking.",
    tag: "SAM",
    color: { ring: "border-blue-500/30", icon: "text-blue-400", bg: "bg-blue-500/10", badge: "bg-blue-950 text-blue-400" },
  },
  {
    icon: UserCog,
    title: "Teacher Management (TMIS)",
    desc: "Qualifications, TRCN certification, deployment, attendance, payroll integration, performance evaluation, and CPD tracking.",
    tag: "TMIS",
    color: { ring: "border-violet-500/30", icon: "text-violet-400", bg: "bg-violet-500/10", badge: "bg-violet-950 text-violet-400" },
  },
  {
    icon: BookOpen,
    title: "Learning Management System",
    desc: "Digital classrooms, course delivery, assignments, AI-assisted learning recommendations, and e-content repository.",
    tag: "LMS",
    color: { ring: "border-pink-500/30", icon: "text-pink-400", bg: "bg-pink-500/10", badge: "bg-pink-950 text-pink-400" },
  },
  {
    icon: FileText,
    title: "Examination & Assessment",
    desc: "Exam scheduling, automated grading, result computation, transcript generation, and malpractice prevention systems.",
    tag: "EAS",
    color: { ring: "border-amber-500/30", icon: "text-amber-400", bg: "bg-amber-500/10", badge: "bg-amber-950 text-amber-400" },
  },
  {
    icon: BarChart3,
    title: "Analytics & Dashboards",
    desc: "Executive KPI dashboards, predictive dropout detection, policy impact analysis, GIS mapping, and Situation Room.",
    tag: "ADS",
    color: { ring: "border-cyan-500/30", icon: "text-cyan-400", bg: "bg-cyan-500/10", badge: "bg-cyan-950 text-cyan-400" },
  },
  {
    icon: Wrench,
    title: "Infrastructure Management",
    desc: "Facility inventory, classroom condition tracking, equipment ledger, maintenance scheduling, and construction progress.",
    tag: "IMS",
    color: { ring: "border-teal-500/30", icon: "text-teal-400", bg: "bg-teal-500/10", badge: "bg-teal-950 text-teal-400" },
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Security",
    desc: "NDPR/NITDA compliance, role-based access control, audit logs, end-to-end encryption, and disaster recovery.",
    tag: "CSM",
    color: { ring: "border-red-500/30", icon: "text-red-400", bg: "bg-red-500/10", badge: "bg-red-950 text-red-400" },
  },
];

export default function Modules() {
  return (
    <div className="relative min-h-screen bg-[#060d1a] py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(16,185,129,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-emerald-500 font-semibold text-sm uppercase tracking-widest mb-3 text-center"
        >
          System Modules
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
        >
          Eight Integrated Modules.
          <br />
          <span className="gradient-text">One Unified Platform.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-lg text-center max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Each module is independently deployable yet fully integrated — covering every dimension of education management from learner to ministry leadership.
        </motion.p>

        {/* Module cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MODULES.map(({ icon: Icon, title, desc, tag, color }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: 0.07 * i }}
              className={`glass-card rounded-2xl p-6 border ${color.ring} hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col gap-3`}
            >
              <div className="flex items-start justify-between">
                <div className={`w-10 h-10 rounded-xl ${color.bg} border ${color.ring} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${color.icon}`} />
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${color.badge}`}>{tag}</span>
              </div>
              <h3 className="text-white font-semibold text-base leading-snug">{title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed flex-1">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Integration note */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.7 }}
          className="text-center text-slate-600 text-sm mt-10"
        >
          All modules share a common data layer — eliminating silos and enabling cross-module analytics.
        </motion.p>
      </div>
    </div>
  );
}
