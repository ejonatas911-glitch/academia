import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/UI';
import { Dumbbell } from 'lucide-react';

export function Login({ onLogin }: { onLogin: () => void }) {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    onLogin();
  };

  return (
    <div className="fixed inset-0 bg-bg flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 blur-[120px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/10 blur-[120px] -ml-48 -mb-48" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm text-center relative z-10"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-brand text-white mb-8 red-glow-strong transform -rotate-12">
          <Dumbbell size={40} />
        </div>
        
        <h1 className="text-5xl font-display text-white tracking-tighter mb-2 italic">
          IRON <span className="text-brand">FORCE</span>
        </h1>
        <p className="text-white/60 mb-12 font-medium">A força que você precisa, onde você estiver.</p>

        <div className="space-y-4">
          <div className="group">
            <input 
              type="text" 
              placeholder="Usuário" 
              className="w-full bg-surface border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand/50 transition-all text-white placeholder:text-white/20"
            />
          </div>
          <div className="group">
            <input 
              type="password" 
              placeholder="Senha" 
              className="w-full bg-surface border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand/50 transition-all text-white placeholder:text-white/20"
            />
          </div>
          
          <Button 
            size="xl" 
            className="w-full mt-4" 
            onClick={handleLogin}
            isLoading={loading}
          >
            ENTRAR
          </Button>

          <Button 
            variant="secondary"
            size="md" 
            className="w-full" 
            onClick={handleLogin}
          >
            ENTRAR COMO CONVIDADO
          </Button>

          <p className="text-sm text-white/40 mt-8">
            Não tem uma conta? <span className="text-brand font-bold cursor-pointer hover:underline">Cadastre-se</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
