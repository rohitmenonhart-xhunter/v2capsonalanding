'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'border' | 'subtle';
}

export function GlassCard({ children, className, variant = 'default' }: GlassCardProps) {
  const variants = {
    default: 'bg-white/5 backdrop-blur-xl border border-white/10',
    border: 'bg-white/[0.02] backdrop-blur-2xl border border-white/20',
    subtle: 'bg-white/[0.03] backdrop-blur-lg border border-white/5',
  };

  return (
    <div
      className={cn(
        'rounded-2xl transition-all duration-500',
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
