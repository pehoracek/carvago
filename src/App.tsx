import {Helmet} from 'react-helmet-async';
import {useTranslation} from 'react-i18next';
import Layout from './components/layout/Layout';
import React from 'react';
import moment from 'moment';

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
      <Layout />
    </>
  );
};

export default App;
