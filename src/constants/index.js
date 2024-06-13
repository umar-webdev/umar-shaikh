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
    T2E,
    nsmedia,
    tesla,
    shopify,
    air,
    pet247,
    HJA,
    threejs,
    avtar
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
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
      title: "Frontend Developer",
      company_name: "Tech2Edge",
      icon: T2E,
      iconBg: "#383E56",
      date: "Jun 2022 - Nov 2022",
      points: [
        "Developing and maintaining web applications using Bootstrap and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "NSBig Media",
      icon: nsmedia,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
   
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
    //   name: "Rohit Sharma",
    //   designation: "Sr.Developer",
    //   company: "Pet247",
    //   image: "https://randomuser.me/api/portraits/men/4.jpg",
    // },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like umar does.",
      name: "Zaheer",
      designation: "CEO",
      company: "Mummaslovestudios",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After umar optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Avtar Singh",
      designation: "CEO",
      company: "Avtar Singh",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Avtar Singh",
      description:
        "As an International Coaching Federation, Professional Certified Coach, Neuroscience of Change Practitioner, NLP Business Practitioner and DiSC certified Trainer, I partner with motivated spirits just like you, who desire to become self-aware, overcome obstacles, and unlock their hidden potential thereby transforming themselves and embracing success.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: avtar,
      source_code_link: "https://github.com/",
    },
    {
      name: "Airbnb Clone",
      description:
        "Airbnb, Inc. is an American San Francisco-based company operating an online marketplace for short- and long-term homestays and experiences. The company acts as a broker and charges a commission from each booking. The company was founded in 2008 by Brian Chesky, Nathan Blecharczyk, and Joe Gebbia",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: air,
      source_code_link: "https://github.com/",
    },
    {
      name: "Pet24-7",
      description:
        "pet27 connects pet owners to thousands of licenced veterinary surgeons & nurses ready to provide the best online vet services 24/7.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: pet247,
      source_code_link: "https://github.com/",
    },
    {
      name: "HJA",
      description:
        "HJA offer services in numerous sectors and areas of expertise. Our professionals are familiar with the legal requirements in a variety of sectors, HJA will assist you regardless of your line of work.",
      tags: [
        {
          name: "Boostrap",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: HJA,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
