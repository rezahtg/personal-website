/**
 * @copyright 2024 - Reza Reynaldo Hutagaol
 * @license Apache-2.0
 */

/**
 * Components
 */
import Skillcard from './Skillcard';

const skillItem = [
  {
    imgSrc: '/images/backend/bitbucket.svg',
    label: 'Bitbucket',
    desc: 'Integration',
  },
  {
    imgSrc: '/images/backend/confluence.svg',
    label: 'Confluence',
    desc: 'Collaboration Tools',
  },
  {
    imgSrc: '/images/backend/docker.svg',
    label: 'Docker',
    desc: 'CI/CD',
  },
  {
    imgSrc: '/images/backend/git.svg',
    label: 'Git',
    desc: 'Integration',
  },
  {
    imgSrc: '/images/backend/spring-boot.svg',
    label: 'Spring Boot',
    desc: 'Framework',
  },
  {
    imgSrc: '/images/backend/intellij-idea.svg',
    label: 'Intellij Idea',
    desc: 'IDE',
  },
  {
    imgSrc: '/images/backend/java.svg',
    label: 'Java',
    desc: 'Programming Language',
  },
  {
    imgSrc: '/images/backend/jenkins.svg',
    label: 'Jenkins',
    desc: 'CI/CD',
  },
  {
    imgSrc: '/images/backend/jira.svg',
    label: 'Jira',
    desc: 'Collaboration Tools',
  },
  {
    imgSrc: '/images/backend/kubernetes.svg',
    label: 'Kubernetes',
    desc: 'CI/CD',
  },
  {
    imgSrc: '/images/backend/mysql.svg',
    label: 'My SQL',
    desc: 'Database',
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Framework',
  },
  {
    imgSrc: '/images/backend/openshift.svg',
    label: 'OpenShift',
    desc: 'Server',
  },
  {
    imgSrc: '/images/backend/postgres.svg',
    label: 'Postgres SQL',
    desc: 'Database',
  },
  {
    imgSrc: '/images/backend/python.svg',
    label: 'Python',
    desc: 'Programming Language',
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework',
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface',
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch reveal-up]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <Skillcard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
