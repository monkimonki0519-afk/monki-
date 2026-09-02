import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { GACHA_SKILLS, GACHA_HOBBIES } from '../data/portfolioData';
import { GachaCard } from '../types';
import {
  Code2,
  Bot,
  BarChart3,
  Film,
  Palette,
  Zap,
  FileSpreadsheet,
  Megaphone,
  Camera,
  Mountain,
  Compass,
  Dumbbell,
  Music,
  RotateCcw,
  Sparkles,
  Eye,
  CheckCircle2,
  Layers,
  HelpCircle,
} from 'lucide-react';

const renderIcon = (iconName: string, className: string = 'w-6 h-6') => {
  switch (iconName) {
    case 'Code2':
      return <Code2 className={className} />;
    case 'Bot':
      return <Bot className={className} />;
    case 'BarChart3':
      return <BarChart3 className={className} />;
    case 'Film':
      return <Film className={className} />;
    case 'Palette':
      return <Palette className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'FileSpreadsheet':
      return <FileSpreadsheet className={className} />;
    case 'Megaphone':
      return <Megaphone className={className} />;
    case 'Camera':
      return <Camera className={className} />;
    case 'Mountain':
      return <Mountain className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Dumbbell':
      return <Dumbbell className={className} />;
    case 'Music':
      return <Music className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

interface PoolState {
  remaining: GachaCard[];
  drawn: GachaCard[];
  lastDrawnIds: string[];
}

export const CardGachaSection: React.FC = () => {
  // Skill Pool State
  const [skillPool, setSkillPool] = useState<PoolState>({
    remaining: [...GACHA_SKILLS],
    drawn: [],
    lastDrawnIds: [],
  });

  // Hobby Pool State
  const [hobbyPool, setHobbyPool] = useState<PoolState>({
    remaining: [...GACHA_HOBBIES],
    drawn: [],
    lastDrawnIds: [],
  });

  // Draw handler
  const handleDraw = (poolType: 'skill' | 'hobby', count: number) => {
    const currentPool = poolType === 'skill' ? skillPool : hobbyPool;
    const setPool = poolType === 'skill' ? setSkillPool : setHobbyPool;

    if (currentPool.remaining.length === 0) return;

    const actualCount = Math.min(count, currentPool.remaining.length);
    const shuffled = [...currentPool.remaining].sort(() => Math.random() - 0.5);
    const drawnCards = shuffled.slice(0, actualCount);
    const remainingCards = shuffled.slice(actualCount);

    setPool({
      remaining: remainingCards,
      drawn: [...currentPool.drawn, ...drawnCards],
      lastDrawnIds: drawnCards.map((c) => c.id),
    });
  };

  // Draw all at once
  const handleDrawAll = (poolType: 'skill' | 'hobby') => {
    const currentPool = poolType === 'skill' ? skillPool : hobbyPool;
    const setPool = poolType === 'skill' ? setSkillPool : setHobbyPool;

    if (currentPool.remaining.length === 0) return;

    setPool({
      remaining: [],
      drawn: poolType === 'skill' ? [...GACHA_SKILLS] : [...GACHA_HOBBIES],
      lastDrawnIds: currentPool.remaining.map((c) => c.id),
    });
  };

  // Reset / Reshuffle
  const handleReset = (poolType: 'skill' | 'hobby') => {
    const setPool = poolType === 'skill' ? setSkillPool : setHobbyPool;
    const initialList = poolType === 'skill' ? GACHA_SKILLS : GACHA_HOBBIES;

    setPool({
      remaining: [...initialList],
      drawn: [],
      lastDrawnIds: [],
    });
  };

  return (
    <section
      id="skills"
      className="py-16 md:py-24 max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20"
    >
      <SectionHeader
        kicker="05 / SKILLS & INTERESTS GACHA"
        title="技能与爱好 · 抽卡探索"
        subtitle="点击下方卡池进行互动抽卡，30 秒快速解锁我的核心技能雷达与生活志趣。"
      />

      {/* Two Pools Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
        {/* ================= 1. SKILL POOL ================= */}
        <div className="bg-white rounded-[24px] border border-[#E5E1D6] p-6 sm:p-8 flex flex-col justify-between editorial-shadow">
          <div>
            {/* Pool Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E5E1D6]">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#888888] font-semibold">
                  POOLED SKILLS (8 CARDS)
                </span>
                <h3 className="text-2xl font-bold text-[#18191C] tracking-tight mt-0.5">
                  技能卡池
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FAFAF7] border border-[#E5E1D6] text-[#444444]">
                  余量: <strong className="text-[#18191C]">{skillPool.remaining.length}</strong> / 8
                </span>
              </div>
            </div>

            {/* Visual Deck Area */}
            <div className="relative h-56 sm:h-64 w-full flex items-center justify-center my-4 overflow-hidden rounded-2xl bg-[#FAFAF7] border border-[#E5E1D6]">
              {skillPool.remaining.length > 0 ? (
                <div className="relative w-36 h-48 sm:w-40 sm:h-52 perspective-1000">
                  {/* Subtle fanned stack effect for realistic deck representation */}
                  {skillPool.remaining.slice(0, 5).map((card, idx) => {
                    const rotations = [-6, -3, 0, 3, 6];
                    const rot = rotations[idx % rotations.length];
                    const offsetX = (idx - 2) * 6;
                    const offsetY = (idx - 2) * 2;

                    return (
                      <div
                        key={card.id}
                        style={{
                          transform: `translate(${offsetX}px, ${offsetY}px) rotate(${rot}deg)`,
                          zIndex: 10 - idx,
                        }}
                        className="absolute inset-0 rounded-[18px] bg-[#1F2126] border-2 border-[#D6CDA8]/40 shadow-md flex flex-col items-center justify-between p-4 transition-all duration-300 pointer-events-none select-none"
                      >
                        <div className="w-full flex justify-between items-center text-[10px] font-mono text-[#D6CDA8]">
                          <span>✦</span>
                          <span>AI.PM</span>
                          <span>✦</span>
                        </div>

                        {/* Card Back Center Diamond Monogram */}
                        <div className="w-12 h-12 rounded-xl bg-[#18191C] border border-[#D6CDA8]/40 flex items-center justify-center">
                          <HelpCircle className="w-6 h-6 text-[#D6CDA8]" />
                        </div>

                        <div className="text-[10px] font-mono text-[#888888] tracking-widest uppercase">
                          SKILL CARD
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center p-6 space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#18191C] text-[#D6CDA8] mx-auto flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <p className="text-base font-bold text-[#18191C]">
                    技能卡池已全部抽出！
                  </p>
                  <p className="text-xs text-[#666666]">
                    可在下方查看完整技能卡片，或点击「重新洗牌」再次体验。
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-2.5 my-6">
              <button
                id="draw-skill-1"
                disabled={skillPool.remaining.length === 0}
                onClick={() => handleDraw('skill', 1)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  skillPool.remaining.length > 0
                    ? 'bg-[#D6CDA8] text-[#18191C] hover:bg-[#8B7355] hover:text-white shadow-sm'
                    : 'bg-[#E5E1D6] text-[#888888] cursor-not-allowed'
                }`}
              >
                抽 1 张
              </button>

              <button
                id="draw-skill-3"
                disabled={skillPool.remaining.length === 0}
                onClick={() => handleDraw('skill', 3)}
                className={`px-5 py-2.5 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                  skillPool.remaining.length > 0
                    ? 'border-[#18191C] text-[#18191C] hover:bg-[#18191C] hover:text-white'
                    : 'border-[#E5E1D6] text-[#888888] cursor-not-allowed'
                }`}
              >
                一次抽 3 张
              </button>

              <button
                id="draw-skill-all"
                disabled={skillPool.remaining.length === 0}
                onClick={() => handleDrawAll('skill')}
                className="px-4 py-2.5 rounded-full border border-[#E5E1D6] text-xs font-medium text-[#666666] hover:bg-[#FAFAF7] transition-colors cursor-pointer"
              >
                全部翻开
              </button>

              <button
                id="reset-skill"
                onClick={() => handleReset('skill')}
                className="ml-auto p-2.5 rounded-full text-[#888888] hover:text-[#18191C] hover:bg-[#FAFAF7] transition-colors"
                title="重新洗牌"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Drawn Cards Showcase Area */}
          <div className="pt-4 border-t border-[#E5E1D6]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-[#888888]">
                已翻开技能 ({skillPool.drawn.length} / 8)
              </span>
              {skillPool.drawn.length > 0 && (
                <span className="text-[11px] text-[#8B7355] font-mono font-medium">
                  实时点亮中
                </span>
              )}
            </div>

            {skillPool.drawn.length === 0 ? (
              <div className="py-8 text-center border-2 border-dashed border-[#E5E1D6] rounded-2xl bg-[#FAFAF7]/50">
                <p className="text-xs text-[#888888] font-mono">
                  点击上方「抽 1 张」或「一次抽 3 张」开始抽卡
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[380px] overflow-y-auto pr-1">
                {skillPool.drawn.map((card) => {
                  const isNew = skillPool.lastDrawnIds.includes(card.id);
                  return (
                    <div
                      key={card.id}
                      className={`p-4 rounded-2xl bg-[#FAFAF7] border border-[#E5E1D6] transition-all duration-500 hover:border-[#D6CDA8] hover:bg-white flex flex-col justify-between ${
                        isNew ? 'animate-in fade-in zoom-in-95 duration-500 ring-2 ring-[#D6CDA8]' : ''
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <div className="p-2 rounded-xl bg-white border border-[#E5E1D6] text-[#8B7355] shadow-xs">
                            {renderIcon(card.iconName, 'w-4 h-4')}
                          </div>
                          {card.level && (
                            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#D6CDA8]/40 text-[#8B7355] border border-[#D6CDA8]/60">
                              {card.level}
                            </span>
                          )}
                        </div>
                        <h4 className="text-sm font-bold text-[#18191C] mb-1">
                          {card.name}
                        </h4>
                        <p className="text-xs text-[#666666] leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* ================= 2. HOBBY POOL ================= */}
        <div className="bg-white rounded-[24px] border border-[#E5E1D6] p-6 sm:p-8 flex flex-col justify-between editorial-shadow">
          <div>
            {/* Pool Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E5E1D6]">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#888888] font-semibold">
                  POOLED INTERESTS (5 CARDS)
                </span>
                <h3 className="text-2xl font-bold text-[#18191C] tracking-tight mt-0.5">
                  兴趣卡池
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FAFAF7] border border-[#E5E1D6] text-[#444444]">
                  余量: <strong className="text-[#18191C]">{hobbyPool.remaining.length}</strong> / 5
                </span>
              </div>
            </div>

            {/* Visual Deck Area */}
            <div className="relative h-56 sm:h-64 w-full flex items-center justify-center my-4 overflow-hidden rounded-2xl bg-[#FAFAF7] border border-[#E5E1D6]">
              {hobbyPool.remaining.length > 0 ? (
                <div className="relative w-36 h-48 sm:w-40 sm:h-52 perspective-1000">
                  {hobbyPool.remaining.map((card, idx) => {
                    const rotations = [-5, -2, 0, 3, 5];
                    const rot = rotations[idx % rotations.length];
                    const offsetX = (idx - 2) * 6;
                    const offsetY = (idx - 2) * 2;

                    return (
                      <div
                        key={card.id}
                        style={{
                          transform: `translate(${offsetX}px, ${offsetY}px) rotate(${rot}deg)`,
                          zIndex: 10 - idx,
                        }}
                        className="absolute inset-0 rounded-[18px] bg-[#18191C] border-2 border-[#D6CDA8]/40 shadow-md flex flex-col items-center justify-between p-4 transition-all duration-300 pointer-events-none select-none"
                      >
                        <div className="w-full flex justify-between items-center text-[10px] font-mono text-[#D6CDA8]">
                          <span>✧</span>
                          <span>HOBBY</span>
                          <span>✧</span>
                        </div>

                        {/* Card Back Center Graphic */}
                        <div className="w-12 h-12 rounded-xl bg-[#1F2126] border border-[#D6CDA8]/40 flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-[#D6CDA8]" />
                        </div>

                        <div className="text-[10px] font-mono text-[#888888] tracking-widest uppercase">
                          LIFE & PASSION
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center p-6 space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#18191C] text-[#D6CDA8] mx-auto flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <p className="text-base font-bold text-[#18191C]">
                    兴趣卡池已全部抽出！
                  </p>
                  <p className="text-xs text-[#666666]">
                    可在下方查看完整兴趣卡片，或点击「重新洗牌」再次体验。
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-2.5 my-6">
              <button
                id="draw-hobby-1"
                disabled={hobbyPool.remaining.length === 0}
                onClick={() => handleDraw('hobby', 1)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  hobbyPool.remaining.length > 0
                    ? 'bg-[#D6CDA8] text-[#18191C] hover:bg-[#8B7355] hover:text-white shadow-sm'
                    : 'bg-[#E5E1D6] text-[#888888] cursor-not-allowed'
                }`}
              >
                抽 1 张
              </button>

              <button
                id="draw-hobby-3"
                disabled={hobbyPool.remaining.length === 0}
                onClick={() => handleDraw('hobby', 3)}
                className={`px-5 py-2.5 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                  hobbyPool.remaining.length > 0
                    ? 'border-[#18191C] text-[#18191C] hover:bg-[#18191C] hover:text-white'
                    : 'border-[#E5E1D6] text-[#888888] cursor-not-allowed'
                }`}
              >
                一次抽 3 张
              </button>

              <button
                id="draw-hobby-all"
                disabled={hobbyPool.remaining.length === 0}
                onClick={() => handleDrawAll('hobby')}
                className="px-4 py-2.5 rounded-full border border-[#E5E1D6] text-xs font-medium text-[#666666] hover:bg-[#FAFAF7] transition-colors cursor-pointer"
              >
                全部翻开
              </button>

              <button
                id="reset-hobby"
                onClick={() => handleReset('hobby')}
                className="ml-auto p-2.5 rounded-full text-[#888888] hover:text-[#18191C] hover:bg-[#FAFAF7] transition-colors"
                title="重新洗牌"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Drawn Cards Showcase Area */}
          <div className="pt-4 border-t border-[#E5E1D6]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-[#888888]">
                已翻开兴趣 ({hobbyPool.drawn.length} / 5)
              </span>
              {hobbyPool.drawn.length > 0 && (
                <span className="text-[11px] text-[#8B7355] font-mono font-medium">
                  多元视角
                </span>
              )}
            </div>

            {hobbyPool.drawn.length === 0 ? (
              <div className="py-8 text-center border-2 border-dashed border-[#E5E1D6] rounded-2xl bg-[#FAFAF7]/50">
                <p className="text-xs text-[#888888] font-mono">
                  点击上方按钮抽取爱好与志趣卡片
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[380px] overflow-y-auto pr-1">
                {hobbyPool.drawn.map((card) => {
                  const isNew = hobbyPool.lastDrawnIds.includes(card.id);
                  return (
                    <div
                      key={card.id}
                      className={`p-4 rounded-2xl bg-[#FAFAF7] border border-[#E5E1D6] transition-all duration-500 hover:border-[#D6CDA8] hover:bg-white flex flex-col justify-between ${
                        isNew ? 'animate-in fade-in zoom-in-95 duration-500 ring-2 ring-[#D6CDA8]' : ''
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2.5">
                          <div className="p-2 rounded-xl bg-white border border-[#E5E1D6] text-[#8B7355] shadow-xs">
                            {renderIcon(card.iconName, 'w-4 h-4')}
                          </div>
                          <h4 className="text-sm font-bold text-[#18191C]">
                            {card.name}
                          </h4>
                        </div>
                        <p className="text-xs text-[#666666] leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
