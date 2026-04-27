import { motion } from 'motion/react';
import { Card, Button } from '../components/UI';
import { WORKOUT_CATEGORIES } from '../data';
import { useNavigate } from 'react-router-dom';
import { Dumbbell, Utensils, TrendingUp, User as UserIcon, PlayCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export function Home() {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Treinos', icon: Dumbbell, path: '/workouts', color: 'text-brand' },
    { label: 'Dieta', icon: Utensils, path: '/diet', color: 'text-blue-400' },
    { label: 'Progresso', icon: TrendingUp, path: '/progress', color: 'text-emerald-400' },
    { label: 'Perfil', icon: UserIcon, path: '/profile', color: 'text-purple-400' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-display tracking-tighter italic">BOAS VINDAS, <span className="text-brand">GUERREIRO</span></h2>
          <p className="text-white/40 font-medium">"Sem dor, sem ganho."</p>
        </div>
        <div className="w-12 h-12 bg-white/5 rounded-full border border-white/10 flex items-center justify-center">
          <span className="text-xl font-black italic">IF</span>
        </div>
      </div>

      {/* Hero Banner */}
      <Card className="relative h-48 lg:h-64 flex flex-col justify-end p-6 group" hover={false}>
        <img 
          src="https://picsum.photos/seed/gymhero/1200/600" 
          alt="Gym" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
        <div className="relative z-10">
          <h3 className="text-2xl font-display tracking-tight text-white mb-1">TREINO DO DIA</h3>
          <p className="text-white/60 text-sm mb-4">Peito e Tríceps - Foco em Hipertrofia</p>
          <Button size="sm" className="gap-2" onClick={() => navigate('/workouts/peito')}>
            <PlayCircle size={18} />
            COMEÇAR AGORA
          </Button>
        </div>
      </Card>

      {/* Grid Menu */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {menuItems.map((item) => (
          <Card 
            key={item.label} 
            className="flex flex-col items-center justify-center py-10 gap-4 group"
            onClick={() => navigate(item.path)}
          >
            <div className={cn("p-4 rounded-2xl bg-white/5 group-hover:bg-brand/10 transition-colors", item.color)}>
              <item.icon size={32} />
            </div>
            <span className="font-bold uppercase tracking-widest text-xs">{item.label}</span>
          </Card>
        ))}
      </div>

      {/* Recent Activity / Next Meal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase text-white/40 tracking-[0.2em]">Próxima Refeição</h4>
          <Card className="p-5 flex items-center gap-4 bg-white/[0.02]">
            <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Utensils size={24} />
            </div>
            <div>
              <p className="font-bold">Almoço</p>
              <p className="text-sm text-white/60">Arroz, Frango e Brócolis</p>
            </div>
            <div className="ml-auto text-right">
              <p className="font-mono text-xs text-white/40">12:30</p>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase text-white/40 tracking-[0.2em]">Meta de Peso</h4>
          <Card className="p-5 bg-white/[0.02]">
            <div className="flex justify-between items-center mb-4">
              <p className="font-bold">Evolução Peso</p>
              <p className="text-brand font-black">81kg <span className="text-xs text-white/40 font-normal">/ 78kg</span></p>
            </div>
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '70%' }}
                className="h-full bg-brand red-glow"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
