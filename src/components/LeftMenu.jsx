import {useTranslation} from "react-i18next";

export const LeftMenu = ({
                             currentPage,
                             setCurrentPage,
                             pages,
                             active,
                             setMenuActive,
                             onClose,
                             lang,
                             setLang,
                             changeLanguage,
                             toggleLanguage
                         }) => {
    const { t, i18n } = useTranslation();
    const handleClick = (page) => {
        setCurrentPage(page);
        setMenuActive(!active);
    }

    return (
        <div className={`left-menu slide-in-left ${active ? 'left-menu__active' : ''}`}>
            <div className="left-menu-container">
                <div className="left-menu-nav__logo">
                    {t('title')}
                </div>
                <div className="left-menu__close">
                    <button className="left-menu__close-btn" onClick={onClose}>&times;</button>
                </div>
                <div className="left-menu-content">
                    {pages.map((page, index) => (
                        <button
                            className={`left-menu-nav__item ${page === currentPage ? 'left-menu-nav__item-active' : ''}`}
                            key={index}
                            onClick={() => {
                                handleClick(page)
                            }}
                        >
                            {t(page)}
                        </button>
                    ))}
                </div>
                <div className="left-menu__bottom-container">
                    <div className="lang-swither__container left-menu__lang">
                        <button className="nav__item lang" onClick={() => {
                            changeLanguage('ru')
                        }}>ru
                        </button>
                        <label className="switch">
                            <input type="checkbox"
                                   role="switch"
                                   id="langSwitch"
                                   onChange={toggleLanguage}
                                   checked={lang === 'en'}
                            />
                            <span className="slider round"></span>
                        </label>
                        <button className="nav__item lang" onClick={() => {
                            changeLanguage('en')
                        }}>en
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}