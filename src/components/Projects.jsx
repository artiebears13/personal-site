import { useTranslation } from 'react-i18next';
import {CoolCard} from "./project_cards/CoolCard";
import semantic_image from '../media/img/semantic_classification.png'
import promobot from '../media/img/promobot.png'
import acselerator from '../media/img/acselerator.png'
import rzhd from '../media/img/rzhd.png'
import sirius from '../media/img/sirius.png'


export const Projects = () => {
    const { t } = useTranslation();
    const projects = [
        {
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
                {projects.map(project => (
                    <CoolCard
                        name={project.name}
                        image={project.image}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </main>
    )
}