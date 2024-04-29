import {CoolCard} from "./project_cards/CoolCard";
import semantic_image from '../media/img/semantic_classification.png'
import promobot from '../media/img/promobot.png'
import acselerator from '../media/img/acselerator.png'
import rzhd from '../media/img/rzhd.png'
import sirius from '../media/img/sirius.png'


export const Projects = () => {
    const projects = [
        {
            'name': 'Semantic classification of documents',
            'image': acselerator,
            'description': 'Service that allows you to determine the class of a document (application, order, agreement, power of attorney, etc.) based on downloaded documents of various formats (pdf, xlsx, rtf, txt, etc.). Such a solution will allow companies to reduce the burden on personnel involved in manual document validation by speeding up the first stage of filtering.',
            'link': 'https://github.com/artiebears13/Semantic_Classification'
        },
        {
            'name': 'Processing citizens\' appeals',
            'image': promobot,
            'description': 'Solution for the 2023 International Hackathon (2nd place). MVP in the form of a software module using artificial intelligence technologies to automatically classify incoming messages from citizens and highlight named entities.',
            'link': 'https://github.com/artiebears13/Citizens_Appeals/tree/main'
        },
        {
            'name': 'Acceptance of accounting documents',
            'image': rzhd,
            'description': 'Automated analysis of primary accounting documents in the register aimed at verification. In the register of acceptance and transfer of primary documents, it is proposed to implement a process of automated verification of the document for correctness and completeness of execution before receiving it for work by an accountant.',
            'link': 'https://github.com/artiebears13/Documents_Parser'
        },
        {
            'name': 'Non-stationary Diffusion Equation',
            'image': sirius,
            'description': 'University project with the solution of the non-stationary diffusion equation using supercomputers',
            'link': 'https://github.com/artiebears13/diffusion_nonstat_MFD_explicit'
        },
        {
            'name': 'Navier-Stokes Equation',
            'image': sirius,
            'description': 'Numerical solution for Navier Stokes Equation using SIMPLE (Semi-Implicit Method for Pressure Linked Equations, Patankar & Spalding, 1972) method. : Explicit Finite Volume Method',
            'link': 'https://github.com/artiebears13/Navier-Stokes'
        }
    ]
    return (
        <main>
            <h1>Projects</h1>
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