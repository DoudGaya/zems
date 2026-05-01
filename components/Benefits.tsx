"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const TABS = [
  {
    key: "government",
    label: "Government",
    color: "emerald",
    benefits: [
      "Real-time education dashboards for Ministry and Governor's office",
      "Evidence-based policy planning, budgeting, and resource allocation",
      "Elimination of lost data, duplicate students, and payroll waste",
      "Full visibility into school performance, staffing, and infrastructure",
      "Faster response to dropout trends, failing schools, and resource gaps",
      "Stronger reporting to Executive Council, legislature, and development partners",
      "Better monitoring of equity, access, and SDG 4 progress",
      "Transparent public accountability through open performance data",
    ],
  },
  {
    key: "students",
    label: "Students",
    color: "blue",
    benefits: [
      "Faster, cleaner, and digitised registration and enrollment processes",
      "Unique Learner ID that follows each student across schools and levels",
      "Daily attendance monitoring with early alerts for absenteeism",
      "Automatic early identification and support for at-risk learners",
      "Accurate academic records, results history, and digital transcripts",
      "Improved learning environments through better teacher deployment",
      "School feeding, welfare, and health support targeting data",
      "Fair and manipulation-free examination and grading processes",
    ],
  },
  {
    key: "staff",
    label: "Teachers & Staff",
    color: "violet",
    benefits: [
      "Fully digitised staff records, career history, and deployment tracking",
      "Transparent and evidence-based deployment and transfer decisions",
      "Qualification and TRCN certification verification and tracking",
      "Automated attendance linked to payroll — no more manual registers",
      "Professional development and training history recorded and recognised",
      "Fairer performance evaluation with objective data",
      "Reduced administrative burden through digitised reporting",
      "Better workforce planning and equitable rural-urban distribution",
    ],
  },
  {
    key: "schools",
    label: "Schools",
    color: "amber",
    benefits: [
      "Digital school profiles for primary, JSS, SSS, and technical schools",
      "Easier class, timetable, and student management",
      "Faster school reporting to LGA and Ministry — no paper returns",
      "Better visibility into school needs backed by verified data",
      "Targeted Ministry support based on school-level evidence",
      "Accreditation and compliance tracking with automated reminders",
      "Infrastructure gap identification and prioritised repair planning",
      "Improved inter-school communication and coordination",
    ],
  },
];

const colorMap: Record<string, { active: string; badge: string; check: string; tab: string }> = {
  emerald: { active: "bg-emerald-600", badge: "border-emerald-500/30 bg-emerald-950/40", check: "text-emerald-400", tab: "data-[state=active]:border-emerald-500 data-[state=active]:text-emerald-400" },
  blue:    { active: "bg-blue-600",    badge: "border-blue-500/30 bg-blue-950/40",    check: "text-blue-400",    tab: "" },
  violet:  { active: "bg-violet-600",  badge: "border-violet-500/30 bg-violet-950/40",  check: "text-violet-400",  tab: "" },
  amber:   { active: "bg-amber-600",   badge: "border-amber-500/30 bg-amber-950/40",   check: "text-amber-400",   tab: "" },
};

export default function Benefits() {
  const [active, setActive] = useState("government");
  const current = TABS.find((t) => t.key === active)!;
  const c = colorMap[current.color];

  return (
    <div className="relative min-h-screen bg-[#060d1a] py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(16,185,129,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-emerald-500 font-semibold text-sm uppercase tracking-widest mb-3 text-center"
        >
          Strategic Benefits
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
        >
          Everyone Benefits.{" "}
          <span className="gradient-text">Every Level.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg text-center max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          The EMIS improves outcomes for Government, students, teachers, and schools simultaneously — creating a virtuous cycle of better data, better decisions, and better education.
        </motion.p>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          {TABS.map(({ key, label, color }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                active === key
                  ? `${colorMap[color].active} border-transparent text-white shadow-lg`
                  : "bg-transparent border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Benefits panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className={`border rounded-2xl p-8 md:p-10 ${c.badge}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {current.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${c.check}`} />
                  <p className="text-slate-300 text-sm leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
