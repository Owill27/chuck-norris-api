import { useState, useCallback, useEffect } from 'react';

export function useClipboard(
  timeout: number = 1500,
  callbacks?: {
    onCopy?: (text: string) => void;
    onError?: (text: string) => void;
  },
) {
  const [hasCopied, setHasCopied] = useState<string | undefined>();

  const copy = useCallback((text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setHasCopied(text);
          callbacks?.onCopy && callbacks?.onCopy(text);
        })
        .catch(console.error);
    } else {
      callbacks?.onError && callbacks?.onError(text);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let timeoutId: number | null = null;

    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(undefined);
      }, timeout);
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, hasCopied]);

  return { copy, hasCopied };
}
