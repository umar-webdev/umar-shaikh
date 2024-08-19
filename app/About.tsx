"use client"
import Image from "next/image";
import logo from "../public/umar.png";
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";

// Import project components
import ProjectNsbigmedia from './components/ProjectNsbigmedia';
import ProjectEcommerce from './components/ProjectEcommerce';
import ProjectWhem from './components/ProjectWhem';
import ProjectCoachAvtar from './components/ProjectCoachAvtar';
import ProjectNMPL from './components/ProjectNMPL';

type ProjectName = 'Nsbigmedia' | 'E-commerce' | 'Whem' | 'CoachAvtar' | 'NMPL';

const About: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectName | null>(null);

  const handleClick = (project: ProjectName) => {
    setSelectedProject(project);
    setIsFlipped(true);
  };

  const renderProjectComponent = () => {
    switch (selectedProject) {
      case 'Nsbigmedia':
        return <ProjectNsbigmedia />;
      case 'E-commerce':
        return <ProjectEcommerce />;
      case 'Whem':
        return <ProjectWhem />;
      case 'CoachAvtar':
        return <ProjectCoachAvtar />;
      case 'NMPL':
        return <ProjectNMPL />;
      default:
        return null;
    }
  };

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front Side */}
        <div className="rounded-3xl max-w-[960px] m-8 border-2 border-text-color-10 bg-text-color-40 text-white flex items-center justify-center">
          <div className="container mx-auto py-10 px-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-1/2 mt-10 md:mt-0">
                {/* <Image
                  className="cursor-pointer object-cover w-20 h-24"
                  src={logo}
                  alt=""
                /> */}
                <h1 className="text-5xl font-Jost pb-12">ABOUT.</h1>
                <p className="mt-4 text-sm font-Jost leading-5">
                  Hello!<br></br> I have honed my skills in creating dynamic,
                  user-friendly web applications. My journey in web development
                  includes internships at Tech2Edge LLP Solutions and NS BIGMEDIA
                  PVT LTD, where I gained valuable experience in developing
                  responsive websites, coding with HTML, CSS, JavaScript, ReactJS,
                  and more. I am dedicated to delivering high-quality,
                  well-documented code and am committed to continuous learning and
                  improvement in this ever-evolving field.
                </p>
                {/* <p className="mt-4 text-sm font-Jost leading-5">
                  My portfolio highlights projects like Pet24-7.com, a responsive
                  pet services website, and a Python-based Movie Recommendation
                  System. Skilled in React Native, I developed mobile apps like
                  ASSP and WHEM. I aim to exceed client expectations with
                  effective communication and teamwork. Explore my portfolio to
                  see my technical skills and problem-solving abilities in action.
                </p> */}
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0 flex flex-col items-end">
                <div className="projects-list">
                  <h2 className="text-2xl font-bold mb-4">Projects</h2>
                  <ul className="list-none">
                    <li onClick={() => handleClick('Nsbigmedia')} className="mb-2">
                      <a className="cursor-pointer text-white hover:underline">
                        Nsbigmedia
                      </a>
                    </li>
                    <li onClick={() => handleClick('E-commerce')} className="mb-2">
                      <a className="cursor-pointer text-white hover:underline">
                        E-commerce
                      </a>
                    </li>
                    <li onClick={() => handleClick('Whem')} className="mb-2">
                      <a className="cursor-pointer text-white hover:underline">
                        Whem
                      </a>
                    </li>
                    <li onClick={() => handleClick('CoachAvtar')} className="mb-2">
                      <a className="cursor-pointer text-white hover:underline">
                        CoachAvtar
                      </a>
                    </li>
                    <li onClick={() => handleClick('NMPL')} className="mb-2">
                      <a className="cursor-pointer text-white hover:underline">
                        NMPL
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="mt-10 text-sm text-right font-Jost">
              &copy; 2024 umars.io
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div className="rounded-3xl max-w-[960px] m-8 border-2 border-text-color-10 bg-text-color-40 text-white flex items-center justify-center">
          <div className="container min-h-98 mx-auto py-10 px-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {renderProjectComponent()}
            </div>
            <p className="mt-10 text-sm text-right font-Jost">
              &copy; 2024 umars.io
            </p>
          </div>
        </div>
      </ReactCardFlip>
    </>
  );
};

export default About;
