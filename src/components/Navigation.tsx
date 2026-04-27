import { motion } from 'motion/react';
import { Home, Dumbbell, ClipboardList, TrendingUp, User, LogOut, Calendar } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

export function BottomNav() {
  const items = [
    { icon: Home, label: 'Início', path: '/home' },
    { icon: Calendar, label: 'Agenda', path: '/schedule' },
    { icon: Dumbbell, label: 'Treinos', path: '/workouts' },
    { icon: TrendingUp, label: 'Evolução', path: '/progress' },
    { icon: User, label: 'Perfil', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-surface/80 backdrop-blur-xl border-t border-white/5 z-50 flex items-center justify-around px-2 pb-safe">
      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => cn(
            "flex flex-col items-center gap-1 transition-colors relative px-4 py-2 rounded-xl",
            isActive ? "text-brand" : "text-white/40 hover:text-white/60"
          )}
        >
          {({ isActive }) => (
            <>
              <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-bold uppercase tracking-tight">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute -top-1 inset-x-0 mx-auto w-8 h-1 bg-brand rounded-full shadow-[0_0_10px_rgba(225,29,72,0.8)]"
                />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export function Sidebar() {
  const items = [
    { icon: Home, label: 'Início', path: '/home' },
    { icon: Calendar, label: 'Agenda', path: '/schedule' },
    { icon: Dumbbell, label: 'Treinos', path: '/workouts' },
    { icon: TrendingUp, label: 'Evolução', path: '/progress' },
    { icon: User, label: 'Perfil', path: '/profile' },
  ];

  return (
    <aside className="w-64 h-screen bg-surface border-r border-white/5 flex flex-col p-6 hidden lg:flex">
      <div className="mb-12">
        <h1 className="text-3xl font-display text-brand tracking-tighter italic">IRON FORCE</h1>
      </div>

      <nav className="flex-1 space-y-2">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-4 px-4 py-3 rounded-xl font-bold transition-all",
              isActive 
                ? "bg-brand text-white red-glow" 
                : "text-white/60 hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon size={22} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto">
        <button 
          onClick={() => window.location.href = '/login'}
          className="flex items-center gap-4 px-4 py-3 w-full text-white/40 hover:text-brand transition-colors font-bold"
        >
          <LogOut size={22} />
          Sair
        </button>
      </div>
    </aside>
  );
}
