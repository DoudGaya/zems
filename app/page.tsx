"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, LayoutDashboard, ShieldCheck, MapPin, School, Combine, Search, BarChart3, TrendingUp, Users, Laptop, GraduationCap, Building2, UserCircle, Fingerprint, WifiOff, Map as MapIcon, Database, Activity, Briefcase, CreditCard, PlayCircle, Shield, BrainCircuit, Flag, HeartHandshake, BookOpen } from "lucide-react";
import { BarChart, Bar, LineChart, Line, AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList } from "recharts";

// Slide content components map
const slides = [
  SlideCover,
  SlideProblem,
  SlideSolution,
  SlideEcosystem,
  SlideModules,
  SlideAdvancedTech,
  SlideAnalytics,
  SlideRoadmap,
  SlideImpact,
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
    <div className="h-[100dvh] w-screen overflow-hidden flex flex-col relative text-gray-900 selection:bg-green-100 selection:text-green-900 bg-white">
      {/* Header / Branding */}
      <header className="absolute top-0 left-0 w-full p-4 md:p-8 flex justify-between items-center z-50 pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Zamfara Logo */}
          <div className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center overflow-hidden">
            <Image 
              src="/zamfara-logo.png" 
              alt="Zamfara State Logo" 
              width={40} 
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-gray-900 leading-none">Zamfara State</h1>
            <p className="text-[10px] font-medium text-gray-500 uppercase tracking-widest mt-0.5">Ministry of Education</p>
          </div>
        </div>
        
        <div className="text-xs font-semibold px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-500 shadow-sm pointer-events-auto hidden md:block">
          EMIS Concept Proposal
        </div>
      </header>

      {/* Slide Area */}
      <main className="flex-1 relative flex items-center justify-center overflow-hidden">
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
            className="w-full max-w-6xl max-h-[100dvh] overflow-y-auto no-scrollbar px-4 sm:px-8 md:px-12 py-24 md:py-8"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer / Controls */}
      <footer className="absolute bottom-0 left-0 w-full p-4 md:p-8 flex justify-between items-center z-50 pointer-events-none">
        <div className="text-xs text-gray-400 font-medium pointer-events-auto">
          Slide {currentSlide + 1} of {slides.length}
        </div>
        
        <div className="flex gap-2 pointer-events-auto">
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
    <div className="flex flex-col items-center justify-center text-center space-y-6 md:space-y-8 my-auto min-h-max mt-8">
      <div className="flex flex-col items-center gap-4">
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white relative">
          <Image src="/zamfara-logo.png" alt="Zamfara Logo" fill className="object-cover p-1" />
        </div>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 md:px-4 py-1.5 text-[#008751] text-[10px] md:text-xs font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#008751] animate-pulse" />
          Strategic Reform Initiative 2026
        </div>
      </div>
      
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 max-w-4xl leading-[1.1] md:leading-[1.05]">
        Transforming Education Governance in
        <span className="text-[#008751]"> Zamfara State.</span>
      </h1>
      
      <p className="text-lg md:text-2xl text-gray-500 max-w-3xl font-medium leading-relaxed px-4 md:px-0">
        A unified, statewide digital platform to manage schools, students, staff, and performance with real-time visibility.
      </p>

      {/* Presenter Info */}
      <div className="mt-8 flex items-center gap-4 bg-white/50 backdrop-blur-sm border border-gray-200 p-3 md:p-4 rounded-[1.5rem] shadow-sm max-w-sm w-full mx-auto md:mx-0 justify-center">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
          <UserCircle className="text-gray-400 w-8 h-8" />
        </div>
        <div className="text-left">
          <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest leading-none mb-1">Presented By</p>
          <p className="text-sm md:text-[1rem] font-extrabold text-gray-900 leading-none">Abdulrahman Dauda Gaya</p>
          <p className="text-xs md:text-sm text-[#008751] font-bold mt-1 leading-none">Chief Technology Officer</p>
        </div>
      </div>
    </div>
  );
}

function SlideProblem() {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center my-auto min-h-max">
      <div>
        <h2 className="text-xs md:text-sm font-bold tracking-widest text-gray-400 uppercase mb-2 md:mb-3">The Challenge</h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4 md:mb-6">
          Fragmented data limits <br/>
          <span className="text-gray-400">effective policymaking.</span>
        </h3>
        <p className="text-[1rem] sm:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
          Currently, the Ministry relies on siloed, manual, and paper-based records. This creates significant delays in reporting, makes tracking student outcomes difficult, and restricts the capability to allocate resources effectively across Zamfara&apos;s 14 LGAs.
        </p>
      </div>
      <div className="grid gap-3 md:gap-4">
        {[
          { title: "No Single Source of Truth", desc: "Data is scattered across departments and school principals.", i: Combine },
          { title: "Resource Misallocation", desc: "Hard to verify school needs without real-time demographic data.", i: MapPin },
          { title: "Delayed Reporting", desc: "Manual census cycles take months to compile and verify.", i: Search }
        ].map((item, i) => (
          <div key={i} className="bg-white p-4 md:p-6 rounded-[1.5rem] md:rounded-3xl border border-gray-200 shadow-sm flex gap-4 md:gap-5 items-start">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
              <item.i className="w-4 h-4 md:w-5 md:h-5 text-gray-900" />
            </div>
            <div>
              <h4 className="text-sm md:text-[1rem] font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideSolution() {
  return (
    <div className="flex flex-col items-center text-center my-auto min-h-max">
       <h2 className="text-xs md:text-sm font-bold tracking-widest text-[#008751] uppercase mb-2 md:mb-3">The Solution</h2>
       <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4 md:mb-6 max-w-3xl">
          The Zamfara State EMIS.
       </h3>
       <p className="text-[1rem] sm:text-lg md:text-xl text-gray-500 font-medium max-w-3xl mb-8 md:mb-16">
          A centralized, secure, cloud-based hub that unifies all education data. Built specifically for the Nigerian context with low-bandwidth offline capabilities.
       </p>
       
       {/* Bento Grid Concept */}
       <div className="grid md:grid-cols-3 gap-4 md:gap-6 w-full text-left">
          <div className="md:col-span-2 bg-gray-900 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 text-white relative overflow-hidden shadow-xl">
             <div className="relative z-10 w-full sm:w-2/3">
               <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center mb-4 md:mb-6">
                 <LayoutDashboard className="text-white w-5 h-5 md:w-6 md:h-6" />
               </div>
               <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Ministry Dashboard</h4>
               <p className="text-xs md:text-sm text-gray-400 leading-relaxed md:leading-relaxed">Instant, high-altitude view of state-wide metrics, attendance rates, exam results, and infrastructure needs directly from the Commissioner&apos;s office.</p>
             </div>
             
             {/* Decorative element representing UI */}
             <div className="absolute -right-8 -bottom-8 md:-right-12 md:-bottom-12 w-48 h-48 md:w-64 md:h-64 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md p-4 transform rotate-[-5deg] hidden sm:block">
               <div className="w-1/2 h-3 md:h-4 bg-white/20 rounded-full mb-3 md:mb-4"></div>
               <div className="flex gap-2 mb-3 md:mb-4">
                 <div className="w-8 h-8 md:w-10 md:h-10 bg-[#008751]/50 rounded-lg"></div>
                 <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg"></div>
                 <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg"></div>
               </div>
               <div className="w-full h-16 md:h-24 bg-white/5 rounded-xl border border-white/10"></div>
             </div>
          </div>
          
          <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-4 md:mb-5 border border-green-100">
                <ShieldCheck className="text-[#008751] w-5 h-5" />
              </div>
              <h4 className="text-[1rem] md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Secure & Verified</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Identity management for every teacher and student to eliminate ghost-workers and duplicate records.</p>
            </div>
          </div>
       </div>
    </div>
  );
}

function SlideEcosystem() {
  return (
    <div className="flex flex-col items-center text-center my-auto min-h-max">
      <h2 className="text-xs md:text-sm font-bold tracking-widest text-[#008751] uppercase mb-2 md:mb-3">Our Ecosystem</h2>
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4 md:mb-6 max-w-3xl">
        Connected Portals.
      </h3>
      <p className="text-[1rem] sm:text-lg md:text-xl text-gray-500 font-medium max-w-3xl mb-8 md:mb-12">
        A seamless multi-tenant architecture uniting schools, parents, teachers, and ministry officials under one secure cloud infrastructure.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 w-full mt-2 md:mt-4">
        {[
          { title: "Ministry Admin", desc: "Governance & Reporting", icon: Shield, bg: "bg-gray-900", text: "text-white", iconColor: "text-white" },
          { title: "School Portal", desc: "Operations & Admin", icon: Building2, bg: "bg-white", text: "text-gray-900", iconColor: "text-[#008751]" },
          { title: "Teacher App", desc: "Attendance & Grading", icon: Laptop, bg: "bg-white", text: "text-gray-900", iconColor: "text-[#008751]" },
          { title: "Parent/Student", desc: "Results & Notices", icon: Users, bg: "bg-[#008751]", text: "text-white", iconColor: "text-white" }
        ].map((portal, i) => (
          <div key={i} className={`${portal.bg} ${portal.text} p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-gray-200 shadow-sm flex flex-col items-center text-center relative overflow-hidden group`}>
            <div className={`w-10 h-10 md:w-16 md:h-16 rounded-[1rem] md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 shrink-0 relative z-10 ${portal.bg === 'bg-white' ? 'bg-green-50 border border-green-100' : 'bg-white/10'}`}>
              <portal.icon className={`w-4 h-4 md:w-6 md:h-6 ${portal.iconColor}`} />
            </div>
            <h4 className="text-sm md:text-xl font-bold mb-1 md:mb-2 relative z-10">{portal.title}</h4>
            <p className={`text-[10px] md:text-sm font-medium ${portal.bg === 'bg-white' ? 'text-gray-500' : 'text-white/70'} relative z-10 hidden sm:block`}>{portal.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideModules() {
  const modules = [
    { title: "Student Info System (SIS)", desc: "End-to-end enrollment, unique IDs, tracking, and historical records.", i: UserCircle },
    { title: "Learning Mgmt (LMS)", desc: "Digital classrooms, remote materials, and AI-assisted recommendations.", i: BookOpen },
    { title: "Examination Mgmt", desc: "Standardized tests across 14 LGAs, auto-grading, and transcript generation.", i: GraduationCap },
    { title: "Financial Mgmt", desc: "Fee tracking, government funding allocation, and operational compliance.", i: CreditCard }
  ];
  return (
    <div className="flex flex-col h-full justify-center my-auto min-h-max">
      <div className="mb-6 md:mb-10 text-center">
        <h2 className="text-xs md:text-sm font-bold tracking-widest text-[#008751] uppercase mb-2 md:mb-3">Deep Expertise</h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Robust Modules.</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {modules.map((m, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 shadow-sm flex flex-row items-center gap-4 hover:border-[#008751]/30 transition-colors">
             <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center shrink-0">
               <m.i className="w-5 h-5 md:w-7 md:h-7 text-[#008751]" />
             </div>
             <div>
               <h4 className="text-sm md:text-xl font-bold text-gray-900 mb-1">{m.title}</h4>
               <p className="text-[11px] md:text-sm text-gray-500 leading-relaxed font-medium">{m.desc}</p>
             </div>
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
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center my-auto min-h-max">
      <div className="order-2 md:order-1 bg-white border border-gray-200 rounded-[1.5rem] md:rounded-[2rem] shadow-sm p-4 md:p-6 overflow-hidden">
        {/* Recharts BarChart */}
        <div className="h-48 md:h-64 border-b border-gray-100 pb-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={analyticsData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#9ca3af' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#9ca3af' }} tickFormatter={(val) => `${val / 1000}k`} />
              <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', fontSize: '12px' }} itemStyle={{ color: '#008751', fontWeight: 600 }} />
              <Bar dataKey="enrollment" fill="#008751" radius={[4, 4, 0, 0]}>
                <LabelList dataKey="enrollment" position="top" style={{ fontSize: '8px', fill: '#9ca3af' }} formatter={(val: number) => `${val / 1000}k`} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 md:mt-6 flex justify-between items-center px-2 md:px-4">
           <div>
             <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total Enrollment YTD</div>
             <div className="text-xl md:text-2xl font-bold flex items-center gap-2">571,000 <span className="text-[10px] md:text-xs bg-green-100 text-[#008751] px-2 py-0.5 rounded-full">+12%</span></div>
           </div>
           <TrendingUp className="text-gray-300 w-6 h-6 md:w-8 md:h-8" />
        </div>
      </div>
      
      <div className="order-1 md:order-2">
        <h2 className="text-xs md:text-sm font-bold tracking-widest text-[#008751] uppercase mb-2 md:mb-3">Live Insights</h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4 md:mb-6">
          Data driven decisions.
        </h3>
        <p className="text-[1rem] sm:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
          The interactive analytics engine provides automated visualizations. Monitor enrollment gaps, gender parity, and teacher-pupil ratios to distribute resources equitably and track the state&apos;s progress towards SDG 4 goals.
        </p>
      </div>
    </div>
  );
}

function SlideBenefits() {
  return (
    <div className="text-center flex flex-col items-center justify-center my-auto min-h-max py-10">
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-6 md:mb-8">
        <div className="w-4 h-4 md:w-6 md:h-6 border-b-2 border-r-2 border-[#008751] transform rotate-45" />
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 md:mb-8 leading-tight">
        Deploying the standard <br className="hidden sm:block"/> for modern education.
      </h2>
      <p className="text-[1rem] sm:text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto mb-10 md:mb-16 leading-relaxed">
        The Zamfara State EMIS is a catalyst for accountability, improved educational outcomes, and modernized governance.
      </p>
      <div className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest">
         End of Presentation
      </div>
    </div>
  );
}
function SlideAdvancedTech() {
  return (
    <div className="my-auto min-h-max w-full">
      <div className="mb-6 md:mb-10 text-center">
        <h2 className="text-xs md:text-sm font-bold tracking-widest text-[#008751] uppercase mb-2 md:mb-3">Future-Proof</h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Advanced Technology.</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-gray-900 text-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 shadow-md relative overflow-hidden flex flex-col justify-end min-h-[16rem]">
          <div className="absolute top-6 left-6 p-3 bg-white/10 rounded-[1rem] backdrop-blur-sm">
            <BrainCircuit className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-xl md:text-2xl font-bold mb-2">AI-Powered Analytics</h4>
          <p className="text-[11px] md:text-sm text-gray-400 font-medium max-w-[90%] relative z-10">Predictive modeling to detect dropout risks, optimize resource allocation, and proactively support underperforming districts.</p>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none scale-150">
            <Activity className="w-64 h-64" />
          </div>
        </div>

        <div className="grid grid-rows-2 gap-4 md:gap-6">
          <div className="bg-white border border-gray-200 rounded-[1.5rem] p-5 shadow-sm flex items-center gap-4 hover:border-[#008751]/30 transition-colors">
            <div className="p-3 md:p-4 bg-green-50 rounded-[1rem] border border-green-100 shrink-0">
               <WifiOff className="w-5 h-5 text-[#008751]" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm md:text-[1rem] mb-1">Offline-First Architecture</h4>
              <p className="text-[10px] md:text-xs text-gray-500 font-medium">Built for low-bandwidth zones. Educators can record data offline; the system syncs securely upon network reconnection.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="bg-green-50 border border-green-100 rounded-[1.5rem] p-4 flex flex-col items-start justify-center">
              <Fingerprint className="w-5 h-5 text-[#008751] mb-2" />
              <h4 className="font-bold text-gray-900 text-xs md:text-sm mb-1">Biometric Trust</h4>
              <p className="text-[9px] md:text-[10px] text-gray-600 font-medium leading-relaxed">Cryptographic identification eliminates ghost workers and fraudulent enrollments.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-[1.5rem] p-4 flex flex-col items-start justify-center shadow-sm">
              <MapIcon className="w-5 h-5 text-gray-400 mb-2" />
              <h4 className="font-bold text-gray-900 text-xs md:text-sm mb-1">GIS Integration</h4>
              <p className="text-[9px] md:text-[10px] text-gray-500 font-medium leading-relaxed">Spatially map out 1,000+ facilities to optimize logistical deployment statewide.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideRoadmap() {
  const steps = [
    { num: "01", title: "Planning & Design", desc: "Data gathering and workflow analysis." },
    { num: "02", title: "Agile Development", desc: "Building core SIS and LMS modules." },
    { num: "03", title: "Pilot Deployment", desc: "Release to 50 targeted schools for stress-testing." },
    { num: "04", title: "Statewide Rollout", desc: "Scaling across all 14 Local Government Areas." },
    { num: "05", title: "Training & Adoption", desc: "Hands-on workshops for staff & administrators." },
  ];
  return (
    <div className="my-auto min-h-max flex flex-col w-full max-w-4xl mx-auto">
       <div className="mb-8 md:mb-12 text-center md:text-left">
          <h2 className="text-xs md:text-sm font-bold tracking-widest text-[#008751] uppercase mb-2">Roadmap</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Implementation Plan.</h3>
       </div>
       
       <div className="flex flex-col gap-3 md:gap-4 relative w-full">
         <div className="hidden md:block absolute left-[1.35rem] top-6 bottom-6 w-0.5 bg-gray-100 z-0"></div>
         {steps.map((step, i) => (
           <div key={i} className="flex items-center gap-3 md:gap-5 relative z-10 w-full pl-0">
              <div className="w-10 h-10 md:w-11 md:h-11 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center font-bold text-[#008751] shrink-0 text-xs md:text-sm shadow-sm font-mono relative z-10">
                 {step.num}
              </div>
              <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4 rounded-[1.25rem] flex-1 flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-4">
                 <h4 className="font-bold text-gray-900 text-sm md:text-[1rem] whitespace-nowrap">{step.title}</h4>
                 <p className="text-[10px] md:text-xs text-gray-500 font-medium text-left md:text-right hidden sm:block">{step.desc}</p>
                 <p className="text-[10px] md:text-xs text-gray-500 font-medium text-left sm:hidden leading-tight mt-0.5">{step.desc}</p>
              </div>
           </div>
         ))}
       </div>
    </div>
  );
}

function SlideImpact() {
  const impacts = [
    { title: "Educational Track", icon: GraduationCap, points: ["Accurate student progression tracking", "Reduced dropout rates system-wide", "Direct access to digital learning"], bg: "bg-blue-50/50", text: "text-blue-600", border: "border-blue-100" },
    { title: "Administrative Efficiency", icon: Shield, points: ["Frictionless policy deployment", "Digitized archival records", "Elimination of paperwork backlogs"], bg: "bg-purple-50/50", text: "text-purple-600", border: "border-purple-100" },
    { title: "Economic Optimizations", icon: TrendingUp, points: ["Targeted government funding distribution", "Automated revenue and fee tracking", "Massive reduction in operational leakages"], bg: "bg-[#008751]/5", text: "text-[#008751]", border: "border-[#008751]/20" },
    { title: "Social Empowerment", icon: HeartHandshake, points: ["Equitable resource access across LGAs", "Complete organizational transparency", "Restored public trust in education"], bg: "bg-orange-50/50", text: "text-orange-600", border: "border-orange-100" }
  ];
  return (
    <div className="my-auto min-h-max w-full">
       <div className="mb-6 md:mb-10 text-center">
         <h2 className="text-xs md:text-sm font-bold tracking-widest text-[#008751] uppercase mb-2">The Bigger Picture</h2>
         <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Measureable Impact.</h3>
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
         {impacts.map((Impact, idx) => (
           <div key={idx} className={`bg-white border ${Impact.border} rounded-[1.5rem] p-5 md:p-6 shadow-sm group hover:shadow-md transition-all duration-300`}>
             <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 md:p-3 rounded-[0.8rem] ${Impact.bg}`}>
                   <Impact.icon className={`w-4 h-4 md:w-5 md:h-5 ${Impact.text}`} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm md:text-lg">{Impact.title}</h4>
             </div>
             <ul className="space-y-2 md:space-y-2.5">
                 {Impact.points.map((pt, j) => (
                   <li key={j} className="flex items-start gap-2.5 text-[11px] md:text-[13px] text-gray-500 font-medium">
                     <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-gray-300`}></div>
                     <span className="leading-snug">{pt}</span>
                   </li>
                 ))}
             </ul>
           </div>
         ))}
       </div>
    </div>
  );
}

