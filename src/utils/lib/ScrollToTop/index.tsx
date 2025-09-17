import { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
const ScrollToTop = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleScrollToTop = () => {
    if (window) window.scrollTo({ behavior: 'smooth', top: 0 });
  };
  const handleScroll = () => {
    if (window.scrollY > 100) setIsShow(true);
    else setIsShow(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <button
      onClick={handleScrollToTop}
      className={`p-2 sm:p-5 z-10 origin-center bg-white dark:bg-[#EAFDFC] shadow-md inline-block border border-black transition-all duration-300 rounded-full fixed ${
        isShow ? 'scale-100 right-[12px] bottom-[12px] sm:right-[30px] sm:bottom-[30px]' : 'scale-0 right-0 bottom-0'
      }`}
    >
      <IoIosArrowUp />
    </button>
  );
};

export default ScrollToTop;
