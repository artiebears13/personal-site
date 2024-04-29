export const CoolCard = ({image, name, description, link}) => {
    return (

        <div className="cool-card">
            <img
                src={image}
                alt=""/>
            <div className="cool-card__content">
                <h2>
                    {name}
                </h2>
                <p>
                    {description}
                </p>
                <a href={link} target="_blank" rel="noreferrer" className="button">
                    Repository
                    <span className="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                </a>
            </div>
        </div>

    )
}