import React from 'react';
import { SectionHeader } from './SectionHeader';
import { INTERNSHIP_LIST } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export const InternshipSection: React.FC = () => {
  return (
    <section
      id="internship"
      className="py-16 md:py-24 max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20"
    >
      <SectionHeader
        kicker="02 / INTERNSHIP"
        title="工作经历"
      />

      {/* Vertical Timeline Container */}
      <div className="relative pl-6 sm:pl-10 md:pl-12 border-l border-[#E5E1D6] space-y-12 sm:space-y-16">
        {INTERNSHIP_LIST.map((item, index) => (
          <div key={item.id} className="relative group">
            {/* Timeline Node Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-6 w-4 h-4 rounded-full bg-white border-4 border-[#8B7355] group-hover:border-[#D6CDA8] group-hover:scale-125 transition-all duration-300 shadow-sm" />

            {/* Internship Card */}
            <div className="bg-white rounded-[20px] border border-[#E5E1D6] p-6 sm:p-8 md:p-10 editorial-shadow hover:translate-y-[-4px] hover:border-[#D6CDA8] transition-all duration-300">
              {/* Header: Company & Role & Date */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-[#E5E1D6]">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl md:text-[24px] font-bold text-[#18191C] tracking-tight">
                      {item.company}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mt-1.5">
                    <Briefcase className="w-4 h-4 text-[#8B7355]" />
                    <span className="text-base sm:text-[16px] font-semibold text-[#8B7355]">
                      {item.role}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center px-3.5 py-1.5 rounded-full bg-[#FAFAF7] border border-[#E5E1D6] text-xs sm:text-[13px] font-mono text-[#888888]">
                  <Calendar className="w-3.5 h-3.5 text-[#8B7355]" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Capability Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.capabilities.map((cap, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-3 py-1 rounded-full bg-[#D6CDA8] text-[#18191C] text-xs font-semibold tracking-wide"
                  >
                    {cap}
                  </span>
                ))}
              </div>

              {/* Bullet Points */}
              <div className="space-y-4">
                {item.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8B7355] mt-2.5 shrink-0" />
                    <div className="text-sm sm:text-[15px] text-[#444444] leading-[1.75]">
                      <span className="font-medium text-[#18191C]">{pt.title}：</span>
                      <span>{pt.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
