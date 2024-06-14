import WorkCard from "./work_card/WorkCard";
import skyrus from '../media/img/skyrus.svg'
import {useTranslation} from "react-i18next";

export const Work = () => {
    const { t, i18n } = useTranslation();
    const work = [
        {
            companyLogo: skyrus,
            yearsWorked: '2023 - present',
            techStack: 'PyQt, pandas, matplotlib',
            description: t('workComponent.skyrus.description'),
            companySite: "https://skyrus.pro/"
        }
    ]

    return (
        <main>
        <h1>{t('work')}</h1>
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