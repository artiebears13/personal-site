import {ExperienceBlock} from "./ExperienceBlock";
import {ExperienceTech} from "./ExperienceTech";

export const ExperienceCard = ({which, history, colorClass}) => {
    console.log('history', history)


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