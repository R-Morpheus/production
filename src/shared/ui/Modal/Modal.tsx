import { classNames } from "shared/lib/classNames/classNames";
import { ReactNode } from "react";
import cls from './Modal.module.scss';

interface ModalProps{
className?: string;
children?: ReactNode;
}

const Modal = ({ className, children }: ModalProps) => (
  <div className={classNames(cls.Modal, {}, [className])}>
    <div className={cls.overlay}>
      <div className={cls.content}>
        {children}
      </div>
    </div>
  </div>
);

export default Modal;
