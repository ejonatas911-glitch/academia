import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '../components/UI';
import { PROGRESS_HISTORY } from '../data';
import { TrendingUp, Scale, Zap } from 'lucide-react';

export function Progress() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-display tracking-tighter italic uppercase">Evolução</h2>
        <p className="text-white/40 mt-1">Seu progresso nos últimos meses.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-6 flex flex-col items-center justify-center gap-2">
          <Scale className="text-brand" size={24} />
          <span className="text-3xl font-black italic tracking-tighter">81<span className="text-xs uppercase font-normal ml-1">kg</span></span>
          <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Peso Atual</span>
        </Card>
        <Card className="p-6 flex flex-col items-center justify-center gap-2">
          <Zap className="text-emerald-400" size={24} />
          <span className="text-3xl font-black italic tracking-tighter">42<span className="text-xs uppercase font-normal ml-1">kg</span></span>
          <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Massa Muscular</span>
        </Card>
      </div>

      <Card className="p-4 bg-surface/50 border-white/5" hover={false}>
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp size={20} className="text-brand" />
          <h3 className="font-bold uppercase text-xs tracking-widest">Histórico de Peso</h3>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={PROGRESS_HISTORY}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10, fontWeight: 700 }}
              />
              <YAxis 
                hide 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#171717', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '12px',
                  fontSize: '12px'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="weight" 
                stroke="#E11D48" 
                strokeWidth={3} 
                dot={{ fill: '#E11D48', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'white', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="muscleMass" 
                stroke="#10b981" 
                strokeWidth={3} 
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="space-y-4">
        <h4 className="text-xs font-black uppercase text-white/40 tracking-[0.2em]">Medidas Corporais</h4>
        <div className="space-y-2">
          {[
            { label: 'Peitoral', value: '112 cm', diff: '+2cm' },
            { label: 'Braco Dir.', value: '42 cm', diff: '+0.5cm' },
            { label: 'Cintura', value: '84 cm', diff: '-1cm' },
            { label: 'Coxa', value: '64 cm', diff: '+1cm' },
          ].map((stat) => (
            <Card key={stat.label} className="p-4 flex items-center justify-between" hover={false}>
              <span className="font-bold text-white/60">{stat.label}</span>
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold">{stat.value}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${stat.diff.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                  {stat.diff}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
