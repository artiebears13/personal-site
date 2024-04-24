export const Footer = () => {
    return (
        <footer>
            <div className="footer-container__big">
                <div className="h3 footer-container__title">
                    Have a project idea in mind.<br/>
                    Get in touch and let's chat!
                </div>
                <div className="footer-container__contacts">
                    <div className="footer-container__contacts__item">
                        <i className="fa-brands fa-telegram footer-container__contacts__item__logo"></i>
                        <p>Telegram</p>
                        <a href='https://t.me/artiebears13' target='_blank' rel="noreferrer noopener">@artiebears13</a>
                    </div>
                    <div className="footer-container__contacts__item ">
                        <i className="fa-brands fa-at footer-container__contacts__item__logo"></i>
                        <p> Email </p>
                        <a href='mailto:artiebears@mail.ru'>artiebears@mail.ru</a>
                    </div>
                    <div className="footer-container__contacts__item ">
                        <i className="fa-brands fa-github footer-container__contacts__item__logo"></i>
                        <p> GitHub </p>
                        <a href='https://github.com/artiebears13/' target='_blank' rel="noreferrer noopener">artiebears13</a>
                    </div>
                </div>
            </div>
            <div className="footer-container__small">
                © {(new Date().getFullYear())} Artem Medvedev
            </div>
        </footer>
    )
}