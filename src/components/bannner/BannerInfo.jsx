import divider from '../../media/img/divider.png'
import {useTranslation} from "react-i18next";

export const BannerInfo = () => {
    const { t } = useTranslation();

    return (
        <div className="banner__info-container">
            <div className="banner__info-divider">
                <img src={divider} alt="" /> <span>{t('bannerInfoComponent.job')}</span>
            </div>
            <h1>
                {t('bannerInfoComponent.h1_greeting')} <br/>
                {t('name')}
            </h1>
            <div className="banner__info-description">
                <div className="banner__info-description-text">
                    {t('bannerInfoComponent.description')}
                </div>
                <div className="banner__info-description-buttons">
                    <a
                        href="https://t.me/artiebears13"
                        target='_blank'
                        className="btn btn-primary banner-btn"
                        rel="noopener noreferrer"
                    >{t('bannerInfoComponent.writeMeBtn')}</a>
                    <a className="btn btn-sec banner-btn" href="https://artiebears.com/Medvedev_cv.pdf">{t('bannerInfoComponent.viewPortfolioBtn')}     <i
                        className="fa-solid fa-arrow-up-right-from-square banner-fa"></i></a>
                </div>
            </div>
        </div>
    )
}