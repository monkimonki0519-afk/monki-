import React, { useRef, useState } from 'react';
import { usePhotos } from '../context/PhotoContext';
import { X, Upload, Image, RefreshCw, Check, GraduationCap, FileText, Link2 } from 'lucide-react';

interface PhotoManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const PhotoManagerModal: React.FC<PhotoManagerModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const {
    lifePhoto,
    idPortrait,
    cityuLogo,
    hunnuLogo,
    scriptEvalCover,
    videoBasketballCover,
    videoFupingCover,
    resumePdfUrl,
    resumePdfName,
    setCustomLifePhoto,
    setCustomIdPortrait,
    setCustomCityuLogo,
    setCustomHunnuLogo,
    setCustomScriptEvalCover,
    setCustomVideoBasketballCover,
    setCustomVideoFupingCover,
    setCustomResumePdfUrl,
    resetPhotos,
    isCustomLife,
    isCustomId,
  } = usePhotos();

  const lifeInputRef = useRef<HTMLInputElement | null>(null);
  const idInputRef = useRef<HTMLInputElement | null>(null);
  const cityuInputRef = useRef<HTMLInputElement | null>(null);
  const hunnuInputRef = useRef<HTMLInputElement | null>(null);
  const scriptEvalInputRef = useRef<HTMLInputElement | null>(null);
  const basketballInputRef = useRef<HTMLInputElement | null>(null);
  const fupingInputRef = useRef<HTMLInputElement | null>(null);
  const pdfInputRef = useRef<HTMLInputElement | null>(null);
  const [customPdfLinkInput, setCustomPdfLinkInput] = useState(resumePdfUrl || '');

  if (!isOpen) return null;

  const handleLifeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomLifePhoto(event.target.result as string);
          onShowToast('生活照原图已更新并同步到首页！');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIdFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomIdPortrait(event.target.result as string);
          onShowToast('证件照原图已更新并同步到全站头像与简历！');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCityuFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomCityuLogo(event.target.result as string);
          onShowToast('香港城市大学校徽已更新！');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleHunnuFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomHunnuLogo(event.target.result as string);
          onShowToast('湖南师范大学校徽已更新！');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScriptEvalFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomScriptEvalCover(event.target.result as string);
          onShowToast('万兴剧厂测评系统封面已更新！');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBasketballFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomVideoBasketballCover(event.target.result as string);
          onShowToast('《ball is life》视频封面已更新！');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFupingFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomVideoFupingCover(event.target.result as string);
          onShowToast('《浮萍》短剧视频封面已更新！');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAFAF7] w-full max-w-2xl rounded-3xl border border-[#E5E1D6] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E1D6] bg-white shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#D6CDA8]/30 text-[#8B7355]">
              <Image className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#18191C]">图片与校徽资源管理</h3>
              <p className="text-xs text-[#888888] font-mono">
                随时替换个人原图与学校校徽，全站实时无缝生效
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#FAFAF7] text-[#666666] hover:text-[#18191C] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Section 1: Personal Photos */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-[#888888] tracking-wider mb-3">
              个人照片原图
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* 1. Life Photo Box */}
              <div className="p-4 rounded-2xl bg-white border border-[#E5E1D6] flex flex-col items-center text-center shadow-xs">
                <span className="text-xs font-mono font-semibold text-[#8B7355] mb-2 px-2.5 py-0.5 rounded-full bg-[#D6CDA8]/20">
                  ① 首页主照（生活照）
                </span>
                <div className="w-28 h-36 rounded-xl overflow-hidden border border-[#E5E1D6] mb-3 bg-[#EAE6DC] relative group">
                  <img
                    src={lifePhoto}
                    alt="当前生活照"
                    className="w-full h-full object-cover"
                  />
                  {isCustomLife && (
                    <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-emerald-600 text-white text-[9px] font-mono flex items-center gap-0.5">
                      <Check className="w-2.5 h-2.5" /> 已生效原图
                    </div>
                  )}
                </div>
                <input
                  ref={lifeInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleLifeFile}
                />
                <button
                  onClick={() => lifeInputRef.current?.click()}
                  className="w-full py-2 px-3 rounded-xl bg-[#18191C] hover:bg-[#2A2D33] text-white text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                >
                  <Upload className="w-3.5 h-3.5 text-[#D6CDA8]" />
                  <span>替换生活照原图</span>
                </button>
              </div>

              {/* 2. ID Portrait Box */}
              <div className="p-4 rounded-2xl bg-white border border-[#E5E1D6] flex flex-col items-center text-center shadow-xs">
                <span className="text-xs font-mono font-semibold text-[#8B7355] mb-2 px-2.5 py-0.5 rounded-full bg-[#D6CDA8]/20">
                  ② 导航 / 简历 / 页脚（证件照）
                </span>
                <div className="w-28 h-36 rounded-xl overflow-hidden border border-[#E5E1D6] mb-3 bg-[#EAE6DC] relative group">
                  <img
                    src={idPortrait}
                    alt="当前证件照"
                    className="w-full h-full object-cover"
                  />
                  {isCustomId && (
                    <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-emerald-600 text-white text-[9px] font-mono flex items-center gap-0.5">
                      <Check className="w-2.5 h-2.5" /> 已生效原图
                    </div>
                  )}
                </div>
                <input
                  ref={idInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleIdFile}
                />
                <button
                  onClick={() => idInputRef.current?.click()}
                  className="w-full py-2 px-3 rounded-xl bg-[#18191C] hover:bg-[#2A2D33] text-white text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                >
                  <Upload className="w-3.5 h-3.5 text-[#D6CDA8]" />
                  <span>替换证件照原图</span>
                </button>
              </div>
            </div>
          </div>

          {/* Section 2: University Logos */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-[#888888] tracking-wider mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#8B7355]" />
              <span>院校校徽</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* CityU Logo */}
              <div className="p-4 rounded-2xl bg-white border border-[#E5E1D6] flex flex-col items-center text-center shadow-xs">
                <span className="text-xs font-semibold text-[#18191C] mb-2">香港城市大学 (CityU)</span>
                <div className="w-20 h-20 rounded-xl overflow-hidden border border-[#E5E1D6] mb-3 bg-white p-2 flex items-center justify-center">
                  <img src={cityuLogo} alt="CityU Logo" className="w-full h-full object-contain" />
                </div>
                <input
                  ref={cityuInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleCityuFile}
                />
                <button
                  onClick={() => cityuInputRef.current?.click()}
                  className="w-full py-1.5 px-3 rounded-xl bg-[#F0EDE5] hover:bg-[#E5E0D5] text-[#18191C] text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Upload className="w-3.5 h-3.5 text-[#8B7355]" />
                  <span>更换 CityU 校徽</span>
                </button>
              </div>

              {/* HUNNU Logo */}
              <div className="p-4 rounded-2xl bg-white border border-[#E5E1D6] flex flex-col items-center text-center shadow-xs">
                <span className="text-xs font-semibold text-[#18191C] mb-2">湖南师范大学 (HUNNU)</span>
                <div className="w-20 h-20 rounded-xl overflow-hidden border border-[#E5E1D6] mb-3 bg-white p-2 flex items-center justify-center">
                  <img src={hunnuLogo} alt="HUNNU Logo" className="w-full h-full object-contain" />
                </div>
                <input
                  ref={hunnuInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleHunnuFile}
                />
                <button
                  onClick={() => hunnuInputRef.current?.click()}
                  className="w-full py-1.5 px-3 rounded-xl bg-[#F0EDE5] hover:bg-[#E5E0D5] text-[#18191C] text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Upload className="w-3.5 h-3.5 text-[#8B7355]" />
                  <span>更换师大校徽</span>
                </button>
              </div>
            </div>
          </div>

          {/* Section 3: Project Covers & Screenshots */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-[#888888] tracking-wider mb-3 flex items-center gap-1.5">
              <Image className="w-4 h-4 text-[#8B7355]" />
              <span>Vibe Coding & AI 漫剧视频封面管理</span>
            </h4>
            
            <div className="space-y-4">
              {/* 1. 测评系统 */}
              <div className="p-4 rounded-2xl bg-white border border-[#E5E1D6] shadow-xs">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-full sm:w-44 h-28 rounded-xl overflow-hidden border border-[#E5E1D6] bg-[#18191C] shrink-0">
                    <img
                      src={scriptEvalCover}
                      alt="万兴剧厂测评系统"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-sm font-bold text-[#18191C] mb-1">
                      万兴剧厂 · 小说与剧本质量测评系统（V1.4 界面）
                    </h5>
                    <p className="text-xs text-[#666666] leading-relaxed mb-3">
                      支持直接上传您电脑上的高清截图原图（如工作台/打分看板截屏），全站作品展示及详情弹窗即时同步展示。
                    </p>
                    <input
                      ref={scriptEvalInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleScriptEvalFile}
                    />
                    <button
                      onClick={() => scriptEvalInputRef.current?.click()}
                      className="py-2 px-4 rounded-xl bg-[#18191C] hover:bg-[#2A2D33] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                    >
                      <Upload className="w-3.5 h-3.5 text-[#D6CDA8]" />
                      <span>上传 / 替换系统真实截图原图</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 2. 篮球广告视频封面 */}
              <div className="p-4 rounded-2xl bg-white border border-[#E5E1D6] shadow-xs">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-full sm:w-44 h-28 rounded-xl overflow-hidden border border-[#E5E1D6] bg-[#1F2126] shrink-0 flex items-center justify-center">
                    {videoBasketballCover ? (
                      <img
                        src={videoBasketballCover}
                        alt="假如全世界都在打篮球封面"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center p-2 text-xs font-mono text-[#888888]">
                        未上传自定义封面
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h5 className="text-sm font-bold text-[#18191C] mb-1">
                      一分钟创意广告《ball is life》封面
                    </h5>
                    <p className="text-xs text-[#666666] leading-relaxed mb-3">
                      上传该 AI 创意广告的精选主视觉海报或高清第一帧画面，全站视频卡片即刻同步呈现。
                    </p>
                    <input
                      ref={basketballInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleBasketballFile}
                    />
                    <button
                      onClick={() => basketballInputRef.current?.click()}
                      className="py-2 px-4 rounded-xl bg-[#18191C] hover:bg-[#2A2D33] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                    >
                      <Upload className="w-3.5 h-3.5 text-[#D6CDA8]" />
                      <span>上传 / 替换篮球广告视频封面</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 3. 浮萍武侠短剧封面 */}
              <div className="p-4 rounded-2xl bg-white border border-[#E5E1D6] shadow-xs">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-full sm:w-44 h-28 rounded-xl overflow-hidden border border-[#E5E1D6] bg-[#1F2126] shrink-0 flex items-center justify-center">
                    {videoFupingCover ? (
                      <img
                        src={videoFupingCover}
                        alt="浮萍短剧封面"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center p-2 text-xs font-mono text-[#888888]">
                        未上传自定义封面
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h5 className="text-sm font-bold text-[#18191C] mb-1">
                      江湖武侠短剧《浮萍》（3 分钟）封面
                    </h5>
                    <p className="text-xs text-[#666666] leading-relaxed mb-3">
                      上传水墨武侠短剧主海报或人物特写画面，展示角色一致性与唯美视觉质感。
                    </p>
                    <input
                      ref={fupingInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFupingFile}
                    />
                    <button
                      onClick={() => fupingInputRef.current?.click()}
                      className="py-2 px-4 rounded-xl bg-[#18191C] hover:bg-[#2A2D33] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                    >
                      <Upload className="w-3.5 h-3.5 text-[#D6CDA8]" />
                      <span>上传 / 替换《浮萍》短剧封面</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reset Action */}
          <div className="flex justify-center pt-2 border-t border-[#E5E1D6]">
            <button
              onClick={() => {
                resetPhotos();
                onShowToast('已重置为默认图片与校徽');
              }}
              className="text-xs font-mono text-[#888888] hover:text-[#18191C] flex items-center gap-1.5 cursor-pointer transition-colors px-3 py-1.5 rounded-lg hover:bg-white"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>恢复所有内置预设图片</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

