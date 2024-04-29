import WorkCard from "./work_card/WorkCard";
import skyrus from '../media/img/skyrus.svg'

export const Work = () => {
    const work = [
        {
            companyLogo: skyrus,
            yearsWorked: '2023 - present',
            techStack: 'PyQt, pandas, matplotlib',
            description: 'Russian startup in the field of oil and gas engineering. The company is developing an application for tracking data during casing running, as well as predicting it using artificial intelligence',
            companySite: "https://skyrus.pro/"
        }
    ]

    return (
        <main>
        <h1>Work</h1>
            {work.map(({
                           companyLogo,
                           yearsWorked,
                           techStack,
                           description,
                            companySite
                       }, index) => (
            <WorkCard
              companyLogo={companyLogo}
              yearsWorked={yearsWorked}
              techStack={techStack}
              description={description}
              companySite={companySite}
            />

            ))}
        </main>
    )
}