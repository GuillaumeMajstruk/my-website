import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
    const experiences = [
        {
            id: 0,
            title: "CTO @SCUTI",
            dates: {
                from: "feb 2021",
                to: "now"
            },
            desc: "Imaginating, creating a crowd-equity platform in crypto currency",
            techs: [
                "React",
                "Solidty",
                "Bolckchain"
            ]
        },
        {
            id: 1,
            title: "Fullstack engineer @Weakspot",
            dates: {
                from: "nov 2019",
                to: "mar 2021"
            },
            desc: "In charge of the web app development (front / back)",
            techs: [
                "Angular10",
                "NodeJs",
                "MongoDB",
                "Neo4j",
                "Python"
            ]
        },
        {
            id: 2,
            title: "Fullstack engineer @DataScientest",
            dates: {
                from: "may 2019",
                to: "nov 2019"
            },
            desc: "En charge du développement du site vitrine j’ai également été amené à développer des features pour la plateforme “Admin”.",
            techs: [
                "Angular7",
                "AWS",
                "Python"
            ]
        },
        {
            id: 3,
            title: "Electro-mechanics @AirFrance",
            dates: {
                from: "sep 2012",
                to: "may 2019"
            },
            desc: "Maintenance and workship on aircraft engines",
            techs: []
        },
        {
            id: 4,
            title: "42 school",
            dates: {
                from: "2017",
                to: "2019"
            },
            desc: "42 school (Paris campus)"
        },
        {
            id: 5,
            title: "Bac pro aero",
            dates: {
                from: "2012",
                to: "2014"
            },
            desc: "mention très bien"
        },
        {
            id: 6,
            title: "Bac S",
            dates: {
                from: "2009",
                to: "2012"
            },
            desc: "Mention Assez bien"
        }
    ]

    return (
        <div className="column container fullscreen center-h center-v">
            <div className="background-header">xp</div>
            <div className="center-h h-100 ml-auto mr-auto" style={{width: "90%"}}>
                <div className="column h-100 center-v">
                    <h2 className="font-rhyme text-light mt-sm">WHAT ABOUT MY <strong>CAREER?</strong>&nbsp;<Icon icon={faUserTie}></Icon></h2>
                    <span className="font-normal">Here is a timeline of it</span>
                    <h3 className="font-space text-normal mt-xs">You have a project? Talk with me! <button className="button text-bold">contact me</button></h3>
                    <div className="xp--container mt-md mb-sm">
                        <div className="xp--timeline"></div>
                        {experiences.map(experience => {
                            return (
                                <div className="xp--content-container" key={experience.id}>
                                    <div className="xp--content">
                                        <div className="xp--content-header">
                                            <div>{experience.title}</div>
                                            <div className="xp--content-dates">{experience.dates.from} - {experience.dates.to}</div>
                                        </div>
                                        <div className="xp--content-desc">{experience.desc}</div>
                                        <div className="xp--content-technos">
                                            {experience.techs && experience.techs.map(tech => <div key={tech}>{tech}</div>)}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Experience;