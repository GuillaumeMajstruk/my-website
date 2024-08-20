import { faCode, faCog, faFileCode, faCloud } from '@fortawesome/free-solid-svg-icons';

const PROFICIENT = 'proficient';
const FAMILIAR = 'familiar';

const frontend = {
  title: 'frontend',
  icon: faFileCode,
  skills: [
    {
      values: ['Html5'],
      state: PROFICIENT
    },
    {
      values: ['CSS', 'Sass'],
      state: PROFICIENT
    },
    {
      values: ['Javascript ES6', 'Typescript'],
      state: PROFICIENT
    },
    {
      values: ['Angular 2+'],
      state: PROFICIENT
    },
    {
      values: ['React Js'],
      state: PROFICIENT
    }
  ]
};

const backend = {
  title: 'backend',
  icon: faCode,
  skills: [
    {
      values: ['Node.Js'],
      state: PROFICIENT
    },
    {
      values: ['Express'],
      state: PROFICIENT
    },
    {
      values: ['Java', 'Springboot'],
      state: FAMILIAR
    },
    {
      values: ['Python', 'Django'],
      state: FAMILIAR
    }
  ]
};

const toolsAndDatabases = {
  title: "toolsAndDatabases",
  icon: faCog,
  skills: [
    {
      values: ['Jira'],
      state: PROFICIENT
    },
    {
      values: ['Github', 'Gitlab'],
      state: PROFICIENT
    },
    {
      values: ['MongoDB'],
      state: FAMILIAR
    },
    {
      values: ['Postgresql'],
      state: FAMILIAR
    },
    {
      values: ['MariaDB'],
      state: FAMILIAR
    },
    {
      values: ['Neo4j'],
      state: FAMILIAR
    },
  ]
}

const clouds = {
  title: 'cloud',
  icon: faCloud,
  skills: [
    {
      values: ['GCP', 'Firestore', 'Pubsub', 'Auhtentication'],
      state: PROFICIENT
    },
    {
      values: ['AWS', 'EC2', 'S3', 'Bucket', 'DynamoDB', 'Lambda', 'RDS'],
      state: PROFICIENT
    }
  ]
}

export const SKILLS = {
  frontend,
  backend,
  toolsAndDatabases,
  clouds
};
