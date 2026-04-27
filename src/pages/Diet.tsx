import { DIET_PLAN } from '../data';
import { Card } from '../components/UI';
import { Coffee, Sun, Sunset, Moon, Info } from 'lucide-react';

const mealIcons: Record<string, any> = {
  'Café da Manhã': Coffee,
  'Almoço': Sun,
  'Lanche': Sunset,
  'Jantar': Moon,
};

export function Diet() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-display tracking-tighter italic uppercase">Dieta</h2>
        <p className="text-white/40 mt-1">Nutrição estratégica para seus objetivos.</p>
      </div>

      <Card className="p-5 bg-blue-500/5 border-blue-500/20" hover={false}>
        <div className="flex items-center gap-3 mb-2">
          <Info className="text-blue-400" size={18} />
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Dica Nutricional</span>
        </div>
        <p className="text-sm text-white/70 leading-relaxed italic">
          "Consuma proteína em todas as refeições para maximizar a síntese proteica e manter a saciedade."
        </p>
      </Card>

      <div className="space-y-4">
        {DIET_PLAN.map((meal) => {
          const Icon = mealIcons[meal.type] || Coffee;
          return (
            <Card key={meal.type} className="p-5 flex gap-4 bg-white/[0.02]" hover={false}>
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand">
                <Icon size={26} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-lg">{meal.type}</h3>
                  <span className="text-[10px] font-mono text-white/30">{meal.time}</span>
                </div>
                <p className="text-sm text-white/60 mb-3">{meal.description}</p>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-tighter px-2 py-1 bg-white/5 rounded text-white/40">
                    <span className="text-white">{meal.calories}</span> kcal
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-tighter px-2 py-1 bg-white/5 rounded text-white/40">
                    <span className="text-white">{meal.protein}</span> prot
                  </span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
