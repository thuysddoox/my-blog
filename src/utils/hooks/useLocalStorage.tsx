export const useLocalStorage = () => {
  const saveLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };
  const getLocalStorage = (key: string) => {
    return localStorage.getItem(key);
  };
  return {
    saveLocalStorage,
    getLocalStorage,
  };
};
