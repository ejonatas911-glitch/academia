export interface User {
  name: string;
  weight: number;
  height: number;
  goal: string;
  completedWorkouts: string[];
}

export interface Exercise {
  id: string;
  name: string;
  image: string;
  sets: string;
  reps: string;
}

export interface WorkoutCategory {
  id: string;
  name: string;
  icon: string;
  exercises: Exercise[];
}

export interface Meal {
  type: string;
  time: string;
  description: string;
  calories: string;
  protein: string;
}

export interface ProgressEntry {
  date: string;
  weight: number;
  muscleMass: number;
}
