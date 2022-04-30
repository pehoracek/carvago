import {Helmet} from 'react-helmet-async';
import {useTranslation} from 'react-i18next';
import React from 'react';
import moment from 'moment';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

const App = () => {
  const {i18n, t} = useTranslation();

  moment.locale('en');

  return (
    <>
      <Helmet
        titleTemplate={`%s - ${t('app.title')}`}
        defaultTitle={t('app.title')}
        htmlAttributes={{lang: i18n.language}}
      >
        <meta name="description" content={t('app.description')} />
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
