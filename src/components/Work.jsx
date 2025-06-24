/**
 * @copyright 2024 - Reza Reynaldo Hutagaol
 * @license Apache-2.0
 */

/**
 * Component
 */

import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/porto1.png',
    title: 'Top Up Games App',
    tags: ['UI', 'Website', 'Development'],
    projectLink: 'https://landing-game.vercel.app/',
  },
  {
    imgSrc: '/images/porto3.png',
    title: 'Website Dashboard PLN',
    tags: ['UI', 'Website', 'Development'],
    projectLink: 'https://demo-ui-pln-dashboard.vercel.app/',
  },
  {
    imgSrc: '/images/porto2.png',
    title: 'Website Dashboard Kemenkes',
    tags: ['UI', 'Website', 'Development'],
    projectLink: 'https://kemenkes.vercel.app/',
  },
  {
    imgSrc: '/images/porto5.png',
    title: 'Websit Garansi Bank Dashboard',
    tags: ['UI', 'Website', 'Development'],
    projectLink: 'https://garansi-bank.vercel.app/',
  },
  {
    imgSrc: '/images/porto4.png',
    title: 'Website Dashboard BPDLH',
    tags: ['UI', 'Website', 'Development'],
    projectLink: 'https://bpdlh.vercel.app/',
  },
  // {
  //   imgSrc: '/images/project-6.jpg',
  //   title: 'vCard Personal portfolio',
  //   tags: ['Web-design', 'Development'],
  //   projectLink: '#',
  // },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
