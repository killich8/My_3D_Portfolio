import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  git,
  docker,
  capgemini,
  lacroix,
  siemens,
  bordeaux,
  tum,
  lorraine,
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
  cardio,
  r,
  camp_party,
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
    icon: r,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Machine Learning Engineer",
    company_name: "Capgemini, Strasbourg-France",
    icon: capgemini,
    iconBg: "#ffffff",
    date: " April 2024 - September 2024",
    points: [
      "Developing an AI Algorithm for Organ Segmentation on 3D Medical Data in a Pre-Diagnostic Context for the University Hospital Center of Nancy.",
      "Performing 3D segmentation of the placenta using 3D Doppler angiography volumes provided by the CHU of Nancy.",
      "Developing a customized AI algorithm for medical segmentation challenges.",
      "Implementing a 3D U-Net neural network using PyTorch, leveraging the Monai library specifically designed for medical imaging.",
      "Publishing an internal scientific article within the Capgemini group.",
    ],
  },
  {
    title: "Computer Vision Engineer | Data Scientist",
    company_name: "Lacroix Group, Rennes-France",
    icon: lacroix,
    iconBg: "#1A3156",
    date: "September 2022 - March 2023",
    points: [
      "Exploring data augmentation techniques, including synthetic data, to enhance road Object Detection in specific conditions.",
      "Learning to use the CARLA simulator to generate synthetic training data with specified objects and parameters, and creating a user interface to automate new dataset generation.",
      "Pre-processing, merging, and refining data to prepare datasets for the network.",
      "Training a CNN-based object detection model with the augmented datasets.",
      "Establishing a benchmarking system to quantify the impact of synthetic datasets on network performance.",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "Siemens, Munich-Germany",
    icon: siemens,
    iconBg: "#009999",
    date: "October 2021 - January 2022",
    points: [
      "Cleaning and preparing data for analysis.",
      "Analyzing the data.",
      "Implementing machine learning models.",
    ],
  },
  
];

const educations = [
  {
    title: "Master in images and data sciences",
    company_name: "University of Bordeaux",
    icon: bordeaux,
    iconBg: "#ffffff",
    date: "2023 -  2024",
    points: [
      
    ],
  },
  {
    title: "Erasmus+ Exchange Program at The technical university of Munich, Germany",
    company_name: "TUM, Munich-Germany",
    icon: tum,
    iconBg: "#ffffff",
    date: "2021 - 2022",
    points: [
      
    ],
  },
  {
    title: "Master in Probability and applied statistics",
    company_name: "University of Lorraine, Metz-France",
    icon: lorraine,
    iconBg: "#ffffff",
    date: "2020 - 2022",
    points: [
      
    ],
  },
  {
    title: "License in applied mathematics",
    company_name: "University of Lorraine, Metz-France",
    icon: lorraine,
    iconBg: "#ffffff",
    date: "2019 - 2020",
    points: [
     
    ],
  },
];

const projects = [ 
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
        name: "MLflow",
        color: "pink-text-gradient",
      },
      {
        name: "Git",
        color: "orange-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "CI/CD",
        color: "violet-text-gradient",
      },
      {
        name: "AWS",
        color: "orange-text-gradient",
      },
    ],
    image: cardio,
    source_code_link: "https://github.com/killich8/End-to-End-Cardiovascular-Disease",
  },
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
          name: "MLflow",
          color: "pink-text-gradient",
        },
        {
          name: "Git",
          color: "orange-text-gradient",
        },
        {
          name: "Docker",
          color: "blue-text-gradient",
        },
        {
          name: "CI/CD",
          color: "violet-text-gradient",
        },
        {
          name: "DVC",
          color: "orange-text-gradient",
        },
        {
          name: "Azure",
          color: "blue-text-gradient",
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
        name: "LLM",
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

];


const articles = [ 
  {
    name: "Erasmus+",
    description:
      " Tips for Making the Most of Your Erasmus+ Experience at The Technical University of Munich",
    tags: [
      {
        name: "Erasmus",
        color: "blue-text-gradient",
      },
      {
        name: "Education",
        color: "green-text-gradient",
      },
      {
        name: "Lifestyle",
        color: "pink-text-gradient",
      },
      
      {
        name: "Munich",
        color: "orange-text-gradient",
      },
    ],
    image: camp_party,
    source_code_link: "https://medium.com/@youness.killich",
  },




];

export { services, technologies, experiences,educations, projects,articles };
