import artmed_png from '../media/img/artmed.png';
import { useTranslation } from 'react-i18next';

export const AboutCard = () => {
    const { t } = useTranslation();

    return (
        <div className="about-banner">
            <div className="about-banner_avatar">
                <img src={artmed_png} alt={t('about.avatarAlt')} />
            </div>
            <div className="about-banner_content">
                <h3 className="about-banner_title">
                    {t('about.title')}
                </h3>
                {t('about.description')}
            </div>
            <div className="about-banner_buttons">
                <a
                    href="https://t.me/artiebears13"
                    target='_blank'
                    rel="noopener noreferrer"
                    className="btn btn-primary about-banner_buttons__btn"
                >
                    {t('about.contactMe')} <i className="fa-solid fa-arrow-right banner-fa"></i>
                </a>
                <a
                    href="https://artiebears.com/Medvedev_cv.pdf"
                    download
                    target='_blank'
                    className="btn btn-sec about-banner_buttons__btn"
                >
                    <i className="fa-solid fa-download banner-fa-left"></i> {t('about.downloadResume')}
                </a>
            </div>
        </div>
    );
}
