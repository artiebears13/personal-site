import artmed_png from '../media/img/artmed.png'

export const AboutCard = () => {


    return (
        <div className="about-banner">
            <div className="about-banner_avatar">
                <img src={artmed_png} alt="avatar"/>
            </div>
            <div className="about-banner_content">
                <h3 className="about-banner_title">
                    frontend developer
                </h3>
                Graduate of Sirius University in Mathematical Modeling for Petroleum Engineering. Proficient in frontend development. Won 3 hackathons, specializing in frontend solutions.
            </div>
            <div className="about-banner_buttons">
                <a
                    href="https://t.me/artiebears13"
                    target='_blank'
                    rel="noopener noreferrer"
                    className="btn btn-primary about-banner_buttons__btn"
                >
                    Write me <i className="fa-solid fa-arrow-right banner-fa" ></i>
                </a>
                <a
                    href="#"
                    target='_blank'
                    className="btn btn-sec about-banner_buttons__btn"
                >
                    <i className="fa-solid fa-download banner-fa-left"></i> Download Resume
                </a>

            </div>
        </div>
    )
}