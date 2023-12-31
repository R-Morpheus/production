import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from "shared/ui/Modal/Modal";
import React, { useCallback, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const ontoggleModal = useCallback(() => {
    setIsAuthModal((prevState) => (!prevState));
  }, []);
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={ontoggleModal}>
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        {/* eslint-disable-next-line */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolore ipsum minima obcaecati quod repellendus sequi. Accusamus eaque laborum laudantium!
      </Modal>
    </div>
  );
};
