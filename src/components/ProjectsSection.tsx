import React from 'react';
import { SectionHeader } from './SectionHeader';
import { PROJECTS_LIST, HONORS_AND_LANGUAGES } from '../data/portfolioData';
import { Calendar, User, Award, Globe2, Sparkles, CheckCircle, ExternalLink, Play } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20"
    >
      <SectionHeader
        kicker="04 / PROJECT EXPERIENCES"
        title="自主项目经历"
      />

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 items-stretch">
        {PROJECTS_LIST.map((proj) => (
          <div
            key={proj.number}
            className="bg-white rounded-[20px] border border-[#E5E1D6] p-7 sm:p-8 flex flex-col justify-between editorial-shadow hover:translate-y-[-4px] hover:border-[#D6CDA8] transition-all duration-300 relative group overflow-hidden"
          >
            {/* Top Row: Large Number Kicker + Date + Optional Link */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl sm:text-5xl font-black font-mono text-[#8B7355]/20 group-hover:text-[#8B7355]/40 transition-colors">
                  {proj.number}
                </span>
                <div className="flex items-center gap-2">
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#8B7355] bg-[#FAF8F5] border border-[#8B7355]/30 hover:bg-[#8B7355] hover:text-white px-2.5 py-1 rounded-full transition-all"
                      title="在 B 站观看影片原片"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>B 站看原片</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                  <div className="flex items-center gap-1.5 text-[12px] font-mono text-[#888888] px-2.5 py-1 rounded-full bg-[#FAFAF7] border border-[#E5E1D6]">
                    <Calendar className="w-3 h-3 text-[#8B7355]" />
                    <span>{proj.period}</span>
                  </div>
                </div>
              </div>

              {/* Title & Role */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-[22px] font-bold text-[#18191C] tracking-tight mb-1.5 leading-snug">
                  {proj.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#888888] font-medium">
                  <User className="w-3.5 h-3.5 text-[#8B7355]" />
                  <span>{proj.role}</span>
                </div>
              </div>

              {/* Description summary */}
              <p className="text-xs sm:text-[13px] text-[#666666] leading-relaxed mb-4 pb-3 border-b border-[#FAFAF7]">
                {proj.description}
              </p>

              {/* Bullet points */}
              <div className="space-y-3 mb-6">
                {proj.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8B7355] mt-2 shrink-0" />
                    <p className="text-xs sm:text-[13px] text-[#444444] leading-[1.7]">
                      {pt}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Metrics Pill */}
            <div className="pt-4 border-t border-[#E5E1D6]">
              <div className="px-3 py-2 rounded-xl bg-[#FAFAF7] border border-[#E5E1D6] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#8B7355] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold text-[#18191C] leading-tight">
                    {proj.metricsBadge}
                  </span>
                </div>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#8B7355] hover:underline flex items-center gap-1 shrink-0 font-medium"
                  >
                    <span>观看</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Honors, Awards & Languages Compact Banner */}
      <div className="bg-white rounded-[24px] border border-[#E5E1D6] p-7 sm:p-9 editorial-shadow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Languages (5 cols) */}
          <div className="lg:col-span-4 lg:border-r lg:border-[#E5E1D6] lg:pr-8">
            <div className="flex items-center gap-2 mb-4">
              <Globe2 className="w-4 h-4 text-[#8B7355]" />
              <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-[#18191C]">
                语言能力 / Languages
              </h4>
            </div>
            <div className="space-y-2.5">
              {HONORS_AND_LANGUAGES.languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#FAFAF7] border border-[#E5E1D6]"
                >
                  <span className="text-xs font-medium text-[#444444]">{lang.name}</span>
                  <span className="text-xs font-mono font-bold text-[#18191C] px-2 py-0.5 rounded bg-white border border-[#E5E1D6]">
                    {lang.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Awards (7 cols) */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-[#8B7355]" />
              <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-[#18191C]">
                荣誉与奖项 / Honors & Competitions
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {HONORS_AND_LANGUAGES.honors.map((honor, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAFAF7] border border-[#E5E1D6]"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-[#8B7355] shrink-0" />
                  <span className="text-xs text-[#18191C] font-medium leading-tight">
                    {honor}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
