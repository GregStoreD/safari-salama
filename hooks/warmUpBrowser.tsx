import React from "react";
import * as Font from 'expo-font';

import * as WebBrowser from "expo-web-browser";
 
export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
}; 