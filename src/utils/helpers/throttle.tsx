export const throttle = (callback: Function, delay: number) => {
  let shouldWait = false;
  return (...args: any[]) => {
    if (shouldWait) return;
    callback(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
};
