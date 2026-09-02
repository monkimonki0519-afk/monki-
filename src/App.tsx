import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EducationSection } from './components/EducationSection';
import { InternshipSection } from './components/InternshipSection';
import { VibeCodingSection } from './components/VibeCodingSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CardGachaSection } from './components/CardGachaSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PhotoManagerModal } from './components/PhotoManagerModal';
import { Toast } from './components/Toast';
import { PhotoProvider } from './context/PhotoContext';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isPhotoManagerOpen, setIsPhotoManagerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleContactClick = () => {
    const footerElement = document.querySelector('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
      showToast('已定位至底部联系方式（支持一键复制邮箱与手机号）');
    }
  };

  return (
    <PhotoProvider>
      <div className="min-h-screen bg-[#FAFAF7] text-[#18191C] font-sans selection:bg-[#D6CDA8] selection:text-[#18191C] flex flex-col">
        {/* Fixed Navigation Bar */}
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
        />

        {/* Main Content Area (6 Sections) */}
        <main className="flex-1 w-full">
          {/* ① 首页 Hero */}
          <HeroSection
            onOpenResume={() => setIsResumeOpen(true)}
            onContactClick={handleContactClick}
            onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
            onShowToast={showToast}
          />

          {/* ② 教育背景 */}
          <EducationSection />

          {/* ③ 实习经历 */}
          <InternshipSection />

          {/* ④ Vibe Coding 及 AI 视频作品 (深色核心区块) */}
          <VibeCodingSection />

          {/* ⑤ 项目经历 */}
          <ProjectsSection />

          {/* ⑥ 技能与爱好 · 抽卡玩法 */}
          <CardGachaSection />
        </main>

        {/* ⑦ 页脚 */}
        <Footer
          onOpenResume={() => setIsResumeOpen(true)}
          onCopySuccess={showToast}
        />

        {/* Resume Document Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        {/* Photo Manager Modal */}
        <PhotoManagerModal
          isOpen={isPhotoManagerOpen}
          onClose={() => setIsPhotoManagerOpen(false)}
          onShowToast={showToast}
        />

        {/* Toast Feedback Notification */}
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      </div>
    </PhotoProvider>
  );
}
