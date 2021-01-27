import './_error404.scss';
import errorHome from './icons/error-home.svg'
// import errorSearch from './icons/error-search.svg';
import React from "react";
import {NavLink, useLocation} from "react-router-dom";


export default function Error404() {
    let location = useLocation();

    return (
        <div className="error-page">
            <div className="error-page-title">
                404
            </div>
            <div className="error-page-desc">
                Страница с адресом <span className="error-url"><code>{location.pathname}</code></span> не найдена.
                <div className="error-page-desc-small">
                    Проверьте адрес, или воспользуйтесь поиском сайта, чтобы найти необходимые материалы
                </div>
            </div>
            <div className="error-page-links-block">
                {/*<div className="links-section">*/}
                {/*    <img src={errorSearch} alt="поиск"/>*/}
                {/*    <NavLink to="/search-page" className="links-text">Поиск</NavLink>*/}
                {/*</div>*/}
                <div className="links-section">
                    <NavLink to="/" className="links-text">
                        <span className="links-text-thin">Вернуться</span> на главную
                    </NavLink>
                    <img src={errorHome} alt="на главную"/>
                </div>
            </div>
        </div>
    );
}