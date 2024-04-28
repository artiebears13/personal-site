import {ExperienceBlock} from "./ExperienceBlock";
import {useRef} from "react";
import useAnimatedScroll from "../../animations/useAnimatedScroll";

export const ExperienceCard = ({which, history, colorClass}) => {
    console.log('history', history)
    const experienceCardRef = useRef(null);
    useAnimatedScroll(experienceCardRef);


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