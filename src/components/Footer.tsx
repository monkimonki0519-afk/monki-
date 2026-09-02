import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, FileText, Check, Copy, ArrowUp, Sparkles, MapPin } from 'lucide-react';
import { usePhotos } from '../context/PhotoContext';

interface FooterProps {
  onOpenResume: () => void;
  onCopySuccess: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onCopySuccess }) => {
  const { idPortrait } = usePhotos();
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'phone', label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    onCopySuccess(`已复制 ${label}: ${text}`);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#18191C] text-white pt-20 pb-12 relative overflow-hidden border-t border-[#2A2D33]">
      {/* Decorative Geometric Memory Mark */}
      <div className="absolute top-12 right-12 w-64 h-64 border border-[#D6CDA8]/10 rounded-full pointer-events-none flex items-center justify-center">
        <div className="w-48 h-48 border border-[#D6CDA8]/10 rounded-full flex items-center justify-center">
          <div className="w-32 h-32 border border-[#D6CDA8]/10 rounded-full" />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2A2D33]">
          {/* Column 1: Identity & Bio (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#D6CDA8]/40 shadow-sm shrink-0 bg-[#2A2D33]">
                  <img
                    src={idPortrait}
                    alt="戴翰阳"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs font-mono text-[#D6CDA8]">
                    {PERSONAL_INFO.enName} · AI Product Manager
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#A0A0A0] leading-relaxed mb-6 max-w-md">
                AI 产品经理 / 港城大整合营销硕士在读 / 2027 届随时到岗。致力于将前沿大模型能力与敏锐用户洞察转化为高商业价值的落地产品。
              </p>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D6CDA8]/30 bg-[#2A2D33]/60 text-xs font-mono text-[#D6CDA8]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Made with vibe coding</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-[#888888]">
              <MapPin className="w-3.5 h-3.5 text-[#D6CDA8]" />
              <span>{PERSONAL_INFO.city}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#888888] font-semibold mb-6">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-3">
              {[
                { id: 'hero', label: '首页 / Hero' },
                { id: 'education', label: '教育背景 / Education' },
                { id: 'internship', label: '实习经历 / Internship' },
                { id: 'vibe-coding', label: 'Vibe Coding / Works' },
                { id: 'projects', label: '项目经历 / Projects' },
                { id: 'skills', label: '技能与爱好 / Skills' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-[#A0A0A0] hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Resume Action (4 cols) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#888888] font-semibold mb-6">
                GET IN TOUCH
              </h4>

              <div className="space-y-3 mb-6">
                {/* Email item */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#1F2126] border border-[#2A2D33] group">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#D6CDA8]" />
                    <span className="text-xs font-mono text-white select-all">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email', '邮箱')}
                    className="p-1.5 rounded-lg bg-[#2A2D33] text-[#A0A0A0] hover:text-white transition-colors"
                    title="点击复制"
                  >
                    {copiedType === 'email' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Phone item */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#1F2126] border border-[#2A2D33] group">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#D6CDA8]" />
                    <span className="text-xs font-mono text-white select-all">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone', '手机号')}
                    className="p-1.5 rounded-lg bg-[#2A2D33] text-[#A0A0A0] hover:text-white transition-colors"
                    title="点击复制"
                  >
                    {copiedType === 'phone' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <div>
              <button
                id="footer-resume-download-btn"
                onClick={onOpenResume}
                className="w-full py-3.5 px-6 rounded-full bg-[#D6CDA8] text-[#18191C] text-sm font-bold tracking-wide transition-all hover:bg-white flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>下载 / 查看简历 PDF</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#888888]">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>© 2026 DAI HANYANG</span>
            <span className="hidden sm:inline">M.Sc. IN INTEGRATED MARKETING</span>
            <span className="flex items-center gap-1.5 text-[#D6CDA8]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>AVAILABLE FOR 2027 GRADUATES</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="px-2.5 py-0.5 rounded border border-[#2A2D33] text-[#A0A0A0]">
              HONG KONG · 香港
            </span>
            <div className="h-3 w-px bg-[#2A2D33]" />
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#A0A0A0] hover:text-white transition-colors cursor-pointer"
            >
              <span>回到顶部</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
