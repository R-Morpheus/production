import React from 'react';
import {useTranslation} from "react-i18next";

const AboutPage = () => {
  const [t] = useTranslation()
  return (
    <div>
      {t('О странице')}
    </div>
  );
};

export default AboutPage;