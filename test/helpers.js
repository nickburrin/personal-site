const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Nick Burrin',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Nick Burrin',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Nick Burrin',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Nick Burrin',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Nick Burrin',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
