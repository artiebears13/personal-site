import bannerImage from '../../media/img/banner_image.png'

export const BannerImage = () => {
    return (
        <div className="banner__image-container">
            <img
                className="banner__image"
                src={bannerImage}
                alt="me"
            />
        </div>
    )
}