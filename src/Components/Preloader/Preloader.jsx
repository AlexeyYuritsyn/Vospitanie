import './_preloader.scss'
import PreloaderImg from './icons/ellipsis.gif';
import React from 'react';


const Preloader = () => {

    return (
        <div className="loading">
            <img src={PreloaderImg} alt="Загрузка..."/>
        </div>
    );
}

export default Preloader;