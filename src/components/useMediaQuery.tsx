import { useState, useEffect } from 'react';

export function useMediaQuery(query: any) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);

      const handler = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => setMatches(e.matches);
      
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handler);
      } else {
        mediaQuery.addListener(handler);
      }

      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener('change', handler);
        } else {
          mediaQuery.removeListener(handler);
        }
      };
    }
  }, [query]);

  return matches;
}
