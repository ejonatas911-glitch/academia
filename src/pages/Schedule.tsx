import { useState } from 'react';
import { Card, Button } from '../components/UI';
import { WORKOUT_CATEGORIES } from '../data';
import { Calendar, Plus, Trash2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const DAYS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

export function Schedule() {
  const [schedule, setSchedule] = useState<Record<string, string[]>>({
    'Segunda': ['peito'],
    'Terça': ['costas'],
    'Quarta': ['pernas'],
    'Quinta': ['ombro'],
    'Sexta': ['braço'],
  });

  const [activeDay, setActiveDay] = useState('Segunda');

  const addWorkout = (day: string, workoutId: string) => {
    setSchedule(prev => ({
      ...prev,
      [day]: [...(prev[day] || []), workoutId]
    }));
  };

  const removeWorkout = (day: string, index: number) => {
    setSchedule(prev => ({
      ...prev,
      [day]: prev[day].filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-display tracking-tighter italic uppercase">Minha Agenda</h2>
        <p className="text-white/40 mt-1">Personalize sua rotina de treinos semanal.</p>
      </div>

      {/* Day Selector */}
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
        {DAYS.map(day => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-6 py-3 rounded-xl font-bold transition-all whitespace-nowrap ${
              activeDay === day 
                ? 'bg-brand text-white red-glow' 
                : 'bg-white/5 text-white/40 hover:bg-white/10'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Workouts for Active Day */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black uppercase tracking-widest text-white/40">Treinos de {activeDay}</h3>
          </div>
          
          <AnimatePresence mode="popLayout">
            {(schedule[activeDay] || []).length > 0 ? (
              schedule[activeDay].map((workoutId, idx) => {
                const workout = WORKOUT_CATEGORIES.find(w => w.id === workoutId);
                return (
                  <motion.div
                    key={`${workoutId}-${idx}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    layout
                  >
                    <Card className="p-4 flex items-center justify-between border-l-4 border-l-brand">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand">
                          <Calendar size={20} />
                        </div>
                        <div>
                          <p className="font-bold uppercase tracking-tight">{workout?.name}</p>
                          <p className="text-[10px] text-white/40 uppercase tracking-widest">{workout?.exercises.length} Exercícios</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeWorkout(activeDay, idx)}
                        className="p-2 text-white/20 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </Card>
                  </motion.div>
                );
              })
            ) : (
              <div className="py-12 text-center bg-white/[0.02] rounded-3xl border border-dashed border-white/10">
                <p className="text-white/20 font-bold">Nenhum treino agendado para este dia.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Available Workouts to Add */}
        <div className="space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-white/40">Adicionar à Agenda</h3>
          <div className="grid grid-cols-1 gap-2">
            {WORKOUT_CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => addWorkout(activeDay, category.id)}
                className="p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
                    <Plus size={16} />
                  </div>
                  <span className="font-bold text-sm uppercase tracking-tight">{category.name}</span>
                </div>
                <span className="text-[10px] text-white/20 group-hover:text-white/60 transition-colors">CLIQUE PARA ADICIONAR</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
