import {ExperienceCard} from "./ExperienceCard";
import experience from './experience.json'
import {ExperienceTech} from "./ExperienceTech";

export const ExperienceBanner = () => {

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
                <div className="experience-card" key={index} >
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
            <div className="experience-card experience-card__tech" >
                <div className={`experience-card__name ${getClass('tools i use')} mb-5`}>
                    <div className={`horizontal-line ${getClass('tools i use')}-line`}></div>
                    {'tools i use'}</div>
                <ExperienceTech/>
            </div>

        </div>
    )
}