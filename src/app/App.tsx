import React, {Suspense} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {SideBar} from "widgets/SideBar";
import './styles/index.scss'

const App = () => {
    const {theme} = useTheme();
    return (
      <Suspense fallback={''}>
        <div className={classNames('app', {}, [theme])}>
          <Navbar/>
          <div className='content-page'>
            <SideBar/>
            <AppRouter/>
          </div>
        </div>
      </Suspense>

    );
};

export default App;