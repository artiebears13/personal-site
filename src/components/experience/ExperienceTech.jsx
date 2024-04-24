import react from './tech/react.png'
import git from './tech/git.png'
import python from './tech/python.png'
import photoshop from './tech/photoshop.png'
import linux from './tech/linux.png'
import figma from './tech/figma.png'
import notion from './tech/notion.png'
import jira from './tech/jira.png'

export const ExperienceTech = () => {
    const technologies = [
        'react', 'git', 'python',
        'photoshop', 'linux', 'figma',
        'notion', 'jira'
    ]
    const technologies_icons = {
        'react': react,
        'git': git,
        'python': python,
        'linux': linux,
        'notion': notion,
        'jira': jira,
        'photoshop': photoshop,
        'figma': figma,
    }

    return (
        <div className="experience-tech mb-5">
            {technologies.map((tech, i) => (
                <div key={i} className="experience-tech__skill">
                    <img src={technologies_icons[tech]} alt={tech} width={40} height={40}/>
                    <p className="experience-tech__skill__name">{tech}</p>
                </div>
            ))}
        </div>
    )
}