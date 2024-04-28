import artmed_png from '../media/img/artmed.png'
import {useRef} from "react";
import useAnimatedScroll from "../animations/useAnimatedScroll";

export const AboutCard = () => {
    const aboutCardRef = useRef(null);
    useAnimatedScroll(aboutCardRef, 'scale-in-center');


    return (
        <div className="about-banner" ref={aboutCardRef}>
            <div className="about-banner_avatar">
                <img src={artmed_png} alt="avatar"/>
            </div>
            <div className="about-banner_content">
                <h3 className="about-banner_title">
                    frontend developer
                </h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque beatae debitis dolore, et fugiat non obcaecati rerum vel veniam.
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