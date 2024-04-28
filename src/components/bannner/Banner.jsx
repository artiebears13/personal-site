import {BannerImage} from "./BannerImage";
import {BannerInfo} from "./BannerInfo";
import {useRef} from "react";
import useAnimatedScroll from "../../animations/useAnimatedScroll";

export const Banner = () => {
    const bannerRef = useRef(null);
    useAnimatedScroll(bannerRef, 'slide-in-top');

    return (
        <div className="banner" ref={bannerRef}>
            <BannerImage />
            <BannerInfo />
        </div>
    )
}