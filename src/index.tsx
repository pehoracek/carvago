import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import App from './App';
import WebVitals from './WebVitals';
import {store} from './app/store';
import './i18n/i18n';
import GlobalStyle from './styles/GlobalStyle';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <App />
        <GlobalStyle />
        <WebVitals showStatusInConsoleLog />
      </HelmetProvider>
    </Provider>
  </StrictMode>,
  MOUNT_NODE
);

serviceWorkerRegistration.register();
