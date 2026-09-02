import React, { useState, useRef } from 'react';
import { SectionHeader } from './SectionHeader';
import {
  VIBE_WORKS_LIST,
  AI_VIDEOS_LIST,
  AI_TOOL_CHOICES,
  TOOL_STACK,
} from '../data/portfolioData';
import { VibeWorkItem, AIVideoItem } from '../types';
import { usePhotos } from '../context/PhotoContext';
import {
  ArrowRight,
  ExternalLink,
  Play,
  Layers,
  Sparkles,
  CheckCircle2,
  X,
  Code2,
  Upload,
  Maximize2,
  Cpu,
  Video,
  Film,
  Link2,
  Edit3,
  Tv,
} from 'lucide-react';

export const VibeCodingSection: React.FC = () => {
  const {
    scriptEvalCover,
    setCustomScriptEvalCover,
    videoBasketballCover,
    videoFupingCover,
    videoBasketballUrl,
    videoFupingUrl,
    setCustomVideoBasketballCover,
    setCustomVideoFupingCover,
    setCustomVideoBasketballUrl,
    setCustomVideoFupingUrl,
  } = usePhotos();

  const [selectedWork, setSelectedWork] = useState<VibeWorkItem | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<AIVideoItem | null>(null);
  const [editingVideoUrlId, setEditingVideoUrlId] = useState<string | null>(null);
  const [tempUrlInput, setTempUrlInput] = useState<string>('');

  const scriptInputRef = useRef<HTMLInputElement | null>(null);
  const basketballInputRef = useRef<HTMLInputElement | null>(null);
  const fupingInputRef = useRef<HTMLInputElement | null>(null);

  const handleScriptUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomScriptEvalCover(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBasketballUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomVideoBasketballCover(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFupingUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomVideoFupingCover(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const getVideoCover = (id: string) => {
    if (id === 'video-basketball') return videoBasketballCover;
    if (id === 'video-fuping') return videoFupingCover;
    return '';
  };

  const getVideoUrl = (id: string) => {
    if (id === 'video-basketball') return videoBasketballUrl;
    if (id === 'video-fuping') return videoFupingUrl;
    return '';
  };

  const handleSaveVideoUrl = (id: string) => {
    if (id === 'video-basketball') {
      setCustomVideoBasketballUrl(tempUrlInput);
    } else if (id === 'video-fuping') {
      setCustomVideoFupingUrl(tempUrlInput);
    }
    setEditingVideoUrlId(null);
  };

  // Helper to get platform name
  const getPlatformLabel = (url: string) => {
    if (!url) return '原片网页';
    if (url.includes('douyin.com')) return '抖音观看原片';
    if (url.includes('bilibili.com')) return 'B 站观看原片';
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'YouTube 观看';
    return '在线观看原片';
  };

  // Helper to extract Bilibili BV ID and return player embed iframe URL
  const getBilibiliEmbedUrl = (rawUrl: string) => {
    if (!rawUrl) return '';
    const match = rawUrl.match(/BV[a-zA-Z0-9]+/i);
    if (match) {
      return `https://player.bilibili.com/player.html?bvid=${match[0]}&page=1&high_quality=1&as_wide=1&allowfullscreen=true&autoplay=0`;
    }
    return '';
  };

  return (
    <section id="vibe-coding" className="bg-[#18191C] text-white py-20 md:py-28 my-12 relative overflow-hidden">
      {/* Subtle geometric background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D6CDA8]/5 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B7355]/5 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <SectionHeader
          kicker="03 / VIBE CODING & AI WORKS"
          title="Vibe Coding 及 AI 作品"
          isDark={true}
        />

        {/* 1. Main Vibe Coding Fullstack Project (万兴剧厂测评系统) */}
        <div className="mb-20">
          {VIBE_WORKS_LIST.map((work) => (
            <div
              key={work.id}
              className="bg-[#1F2126] border border-[#2A2D33] rounded-[24px] p-6 sm:p-8 md:p-10 shadow-2xl hover:border-[#D6CDA8]/40 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Text Column (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    {/* Top Tag */}
                    <span className="inline-block px-3 py-1 rounded-full bg-[#2A2D33] text-[#D6CDA8] border border-[#D6CDA8]/30 text-[11px] font-mono tracking-wider font-semibold mb-4">
                      {work.tag}
                    </span>

                    {/* Work Title */}
                    <h3 className="text-2xl sm:text-[24px] font-bold text-white tracking-tight mb-4 group-hover:text-[#D6CDA8] transition-colors">
                      {work.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm sm:text-[14px] text-[#A0A0A0] leading-[1.75] mb-5">
                      {work.summary}
                    </p>

                    {/* Detail points */}
                    <div className="space-y-2.5 mb-6">
                      {work.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D6CDA8] mt-2 shrink-0" />
                          <p className="text-xs sm:text-[13px] text-[#A0A0A0] leading-relaxed">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-3 py-4 my-2 border-y border-[#2A2D33]">
                      {work.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <div className="text-xl sm:text-[24px] font-black text-[#D6CDA8] font-mono">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-[#888888] font-sans mt-0.5 leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-6 pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedWork(work)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D6CDA8] text-[#18191C] text-[13px] font-bold tracking-wide transition-all duration-200 hover:bg-white hover:shadow-lg cursor-pointer"
                    >
                      <span>查看系统详情</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {work.link && work.link !== '#' && (
                      <a
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#18191C] text-[12px] font-medium border border-white/20 transition-all cursor-pointer"
                        title="在全新标签页打开在线测评系统"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>在线体验系统</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Image/Mockup Column (7 cols) */}
                <div className="lg:col-span-7">
                  <div
                    onClick={() => setSelectedWork(work)}
                    className="aspect-[16/10] w-full rounded-[20px] bg-[#2A2D33] border border-[#3A3D43] p-4 sm:p-5 flex flex-col justify-between overflow-hidden relative cursor-pointer group-hover:scale-[1.01] transition-transform duration-300 shadow-2xl"
                  >
                    <div className="w-full h-full flex flex-col justify-between rounded-xl bg-[#18191C] border border-[#3A3D43] overflow-hidden group/screen">
                      {/* Window Header */}
                      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#1F2126] border-b border-[#2A2D33] shrink-0">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#E5E1D6]/30" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#E5E1D6]/30" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#E5E1D6]/30" />
                          <span className="text-[11px] font-mono text-[#D6CDA8] ml-2 truncate">
                            3.25 小说到剧本评分系统 (V1.4)
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#D6CDA8]/20 text-[#D6CDA8] border border-[#D6CDA8]/30">
                          7维量化体系
                        </span>
                      </div>

                      {/* Screenshot Container */}
                      <div className="relative flex-1 bg-black/40 overflow-hidden flex items-center justify-center">
                        <img
                          src={scriptEvalCover}
                          alt="万兴剧厂 · 小说与剧本质量测评系统 UI"
                          className="w-full h-full object-cover object-top group-hover/screen:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#18191C]/90 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                          <span className="px-2.5 py-1 rounded-lg bg-[#18191C]/80 backdrop-blur-md text-[11px] font-mono text-[#D6CDA8] border border-white/10 flex items-center gap-1.5">
                            <Maximize2 className="w-3 h-3" />
                            <span>点击展开高清详情</span>
                          </span>
                          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 backdrop-blur-md text-[11px] font-mono text-emerald-300 border border-emerald-500/30">
                            在线服务中
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. AI 漫剧与短片视频创作 (2 个主要视频卡片，继承大尺寸版式) */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-[#2A2D33] gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#888888] flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-[#D6CDA8]" />
                <span>AI COMIC & VIDEO CREATION</span>
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                AI 漫剧及视频创作作品
              </h3>
            </div>
            <span className="text-xs text-[#888888] font-mono">
              包含 1 分钟高概念广告与 3 分钟江湖武侠短剧
            </span>
          </div>

          {/* Large Card Grid for the 2 AI Videos */}
          <div className="space-y-12 md:space-y-16">
            {AI_VIDEOS_LIST.map((video, index) => {
              const isImageRight = index % 2 === 1;
              const currentCover = getVideoCover(video.id);
              const currentUrl = getVideoUrl(video.id) || video.link;
              const isBilibili = currentUrl && currentUrl.includes('bilibili.com');
              const embedUrl = isBilibili ? getBilibiliEmbedUrl(currentUrl) : '';

              return (
                <div
                  key={video.id}
                  className="bg-[#1F2126] border border-[#2A2D33] rounded-[24px] p-6 sm:p-8 md:p-10 shadow-2xl hover:border-[#D6CDA8]/40 transition-all duration-300 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Text Column (5 cols) */}
                    <div
                      className={`lg:col-span-5 flex flex-col justify-between ${
                        isImageRight ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <div>
                        {/* Top Category & Tag */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className="px-3 py-1 rounded-full bg-[#2A2D33] text-[#D6CDA8] border border-[#D6CDA8]/30 text-[11px] font-mono tracking-wider font-semibold">
                            {video.tag}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 text-[11px] font-mono">
                            {video.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="text-2xl sm:text-[22px] font-bold text-white tracking-tight mb-3 group-hover:text-[#D6CDA8] transition-colors">
                          {video.title}
                        </h4>

                        {/* Summary */}
                        <p className="text-sm sm:text-[14px] text-[#A0A0A0] leading-relaxed mb-6">
                          {video.summary}
                        </p>
                      </div>

                      {/* Video Actions & URL Configuration */}
                      <div className="pt-3 border-t border-[#2A2D33] space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => setSelectedVideo(video)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D6CDA8] text-[#18191C] text-[13px] font-bold tracking-wide transition-all duration-200 hover:bg-white hover:shadow-lg cursor-pointer"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>播放 / 预览视频</span>
                          </button>

                          {currentUrl ? (
                            <a
                              href={currentUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#18191C] text-[12px] font-medium border border-white/20 transition-all cursor-pointer"
                              title={`前往${getPlatformLabel(currentUrl)}`}
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>前往{getPlatformLabel(currentUrl)}</span>
                            </a>
                          ) : (
                            <button
                              onClick={() => {
                                setEditingVideoUrlId(video.id);
                                setTempUrlInput(currentUrl || '');
                              }}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-[#888888] hover:text-white text-[11px] font-mono border border-white/10 transition-colors cursor-pointer"
                            >
                              <Link2 className="w-3 h-3 text-[#D6CDA8]" />
                              <span>配置视频链接</span>
                            </button>
                          )}
                        </div>

                        {/* Inline URL configuration input when clicked */}
                        {editingVideoUrlId === video.id && (
                          <div className="p-3 rounded-xl bg-[#18191C] border border-[#D6CDA8]/30 animate-in fade-in duration-200">
                            <label className="text-[11px] font-mono text-[#D6CDA8] block mb-1.5">
                              填入视频播放链接（抖音 / B 站 / YouTube / 腾讯视频 / MP4 链接）：
                            </label>
                            <div className="flex items-center gap-2">
                              <input
                                type="url"
                                value={tempUrlInput}
                                onChange={(e) => setTempUrlInput(e.target.value)}
                                placeholder="https://v.douyin.com/... 或 https://www.bilibili.com/..."
                                className="flex-1 bg-[#2A2D33] border border-[#3A3D43] text-white text-xs px-3 py-1.5 rounded-lg focus:outline-hidden focus:border-[#D6CDA8] font-mono"
                              />
                              <button
                                onClick={() => handleSaveVideoUrl(video.id)}
                                className="px-3 py-1.5 rounded-lg bg-[#D6CDA8] text-[#18191C] text-xs font-bold shrink-0 cursor-pointer"
                              >
                                保存
                              </button>
                              <button
                                onClick={() => setEditingVideoUrlId(null)}
                                className="px-2 py-1.5 rounded-lg bg-[#2A2D33] text-white text-xs shrink-0 cursor-pointer"
                              >
                                取消
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Image / Video Slot Column (7 cols) */}
                    <div
                      className={`lg:col-span-7 ${
                        isImageRight ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <div
                        className="aspect-[16/10] w-full rounded-[20px] bg-[#2A2D33] border border-[#3A3D43] p-4 sm:p-5 flex flex-col justify-between overflow-hidden relative group-hover:scale-[1.01] transition-transform duration-300 shadow-2xl"
                      >
                        <div className="w-full h-full flex flex-col justify-between rounded-xl bg-[#18191C] border border-[#3A3D43] overflow-hidden group/screen relative">
                          {/* Mini Window Bar */}
                          <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#1F2126] border-b border-[#2A2D33] shrink-0 z-10">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#E5E1D6]/30" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#E5E1D6]/30" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#E5E1D6]/30" />
                              <span className="text-[11px] font-mono text-[#D6CDA8] ml-2 truncate">
                                {video.title}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80 border border-white/10">
                              {video.duration}
                            </span>
                          </div>

                          {/* Video Container (Embed player or Cover or Placeholder) */}
                          <div className="relative flex-1 bg-black/60 overflow-hidden flex flex-col items-center justify-center text-center">
                            {embedUrl ? (
                              <iframe
                                src={embedUrl}
                                title={video.title}
                                className="w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
                              />
                            ) : currentCover ? (
                              <div
                                onClick={() => setSelectedVideo(video)}
                                className="w-full h-full relative cursor-pointer group/cover"
                              >
                                <img
                                  src={currentCover}
                                  alt={video.title}
                                  className="w-full h-full object-cover group-hover/cover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover/cover:bg-black/20 transition-colors flex items-center justify-center">
                                  <div className="w-14 h-14 rounded-full bg-[#18191C]/90 text-[#D6CDA8] border border-[#D6CDA8]/50 flex items-center justify-center group-hover/cover:scale-110 group-hover/cover:bg-[#D6CDA8] group-hover/cover:text-[#18191C] transition-all duration-300 shadow-xl">
                                    <Play className="w-6 h-6 fill-current ml-0.5" />
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div
                                onClick={() => setSelectedVideo(video)}
                                className="w-full h-full flex flex-col items-center justify-center p-6 cursor-pointer relative"
                              >
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D6CDA8_1px,transparent_1px)] [background-size:16px_16px]" />
                                <div className="w-14 h-14 rounded-full bg-[#18191C]/90 text-[#D6CDA8] border border-[#D6CDA8]/50 flex items-center justify-center group-hover/screen:scale-110 group-hover/screen:bg-[#D6CDA8] group-hover/screen:text-[#18191C] transition-all duration-300 z-10 shadow-xl mb-2">
                                  <Play className="w-6 h-6 fill-current ml-0.5" />
                                </div>
                                <span className="text-xs text-[#888888] font-mono z-10">点击配置视频链接或上传封面</span>
                              </div>
                            )}

                            {/* Floating bottom badge if not playing iframe directly */}
                            {!embedUrl && (
                              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                                <span className="px-2.5 py-1 rounded-lg bg-[#18191C]/80 backdrop-blur-md text-[11px] font-mono text-[#D6CDA8] border border-white/10 flex items-center gap-1.5">
                                  <Video className="w-3 h-3" />
                                  <span>{video.category}</span>
                                </span>
                                <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#888888] border border-white/10">
                                  {currentCover ? '已加载封面' : '待上传专属封面'}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. AI 工具选择及原因 (清晰精炼的 4 卡片网格) */}
        <div className="mb-20 pt-10 border-t border-[#2A2D33]">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#2A2D33]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D6CDA8] flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>AI TOOL SELECTION & RATIONALE</span>
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                AI 工具选择及原因
              </h3>
            </div>
            <span className="text-xs text-[#888888] font-mono hidden sm:inline-block">
              漫剧与视频工业化全流程选型
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AI_TOOL_CHOICES.map((choice, cIdx) => (
              <div
                key={cIdx}
                className="p-5 rounded-2xl bg-[#1F2126] border border-[#2A2D33] hover:border-[#D6CDA8]/50 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#2A2D33] text-[11px] font-mono text-[#888888] border border-[#3A3D43]">
                      {choice.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#D6CDA8]/60">
                      0{cIdx + 1}
                    </span>
                  </div>
                  <h4 className="text-[16px] font-bold text-[#D6CDA8] mb-2 group-hover:text-white transition-colors">
                    {choice.tool}
                  </h4>
                  <p className="text-xs text-[#A0A0A0] leading-relaxed">
                    {choice.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Bottom Toolstack Capsules */}
        <div className="pt-8 border-t border-[#2A2D33] flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <Code2 className="w-4 h-4 text-[#D6CDA8]" />
            <span className="text-xs sm:text-[13px] font-mono text-[#888888] font-semibold">
              全流程工具栈 →
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {TOOL_STACK.map((tool, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-[#2A2D33] text-white border border-[#3A3D43] text-xs font-mono hover:border-[#D6CDA8] hover:text-[#D6CDA8] transition-all"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Work Detail Modal */}
      {selectedWork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          <div className="bg-[#1F2126] border border-[#3A3D43] rounded-[24px] max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#2A2D33] text-white hover:bg-[#3A3D43] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block px-3 py-1 rounded-full bg-[#2A2D33] text-[#D6CDA8] text-xs font-mono mb-3">
              {selectedWork.tag}
            </span>
            <h3 className="text-2xl font-bold text-white mb-3">{selectedWork.title}</h3>
            <p className="text-sm text-[#A0A0A0] leading-relaxed mb-6">{selectedWork.summary}</p>

            <div className="space-y-3 mb-6 p-4 rounded-xl bg-[#18191C] border border-[#2A2D33]">
              <h4 className="text-xs font-mono text-[#D6CDA8] uppercase tracking-wider">
                核心评估体系与指标
              </h4>
              {selectedWork.details.map((d, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#A0A0A0]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D6CDA8] shrink-0 mt-0.5" />
                  <span>{d}</span>
                </div>
              ))}
            </div>

            {/* Rich screenshot view for script-eval */}
            <div className="rounded-2xl bg-[#18191C] border border-[#3A3D43] overflow-hidden mb-6 shadow-xl">
              <div className="px-4 py-2.5 bg-[#2A2D33] border-b border-[#3A3D43] flex items-center justify-between">
                <span className="text-xs font-mono text-[#D6CDA8]">
                  系统工作台与评分看板真实界面截屏
                </span>
                <div className="flex items-center gap-2">
                  <input
                    ref={scriptInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleScriptUpload}
                  />
                  <button
                    onClick={() => scriptInputRef.current?.click()}
                    className="px-2.5 py-1 rounded-lg bg-[#18191C] hover:bg-black text-[11px] font-mono text-white flex items-center gap-1 border border-white/20 transition-colors cursor-pointer"
                  >
                    <Upload className="w-3 h-3 text-[#D6CDA8]" />
                    <span>更换截图原图</span>
                  </button>
                </div>
              </div>
              <div className="max-h-[380px] overflow-y-auto bg-black/60 p-2">
                <img
                  src={scriptEvalCover}
                  alt="万兴剧厂 · 小说与剧本质量测评系统"
                  className="w-full h-auto rounded-lg object-contain shadow-md"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedWork(null)}
                className="px-5 py-2 rounded-full border border-[#3A3D43] text-white text-xs font-semibold hover:bg-[#2A2D33] cursor-pointer"
              >
                关闭
              </button>
              <a
                href={selectedWork.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full bg-[#D6CDA8] text-[#18191C] text-xs font-bold hover:bg-white transition-colors cursor-pointer"
              >
                访问在线 Demo / 地址
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Video Preview & Link/Cover Config Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          <div className="bg-[#1F2126] border border-[#3A3D43] rounded-[24px] max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#2A2D33] text-white hover:bg-[#3A3D43] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-[#D6CDA8] px-2.5 py-0.5 rounded bg-[#2A2D33] mb-3 inline-block">
              {selectedVideo.category} · {selectedVideo.duration}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{selectedVideo.title}</h3>
            
            {/* Story Synopsis */}
            <div className="p-4 rounded-xl bg-[#18191C] border border-[#2A2D33] mb-4">
              <h5 className="text-xs font-mono text-[#D6CDA8] uppercase tracking-wider mb-2">
                故事梗概与核心看点
              </h5>
              <p className="text-xs sm:text-[13px] text-[#C5C5C5] leading-relaxed">
                {selectedVideo.summary}
              </p>
            </div>

            {/* Video Player / Embedded Frame */}
            {(() => {
              const url = getVideoUrl(selectedVideo.id) || selectedVideo.link;
              const embed = getBilibiliEmbedUrl(url);
              const cover = getVideoCover(selectedVideo.id);

              return (
                <div className="aspect-[16/9] w-full rounded-2xl bg-black border border-[#3A3D43] overflow-hidden mb-5 shadow-2xl relative">
                  {embed ? (
                    <iframe
                      src={embed}
                      title={selectedVideo.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
                    />
                  ) : cover ? (
                    <div className="relative w-full h-full">
                      <img
                        src={cover}
                        alt={selectedVideo.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="p-4 rounded-full bg-[#18191C]/90 text-[#D6CDA8] shadow-xl">
                          <Play className="w-8 h-8 fill-current" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                      <Play className="w-10 h-10 text-[#D6CDA8] mb-3 opacity-80" />
                      <p className="text-xs font-mono text-[#D6CDA8] max-w-xs mb-1">
                        {selectedVideo.placeholderText}
                      </p>
                      <p className="text-[11px] text-[#888888] font-mono">
                        支持在下方直接填入视频链接，或上传视频封面
                      </p>
                    </div>
                  )}
                </div>
              );
            })()}

            {/* Cover and Link Quick Uploader in Modal */}
            <div className="p-4 rounded-xl bg-[#18191C] border border-[#2A2D33] mb-6 space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-mono text-[#D6CDA8]">
                    视频播放链接（支持抖音 / B 站 / YouTube / MP4）：
                  </label>
                  {(getVideoUrl(selectedVideo.id) || selectedVideo.link) && (
                    <a
                      href={getVideoUrl(selectedVideo.id) || selectedVideo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#D6CDA8] hover:underline flex items-center gap-1 font-mono"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>在原片平台独立页面打开</span>
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="url"
                    value={getVideoUrl(selectedVideo.id) || selectedVideo.link}
                    onChange={(e) => {
                      if (selectedVideo.id === 'video-basketball') {
                        setCustomVideoBasketballUrl(e.target.value);
                      } else {
                        setCustomVideoFupingUrl(e.target.value);
                      }
                    }}
                    placeholder="请输入视频在线观看链接..."
                    className="flex-1 bg-[#2A2D33] border border-[#3A3D43] text-white text-xs px-3 py-2 rounded-lg font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#2A2D33]">
                <span className="text-xs text-[#888888]">上传自定义视频封面 / 剧照：</span>
                <input
                  ref={
                    selectedVideo.id === 'video-basketball'
                      ? basketballInputRef
                      : fupingInputRef
                  }
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={
                    selectedVideo.id === 'video-basketball'
                      ? handleBasketballUpload
                      : handleFupingUpload
                  }
                />
                <button
                  onClick={() => {
                    if (selectedVideo.id === 'video-basketball') {
                      basketballInputRef.current?.click();
                    } else {
                      fupingInputRef.current?.click();
                    }
                  }}
                  className="px-3 py-1.5 rounded-lg bg-[#2A2D33] hover:bg-[#3A3D43] text-white text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5 text-[#D6CDA8]" />
                  <span>上传封面图片</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              {(getVideoUrl(selectedVideo.id) || selectedVideo.link) ? (
                <a
                  href={getVideoUrl(selectedVideo.id) || selectedVideo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#18191C] text-xs font-medium border border-white/20 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Tv className="w-3.5 h-3.5" />
                  <span>前往 {getPlatformLabel(getVideoUrl(selectedVideo.id) || selectedVideo.link)}</span>
                </a>
              ) : (
                <div />
              )}
              <button
                onClick={() => setSelectedVideo(null)}
                className="px-6 py-2 rounded-full bg-[#D6CDA8] text-[#18191C] text-xs font-bold hover:bg-white cursor-pointer"
              >
                完成
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
