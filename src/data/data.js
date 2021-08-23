const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
];

export const experiences = [
    {
        id: 0,
        title: "THE FORGE",
        function: "Fullstack / Blockchain engineer",
        dates: {
            from: "july 2021",
            to: `${months[new Date().getMonth()] + " " + new Date().getFullYear()} (today)`
        },
        desc: "The Forge - A bridge from blockchain technology to venture investment",
        tasks: [
            "Developed front-end",
            "Implemented smart contracts interaction"
        ],
        techs: [
            "Webdesign",
            "React",
            "Solidty",
            "Bolckchain",
            "SoftwareEngineering"
        ],
        class: "xp--content-pro"
    },
    {
        id: 1,
        title: "Weakspot",
        function: "Fullstack engineer",
        dates: {
            from: "november 2019",
            to: "march 2021"
        },
        desc: "Control your network exposure",
        tasks: [
            "Developed a visualization tool that allows user to browse easily and instinctively his network using WebGL and Neo4j the graph database",
            "Redesign of the web application",
            "Installation of a replication connector between MongoDB and Neo4j databases",
            "Developed the API"
        ],
        techs: [
            "Angular10",
            "NodeJs",
            "MongoDB",
            "Neo4j",
            "Python",
            "Webdesign"
        ],
        class: "xp--content-pro"
    },
    {
        id: 2,
        title: "Datascientest",
        function: "Fullstack intern",
        dates: {
            from: "may 2019",
            to: "november 2019"
        },
        desc: "Train yourself to the datascience professions",
        tasks: [
            "Developed the landing website of the firm using Angular 7 and AWS services according to the graphical chart",
            "Developed the training catalog",
            "Developed a tool that allows team-members to easilly write blogs articles"
        ],
        techs: [
            "Angular7",
            "AWS DynamoDB",
            "AWS Lambda functions",
            "Python"
        ],
        class: "xp--content-pro"
    },
    {
        id: 3,
        title: "Air France",
        function: "Aircraft engines electro-mechanics",
        dates: {
            from: "september 2012",
            to: "may 2019"
        },
        desc: "Maintenance and workship on aircraft engines",
        techs: [],
        class: "xp--content-pro"
    },
    {
        id: 4,
        title: "Digital Architect",
        function: "42 school",
        dates: {
            from: "2017",
            to: "2019"
        },
        desc: "Digital / Software Architect",
        class: "xp--content-formation"
    },
    {
        id: 5,
        title: "Advanced (NVQ Level 3) in aeronautics matinenance",
        dates: {
            from: "2012",
            to: "2014"
        },
        desc: "Graduated very good",
        class: "xp--content-formation"
    },
    {
        id: 6,
        title: "Scientific A Grade",
        function: "Cassini Highschool, Clermont, Oise, France",
        dates: {
            from: "2009",
            to: "2012"
        },
        desc: "Graduated good",
        class: "xp--content-formation"
    }
];