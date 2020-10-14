import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {

  const url = 'https://imorapidtransfer.com/login';

  return (
    <WebView
        source={{
          uri: url,
        }}
        startInLoadingState
        scalesPageToFit
        javaScriptEnabled
        style={{ flex: 1,marginTop:'8%' }}
      />
  );
}

