import { Card } from '../components/UI';
import { WORKOUT_CATEGORIES } from '../data';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Dumbbell, Activity, PersonStanding, Zap, Target, Shield } from 'lucide-react';

const iconMap: Record<string, any> = {
  Dumbbell,
  Activity,
  PersonStanding,
  Zap,
  Target,
  Shield
};

export function Workouts() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-display tracking-tighter italic uppercase underline decoration-brand/50 underline-offset-8">Treinos</h2>
        <p className="text-white/40 mt-2">Selecione o grupo muscular que deseja focar hoje.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {WORKOUT_CATEGORIES.map((category) => {
          const Icon = iconMap[category.icon] || Dumbbell;
          return (
            <Card 
              key={category.id} 
              className="p-6 flex items-center justify-between group"
              onClick={() => navigate(`/workouts/${category.id}`)}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">{category.name}</h3>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{category.exercises.length} Exercícios</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover:text-brand transition-colors">
                <ChevronRight size={20} />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
