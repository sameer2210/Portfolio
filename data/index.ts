export const navItems = [
  { name: 'About', link: '#about' },
  {
    name: 'Resume',
    link: 'https://drive.google.com/file/d/1Beb6j5fyts7JHcpdDBB-7yRjkFdKhcgY/view?usp=sharing',
  },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'My Career Snapshot',
    description: 'From concept to production — skills, experience, and impact.',
    link: 'https://drive.google.com/file/d/1Beb6j5fyts7JHcpdDBB-7yRjkFdKhcgY/view?usp=sharing',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-end',
    img: '',
    spareImg: '',
  },
  {
    id: 2,
    title: 'Scalable Production Systems',
    description: 'Designing and developing scalable, secure, and user-centric applications.',
    link: 'https://github.com/sameer2210',
    className: 'lg:col-span-3 md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
];

export const testimonials = [
  {
    quote:
      'Sameer is highly reliable and focused on delivering quality work. He understands requirements clearly, communicates well, and consistently meets deadlines. His technical skills combined with a positive attitude make him a valuable asset to any development team.',
    name: 'Varun Singh - varun@opticosolutions.com',
    title: 'Founder, Optico Solutions Pvt. Ltd.',
  },
  {
    quote:
      'Working with Sameer was smooth and efficient. He takes ownership of tasks, learns quickly, and always looks for the best possible solution. His problem-solving mindset and commitment to clean code really stand out.',
    name: 'Ajay Dixit - ajay.dixit@opticosolutions.com',
    title: 'Team Lead, Optico Solutions Pvt. Ltd.',
  },
  {
    quote:
      'Sameer is sincere, hardworking, and dependable. He approaches every task with dedication and a strong desire to improve. His ability to collaborate with the team and adapt to challenges makes him a trustworthy professional.',
    name: 'Anshu Panday',
    title: 'Team Lead, Sheryians Pvt. Ltd.',
  },
  {
    quote:
      'Sameer demonstrates strong coding expertise and sharp problem-solving abilities. He approaches technical challenges with a logical, analytical mindset and consistently delivers efficient, scalable solutions. His capability to debug complex issues and write clean, maintainable code makes him a reliable and technically proficient professional.',
    name: 'Ankesh Barahadiya - Ankeshbarahdiya05112002@gmail.com',
    title: 'Co-Founder, Aimvirtue Pvt. Ltd.',
  },
];

// export const companies = [
//   {
//     id: 1,
//     name: 'cloudinary',
//     img: '/cloud.svg',
//     nameImg: '/cloudName.svg',
//   },

//   {
//     id: 5,
//     name: 'docker.',
//     img: '/dock.svg',
//     nameImg: '/dockerName.svg',
//   },
// ];

export const projects = [
  {
    id: 1,
    title: 'CodeX',
    des: 'A Real-time multi-user collaborative IDE with live code editing and AI code review using LLMs, chat, audio calls, video calls using Socket.IO, WebSockets, and WebRTC. Designed a team dashboard and JWT-based authentication (RBAC) enabling shared workspace visibility for collaborative development.',
    img: '/project/codex.png',
    iconLists: [
      '/icons/js.svg',
      '/icons/react.svg',
      '/icons/vite.svg',
      '/icons/redux.svg',
      '/icons/fm.svg',
      '/icons/tail.svg',
      '/icons/node.svg',
      '/icons/express.svg',
      '/icons/mongo.svg',
      '/icons/docker.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://codex-psi-murex.vercel.app/',
  },
  {
    id: 2,
    title: 'FileHive',
    des: ' Built AES-256 encrypted cloud storage with nested folder system and Redis caching achieving ¡100ms response time and 99.9% uptime with CI/CD deployments.',
    img: '/project/filehive.png',
    iconLists: [
      '/icons/js.svg',
      '/icons/react.svg',
      '/icons/vite.svg',
      '/icons/redux.svg',
      '/icons/fm.svg',
      '/icons/tail.svg',
      '/icons/node.svg',
      '/icons/express.svg',
      '/icons/mongo.svg',
      '/icons/cloudinary.svg',
      '/icons/docker.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://filehive-drive.vercel.app',
  },
  {
    id: 4,
    title: 'Eato',
    des: 'Recipes Web App built with React 19, Tailwind CSS 4, Vite, React Hook Form, Context API, React Router v7, Framer Motion, Toastify, and NanoID. explore your favorite recipes with an interface that’s as smooth as your go-to recipe ,  ',
    img: '/project/eato.png',
    iconLists: [
      '/icons/js.svg',
      '/icons/react.svg',
      '/icons/vite.svg',
      '/icons/redux.svg',
      '/icons/fm.svg',
      '/icons/tail.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://recipe-create-pied.vercel.app/',
  },
  {
    id: 5,
    title: 'DriveLink',
    des: 'Google Drive Clone using the MERN Stack! web app built using the MERN stack (MongoDB, Express.js, EJS, Node.js).',
    img: '/project/driveLink.png',
    iconLists: [
      '/icons/html.svg',
      '/icons/css.svg',
      '/icons/js.svg',
      '/icons/tail.svg',
      '/icons/node.svg',
      '/icons/express.svg',
      '/icons/mongo.svg',
      '/icons/cloudinary.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://drive-ewdl.onrender.com/',
  },

  {
    id: 6,
    title: 'Whitesoft',
    des: 'Whitesoft is an ERP-CRM app build for Haritha Agritech Customized for their requirements',
    img: '/project/haritha.png',
    iconLists: ['/science.png', '/tail.svg', '/supabase.png'],
    link: 'https://github.com/sameer2210?tab=repositories',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'MERN & React Native Developer — Optico Solutions Pvt. Ltd.',
    desc: 'Worked as a Full Stack Developer building production-grade web and mobile applications using React.js, React Native, Node.js, Express.js, and MongoDB. Developed scalable REST APIs, implemented JWT-based authentication, optimized database queries, and built responsive dashboards. Contributed to real-time features, performance optimization, and deployment workflows, following clean architecture and industry best practices and  Delivered production-grade web and Android applications using MERN & React Native, accelerating feature delivery cycles by 35%.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
  {
    id: 2,
    title: 'Full Stack Developer Intern — Sheryians Pvt. Ltd.',
    desc: 'Completed intensive hands-on Internship in MERN stack development, working on multiple  full-stack SaaS applications HRECT – Developed an AI-powered recruitment and assessment platform enabling job posting, candidate evaluation, AI-driven technical testing, and interview scheduling for HR teams with RBAC,aggregating job data into real-time synchronized , BullMQ-powered async workflows, Collaborated in a production-grade GitHub workflow and maintaining documentation for secure Gained strong experience in Git workflows, debugging, code structuring, and production deployment.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Freelance Project',
    desc: 'Developed a Vehicle Validation is a full-stack web and Android application for managing and validating vehicle details, user roles, and admin operations for a residential society. It features a secure backend - REST ful API with  (Node.js, Express, MongoDB) and a modern React frontend with routing display - Add, update, and validate vehicle details.',
    className: 'md:col-span-2',
    thumbnail: '/exp3.svg',
  },
  // {
  //   id: 4,
  //   title: 'Team Lead',
  //   desc: 'Led the team of developers at whitebranding for multiple projects for a period of 6 months',
  //   className: 'md:col-span-2',
  //   thumbnail: '/exp4.svg',
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: '/icons/github.svg',
    href: 'https://github.com/sameer2210',
    name: 'GitHub',
  },
  {
    id: 2,
    img: '/icons/twit.svg',
    href: 'https://x.com/Sameer2210_',
    name: 'Twitter (X)',
  },
  {
    id: 3,
    img: '/icons/link.svg',
    href: 'https://www.linkedin.com/in/sameer-khan2210/',
    name: 'LinkedIn',
  },
  {
    id: 3,
    img: '/icons/insta.svg',
    href: 'https://www.instagram.com/isameer_22',
    name: 'LinkedIn',
  },
];
