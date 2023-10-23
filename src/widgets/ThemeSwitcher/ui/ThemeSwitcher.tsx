import {classNames} from "shared/lib/classNames/classNames";
import React from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkIcon from 'shared/assests/icons/theme-dark.svg'
import LightIcon from 'shared/assests/icons/theme-light.svg'
import Button, {ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps{
  className?: string;
}


const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <Button theme={ThemeButton.CLEAR} className={classNames('')} onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
    </Button>

  );
};

export default ThemeSwitcher;