export const debounce = (callback: Function, delay: number) => {
  let timeout: string | number | NodeJS.Timeout | undefined;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(callback(...args), delay);
  };
};
