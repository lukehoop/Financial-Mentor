import { useDashboardData } from "@/hooks/use-dashboard";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { AlertTriangle, TrendingUp, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Budget() {
  const { data, isLoading } = useDashboardData();

  if (isLoading) return <div className="p-8">Loading budget data...</div>;
  if (!data?.budget) return <div className="p-8">No budget data available.</div>;

  const { budget } = data;
  
  // Prepare data for the pie chart
  const chartData = budget.categories.map(cat => ({
    name: cat.name,
    value: parseFloat(cat.allocatedAmount),
    color: cat.color || "#10b981" // Fallback to emerald
  }));

  const totalAllocated = chartData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display tracking-tight">Monthly Budget</h1>
          <p className="text-muted-foreground mt-1">Manage your spending and savings goals</p>
        </div>
        <div className="bg-primary/10 text-primary px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          2 Days until your budget resets
        </div>
      </div>

      {/* Main Budget Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-card rounded-2xl border shadow-sm p-8">
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-2">Total Monthly Budget</h2>
            <div className="text-5xl font-bold font-display text-foreground mb-8">
              ${parseFloat(budget.totalAmount).toLocaleString()}
            </div>
            
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={140}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number) => `$${value.toLocaleString()}`}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend 
                    layout="vertical" 
                    verticalAlign="middle" 
                    align="right"
                    iconType="circle"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
             <div className="relative z-10">
               <div className="bg-white/10 w-fit p-3 rounded-xl mb-4">
                 <TrendingUp className="w-6 h-6 text-emerald-400" />
               </div>
               <h3 className="text-lg font-bold mb-2">Dive Deeper</h3>
               <p className="text-slate-300 text-sm mb-6">
                 Analyze your spending habits to find where you can save more.
               </p>
               <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-semibold text-sm hover:bg-emerald-50 transition-colors">
                 Analyze Spending
               </button>
             </div>
          </div>

          <div className="bg-card border p-6 rounded-2xl shadow-sm">
             <div className="bg-primary/10 w-fit p-3 rounded-xl mb-4 text-primary">
               <BookOpen className="w-6 h-6" />
             </div>
             <h3 className="text-lg font-bold mb-2 text-foreground">Budgeting 101</h3>
             <p className="text-muted-foreground text-sm mb-6">
               Learn the 50/30/20 rule and how to apply it to your finances.
             </p>
             <Link href="/modules">
               <button className="w-full border border-border bg-background text-foreground py-3 rounded-xl font-semibold text-sm hover:bg-muted transition-colors flex items-center justify-center gap-2">
                 Start Learning
                 <ArrowRight className="w-4 h-4" />
               </button>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
