import { useCallback } from 'react';
import GA from 'react-ga4';

export function useGoogleAnalytics() {
  const _executeOnlyInProdMode = (f) => {
    if (typeof f !== 'function') {
      console.error(`_executeOnlyInProdMode should receive only functions but has ${typeof f}`);
      return;
    }
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`${f.name}: Google Analytics only works on production mode`);
      return;
    }
    return f();
  };

  const inProdInitialize = useCallback((tagId) => {
    _executeOnlyInProdMode(function initialize() {
      GA.initialize(tagId);
    });
  }, []);

  const inProdSendPageVisited = useCallback((page, title) => {
    _executeOnlyInProdMode(function sendPageVisited() {
      if (!GA.isInitialized) {
        console.error('Cannot send page visited event as GoogleAnalytics is not initialized');
        return;
      }
      GA.send({
        hitType: "pageview",
        page,
        title
      });
    });
  }, []);

  const inProdSendButtonClicked = useCallback((buttonName) => {
    _executeOnlyInProdMode(function sendButtonClicked() {
      if (!GA.isInitialized) {
        console.error('Cannot send button clicked event as GoogleAnalytics is not initialized');
        return;
      }
      GA.event({
        category: "buttonInteraction",
        action: `${buttonName} clicked`,
      });
    })
  }, []);

  return { inProdInitialize, inProdSendPageVisited, inProdSendButtonClicked };
}
