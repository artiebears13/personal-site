
export const ExperienceBlock = ({years, place, name, description, colorClass}) => {
    return (
        <div className="experience-block mb-5">
            <div className={`experience-block__title ${colorClass}`}>
                {years}<span className="experience-block__title-dot">{'\u2B24'}</span> {place}
            </div>
            <div className="experience-block__name">
                {name}
            </div>
            <div className="experience-block__description">
                {description}
            </div>
        </div>
    )
}