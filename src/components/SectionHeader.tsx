import React from 'react';

interface SectionHeaderProps {
  kicker: string;
  title: string;
  subtitle?: string;
  isDark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  subtitle,
  isDark = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`text-[13px] font-semibold tracking-[0.2em] uppercase font-mono ${
            isDark ? 'text-[#888888]' : 'text-[#888888]'
          }`}
        >
          {kicker}
        </span>
      </div>
      <h2
        className={`text-3xl sm:text-4xl md:text-[52px] font-extrabold tracking-tight leading-[1.15] mb-4 ${
          isDark ? 'text-white' : 'text-[#18191C]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg max-w-3xl leading-relaxed ${
            isDark ? 'text-[#A0A0A0]' : 'text-[#666666]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
