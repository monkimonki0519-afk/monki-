import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-[#18191C] text-white text-xs font-mono border border-[#D6CDA8]/40 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
      <CheckCircle2 className="w-4 h-4 text-[#D6CDA8]" />
      <span>{message}</span>
    </div>
  );
};
