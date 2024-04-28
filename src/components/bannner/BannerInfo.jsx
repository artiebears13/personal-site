import divider from '../../media/img/divider.png'

export const BannerInfo = () => {
    return (
        <div className="banner__info-container">
            <div className="banner__info-divider">
                <img src={divider} alt="" /> <span>frontend developer</span>
            </div>
            <h1>
                Hello, I'm <br/>
                Artem
                Medvedev
            </h1>
            <div className="banner__info-description">
                <div className="banner__info-description-text">
                    Hello, I'm a passionate Frontend developer and part time freelancer with a keen eye for details.
                </div>
                <div className="banner__info-description-buttons">
                    <a
                        href="https://t.me/artiebears13"
                        target='_blank'
                        className="btn btn-primary banner-btn"
                        rel="noopener noreferrer"
                    >Write me</a>
                    <a className="btn btn-sec banner-btn" href="#">View Portfolio     <i
                        className="fa-solid fa-arrow-up-right-from-square banner-fa"></i></a>
                </div>
            </div>
        </div>
    )
}