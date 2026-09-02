import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePhotos } from '../context/PhotoContext';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenPhotoManager?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenPhotoManager }) => {
  const { idPortrait } = usePhotos();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: '关于我' },
    { id: 'education', label: '教育背景' },
    { id: 'internship', label: '工作经历' },
    { id: 'vibe-coding', label: '个人作品' },
    { id: 'skills', label: '技能与爱好' },
    { id: 'contact', label: '联系我' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = [
        { id: 'hero', el: document.getElementById('hero') },
        { id: 'education', el: document.getElementById('education') },
        { id: 'internship', el: document.getElementById('internship') },
        { id: 'vibe-coding', el: document.getElementById('vibe-coding') },
        { id: 'skills', el: document.getElementById('skills') },
        { id: 'contact', el: document.querySelector('footer') },
      ];

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el && item.el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'contact') {
      const footer = document.querySelector('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAFAF7]/90 backdrop-blur-md border-b border-[#E5E1D6] py-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Left: Brand / Portfolio Identity with Avatar */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-[#E5E1D6] shrink-0 transition-transform duration-200 group-hover:scale-105 bg-[#EAE6DC]">
            <img
              src={idPortrait}
              alt="戴翰阳 证件照"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-tight text-[#18191C]">
              {PERSONAL_INFO.name}{' '}
              <span className="text-[11px] font-normal text-[#888888] font-mono tracking-wider uppercase ml-1">
                PORTFOLIO
              </span>
            </span>
          </div>
        </button>

        {/* Center: Floating Pill Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/80 border border-[#E5E1D6] backdrop-blur-md shadow-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#18191C] text-white shadow-xs font-semibold'
                    : 'text-[#666666] hover:text-[#18191C] hover:bg-[#FAFAF7]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Resume PDF Action */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#18191C] text-[#18191C] text-[13px] font-semibold transition-all duration-200 hover:bg-[#18191C] hover:text-white group cursor-pointer bg-white/60 backdrop-blur-xs"
          >
            <FileText className="w-3.5 h-3.5 text-[#8B7355] group-hover:text-[#D6CDA8] transition-colors" />
            <span>简历.pdf</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full border border-[#E5E1D6] bg-white text-[#18191C] hover:bg-[#FAFAF7] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5E1D6] bg-[#FAFAF7] px-6 py-5 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#18191C] text-white font-semibold'
                      : 'text-[#444444] hover:bg-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#E5E1D6] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#18191C] text-white text-sm font-semibold flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#D6CDA8]" />
                <span>查看完整简历 (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
