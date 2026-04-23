"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Building2 } from "lucide-react";

const KPI_CATEGORIES = [
  {
    icon: TrendingUp,
    title: "Enrollment & Access",
    color: { border: "border-emerald-500/30", icon: "text-emerald-400", bg: "bg-emerald-500/10", number: "text-emerald-500" },
    kpis: [
      "Total student enrollment by level, school & LGA",
      "Gross Enrollment Rate (GER)",
      "Net Enrollment Rate (NER)",
      "Number of new student registrations per term",
      "Gender parity index",
      "Out-of-school children estimate by LGA",
    ],
  },
  {
    icon: Users,
    title: "Attendance & Retention",
    color: { border: "border-blue-500/30", icon: "text-blue-400", bg: "bg-blue-500/10", number: "text-blue-500" },
    kpis: [
      "Daily student attendance rate (%)",
      "Staff attendance rate (%)",
      "Chronic absenteeism rate (>20% absence)",
      "Dropout rate by level, gender, and LGA",
      "Student retention rate",
      "Completion rate by education level",
    ],
  },
  {
    icon: Award,
    title: "Academic Performance",
    color: { border: "border-violet-500/30", icon: "text-violet-400", bg: "bg-violet-500/10", number: "text-violet-500" },
    kpis: [
      "Examination pass rate by subject & school",
      "Average score trends over time",
      "Subject-level failure rate analysis",
      "Transition rate between education levels",
      "Learner at-risk index (predictive)",
      "School performance ranking by LGA & zone",
    ],
  },
  {
    icon: Building2,
    title: "School Quality & Compliance",
    color: { border: "border-amber-500/30", icon: "text-amber-400", bg: "bg-amber-500/10", number: "text-amber-500" },
    kpis: [
      "Teacher-student ratio by school and level",
      "Classroom-student ratio",
      "Schools meeting minimum operational standards",
      "Percentage of qualified (TRCN-certified) teachers",
      "Inspection compliance rate",
      "Data submission timeliness and completeness",
    ],
  },
];

const formulaCards = [
  {
    title: "Net Enrollment Ratio (NER)",
    formula: "NER = (E_a,n / P_a,n) × 100",
    desc: "Enrollment of official age group as % of corresponding population — the primary access indicator.",
    color: "emerald",
  },
  {
    title: "Gross Intake Ratio (GIR)",
    formula: "GIR = (N / P) × 100",
    desc: "New entrants in Grade 1 as % of the official primary entrance-age population.",
    color: "blue",
  },
  {
    title: "Dropout Rate",
    formula: "DR = (1 − Completion) × 100",
    desc: "Percentage of learners who leave school before completing a level.",
    color: "violet",
  },
  {
    title: "Teacher-Student Ratio",
    formula: "TSR = Total Students / Total Teachers",
    desc: "Measures staffing adequacy — international benchmark is ≤ 1:40 for secondary.",
    color: "amber",
  },
];

const colorMap: Record<string, string> = {
  emerald: "bg-emerald-950/60 border-emerald-700/40 text-emerald-400",
  blue:    "bg-blue-950/60 border-blue-700/40 text-blue-400",
  violet:  "bg-violet-950/60 border-violet-700/40 text-violet-400",
  amber:   "bg-amber-950/60 border-amber-700/40 text-amber-400",
};

export default function KPIs() {
  return (
    <div className="relative bg-[#040d18] py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_10%,rgba(16,185,129,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-emerald-500 font-semibold text-sm uppercase tracking-widest mb-3 text-center"
        >
          Performance Framework
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
        >
          KPIs That Drive{" "}
          <span className="gradient-text">Real Accountability</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg text-center max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          The EMIS automatically computes international-standard education indicators, aligned with UNESCO, World Bank SABER-EMIS, and SDG 4 frameworks.
        </motion.p>

        {/* KPI category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {KPI_CATEGORIES.map(({ icon: Icon, title, color, kpis }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1 * i + 0.25 }}
              className={`glass-card border rounded-2xl p-6 ${color.border} hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl ${color.bg} border ${color.border} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${color.icon}`} />
                </div>
                <h3 className="text-white font-bold text-lg">{title}</h3>
              </div>
              <ul className="space-y-2.5">
                {kpis.map((kpi, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className={`text-xs font-bold mt-0.5 ${color.number}`}>{String(j + 1).padStart(2, "0")}</span>
                    <span className="text-slate-300 text-sm leading-relaxed">{kpi}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Formula cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.5 }}
        >
          <h3 className="text-slate-400 text-center text-sm font-semibold uppercase tracking-widest mb-6">
            Key International Education Formulas Computed Automatically
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {formulaCards.map(({ title, formula, desc, color }, i) => (
              <div key={i} className={`border rounded-xl p-4 ${colorMap[color]}`}>
                <p className="font-semibold text-sm mb-2">{title}</p>
                <code className="block text-white text-xs font-mono bg-black/30 rounded-lg px-3 py-2 mb-3 leading-relaxed">
                  {formula}
                </code>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
