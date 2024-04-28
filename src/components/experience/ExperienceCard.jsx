import {ExperienceBlock} from "./ExperienceBlock";

export const ExperienceCard = ({which, history, colorClass}) => {
    return (
        <>
            {history.map((item, index) => (
                <ExperienceBlock
                    which={which}
                    years={item.years}
                    place={item.place}
                    name={item.name}
                    description={item.description}
                    key={index}
                    colorClass={colorClass}
                />
            ))}

        </>
    )
}