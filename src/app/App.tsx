import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <div>
                <button onClick={toggleTheme}>Toggle theme</button>
            </div>
            <Link to={'/'}>Головна</Link>
            <Link to={'/about'}>Про сайт</Link>
            <AppRouter />
        </div>
    );
};

export default App;
