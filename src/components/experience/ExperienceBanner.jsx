import {ExperienceCard} from "./ExperienceCard";
import experience from './experience.json'
import {ExperienceTech} from "./ExperienceTech";
import {useRef} from "react";
import useAnimatedScroll from "../../animations/useAnimatedScroll";

export const ExperienceBanner = () => {
    const experienceCardEdRef = useRef(null);
    const experienceCardWorkRef = useRef(null);
    const experienceCardTechRef = useRef(null);
    useAnimatedScroll(experienceCardEdRef, 'slide-in-left');
    useAnimatedScroll(experienceCardWorkRef, 'scale-in-center');
    useAnimatedScroll(experienceCardTechRef, 'slide-in-right');
    console.log(experience)

    const refs = {
        'experience__education': experienceCardEdRef,
        'experience__tools': experienceCardTechRef,
        'experience__work': experienceCardWorkRef,
    }

    const getClass = (which) => {
        switch (which) {
            case 'education':
                return 'experience__education';
            case 'work history':
                return 'experience__work';
            case 'tools i use':
                return 'experience__tools';
            default:
                return ''
        }
    }

    return (
        <div className="experience-banner">
            {Object.keys(experience).map((key, index) => (
                <div className="experience-card" key={index} ref={refs[getClass(key)]}>
                    <div className={`experience-card__name ${getClass(key)} mb-5`}>
                        <div className={`horizontal-line ${getClass(key)}-line`}></div>
                        {key}</div>
                    <ExperienceCard
                        key={key}
                        which={key}
                        history={experience[key]}
                        colorClass={getClass(key)}
                    />

                </div>
            ))}
            <div className="experience-card experience-card__tech" ref={refs[getClass('tools i use')]}>
                <div className={`experience-card__name ${getClass('tools i use')} mb-5`}>
                    <div className={`horizontal-line ${getClass('tools i use')}-line`}></div>
                    {'tools i use'}</div>
                <ExperienceTech/>
            </div>

        </div>
    )
}