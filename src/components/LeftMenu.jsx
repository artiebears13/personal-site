export const LeftMenu = ({currentPage, setCurrentPage, pages, active, setMenuActive, onClose}) => {
    const handleClick = (page) => {
        setCurrentPage(page);
        setMenuActive(!active);
    }

    return (
        <div className={`left-menu slide-in-left ${active ? 'left-menu__active' : ''}`}>
            <div className="left-menu-container">
                <div className="left-menu-nav__logo">
                    Artmed
                </div>
                <div className="left-menu__close">
                    <button className="left-menu__close-btn" onClick={onClose}>&times;</button>
                </div>
                <div className="left-menu-content">
                    {pages.map((page, index) => (
                        <button
                            className={`left-menu-nav__item ${page === currentPage ? 'left-menu-nav__item-active' : ''}`}
                            key={index}
                            onClick={() => {handleClick(page)}}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}