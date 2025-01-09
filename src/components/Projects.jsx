import { useTranslation } from 'react-i18next';
import {CoolCard} from "./project_cards/CoolCard";
import semantic_image from '../media/img/semantic_classification.png'
import promobot from '../media/img/promobot.png'
import acselerator from '../media/img/acselerator.png'
import rzhd from '../media/img/rzhd.png'
import vk_edu from '../media/img/vk.png'
import yappy from '../media/img/yappy.png'
import min_prir from '../media/img/min_prir.png'
import sirius from '../media/img/sirius.png'


export const Projects = () => {
    const { t } = useTranslation();
    const projects = [
        {
            'name': t('projectsComponent.messenger.name'),
            'image': vk_edu,
            'description': t('projectsComponent.messenger.description'),
            'link': 'https://github.com/artiebears13/react-messenger'
        },{
            'name': t('projectsComponent.translator.name'),
            'image': vk_edu,
            'description': t('projectsComponent.translator.description'),
            'link': 'https://github.com/artiebears13/translator'
        },{
            'name': t('projectsComponent.animals.name'),
            'image': min_prir,
            'description': t('projectsComponent.animals.description'),
            'link': 'https://github.com/artiebears13/animals-hack'
        },{
            'name': t('projectsComponent.yappy.name'),
            'image': yappy,
            'description': t('projectsComponent.yappy.description'),
            'link': 'https://github.com/artiebears13/Duplicated-Video'
        },{
            'name': t('projectsComponent.semantic.name'),
            'image': acselerator,
            'description': t('projectsComponent.semantic.description'),
            'link': 'https://github.com/artiebears13/Semantic_Classification'
        },
        {
            'name': t('projectsComponent.citizens.name'),
            'image': promobot,
            'description': t('projectsComponent.citizens.description'),
            'link': 'https://github.com/artiebears13/Citizens_Appeals/tree/main'
        },
        {
            'name': t('projectsComponent.rzhd.name'),
            'image': rzhd,
            'description': t('projectsComponent.rzhd.description'),
            'link': 'https://github.com/artiebears13/Documents_Parser'
        },
        {
            'name': t('projectsComponent.nonStatEq.name'),
            'image': sirius,
            'description': t('projectsComponent.nonStatEq.description'),
            'link': 'https://github.com/artiebears13/diffusion_nonstat_MFD_explicit'
        },
        {
            'name': t('projectsComponent.navierStokes.name'),
            'image': sirius,
            'description': t('projectsComponent.navierStokes.description'),
            'link': 'https://github.com/artiebears13/Navier-Stokes'
        }
    ]
    return (
        <main>
            <h1>{t('projects')}</h1>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <CoolCard
                        name={project.name}
                        image={project.image}
                        description={project.description}
                        link={project.link}
                        key={index}
                    />
                ))}
            </div>
        </main>
    )
}