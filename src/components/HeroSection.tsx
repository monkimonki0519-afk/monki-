import React, { useRef } from 'react';
import { FileText, Mail, ArrowDown, ArrowUpRight, Camera, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePhotos } from '../context/PhotoContext';

interface HeroSectionProps {
  onOpenResume: () => void;
  onContactClick: () => void;
  onOpenPhotoManager: () => void;
  onShowToast?: (msg: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResume,
  onContactClick,
  onOpenPhotoManager,
  onShowToast,
}) => {
  const { lifePhoto, setCustomLifePhoto, isCustomLife, resetPhotos } = usePhotos();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const scrollToEducation = () => {
    const el = document.getElementById('education');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomLifePhoto(event.target.result as string);
          if (onShowToast) {
            onShowToast('生活照已成功替换为您上传的本地原图！');
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomLifePhoto(event.target.result as string);
          if (onShowToast) {
            onShowToast('生活照已成功拖拽替换为您上传的本地原图！');
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section
      id="hero"
      className="pt-28 sm:pt-36 lg:pt-36 pb-16 md:pb-24 max-w-[1360px] mx-auto px-5 sm:px-10 lg:px-16 relative overflow-hidden"
    >
      {/* Soft Ambient Background Aura (inspired by reference pastel layout) */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-br from-amber-100/40 via-sky-100/30 to-emerald-100/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-amber-100/30 via-rose-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column (55% / 7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Kicker */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 text-[#888888] text-xs sm:text-sm font-mono tracking-[0.2em] font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              HELLO / 你好
            </span>
          </div>

          {/* Main Display Headline */}
          <div className="relative mb-3">
            <h1 className="text-5xl sm:text-7xl md:text-[76px] lg:text-[80px] font-black tracking-tight text-[#18191C] leading-[0.96]">
              <span className="block font-sans">Hi,</span>
              <span className="block font-sans mt-1">
                我是戴翰阳
              </span>
            </h1>
          </div>

          {/* Target Role with Gradient/Color Accent */}
          <div className="mb-5">
            <p className="text-xl sm:text-2xl md:text-[26px] font-bold tracking-tight bg-gradient-to-r from-[#8B7355] via-[#A07855] to-[#4A5568] bg-clip-text text-transparent">
              AI Product Manager / AI 产品经理
            </p>
          </div>

          {/* MY PROFILE Capsule / Search-bar Style Intro (as in reference) */}
          <div className="rounded-2xl bg-white/90 border border-[#E5E1D6] p-4 sm:p-5 mb-5 shadow-xs backdrop-blur-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#18191C] text-white text-[11px] font-mono font-semibold uppercase tracking-wider">
                MY PROFILE
              </span>
              <span className="text-xs font-mono text-[#888888]">香港城市大学 · 2027 届硕士</span>
            </div>
            <p className="text-sm sm:text-[15px] text-[#444444] leading-relaxed">
              编导出身的AI 产品经理，在万兴科技主导小说转剧本 Agent 从 0 到 1，独立用 Vibe Coding 开发协同评分系统上线。未来，想做像鱿鱼干一样耐嚼的产品，也做一个有艺术理想的产品经理。
            </p>
          </div>

          {/* Core Tag Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['AI Agent 产品', 'Vibe Coding', '用户产品', '策略与评测', '数据分析'].map((tag, idx) => (
              <span
                key={tag}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  idx === 0
                    ? 'bg-[#18191C] text-white border-[#18191C] font-semibold'
                    : idx === 1
                    ? 'bg-[#D6CDA8]/30 border-[#D6CDA8] text-[#8B7355] font-semibold'
                    : 'bg-white border-[#E5E1D6] text-[#555555]'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            <button
              id="hero-view-resume-btn"
              onClick={onOpenResume}
              className="px-7 py-3.5 rounded-full bg-[#18191C] text-white text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-[#2A2D33] hover:shadow-md flex items-center gap-2 group cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#D6CDA8]" />
              <span>下载 / 查看简历</span>
              <ArrowUpRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              id="hero-contact-btn"
              onClick={onContactClick}
              className="px-7 py-3.5 rounded-full border border-[#18191C] bg-white/70 text-[#18191C] text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-white hover:shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#8B7355]" />
              <span>联系我</span>
            </button>
          </div>
        </div>

        {/* Right Column (45% / 5 cols) - Life Photo with Organic Arch & Floating Badge */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          {/* Decorative floating bubbles (from reference) */}
          <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-sky-200/40 backdrop-blur-md border border-white/60 pointer-events-none" />
          <div className="absolute top-1/3 -right-4 w-12 h-12 rounded-full bg-amber-200/40 backdrop-blur-md border border-white/60 pointer-events-none" />
          <div className="absolute bottom-10 -left-4 w-14 h-14 rounded-full bg-emerald-200/30 backdrop-blur-md border border-white/60 pointer-events-none" />

          {/* Hidden File Input for instant photo update */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          {/* Main Photo Frame */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#F3EFE6] via-[#E8E3D5] to-[#DFD8C8] p-3 sm:p-4 border border-[#E5E1D6] shadow-[0_12px_36px_rgba(0,0,0,0.06)] overflow-hidden group"
          >
            {/* Image Container */}
            <div className="w-full h-full rounded-[24px] sm:rounded-[32px] overflow-hidden relative bg-[#DCD6C8]">
              <img
                src={lifePhoto}
                alt="戴翰阳 个人照片"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle gradient overlay at bottom for card readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Hover Quick Action to update photo */}
              <div className="absolute top-3 right-3 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 flex items-center gap-1.5">
                <button
                  onClick={onOpenPhotoManager}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/95 hover:bg-white text-[11px] font-mono font-medium text-[#18191C] shadow-md backdrop-blur-xs transition-all cursor-pointer hover:scale-105"
                  title="上传/管理本人高清照片原图"
                >
                  <Camera className="w-3.5 h-3.5 text-[#8B7355]" />
                  <span>管理/传原图</span>
                </button>
                {isCustomLife && (
                  <button
                    onClick={resetPhotos}
                    className="p-1.5 rounded-full bg-white/95 hover:bg-white text-[#666666] shadow-md backdrop-blur-xs transition-all cursor-pointer hover:scale-105"
                    title="重置为默认图"
                  >
                    <RefreshCw className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Floating Status Card (NOW card matching reference) */}
            <div className="absolute bottom-6 right-6 sm:bottom-7 sm:right-7 bg-white/95 backdrop-blur-md border border-[#E5E1D6] rounded-2xl p-3.5 sm:p-4 shadow-lg flex flex-col gap-1 min-w-[170px] sm:min-w-[190px] transition-transform duration-300 hover:scale-105 z-20">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2 py-0.5 rounded-md bg-[#18191C] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                  NOW
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <p className="text-xs sm:text-[13px] font-bold text-[#18191C] tracking-tight mt-1 whitespace-nowrap">
                香港城市大学 整合营销在读
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Scroll Indicator (matching reference) */}
      <div className="mt-12 sm:mt-16 flex justify-center">
        <button
          onClick={scrollToEducation}
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 hover:bg-white border border-[#E5E1D6] text-xs font-mono text-[#666666] hover:text-[#18191C] shadow-xs backdrop-blur-xs transition-all duration-200 cursor-pointer group hover:translate-y-0.5"
        >
          <span>继续下滑，探索更多</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#8B7355] group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};

