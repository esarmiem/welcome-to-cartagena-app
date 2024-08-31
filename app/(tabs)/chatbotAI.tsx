import React, { useRef, useEffect } from 'react';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet, View, Platform } from 'react-native';

export default function App() {
  const webViewRef = useRef<WebView>(null);

  const injectedJavaScript = `
    (function() {
      function preventDefault(e) {
        e.preventDefault();
      }
      document.body.style.userSelect = 'none';
      document.documentElement.style.webkitTouchCallout = 'none';
      document.documentElement.style.webkitUserSelect = 'none';
      
      var metaViewport = document.querySelector('meta[name=viewport]');
      if (!metaViewport) {
        metaViewport = document.createElement('meta');
        metaViewport.name = 'viewport';
        document.head.appendChild(metaViewport);
      }
      metaViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';

      document.addEventListener('touchmove', preventDefault, { passive: false });
      document.addEventListener('gesturestart', preventDefault, { passive: false });
      
      window.addEventListener('load', function() {
        document.body.style.zoom = '1.0';
        var allElements = document.getElementsByTagName('*');
        for (var i = 0; i < allElements.length; i++) {
          var el = allElements[i];
          el.style.webkitTextSizeAdjust = 'none';
        }
      });
    })();
    true;
  `;

  useEffect(() => {
    if (Platform.OS === 'ios') {
      const timer = setInterval(() => {
        webViewRef.current?.injectJavaScript(`
          window.scrollTo(0, 0);
          document.body.style.zoom = '1.0';
          true;
        `);
      }, 300);
      return () => clearInterval(timer);
    }
  }, []);

  const handleMessage = (event: WebViewMessageEvent) => {
    console.log('Message from WebView:', event.nativeEvent.data);
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ uri: 'https://demo-chatbot.integralsoft.app/chatbot/pages/f893c70e-7b69-4d76-bf0f-ecc6fe645717/chat' }}
        style={styles.webview}
        injectedJavaScript={injectedJavaScript}
        scalesPageToFit={false}
        scrollEnabled={false}
        bounces={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        contentMode="mobile"
        automaticallyAdjustContentInsets={false}
        mixedContentMode="always"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onMessage={handleMessage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  webview: {
    flex: 1,
  },
});
