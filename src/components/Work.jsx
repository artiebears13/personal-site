import image from '../media/img/banner_image.png'

export const Work = () => {
    return (
        <main>
        <h1>Work</h1>
            <div className="test-card">
                <img
                    src={image}
                    alt="work"
                    className="test-card__img"
                />
                <div className="test-card__description slide-in-top">
                    <p>some text text text</p>
                    <button className="btn btn-secondary">hello there</button>
                </div>
            </div>
        </main>
    )
}