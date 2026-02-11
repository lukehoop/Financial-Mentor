import { Link } from "wouter";
import { PieChart, ArrowRight, ShieldCheck, TrendingUp, Users } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Left Panel - Branding */}
      <div className="w-full md:w-1/2 bg-slate-900 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <PieChart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight font-display">
              Prosper AI
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
            Master your money with <span className="text-emerald-400">AI-powered</span> insights.
          </h1>
          <p className="text-lg text-slate-300 max-w-md leading-relaxed">
            Join thousands of users who are building wealth and achieving financial freedom with personalized guidance.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-0">
          <div className="flex flex-col gap-2">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm mb-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="font-semibold">Secure & Private</h3>
            <p className="text-xs text-slate-400">Bank-level encryption for your data.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm mb-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="font-semibold">Smart Growth</h3>
            <p className="text-xs text-slate-400">AI strategies tailored to your goals.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm mb-2">
              <Users className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="font-semibold">Community</h3>
            <p className="text-xs text-slate-400">Learn with peers on the same journey.</p>
          </div>
        </div>
      </div>

      {/* Right Panel - Auth CTA */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 bg-white">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-display">Welcome Back</h2>
            <p className="text-slate-500">Sign in to access your dashboard</p>
          </div>

          <div className="space-y-4 pt-4">
            <a href="/api/login">
              <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold py-4 px-6 rounded-xl hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Sign in with Replit
                <ArrowRight className="w-5 h-5" />
              </button>
            </a>
            
            <p className="text-xs text-slate-400 mt-6">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
