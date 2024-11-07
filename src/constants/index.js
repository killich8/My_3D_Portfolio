import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  capgemini,
  lacroix,
  siemens,
  bordeaux,
  tum,
  lorraine,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  c,
  pytorch,
  tensorflow,
  opencv,
  matlab,
  aws,
  azure,
  gcp,
  chest,
  chatbot,
  movie_recommender,
  wine,
  cardio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: web,
  },
  {
    title: "Deep Learning",
    icon: mobile,
  },
  {
    title: "Computer Vision",
    icon: backend,
  },
  {
    title: "Natural Language Processing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: python,
  },
  {
    name: "CSS 3",
    icon: c,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: pytorch,
  },
  {
    name: "React JS",
    icon: tensorflow,
  },
  {
    name: "Redux Toolkit",
    icon: opencv,
  },
  {
    name: "Tailwind CSS",
    icon: matlab,
  },
  {
    name: "Node JS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: azure,
  },
  {
    name: "Three JS",
    icon: gcp,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Computer vision Engineer",
    company_name: "Lacroix Group, Rennes-France",
    icon: lacroix,
    iconBg: "#1A3156",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "AI Engineer",
    company_name: "Capgemini, Strasbourg-France",
    icon: capgemini,
    iconBg: "#ffffff",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "Siemens, Munich-Germany",
    icon: siemens,
    iconBg: "#009999",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const educations = [
  {
    title: "Master in images and data sciences",
    company_name: "University of Bordeaux",
    icon: bordeaux,
    iconBg: "#ffffff",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
  {
    title: "Erasmus+ Exchange Program at The technical university of Munich, Germany",
    company_name: "TUM, Munich-Germany",
    icon: tum,
    iconBg: "#ffffff",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
  {
    title: "Master in Probability and applied statistics",
    company_name: "University of Lorraine, Metz-France",
    icon: lorraine,
    iconBg: "#ffffff",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
  {
    title: "License in applied mathematics",
    company_name: "University of Lorraine, Metz-France",
    icon: lorraine,
    iconBg: "#ffffff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chest Cancer Classifier",
    description:
      "End-to-End Chest Cancer Classification using MLflow & DVC.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "MLOps",
        color: "pink-text-gradient",
      },
    ],
    image: chest,
    source_code_link: "https://github.com/killich8/End-to-End-Chest-Cancer-Classification-using-MLflow-DVC",
  },
  {
    name: "Medical Chatbot Project",
    description:
      "End-to-End Medical Chatbot",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "LLMOps",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/",
  },
  {
    name: "Movie Recommender System",
    description:
      " End-to-End Movie Recommender System",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie_recommender,
    source_code_link: "https://github.com/",
  },
  {
    name: "Cardiovascular Disease",
    description:
      " Complete End to End Machine Learning Project With MLFLOW,DVC And Deployment on AWS",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "MLOps",
        color: "pink-text-gradient",
      },
    ],
    image: cardio,
    source_code_link: "https://github.com/",
  },

];

export { services, technologies, experiences,educations, testimonials, projects };
