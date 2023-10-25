import {classNames} from "shared/lib/classNames/classNames";
import cls from './NotFoundPage.module.scss'
import {useTranslation} from "react-i18next";

interface NotFoundPageProps{
  className?: string;
}

const NotFoundPage = ({className}: NotFoundPageProps) => {
  const [t] = useTranslation('translation')

  return (
    <div className={classNames(cls.NotFoundPage , {}, [className])}>
      {t('Страничка')}
    </div>
  );
};

export default NotFoundPage;