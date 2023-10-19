import {classNames} from "shared/lib/classNames/classNames";
import cls from './SideBar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SideBarProps{
  className?: string;
}

const SideBar = ({className}: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prevState => !prevState)
  }
  return (
    <div className={classNames(cls.SideBar , {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}> toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
      </div>
    </div>
  );
};

export default SideBar;