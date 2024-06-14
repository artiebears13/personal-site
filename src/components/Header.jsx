import { useTranslation } from 'react-i18next';
import menuIcon from '../media/icons/menu.png';
import {useState} from "react";

export const Header = ({currentPage, setCurrentPage, pages, toggleMenu, lang, setLang, changeLanguage, toggleLanguage}) => {
    const { t, i18n } = useTranslation();


    return (
        <div className="Header">
            <div className="nav__logo">
                {t('title')}
            </div>
            <div className="nav__container">
                {pages.map((page, index) => (
                    <button
                        className={`nav__item ${page === currentPage ? 'nav__item-active' : ''}`}
                        key={index}
                        onClick={() => setCurrentPage(page)}
                    >{t(page)}</button>  // Используй `t` для перевода названий страниц
                ))}
                <div className="lang-swither__container">
                <button className="nav__item lang" onClick={() => {changeLanguage('ru')}}>ru</button>
                <label className="switch">
                    <input type="checkbox"
                           role="switch"
                           id="langSwitch"
                           onChange={toggleLanguage}
                           checked={lang === 'en'}
                    />
                    <span className="slider round"></span>
                </label>
                <button className="nav__item lang" onClick={() => {changeLanguage('en')}}>en</button>
                </div>
            </div>
            <button className="btn nav__button-expand" onClick={toggleMenu}>
            <img src={menuIcon} alt="menu"/>
            </button>
        </div>
    );
}
