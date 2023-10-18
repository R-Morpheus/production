import React from 'react';
import {Link} from 'react-router-dom';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import './styles/index.scss'
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/navbar";



const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;