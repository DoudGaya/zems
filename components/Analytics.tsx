"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from "recharts";
import AnimatedCounter from "./AnimatedCounter";

/* ── Reference data from JEMIS (illustrative dashboard data) ─────────────── */
const SCHOOLS_BY_ZONE = [
  { zone: "B/KUDU", value: 45 },
  { zone: "HADEJIA", value: 38 },
  { zone: "GUMEL", value: 33 },
  { zone: "RINGIM", value: 31 },
  { zone: "DUTSE", value: 28 },
  { zone: "KAZAURE", value: 25 },
  { zone: "JAHUN", value: 22 },
  { zone: "BABURA", value: 20 },
];

const ENROLLMENT_BY_ZONE = [
  { zone: "HADEJIA", value: 29000 },
  { zone: "B/KUDU", value: 22000 },
  { zone: "DUTSE", value: 18000 },
  { zone: "RINGIM", value: 16000 },
  { zone: "GUMEL", value: 15000 },
  { zone: "KAZAURE", value: 12000 },
  { zone: "BABURA", value: 10000 },
  { zone: "JAHUN", value: 8000 },
];

const STAFF_COMPOSITION = [
  { name: "Perm Teaching", value: 2511, color: "#10b981" },
  { name: "J-Teach Staff", value: 1041, color: "#3b82f6" },
  { name: "Non-Teaching",  value: 1087, color: "#f59e0b" },
];

const CLASSROOM_STATUS = [
  { name: "Good Condition",   value: 1773, color: "#10b981" },
  { name: "Needs Repair",     value: 1162, color: "#f59e0b" },
  { name: "Additional Req.",  value: 421,  color: "#ef4444" },
];

const SUMMARY_STATS = [
  { label: "Total Schools",         value: 277 },
  { label: "Total Enrollment",      value: 142200 },
  { label: "Perm Teaching Staff",   value: 2511, format: "raw" as const },
  { label: "Total Classrooms",      value: 2935, format: "raw" as const },
];

const tooltipStyle = {
  backgroundColor: "#0f172a",
  border: "1px solid rgba(16,185,129,0.3)",
  borderRadius: "8px",
  color: "#e2e8f0",
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={tooltipStyle} className="px-3 py-2 text-sm">
      <p className="text-emerald-400 font-semibold mb-1">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} style={{ color: p.color || "#e2e8f0" }}>
          {p.name ?? "Value"}: <span className="font-bold">{p.value?.toLocaleString()}</span>
        </p>
      ))}
    </div>
  );
};

export default function Analytics() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative bg-[#040d18] py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 line-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_20%,rgba(16,185,129,0.07)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-emerald-500 font-semibold text-sm uppercase tracking-widest mb-3 text-center"
        >
          Live Dashboard Preview
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
        >
          Real-Time{" "}
          <span className="gradient-text">Education Intelligence</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg text-center max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          The Ministry&apos;s Situation Room gives the Commissioner and Governor a live command view of every school, zone, and LGA — from enrollment and attendance to staffing and infrastructure.
        </motion.p>

        {/* Summary KPI bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {SUMMARY_STATS.map(({ label, value, format }, i) => (
            <div key={i} className="bg-emerald-600 rounded-xl px-5 py-4 text-center glow-green">
              <div className="text-3xl font-extrabold text-white">
                <AnimatedCounter target={value} format={format ?? "auto"} />
              </div>
              <div className="text-emerald-100 text-xs font-semibold mt-1">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Charts grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Chart 1 — Schools by Zone */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="text-white font-semibold mb-1">Total Schools by Zone</h3>
            <p className="text-slate-500 text-xs mb-5">Distribution of schools across education zones</p>
            {mounted && (
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={SCHOOLS_BY_ZONE} layout="vertical" margin={{ left: 8, right: 16 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis type="number" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis dataKey="zone" type="category" tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} width={60} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" name="Schools" radius={[0, 6, 6, 0]} fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </motion.div>

          {/* Chart 2 — Enrollment by Zone */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.35 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="text-white font-semibold mb-1">Total Enrollment by Zone</h3>
            <p className="text-slate-500 text-xs mb-5">Student enrollment numbers per education zone</p>
            {mounted && (
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={ENROLLMENT_BY_ZONE} layout="vertical" margin={{ left: 8, right: 16 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis type="number" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false}
                    tickFormatter={(v) => v >= 1000 ? `${v / 1000}K` : v} />
                  <YAxis dataKey="zone" type="category" tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} width={60} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" name="Students" radius={[0, 6, 6, 0]} fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </motion.div>

          {/* Chart 3 — Staff Composition */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="text-white font-semibold mb-1">Staff Composition</h3>
            <p className="text-slate-500 text-xs mb-5">Breakdown of permanent, J-Teach, and non-teaching staff</p>
            {mounted && (
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie data={STAFF_COMPOSITION} cx="50%" cy="50%" innerRadius={60} outerRadius={90}
                    paddingAngle={4} dataKey="value" nameKey="name"
                  >
                    {STAFF_COMPOSITION.map(({ color }, i) => (
                      <Cell key={i} fill={color} stroke="transparent" />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: 12, color: "#94a3b8" }} />
                </PieChart>
              </ResponsiveContainer>
            )}
          </motion.div>

          {/* Chart 4 — Classroom Status */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.45 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="text-white font-semibold mb-1">Classroom Infrastructure Status</h3>
            <p className="text-slate-500 text-xs mb-5">Condition of classrooms across all schools</p>
            {mounted && (
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={CLASSROOM_STATUS} margin={{ left: 0, right: 16 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="name" tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" name="Classrooms" radius={[6, 6, 0, 0]}>
                    {CLASSROOM_STATUS.map(({ color }, i) => (
                      <Cell key={i} fill={color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.6 }}
          className="text-slate-600 text-xs text-center mt-6"
        >
          Dashboard data shown is illustrative — based on live EMIS deployment reference data. The Zamfara EMIS will display real state-specific data once operational.
        </motion.p>
      </div>
    </div>
  );
}
