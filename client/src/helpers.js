export const debounce = (func, time) => {
  let timeout;
  const executedFunction = (...args) => {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    }

    clearTimeout(timeout);
    timeout = setTimeout(later, time)
  }
  return executedFunction
}