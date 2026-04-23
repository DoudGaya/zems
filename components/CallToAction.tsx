"use client";

import { motion } from "framer-motion";
import { CheckSquare, ArrowRight, Mail, Phone } from "lucide-react";

const ACTION_STEPS = [
  {
    number: "01",
    title: "Approve the Concept",
    desc: "Authorise the commencement of detailed requirements gathering, system design, and project costing.",
    color: "emerald",
  },
  {
    number: "02",
    title: "Establish Governance",
    desc: "Constitute the Steering Committee, appoint the Project Director, and designate LGA focal persons.",
    color: "blue",
  },
  {
    number: "03",
    title: "Mobilise Resources",
    desc: "Allocate seed funding for Phase 1, engage technical partners, and launch the stakeholder conference.",
    color: "violet",
  },
];

const colorMap: Record<string, { border: string; num: string; bg: string }> = {
  emerald: { border: "border-emerald-500/30", num: "text-emerald-400", bg: "bg-emerald-500/10" },
  blue:    { border: "border-blue-500/30",    num: "text-blue-400",    bg: "bg-blue-500/10" },
  violet:  { border: "border-violet-500/30",  num: "text-violet-400",  bg: "bg-violet-500/10" },
};

export default function CallToAction() {
  return (
    <div className="relative min-h-screen bg-[#020a12] py-24 px-6 overflow-hidden flex items-center">
      {/* Dramatic background */}
      <div className="absolute inset-0 line-grid opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(16,185,129,0.12)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-700/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-700/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-500 font-semibold text-sm uppercase tracking-widest mb-6">The Path Forward</p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            The future of education in Zamfara{" "}
            <br className="hidden md:block" />
            should be guided by{" "}
            <span className="gradient-text">facts,</span>
            <br className="hidden md:block" />
            driven by{" "}
            <span className="gradient-text-gold">vision,</span>
            <br className="hidden md:block" />
            and delivered through{" "}
            <span className="gradient-text">smart systems.</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            This project is a strategic investment in the future of every child in Zamfara State.
            It will transform how Government sees, plans, and delivers education — for generations to come.
          </p>
        </motion.div>

        {/* Three action cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14"
        >
          {ACTION_STEPS.map(({ number, title, desc, color }, i) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className={`glass-card border rounded-2xl p-6 ${c.border} hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                  <CheckSquare className={`w-5 h-5 ${c.num}`} />
                </div>
                <p className={`text-xs font-black mb-1 ${c.num}`}>STEP {number}</p>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Approval block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-emerald-950/60 to-teal-950/60 border border-emerald-700/40 rounded-2xl p-8 md:p-10 text-center mb-10"
        >
          <p className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-3">Official Request for Approval</p>
          <p className="text-white text-xl md:text-2xl font-semibold leading-relaxed max-w-3xl mx-auto mb-6">
            We respectfully request the approval of the Honourable Commissioner and His Excellency the Executive Governor to advance this initiative to full implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-0.5">
              <CheckSquare className="w-5 h-5" />
              Recommend Approval
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-slate-600 hover:border-emerald-600 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200">
              <Mail className="w-4 h-4" />
              Request Full Presentation
            </button>
          </div>
        </motion.div>

        {/* Contact footer */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.65 }}
          className="text-center"
        >
          <p className="text-slate-600 text-sm mb-4">For enquiries, technical briefings, or full proposal documentation:</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-500 text-sm">
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-700" />
              [Project Contact Email]
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-700" />
              [Project Contact Phone]
            </span>
          </div>
          <div className="mt-10 pt-8 border-t border-slate-800">
            <p className="text-slate-700 text-xs">
              Zamfara State Education Management Information System (EMIS) — Concept Proposal 2026
              <br />
              Ministry of Education, Zamfara State Government
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
