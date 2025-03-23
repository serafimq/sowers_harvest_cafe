import { useEffect, RefObject } from 'react';

/**
 * Хук для обработки кликов вне указанного элемента
 * @param ref - Ссылка на DOM-элемент
 * @param callback - Функция, которая будет вызвана при клике вне элемента
 */
function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

export default useClickOutside;
