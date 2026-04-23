"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, LayoutDashboard, ShieldCheck, MapPin, School, Combine, Search, BarChart3, TrendingUp, Users } from "lucide-react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList } from "recharts";

// Slide content components map
const slides = [
  SlideCover,
  SlideProblem,
  SlideSolution,
  SlideModules,
  SlideAnalytics,
  SlideBenefits,
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    const nextSlide = currentSlide + newDirection;
    if (nextSlide >= 0 && nextSlide < slides.length) {
      setCurrentSlide(nextSlide);
      setDirection(newDirection);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") paginate(1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") paginate(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col relative text-gray-900 selection:bg-green-100 selection:text-green-900">
      {/* Header / Branding */}
      <header className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50">
        <div className="flex items-center gap-3">
          {/* Zamfara Logo Placeholder */}
          <div className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center overflow-hidden">
            <div className="w-6 h-6 rounded-full bg-[#008751] bg-opacity-10 border border-[#008751] border-opacity-30 flex items-center justify-center">
              <span className="text-[#008751] font-bold text-xs">ZS</span>
            </div>
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-gray-900 leading-none">Zamfara State</h1>
            <p className="text-[10px] font-medium text-gray-500 uppercase tracking-widest mt-0.5">Ministry of Education</p>
          </div>
        </div>
        
        <div className="text-xs font-semibold px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-500 shadow-sm">
          EMIS Concept Proposal
        </div>
      </header>

      {/* Slide Area */}
      <main className="flex-1 relative flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-full max-w-6xl w-full px-8 md:px-12"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer / Controls */}
      <footer className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-center z-50">
        <div className="text-xs text-gray-400 font-medium">
          Slide {currentSlide + 1} of {slides.length}
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => paginate(-1)}
            disabled={currentSlide === 0}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 shadow-sm hover:bg-gray-50 hover:text-black transition-all disabled:opacity-30 disabled:hover:bg-white"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button 
            onClick={() => paginate(1)}
            disabled={currentSlide === slides.length - 1}
            className="w-10 h-10 rounded-full bg-[#008751] text-white flex items-center justify-center shadow-md hover:bg-[#007445] transition-all disabled:opacity-30"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </footer>
    </div>
  );
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.98
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.98
  })
};

// --- SLIDES ---

function SlideCover() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8">
      <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-[#008751] text-xs font-semibold mb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#008751] animate-pulse" />
        Strategic Reform Initiative 2026
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 max-w-4xl leading-[1.05]">
        Transforming Education Governance in
        <span className="text-[#008751]"> Zamfara State.</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-500 max-w-3xl font-medium leading-relaxed">
        A unified, statewide digital platform to manage schools, students, staff, and performance with real-time visibility.
      </p>
      
      <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">
        {[
          { icon: School, label: "Schools", val: "1,013+" },
          { icon: Users, label: "Students", val: "500k+" },
          { icon: MapPin, label: "LGAs", val: "14" },
          { icon: ShieldCheck, label: "Zones", val: "8" }
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
            <stat.icon className="w-6 h-6 text-[#008751] mb-3" />
            <div className="text-3xl font-bold tracking-tight text-gray-900">{stat.val}</div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideProblem() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-3">The Challenge</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
          Fragmented data limits <br/>
          <span className="text-gray-400">effective policymaking.</span>
        </h3>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Currently, the Ministry relies on siloed, manual, and paper-based records. This creates significant delays in reporting, makes tracking student outcomes difficult, and restricts the capability to allocate resources effectively across Zamfara&apos;s 14 LGAs.
        </p>
      </div>
      <div className="grid gap-4">
        {[
          { title: "No Single Source of Truth", desc: "Data is scattered across departments and school principals.", i: Combine },
          { title: "Resource Misallocation", desc: "Hard to verify school needs without real-time demographic data.", i: MapPin },
          { title: "Delayed Reporting", desc: "Manual census cycles take months to compile and verify.", i: Search }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex gap-5 items-start">
            <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
              <item.i className="w-5 h-5 text-gray-900" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideSolution() {
  return (
    <div className="flex flex-col items-center text-center">
       <h2 className="text-sm font-bold tracking-widest text-[#008751] uppercase mb-3">The Solution</h2>
       <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6 max-w-3xl">
          The Zamfara State EMIS.
       </h3>
       <p className="text-xl text-gray-500 font-medium max-w-3xl mb-16">
          A centralized, secure, cloud-based hub that unifies all education data. Built specifically for the Nigerian context with low-bandwidth offline capabilities.
       </p>
       
       {/* Bento Grid Concept */}
       <div className="grid md:grid-cols-3 gap-6 w-full text-left">
          <div className="md:col-span-2 bg-gray-900 rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden shadow-xl">
             <div className="relative z-10 w-2/3">
               <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                 <LayoutDashboard className="text-white w-6 h-6" />
               </div>
               <h4 className="text-2xl font-bold mb-3">Ministry Dashboard</h4>
               <p className="text-gray-400 leading-relaxed">Instant, high-altitude view of state-wide metrics, attendance rates, exam results, and infrastructure needs directly from the Commissioner&apos;s office.</p>
             </div>
             
             {/* Decorative element representing UI */}
             <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md p-4 transform rotate-[-5deg]">
               <div className="w-1/2 h-4 bg-white/20 rounded-full mb-4"></div>
               <div className="flex gap-2 mb-4">
                 <div className="w-10 h-10 bg-[#008751]/50 rounded-lg"></div>
                 <div className="w-10 h-10 bg-white/10 rounded-lg"></div>
                 <div className="w-10 h-10 bg-white/10 rounded-lg"></div>
               </div>
               <div className="w-full h-24 bg-white/5 rounded-xl border border-white/10"></div>
             </div>
          </div>
          
          <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-5 border border-green-100">
                <ShieldCheck className="text-[#008751] w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Secure & Verified</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Identity management for every teacher and student to eliminate ghost-workers and duplicate records.</p>
            </div>
          </div>
       </div>
    </div>
  );
}

function SlideModules() {
  const modules = [
    { title: "School Management", desc: "Track facilities, classrooms, and assets.", i: School },
    { title: "Student Lifecycle", desc: "Enrollment, attendance, continuous assessment.", i: Users },
    { title: "Staff Directory", desc: "Teacher deployment, qualifications, payroll sync.", i: Combine },
    { title: "Exam Processing", desc: "State-wide standardized testing collation.", i: BarChart3 }
  ];
  return (
    <div className="flex flex-col h-full justify-center">
      <div className="mb-12 text-center">
        <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-3">Core Capabilities</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Integrated Modules.</h3>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((m, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-[2rem] p-8 shadow-sm flex flex-col hover:border-[#008751]/30 transition-colors">
             <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 shrink-0">
               <m.i className="w-5 h-5 text-gray-900" />
             </div>
             <h4 className="text-xl font-bold text-gray-900 mb-2">{m.title}</h4>
             <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const analyticsData = [
  { name: 'Gusau', enrollment: 125000 },
  { name: 'Tsafe', enrollment: 85000 },
  { name: 'Maru', enrollment: 78000 },
  { name: 'Kaura N.', enrollment: 92000 },
  { name: 'Bungudu', enrollment: 65000 },
  { name: 'Gummi', enrollment: 54000 },
  { name: 'T/Mafara', enrollment: 72000 },
];

function SlideAnalytics() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1 bg-white border border-gray-200 rounded-[2rem] shadow-sm p-6 overflow-hidden">
        {/* Recharts BarChart */}
        <div className="h-64 border-b border-gray-100 pb-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={analyticsData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} tickFormatter={(val) => `${val / 1000}k`} />
              <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }} itemStyle={{ color: '#008751', fontWeight: 600 }} />
              <Bar dataKey="enrollment" fill="#008751" radius={[4, 4, 0, 0]}>
                <LabelList dataKey="enrollment" position="top" style={{ fontSize: '10px', fill: '#9ca3af' }} formatter={(val: number) => `${val / 1000}k`} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 flex justify-between items-center px-4">
           <div>
             <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total Enrollment YTD</div>
             <div className="text-2xl font-bold flex items-center gap-2">571,000 <span className="text-xs bg-green-100 text-[#008751] px-2 py-0.5 rounded-full">+12%</span></div>
           </div>
           <TrendingUp className="text-gray-300 w-8 h-8" />
        </div>
      </div>
      
      <div className="order-1 md:order-2">
        <h2 className="text-sm font-bold tracking-widest text-[#008751] uppercase mb-3">Live Insights</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
          Data driven decisions.
        </h3>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          The interactive analytics engine provides automated visualizations. Monitor enrollment gaps, gender parity, and teacher-pupil ratios to distribute resources equitably and track the state&apos;s progress towards SDG 4 goals.
        </p>
      </div>
    </div>
  );
}

function SlideBenefits() {
  return (
    <div className="text-center flex flex-col items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-8">
        <div className="w-6 h-6 border-b-2 border-r-2 border-[#008751] transform rotate-45" />
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-8">
        Deploying the standard <br className="hidden md:block"/> for modern education.
      </h2>
      <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
        The Zamfara State EMIS is a catalyst for accountability, improved educational outcomes, and modernized governance.
      </p>
      <div className="text-xs font-bold text-gray-300 uppercase tracking-widest">
         End of Presentation
      </div>
    </div>
  );
}
