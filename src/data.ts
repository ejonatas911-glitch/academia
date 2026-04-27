import { WorkoutCategory, Meal, ProgressEntry } from './types';

export const WORKOUT_CATEGORIES: WorkoutCategory[] = [
  {
    id: 'peito_triceps',
    name: 'Peito e Tríceps',
    icon: 'Dumbbell',
    exercises: [
      { id: 'p1', name: 'Supino Reto', image: 'https://lh3.googleusercontent.com/u/0/d/1xVqbJHtbNfcKBrLHXhUKKpJVhnPig3hW', sets: '4', reps: '8-12' },
      { id: 'p2', name: 'Supino Inclinado', image: 'https://lh3.googleusercontent.com/u/0/d/1Z9HtTu5COqa4Qmrp87rlhd0OpXkhTkkI', sets: '4', reps: '8-12' },
      { id: 'p3', name: 'Supino com Halteres', image: 'https://lh3.googleusercontent.com/u/0/d/1_eDBxFYd_TmptXylVcuTcLDotT1slfCj', sets: '3', reps: '8-12' },
      { id: 'p4', name: 'Crucifixo', image: 'https://lh3.googleusercontent.com/u/0/d/1VL6GZimVIyVp_ZqKlljcnyBklzF_F2Cu', sets: '3', reps: '10-15' },
      { id: 'p5', name: 'Crossover', image: 'https://lh3.googleusercontent.com/u/0/d/1FO_abPqIfWsYAeTDiW8AOeJzNxWyZwga', sets: '3', reps: '10-15' },
      { id: 'p6', name: 'Flexão de Braço', image: 'https://lh3.googleusercontent.com/u/0/d/14PzwXu4-TesUsd8oeU3DUrj4zjhhIh1q', sets: '3', reps: 'Até a falha' },
      { id: 't1', name: 'Tríceps Polia Corda', image: 'https://lh3.googleusercontent.com/u/0/d/1Gvdq4MF2hZIeu_Fsl1Qi4UGAv5dFxpzC', sets: '4', reps: '12' },
      { id: 't2', name: 'Tríceps Polia Barra Reta', image: 'https://lh3.googleusercontent.com/u/0/d/1vEkKSTiBL2nDOHj8JgcY--CstctKInMf', sets: '4', reps: '10' },
      { id: 't3', name: 'Tríceps Testa (Barra W)', image: 'https://lh3.googleusercontent.com/u/0/d/11imhv2B9P2O9B8YKLVlXpY8MBb4pMZRO', sets: '4', reps: '10' },
      { id: 't4', name: 'Tríceps Banco', image: 'https://lh3.googleusercontent.com/u/0/d/1K1WwjiSSxiuoBWVD4QjiB1kMUAPIxAeQ', sets: '3', reps: 'Até a falha' },
      { id: 't5', name: 'Tríceps Francês', image: 'https://lh3.googleusercontent.com/u/0/d/15g6SnCeJMjocAnPDpFsYBv2-b5siPkKG', sets: '3', reps: '12' },
    ]
  },
  {
    id: 'costas_biceps',
    name: 'Costas e Bíceps',
    icon: 'Activity',
    exercises: [
      { id: 'c1', name: 'Barra Fixa', image: 'https://lh3.googleusercontent.com/u/0/d/1TxTQwY03kZLBjJ-fOmb7EjfLRelQ4fnQ', sets: '4', reps: 'Até a falha' },
      { id: 'c2', name: 'Puxada na Frente', image: 'https://lh3.googleusercontent.com/u/0/d/1XYXW3OLyPIMEW_BJp8Ewvb69qvcSzWLS', sets: '4', reps: '10' },
      { id: 'c3', name: 'Remada Curvada', image: 'https://lh3.googleusercontent.com/u/0/d/1W-ZoBRK_Z-4FOZZb2x0a6rBGt1LZpN_I', sets: '4', reps: '10' },
      { id: 'c4', name: 'Remada Baixa', image: 'https://lh3.googleusercontent.com/u/0/d/1dpBjCW355LXGYe9-fuJM0R88EbEKz6ov', sets: '3', reps: '12' },
      { id: 'c5', name: 'Pullover', image: 'https://lh3.googleusercontent.com/u/0/d/1COvtyc6ic_uv8siokmadccu1MVckAkgl', sets: '3', reps: '12' },
      { id: 'b1', name: 'Rosca direta (barra reta)', image: 'https://lh3.googleusercontent.com/u/0/d/1T4SRp27Tl1-xauTR1vZaqHH4FRs19j_h', sets: '4', reps: '10' },
      { id: 'b2', name: 'Rosca direta (barra W)', image: 'https://lh3.googleusercontent.com/u/0/d/1ka1PKcMRvJefC4gMsMX0dX8EVKpOgCyy', sets: '4', reps: '10' },
      { id: 'b3', name: 'Rosca alternada (halter)', image: 'https://lh3.googleusercontent.com/u/0/d/1-B9G1YpM6kYo0t9lMllLJqVAkoOIBtcU', sets: '3', reps: '12' },
      { id: 'b4', name: 'Rosca martelo', image: 'https://lh3.googleusercontent.com/u/0/d/1OqWuoKPFVXAVlAd7l4GKpgQh47LljOw0', sets: '3', reps: '12' },
      { id: 'b5', name: 'Rosca concentrada', image: 'https://lh3.googleusercontent.com/u/0/d/1OqWuoKPFVXAVlAd7l4GKpgQh47LljOw0', sets: '3', reps: '12' },
      { id: 'b6', name: 'Rosca na polia (barra/corda)', image: 'https://lh3.googleusercontent.com/u/0/d/1T9zu8JO2g_srbDDXuKi5PLPtw-VMYmE7', sets: '3', reps: '12' },
    ]
  },
  {
    id: 'pernas',
    name: 'Pernas',
    icon: 'PersonStanding',
    exercises: [
      { id: 'leg1', name: 'Agachamento Livre', image: 'https://lh3.googleusercontent.com/u/0/d/1pDgCsJIuho6JmFkJg45FHnvm5XvFAdnU', sets: '4', reps: '10' },
      { id: 'leg2', name: 'Leg Press', image: 'https://lh3.googleusercontent.com/u/0/d/1y0DPAaylstzOo2dt3UGy_7qjrUNiNUm2', sets: '4', reps: '12' },
      { id: 'leg3', name: 'Cadeira Extensora', image: 'https://lh3.googleusercontent.com/u/0/d/1KIoB2pg-NURgdqPg84da07gu2kDY3TI3', sets: '3', reps: '15' },
      { id: 'leg4', name: 'Cadeira Flexora', image: 'https://lh3.googleusercontent.com/u/0/d/11SrsKd8NPQqm-MhA7UghsJTpOtc_tfuN', sets: '3', reps: '15' },
      { id: 'leg5', name: 'Mesa Flexora', image: 'https://lh3.googleusercontent.com/u/0/d/10A1e7cN9II8n7xmWi4A-bnOFSHvmkByu', sets: '3', reps: '12' },
      { id: 'leg6', name: 'Panturrilha', image: 'https://lh3.googleusercontent.com/u/0/d/1KTZOrpWhI2MK7GU4ntQdzZedoTlu6vgz', sets: '4', reps: '20' },
    ]
  },

  {
    id: 'ombro',
    name: 'Ombro',
    icon: 'Target',
    exercises: [
      { id: 'o1', name: 'Desenvolvimento (barra/halter)', image: 'https://lh3.googleusercontent.com/u/0/d/1RWRI1Xjka7vLnkUbz06wmRZ2faCE7y3h', sets: '4', reps: '10' },
      { id: 'o2', name: 'Elevação lateral (halter)', image: 'https://lh3.googleusercontent.com/u/0/d/1UuQDm7976DmSK7amSeTv3o3igBBDaIgt', sets: '4', reps: '12' },
      { id: 'o3', name: 'Elevação lateral máquina', image: 'https://lh3.googleusercontent.com/u/0/d/1xUTJEKqqnsNVK5nyDoHjvA57avnOLhEn', sets: '3', reps: '12' },
      { id: 'o4', name: 'Elevação frontal', image: 'https://lh3.googleusercontent.com/u/0/d/1pJNhXDcU8OmAW9KHneMTYfs-hf_KVBH-', sets: '3', reps: '10' },
      { id: 'o5', name: 'Crucifixo invertido', image: 'https://lh3.googleusercontent.com/u/0/d/1Oa6d0L2bL2OCR8kKX6m83kSWYZbNPtyV', sets: '3', reps: '12' },
      { id: 'o6', name: 'Encolhimento', image: 'https://lh3.googleusercontent.com/u/0/d/1wpJvQij94sAqgzIQcsTsAyxr-aM5vNzR', sets: '3', reps: '15' },
    ]
  },
  {
    id: 'costas_biceps_2',
    name: 'Costas e Bíceps (2)',
    icon: 'Activity',
    exercises: [
      { id: 'c1_2', name: 'Barra Fixa', image: 'https://lh3.googleusercontent.com/u/0/d/1TxTQwY03kZLBjJ-fOmb7EjfLRelQ4fnQ', sets: '4', reps: 'Até a falha' },
      { id: 'c2_2', name: 'Puxada na Frente', image: 'https://lh3.googleusercontent.com/u/0/d/1XYXW3OLyPIMEW_BJp8Ewvb69qvcSzWLS', sets: '4', reps: '10' },
      { id: 'c3_2', name: 'Remada Curvada', image: 'https://lh3.googleusercontent.com/u/0/d/1W-ZoBRK_Z-4FOZZb2x0a6rBGt1LZpN_I', sets: '4', reps: '10' },
      { id: 'c4_2', name: 'Remada Baixa', image: 'https://lh3.googleusercontent.com/u/0/d/1dpBjCW355LXGYe9-fuJM0R88EbEKz6ov', sets: '3', reps: '12' },
      { id: 'c5_2', name: 'Pullover', image: 'https://lh3.googleusercontent.com/u/0/d/1COvtyc6ic_uv8siokmadccu1MVckAkgl', sets: '3', reps: '12' },
      { id: 'b1_2', name: 'Rosca direta (barra reta)', image: 'https://lh3.googleusercontent.com/u/0/d/1T4SRp27Tl1-xauTR1vZaqHH4FRs19j_h', sets: '4', reps: '10' },
      { id: 'b2_2', name: 'Rosca direta (barra W)', image: 'https://lh3.googleusercontent.com/u/0/d/1ka1PKcMRvJefC4gMsMX0dX8EVKpOgCyy', sets: '4', reps: '10' },
      { id: 'b3_2', name: 'Rosca alternada (halter)', image: 'https://lh3.googleusercontent.com/u/0/d/1-B9G1YpM6kYo0t9lMllLJqVAkoOIBtcU', sets: '3', reps: '12' },
      { id: 'b4_2', name: 'Rosca martelo', image: 'https://lh3.googleusercontent.com/u/0/d/1OqWuoKPFVXAVlAd7l4GKpgQh47LljOw0', sets: '3', reps: '12' },
      { id: 'b5_2', name: 'Rosca concentrada', image: 'https://lh3.googleusercontent.com/u/0/d/1OqWuoKPFVXAVlAd7l4GKpgQh47LljOw0', sets: '3', reps: '12' },
      { id: 'b6_2', name: 'Rosca na polia (barra/corda)', image: 'https://lh3.googleusercontent.com/u/0/d/1T9zu8JO2g_srbDDXuKi5PLPtw-VMYmE7', sets: '3', reps: '12' },
    ]
  }
];

export const DIET_PLAN: Meal[] = [
  { type: 'Café da Manhã', time: '07:00', description: 'Ovos mexidos, aveia e frutas', calories: '450', protein: '25g' },
  { type: 'Almoço', time: '12:30', description: 'Arroz integral, frango grelhado e brócolis', calories: '600', protein: '45g' },
  { type: 'Lanche', time: '16:00', description: 'Iogurte natural e amêndoas', calories: '250', protein: '15g' },
  { type: 'Jantar', time: '20:00', description: 'Peixe assado e salada mista', calories: '400', protein: '35g' },
];

export const PROGRESS_HISTORY: ProgressEntry[] = [
  { date: 'Jan', weight: 85, muscleMass: 38 },
  { date: 'Fev', weight: 83, muscleMass: 39 },
  { date: 'Mar', weight: 82, muscleMass: 40 },
  { date: 'Abr', weight: 81, muscleMass: 42 },
];
