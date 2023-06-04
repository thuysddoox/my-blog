export const scrollToTop = () => {
  if (window) window.scrollTo({ behavior: 'smooth', top: 0 });
};
