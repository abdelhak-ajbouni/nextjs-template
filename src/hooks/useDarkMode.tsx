import { useEffect } from 'react'

import useLocalStorage from './useLocalStorage';
import useMedia from './useMedia'

export default function useDarkMode() {
  const [enabledState, setEnabledState] = useLocalStorage<boolean>("dark-mode", false);
  const prefersDarkMode = useMedia<boolean>(["(prefers-color-scheme: dark)"], [true], false);
  const enabled = enabledState ?? prefersDarkMode;

  useEffect(
    () => {
      const className = "dark";
      const element = window.document.documentElement;
      if (enabled) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [enabled]
  );

  return [enabled, setEnabledState];
}