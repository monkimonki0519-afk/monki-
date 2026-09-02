import React, { useState } from 'react';
import { PERSONAL_INFO, EDUCATION_LIST, INTERNSHIP_LIST, PROJECTS_LIST, HONORS_AND_LANGUAGES } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, CheckCircle2, ExternalLink, Copy, Check, FileText, Smartphone } from 'lucide-react';
import { usePhotos } from '../context/PhotoContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { idPortrait, setCustomIdPortrait, cityuLogo, hunnuLogo, resumePdfUrl, resumePdfName } = usePhotos();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    const fullUrl = resumePdfUrl.startsWith('http') 
      ? resumePdfUrl 
      : `${window.location.origin}${resumePdfUrl}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#FAFAF7] text-[#18191C] rounded-[24px] border border-[#E5E1D6] max-w-4xl w-full my-auto shadow-2xl relative flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Top Header Controls Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E5E1D6] bg-white flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#18191C]" />
            <h3 className="text-base font-bold text-[#18191C]">
              戴翰阳 · 个人简历 (AI 产品经理)
            </h3>
            <span className="hidden md:inline-flex text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#8B7355]/10 text-[#8B7355] font-semibold">
              高清网页版 / 可直接打印下载
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Direct PDF Link Download / Open */}
            <a
              href={resumePdfUrl}
              download={resumePdfName}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#18191C] text-white hover:bg-[#2A2D33] text-xs font-semibold transition-all shadow-xs cursor-pointer"
              title="一键下载 PDF 简历文件"
            >
              <Download className="w-3.5 h-3.5 text-[#D6CDA8]" />
              <span>下载 PDF 文件</span>
            </a>

            {/* Copy Resume Link for WeChat / Mobile */}
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E5E1D6] bg-[#FAFAF7] hover:bg-white text-xs font-mono text-[#444444] hover:text-[#18191C] transition-colors cursor-pointer"
              title="复制简历直达链接（适合微信发送与手机端查看）"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">链接已复制!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#8B7355]" />
                  <span>复制直达链接</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E5E1D6] text-xs font-mono text-[#444444] hover:bg-[#FAFAF7] hover:text-[#18191C] transition-colors cursor-pointer"
              title="打印或另存为 PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#8B7355]" />
              <span>打印</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#FAFAF7] border border-[#E5E1D6] text-[#666666] hover:text-[#18191C] hover:bg-white transition-colors cursor-pointer ml-1"
              title="关闭"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile / WeChat Notice Banner */}
        <div className="bg-[#FAF8F5] border-b border-[#E5E1D6] px-4 py-2 flex items-center justify-between text-xs text-[#666666]">
          <div className="flex items-center gap-2">
            <Smartphone className="w-3.5 h-3.5 text-[#8B7355] shrink-0" />
            <span>💡 提示：微信内置浏览器与移动端支持直接下滑浏览下方精美简历，亦可点击上方直接下载 PDF。</span>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white space-y-8 print:p-0">
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-6 border-b border-[#E5E1D6]">
            <div className="text-center sm:text-left flex-1">
              <h1 className="text-3xl font-black tracking-tight text-[#18191C] mb-2">
                戴翰阳
              </h1>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm font-mono text-[#444444] mb-2">
                <span>{PERSONAL_INFO.phone}</span>
                <span>|</span>
                <span>{PERSONAL_INFO.email}</span>
                <span>|</span>
                <span>香港 / 深圳</span>
              </div>
              <div className="text-xs font-semibold text-[#8B7355] font-mono">
                求职意向：AI 产品经理 ｜ 2027 届毕业生 · 随时到岗
              </div>
            </div>

            <div className="relative group/id w-20 h-24 sm:w-22 sm:h-28 rounded-lg overflow-hidden border border-[#E5E1D6] shadow-sm shrink-0 bg-[#FAFAF7]">
              <img
                src={idPortrait}
                alt="戴翰阳 证件照"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <label className="absolute inset-0 bg-black/50 text-white text-[10px] flex flex-col items-center justify-center opacity-0 group-hover/id:opacity-100 transition-opacity cursor-pointer text-center p-1 font-mono">
                <span>换证件照</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) {
                      const r = new FileReader();
                      r.onload = (ev) => {
                        if (ev.target?.result) {
                          setCustomIdPortrait(ev.target.result as string);
                        }
                      };
                      r.readAsDataURL(f);
                    }
                  }}
                />
              </label>
            </div>
          </div>

          {/* 1. 教育背景 */}
          <div>
            <h2 className="text-sm font-bold font-mono tracking-widest uppercase text-[#888888] pb-1.5 mb-3 border-b-2 border-[#18191C] flex items-center justify-between">
              <span>教育背景</span>
              <span className="text-[11px] font-normal">EDUCATION</span>
            </h2>
            <div className="space-y-4 text-xs sm:text-[13px]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FAFAF7] border border-[#E5E1D6] p-1 flex items-center justify-center shrink-0 mt-0.5">
                  <img src={cityuLogo} alt="CityU" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center font-bold text-[#18191C]">
                    <span>香港城市大学 ｜ 整合营销 硕士 <span className="text-[#8B7355] font-normal text-xs">QS 世界排名 52</span></span>
                    <span className="font-mono text-[#888888] text-xs">2026.09 — 2027.06</span>
                  </div>
                  <p className="text-[#666666] mt-1 leading-relaxed">
                    一年制授课型硕士，课程覆盖品牌策略、消费者洞察、数字传播与整合营销研究方法。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E1D6] p-1 flex items-center justify-center shrink-0 mt-0.5">
                  <img src={hunnuLogo} alt="HUNNU" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center font-bold text-[#18191C]">
                    <span>湖南师范大学 ｜ 广播电视编导 本科 <span className="text-[#8B7355] font-normal text-xs">211 · 双一流</span></span>
                    <span className="font-mono text-[#888888] text-xs">2022.09 — 2026.06</span>
                  </div>
                  <p className="text-[#444444] mt-1">
                    GPA 3.98 / 5.00（专业前 10%），加权平均 86.3。
                  </p>
                  <p className="text-[#666666] mt-0.5">
                    主修课程：影视艺术与技术（96）、电视节目编导与导播（95）、传播学概论（93）、电视节目创意与策划（92）。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. 实习经历 */}
          <div>
            <h2 className="text-sm font-bold font-mono tracking-widest uppercase text-[#888888] pb-1.5 mb-3 border-b-2 border-[#18191C] flex items-center justify-between">
              <span>实习经历</span>
              <span className="text-[11px] font-normal">INTERNSHIP</span>
            </h2>
            <div className="space-y-6 text-xs sm:text-[13px]">
              {INTERNSHIP_LIST.map((item) => (
                <div key={item.id}>
                  <div className="flex justify-between items-center font-bold text-[#18191C] mb-1">
                    <span>
                      {item.company} ｜ <span className="text-[#8B7355]">{item.role}</span>
                    </span>
                    <span className="font-mono text-[#888888] text-xs">{item.period}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 my-1.5">
                    {item.capabilities.map((c, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-[#FAFAF7] border border-[#E5E1D6] text-[11px] text-[#444444]">
                        {c}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside text-[#444444] leading-relaxed">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx}>
                        <span className="font-medium text-[#18191C]">{pt.title}：</span>
                        {pt.description}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 3. 项目经历 */}
          <div>
            <h2 className="text-sm font-bold font-mono tracking-widest uppercase text-[#888888] pb-1.5 mb-3 border-b-2 border-[#18191C] flex items-center justify-between">
              <span>项目经历</span>
              <span className="text-[11px] font-normal">PROJECTS</span>
            </h2>
            <div className="space-y-4 text-xs sm:text-[13px]">
              {PROJECTS_LIST.map((proj) => (
                <div key={proj.number}>
                  <div className="flex justify-between items-center font-bold text-[#18191C]">
                    <span>
                      {proj.name} ｜ <span className="text-[#8B7355]">{proj.role}</span>
                    </span>
                    <span className="font-mono text-[#888888] text-xs">{proj.period}</span>
                  </div>
                  <ul className="space-y-1 list-disc list-inside text-[#444444] mt-1 leading-relaxed">
                    {proj.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 4. 其他信息 */}
          <div>
            <h2 className="text-sm font-bold font-mono tracking-widest uppercase text-[#888888] pb-1.5 mb-3 border-b-2 border-[#18191C] flex items-center justify-between">
              <span>技能、语言与荣誉</span>
              <span className="text-[11px] font-normal">SKILLS & AWARDS</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-[13px]">
              <div>
                <p className="font-bold text-[#18191C] mb-1">专业技能：</p>
                <p className="text-[#444444] leading-relaxed">
                  Vibe Coding（可独立完成原型开发与工具上线）、AI Agent 产品设计、大模型评测、PR（熟练，视频剪辑与调色）、达芬奇（熟练，专业调色）、剪映（熟练，快速剪辑）、Office（熟练，文档与数据分析）、内容策划与传播。
                </p>
              </div>
              <div>
                <p className="font-bold text-[#18191C] mb-1">语言能力：</p>
                <p className="text-[#444444] leading-relaxed">
                  IELTS (6.5)，英语四级 (CET-4)，英语六级 (CET-6)。
                </p>
                <p className="font-bold text-[#18191C] mt-2 mb-1">荣誉奖项：</p>
                <p className="text-[#444444] leading-relaxed">
                  中国高校数字艺术设计大赛（国 3 省 1）、全国大学生广告艺术大赛（国优 ×3）、湖南原创视听大赛（省 1）、校级奖学金（三次）。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#FAFAF7] border-t border-[#E5E1D6] flex justify-between items-center shrink-0">
          <span className="text-xs font-mono text-[#888888]">
            PDF 文件放置位置：/resume.pdf
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#18191C] text-white text-xs font-bold hover:bg-[#2A2D33]"
          >
            关闭预览
          </button>
        </div>
      </div>
    </div>
  );
};
