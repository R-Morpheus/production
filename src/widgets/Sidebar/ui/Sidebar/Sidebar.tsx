import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.SIZE_L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <div className={cls.item}>
          <MainIcon className={cls.icon} />
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.link}>
            {t('Главная')}
          </AppLink>
        </div>
        <div className={cls.items}>
          <div className={cls.item}>
            <AboutIcon className={cls.icon} />
            <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.link}>
              {t('О сайте')}
            </AppLink>
          </div>
        </div>
        <div className={cls.switchers}>
          <ThemeSwitcher />
          <LangSwitcher short={collapsed} className={cls.lang} />
        </div>
      </div>
    </div>
  );
};
