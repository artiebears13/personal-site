import menuIcon from '../media/icons/menu.png'


export const Header = ({currentPage, setCurrentPage, pages, toggleMenu}) => {

    return (
        <div className="Header">
            <div className="nav__logo">
                Artmed
            </div>
            <div className="nav__container">
                {pages.map((page, index) => (
                    <button className={`nav__item ${page === currentPage ? 'nav__item-active' : ''}`} key={index}>{page}</button>
                ))}
                <div className="nav__button-container">
                <button className="btn nav__button">artiebears@mail.ru</button>
                </div>
            </div>
                <button className="btn nav__button-expand" onClick={toggleMenu}><img src={menuIcon} alt="" /> </button>

        </div>
    )
}