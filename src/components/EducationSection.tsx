import React from 'react';
import { SectionHeader } from './SectionHeader';
import { EDUCATION_LIST } from '../data/portfolioData';
import { Award, BookOpen, Calendar, MapPin, Sparkles } from 'lucide-react';
import { usePhotos } from '../context/PhotoContext';

export const EducationSection: React.FC = () => {
  const { cityuLogo, hunnuLogo } = usePhotos();

  return (
    <section
      id="education"
      className="py-16 md:py-24 max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20"
    >
      <SectionHeader
        kicker="01 / EDUCATION"
        title="教育背景"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {EDUCATION_LIST.map((edu) => {
          const isDark = edu.isDark;

          if (!isDark) {
            // Light Card: CityU (香港城市大学)
            return (
              <div
                key={edu.id}
                className="group bg-white rounded-[28px] border border-[#E5E1D6] p-8 sm:p-10 flex flex-col justify-between editorial-shadow hover:translate-y-[-4px] hover:border-[#D6CDA8] transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative background watermark */}
                <div className="absolute -right-6 -top-6 w-44 h-44 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-300">
                  <img
                    src={cityuLogo}
                    alt="CityU Watermark"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  {/* Top Row: Date & QS Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E5E1D6]">
                    <div className="flex items-center gap-2 text-[12px] font-mono tracking-[0.1em] text-[#888888] uppercase">
                      <Calendar className="w-3.5 h-3.5 text-[#8B7355]" />
                      <span>{edu.period}</span>
                    </div>
                    <span className="px-3 py-1 bg-[#8B7355] text-white rounded-full text-[10px] font-bold uppercase tracking-wider font-mono shadow-xs">
                      QS No.52
                    </span>
                  </div>

                  {/* School Emblem & Header */}
                  <div className="flex items-start gap-4 mb-5">
                    {/* Official CityU Emblem Frame */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FAFAF7] border border-[#E5E1D6] p-2 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={cityuLogo}
                        alt="香港城市大学 校徽"
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-2xl sm:text-[24px] font-bold text-[#18191C] tracking-tight">
                          {edu.school}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded-md bg-[#F3EFE6] text-[#8B7355] font-mono font-medium">
                          香港
                        </span>
                      </div>
                      <p className="text-base font-semibold text-[#444444] mt-0.5">
                        {edu.major} · <span className="text-[#8B7355] font-medium">{edu.degree}</span>
                      </p>
                    </div>
                  </div>

                  {/* Rank highlight badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F6F4EE] border border-[#E8E3D5] text-xs font-mono text-[#7A6242] mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-[#8B7355]" />
                    <span>QS 世界大学排名 No.52 · 传播与媒体学科全球前列</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-[14px] text-[#666666] leading-[1.75] mt-2">
                    {edu.description}
                  </p>
                </div>

                {/* Key focus highlights */}
                <div className="mt-8 pt-6 border-t border-[#FAFAF7]">
                  <p className="text-xs font-mono text-[#888888] mb-2.5">核心研究与专业方向：</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-lg bg-[#FAFAF7] text-[#555555] border border-[#E5E1D6] font-medium">
                      品牌战略与整合营销
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-lg bg-[#FAFAF7] text-[#555555] border border-[#E5E1D6] font-medium">
                      数字传播与增长
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-lg bg-[#FAFAF7] text-[#555555] border border-[#E5E1D6] font-medium">
                      消费者洞察与用户研究
                    </span>
                  </div>
                </div>
              </div>
            );
          } else {
            // Dark Card: Hunan Normal University (湖南师范大学 211)
            return (
              <div
                key={edu.id}
                className="group bg-[#18191C] text-white rounded-[28px] border border-[#2A2D33] p-8 sm:p-10 flex flex-col justify-between shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:translate-y-[-4px] hover:border-[#D6CDA8]/60 transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative background watermark */}
                <div className="absolute -right-6 -top-6 w-44 h-44 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-300">
                  <img
                    src={hunnuLogo}
                    alt="HUNNU Watermark"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  {/* Top Row: Date & Status Tag */}
                  <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#2A2D33]">
                    <div className="flex items-center gap-2 text-[12px] font-mono tracking-[0.1em] text-[#A0A0A0] uppercase">
                      <Calendar className="w-3.5 h-3.5 text-[#D6CDA8]" />
                      <span>{edu.period}</span>
                    </div>
                    <span className="px-3 py-1 bg-[#F0EDE5] border border-[#E5E1D6] rounded-full text-[10px] text-[#8B7355] font-bold font-mono">
                      211 · 国家双一流
                    </span>
                  </div>

                  {/* School Emblem & Header */}
                  <div className="flex items-start gap-4 mb-5">
                    {/* Official HUNNU Emblem Frame */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-[#3A3D43] p-1.5 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={hunnuLogo}
                        alt="湖南师范大学 校徽"
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-2xl sm:text-[24px] font-bold text-white tracking-tight">
                          {edu.school}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded-md bg-[#2A2D33] text-[#D6CDA8] font-mono font-medium">
                          长沙 · 211
                        </span>
                      </div>
                      <p className="text-base font-semibold text-[#D6CDA8] mt-0.5">
                        {edu.major} · <span className="text-[#A0A0A0] font-normal">{edu.degree}</span>
                      </p>
                    </div>
                  </div>

                  {/* GPA & Weighted Score */}
                  <div className="flex flex-wrap items-center gap-3 my-4">
                    <div className="px-3.5 py-2 rounded-xl bg-[#22252A] border border-[#3A3D43] text-xs font-mono text-white flex items-center gap-2">
                      <span className="text-[#888888]">GPA:</span>
                      <strong className="text-[#D6CDA8] text-sm">3.98</strong>
                      <span className="text-[#666666]">/ 5.00</span>
                    </div>
                    <div className="px-3.5 py-2 rounded-xl bg-[#22252A] border border-[#3A3D43] text-xs font-mono text-white flex items-center gap-2">
                      <span className="text-[#888888]">加权均分:</span>
                      <strong className="text-white text-sm">86.3</strong>
                      <span className="text-[#D6CDA8] text-[11px]">(前 10%)</span>
                    </div>
                  </div>

                  {/* Course Details */}
                  {edu.courses && (
                    <div className="mt-4">
                      <p className="text-xs font-mono text-[#888888] mb-2.5 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#D6CDA8]" />
                        <span>核心高分专业课程：</span>
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {edu.courses.map((course, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#22252A] border border-[#333740] text-xs hover:border-[#D6CDA8]/40 transition-colors"
                          >
                            <span className="text-[#A0A0A0] truncate pr-1">{course.name}</span>
                            <span className="font-mono font-bold text-[#D6CDA8]">{course.score}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer note in dark card */}
                <div className="mt-6 pt-4 border-t border-[#2A2D33] flex items-center justify-between text-[12px] font-mono text-[#888888]">
                  <span>新闻与传播学院</span>
                  <span className="text-[#D6CDA8]">影视视听与内容创作体系</span>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

