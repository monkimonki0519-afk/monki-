import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  daiLifePhoto as defaultLifePhoto,
  daiIdPortrait as defaultIdPortrait,
  cityuLogo as defaultCityuLogo,
  hunnuLogo as defaultHunnuLogo,
  scriptEvalCover as defaultScriptEvalCover,
} from '../assets/images';

interface PhotoContextType {
  lifePhoto: string;
  idPortrait: string;
  cityuLogo: string;
  hunnuLogo: string;
  scriptEvalCover: string;
  videoBasketballCover: string;
  videoFupingCover: string;
  videoBasketballUrl: string;
  videoFupingUrl: string;
  resumePdfUrl: string;
  resumePdfName: string;
  setCustomLifePhoto: (dataUrl: string) => void;
  setCustomIdPortrait: (dataUrl: string) => void;
  setCustomCityuLogo: (dataUrl: string) => void;
  setCustomHunnuLogo: (dataUrl: string) => void;
  setCustomScriptEvalCover: (dataUrl: string) => void;
  setCustomVideoBasketballCover: (dataUrl: string) => void;
  setCustomVideoFupingCover: (dataUrl: string) => void;
  setCustomVideoBasketballUrl: (url: string) => void;
  setCustomVideoFupingUrl: (url: string) => void;
  setCustomResumePdfUrl: (url: string, name?: string) => void;
  resetPhotos: () => void;
  isCustomLife: boolean;
  isCustomId: boolean;
}

const PhotoContext = createContext<PhotoContextType>({
  lifePhoto: defaultLifePhoto,
  idPortrait: defaultIdPortrait,
  cityuLogo: defaultCityuLogo,
  hunnuLogo: defaultHunnuLogo,
  scriptEvalCover: defaultScriptEvalCover,
  videoBasketballCover: '',
  videoFupingCover: '',
  videoBasketballUrl: '',
  videoFupingUrl: '',
  resumePdfUrl: '/resume.pdf',
  resumePdfName: '戴翰阳_AI产品经理_个人简历.pdf',
  setCustomLifePhoto: () => {},
  setCustomIdPortrait: () => {},
  setCustomCityuLogo: () => {},
  setCustomHunnuLogo: () => {},
  setCustomScriptEvalCover: () => {},
  setCustomVideoBasketballCover: () => {},
  setCustomVideoFupingCover: () => {},
  setCustomVideoBasketballUrl: () => {},
  setCustomVideoFupingUrl: () => {},
  setCustomResumePdfUrl: () => {},
  resetPhotos: () => {},
  isCustomLife: false,
  isCustomId: false,
});

const STORAGE_KEY_LIFE = 'portfolio_custom_life_photo';
const STORAGE_KEY_ID = 'portfolio_custom_id_portrait';
const STORAGE_KEY_CITYU = 'portfolio_custom_cityu_logo';
const STORAGE_KEY_HUNNU = 'portfolio_custom_hunnu_logo';
const STORAGE_KEY_SCRIPT_EVAL = 'portfolio_custom_script_eval_cover';
const STORAGE_KEY_BASKETBALL_COVER = 'portfolio_video_basketball_cover';
const STORAGE_KEY_FUPING_COVER = 'portfolio_video_fuping_cover';
const STORAGE_KEY_BASKETBALL_URL = 'portfolio_video_basketball_url';
const STORAGE_KEY_FUPING_URL = 'portfolio_video_fuping_url';
const STORAGE_KEY_RESUME_PDF_URL = 'portfolio_resume_pdf_url';
const STORAGE_KEY_RESUME_PDF_NAME = 'portfolio_resume_pdf_name';

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lifePhoto, setLifePhoto] = useState<string>(defaultLifePhoto);
  const [idPortrait, setIdPortrait] = useState<string>(defaultIdPortrait);
  const [cityuLogo, setCityuLogo] = useState<string>(defaultCityuLogo);
  const [hunnuLogo, setHunnuLogo] = useState<string>(defaultHunnuLogo);
  const [scriptEvalCover, setScriptEvalCover] = useState<string>(defaultScriptEvalCover);
  const [videoBasketballCover, setVideoBasketballCover] = useState<string>('');
  const [videoFupingCover, setVideoFupingCover] = useState<string>('');
  const [videoBasketballUrl, setVideoBasketballUrl] = useState<string>('https://www.bilibili.com/video/BV17DtU66EUo');
  const [videoFupingUrl, setVideoFupingUrl] = useState<string>('https://www.bilibili.com/video/BV1w1MB6vE5K');
  const [resumePdfUrl, setResumePdfUrl] = useState<string>('/resume.pdf');
  const [resumePdfName, setResumePdfName] = useState<string>('戴翰阳_AI产品经理_个人简历.pdf');
  const [isCustomLife, setIsCustomLife] = useState<boolean>(false);
  const [isCustomId, setIsCustomId] = useState<boolean>(false);

  useEffect(() => {
    try {
      const savedLife = localStorage.getItem(STORAGE_KEY_LIFE);
      if (savedLife) {
        setLifePhoto(savedLife);
        setIsCustomLife(true);
      }
      const savedId = localStorage.getItem(STORAGE_KEY_ID);
      if (savedId) {
        setIdPortrait(savedId);
        setIsCustomId(true);
      }
      const savedCityu = localStorage.getItem(STORAGE_KEY_CITYU);
      if (savedCityu) {
        setCityuLogo(savedCityu);
      }
      const savedHunnu = localStorage.getItem(STORAGE_KEY_HUNNU);
      if (savedHunnu) {
        setHunnuLogo(savedHunnu);
      }
      const savedScriptEval = localStorage.getItem(STORAGE_KEY_SCRIPT_EVAL);
      if (savedScriptEval) {
        setScriptEvalCover(savedScriptEval);
      }
      const savedBasketballCover = localStorage.getItem(STORAGE_KEY_BASKETBALL_COVER);
      if (savedBasketballCover) {
        setVideoBasketballCover(savedBasketballCover);
      }
      const savedFupingCover = localStorage.getItem(STORAGE_KEY_FUPING_COVER);
      if (savedFupingCover) {
        setVideoFupingCover(savedFupingCover);
      }
      const savedBasketballUrl = localStorage.getItem(STORAGE_KEY_BASKETBALL_URL);
      if (savedBasketballUrl) {
        setVideoBasketballUrl(savedBasketballUrl);
      }
      const savedFupingUrl = localStorage.getItem(STORAGE_KEY_FUPING_URL);
      if (savedFupingUrl) {
        setVideoFupingUrl(savedFupingUrl);
      }
      const savedResumePdf = localStorage.getItem(STORAGE_KEY_RESUME_PDF_URL);
      if (savedResumePdf) {
        setResumePdfUrl(savedResumePdf);
      }
      const savedResumePdfName = localStorage.getItem(STORAGE_KEY_RESUME_PDF_NAME);
      if (savedResumePdfName) {
        setResumePdfName(savedResumePdfName);
      }
    } catch (e) {
      console.warn('Failed to load photos from localStorage', e);
    }
  }, []);

  const setCustomLifePhoto = (dataUrl: string) => {
    setLifePhoto(dataUrl);
    setIsCustomLife(true);
    try {
      localStorage.setItem(STORAGE_KEY_LIFE, dataUrl);
    } catch (e) {
      console.warn('Failed to save life photo to localStorage', e);
    }
  };

  const setCustomIdPortrait = (dataUrl: string) => {
    setIdPortrait(dataUrl);
    setIsCustomId(true);
    try {
      localStorage.setItem(STORAGE_KEY_ID, dataUrl);
    } catch (e) {
      console.warn('Failed to save id portrait to localStorage', e);
    }
  };

  const setCustomCityuLogo = (dataUrl: string) => {
    setCityuLogo(dataUrl);
    try {
      localStorage.setItem(STORAGE_KEY_CITYU, dataUrl);
    } catch (e) {
      console.warn('Failed to save CityU logo', e);
    }
  };

  const setCustomHunnuLogo = (dataUrl: string) => {
    setHunnuLogo(dataUrl);
    try {
      localStorage.setItem(STORAGE_KEY_HUNNU, dataUrl);
    } catch (e) {
      console.warn('Failed to save HUNNU logo', e);
    }
  };

  const setCustomScriptEvalCover = (dataUrl: string) => {
    setScriptEvalCover(dataUrl);
    try {
      localStorage.setItem(STORAGE_KEY_SCRIPT_EVAL, dataUrl);
    } catch (e) {
      console.warn('Failed to save Script Eval cover', e);
    }
  };

  const setCustomVideoBasketballCover = (dataUrl: string) => {
    setVideoBasketballCover(dataUrl);
    try {
      localStorage.setItem(STORAGE_KEY_BASKETBALL_COVER, dataUrl);
    } catch (e) {
      console.warn('Failed to save basketball cover', e);
    }
  };

  const setCustomVideoFupingCover = (dataUrl: string) => {
    setVideoFupingCover(dataUrl);
    try {
      localStorage.setItem(STORAGE_KEY_FUPING_COVER, dataUrl);
    } catch (e) {
      console.warn('Failed to save fuping cover', e);
    }
  };

  const setCustomVideoBasketballUrl = (url: string) => {
    setVideoBasketballUrl(url);
    try {
      localStorage.setItem(STORAGE_KEY_BASKETBALL_URL, url);
    } catch (e) {
      console.warn('Failed to save basketball URL', e);
    }
  };

  const setCustomVideoFupingUrl = (url: string) => {
    setVideoFupingUrl(url);
    try {
      localStorage.setItem(STORAGE_KEY_FUPING_URL, url);
    } catch (e) {
      console.warn('Failed to save fuping URL', e);
    }
  };

  const setCustomResumePdfUrl = (url: string, name?: string) => {
    setResumePdfUrl(url);
    if (name) {
      setResumePdfName(name);
    }
    try {
      localStorage.setItem(STORAGE_KEY_RESUME_PDF_URL, url);
      if (name) {
        localStorage.setItem(STORAGE_KEY_RESUME_PDF_NAME, name);
      }
    } catch (e) {
      console.warn('Failed to save resume PDF URL', e);
    }
  };

  const resetPhotos = () => {
    setLifePhoto(defaultLifePhoto);
    setIdPortrait(defaultIdPortrait);
    setCityuLogo(defaultCityuLogo);
    setHunnuLogo(defaultHunnuLogo);
    setScriptEvalCover(defaultScriptEvalCover);
    setVideoBasketballCover('');
    setVideoFupingCover('');
    setVideoBasketballUrl('');
    setVideoFupingUrl('');
    setResumePdfUrl('/resume.pdf');
    setResumePdfName('戴翰阳_AI产品经理_个人简历.pdf');
    setIsCustomLife(false);
    setIsCustomId(false);
    try {
      localStorage.removeItem(STORAGE_KEY_LIFE);
      localStorage.removeItem(STORAGE_KEY_ID);
      localStorage.removeItem(STORAGE_KEY_CITYU);
      localStorage.removeItem(STORAGE_KEY_HUNNU);
      localStorage.removeItem(STORAGE_KEY_SCRIPT_EVAL);
      localStorage.removeItem(STORAGE_KEY_BASKETBALL_COVER);
      localStorage.removeItem(STORAGE_KEY_FUPING_COVER);
      localStorage.removeItem(STORAGE_KEY_BASKETBALL_URL);
      localStorage.removeItem(STORAGE_KEY_FUPING_URL);
      localStorage.removeItem(STORAGE_KEY_RESUME_PDF_URL);
      localStorage.removeItem(STORAGE_KEY_RESUME_PDF_NAME);
    } catch (e) {
      console.warn('Failed to clear photos from localStorage', e);
    }
  };

  return (
    <PhotoContext.Provider
      value={{
        lifePhoto,
        idPortrait,
        cityuLogo,
        hunnuLogo,
        scriptEvalCover,
        videoBasketballCover,
        videoFupingCover,
        videoBasketballUrl,
        videoFupingUrl,
        resumePdfUrl,
        resumePdfName,
        setCustomLifePhoto,
        setCustomIdPortrait,
        setCustomCityuLogo,
        setCustomHunnuLogo,
        setCustomScriptEvalCover,
        setCustomVideoBasketballCover,
        setCustomVideoFupingCover,
        setCustomVideoBasketballUrl,
        setCustomVideoFupingUrl,
        setCustomResumePdfUrl,
        resetPhotos,
        isCustomLife,
        isCustomId,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotos = () => useContext(PhotoContext);

