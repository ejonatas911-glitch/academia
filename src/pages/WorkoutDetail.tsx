import { useParams, useNavigate } from 'react-router-dom';
import { WORKOUT_CATEGORIES } from '../data';
import { Card, Button } from '../components/UI';
import { ArrowLeft, CheckCircle2, Circle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function WorkoutDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const category = WORKOUT_CATEGORIES.find(c => c.id === id);
  const [completed, setCompleted] = useState<string[]>([]);

  if (!category) return <div>Treino não encontrado.</div>;

  const toggleExercise = (exerciseId: string) => {
    setCompleted(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(i => i !== exerciseId) 
        : [...prev, exerciseId]
    );
  };

  const progress = (completed.length / category.exercises.length) * 100;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => navigate('/workouts')} className="p-2">
          <ArrowLeft size={24} />
        </Button>
        <h2 className="text-3xl font-display tracking-tighter italic uppercase">{category.name}</h2>
      </div>

      <Card className="p-6 bg-brand/5 border-brand/20" hover={false}>
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-black uppercase tracking-widest text-brand">Progresso do Treino</span>
          <span className="text-xs font-mono font-bold">{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-brand shadow-[0_0_10px_rgba(225,29,72,0.5)]"
          />
        </div>
      </Card>

      <div className="space-y-4">
        {category.exercises.map((exercise, index) => (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            key={exercise.id}
          >
            <Card 
              className={`p-4 flex items-center gap-4 transition-all duration-500 border-l-4 ${completed.includes(exercise.id) ? 'border-l-emerald-500 bg-emerald-500/5' : 'border-l-brand'}`}
              onClick={() => toggleExercise(exercise.id)}
            >
              <img 
                src={exercise.image} 
                alt={exercise.name} 
                className="w-20 h-20 rounded-xl object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1">
                <h3 className={`font-bold transition-all ${completed.includes(exercise.id) ? 'line-through text-white/20' : 'text-white'}`}>
                  {exercise.name}
                </h3>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-[10px] uppercase font-black tracking-widest text-white/40">Séries: <span className="text-white">{exercise.sets}</span></span>
                  <span className="text-[10px] uppercase font-black tracking-widest text-white/40">Reps: <span className="text-white">{exercise.reps}</span></span>
                </div>
              </div>
              <div className={completed.includes(exercise.id) ? 'text-emerald-500' : 'text-white/10'}>
                {completed.includes(exercise.id) ? <CheckCircle2 size={24} /> : <Circle size={24} />}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {progress === 100 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-4"
          >
            <Button className="w-full" size="lg" onClick={() => navigate('/home')}>
              CONCLUIR TREINO
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
