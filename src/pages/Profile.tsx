import { Card, Button } from '../components/UI';
import { User, ShieldCheck, Settings, Bell, LogOut, Camera } from 'lucide-react';

export function Profile({ onLogout }: { onLogout: () => void }) {
  const user = {
    name: 'Jonatas Ramos',
    level: 'Intermediário',
    weight: '81kg',
    height: '1.82m',
    goal: 'Hipertrofia',
    xp: 75
  };

  return (
    <div className="space-y-8">
      <div className="relative">
        <div className="h-40 bg-gradient-to-r from-brand to-brand-dark rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 flex items-center justify-center text-white scale-[5]">
             <span className="font-display italic tracking-tighter">IRON FORCE</span>
          </div>
        </div>
        <div className="absolute -bottom-8 left-8 flex items-end gap-6">
          <div className="w-32 h-32 rounded-3xl bg-surface border-4 border-bg flex items-center justify-center text-brand relative overflow-hidden">
            <User size={64} />
            <button className="absolute bottom-1 right-1 w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center hover:scale-110 transition-transform">
              <Camera size={16} />
            </button>
          </div>
          <div className="mb-8">
             <h2 className="text-2xl font-display italic tracking-tight">{user.name}</h2>
             <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest">
               <ShieldCheck size={14} />
               {user.level}
             </div>
          </div>
        </div>
      </div>

      <div className="pt-12 grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-white/[0.02] rounded-2xl">
            <p className="text-xs font-bold text-white/30 uppercase mb-1">Peso</p>
            <p className="text-xl font-black italic">{user.weight}</p>
          </div>
          <div className="text-center p-4 bg-white/[0.02] rounded-2xl">
            <p className="text-xs font-bold text-white/30 uppercase mb-1">Altura</p>
            <p className="text-xl font-black italic">{user.height}</p>
          </div>
          <div className="text-center p-4 bg-white/[0.02] rounded-2xl">
            <p className="text-xs font-bold text-white/30 uppercase mb-1">Meta</p>
            <p className="text-sm font-black italic">{user.goal}</p>
          </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-xs font-black uppercase text-white/40 tracking-[0.2em]">Configurações</h4>
        <div className="space-y-2">
          {[
            { label: 'Notificações', icon: Bell },
            { label: 'Preferências de Treino', icon: Settings },
            { label: 'Sair da Conta', icon: LogOut, danger: true, onClick: onLogout },
          ].map((item) => (
            <Card key={item.label} className="p-4 flex items-center justify-between group" hover={!item.danger} onClick={item.onClick}>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${item.danger ? 'text-red-500' : 'text-white/60'}`}>
                  <item.icon size={20} />
                </div>
                <span className={`font-bold ${item.danger ? 'text-red-500' : 'text-white'}`}>{item.label}</span>
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white/10 group-hover:text-white/30">
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Button variant="ghost" className="w-full text-white/20 hover:text-white/40 text-xs tracking-tighter uppercase mb-10">
        Versão 1.0.4 - IRON FORCE PRO
      </Button>
    </div>
  );
}
