"use client"
import Image from "next/image";
import logo from "../../public/umar.png";
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";

// Import project components
import ProjectNsbigmedia from "./ProjectNsbigmedia";
import ProjectCoachAvtar from './ProjectCoachAvtar';
import ProjectNMPL from './ProjectNMPL';
import ProjectEcommerce from "./ProjectEcommerce";
import Link from "next/link";

type ProjectName =  'Nsbigmedia' | 'Ecommerce' | 'CoachAvtar' | 'NMPL';

const ProjectWhem: React.FC = () => {
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
      case 'CoachAvtar':
        return <ProjectCoachAvtar />;
      case 'NMPL':
        return <ProjectNMPL />;
      case 'Ecommerce':
        return <ProjectEcommerce />;
      default:
        return null;
    }
  };

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front Side */}

            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-1/2 mt-10 md:mt-0">
              <h1 className="text-5xl font-Jost pb-12">WHEM.</h1>
                <p className="mt-4 text-sm font-Jost leading-5">
                For the <Link className="underline" href='https://github.com/umar-webdev/whem'>WHEM</Link> project, which utilized React Native, MongoDB, Express, and NodeJS, my key tasks involved identifying and reaching out to potential clients while managing the lead database. This proactive approach led to a substantial increase in potential customer contacts for the client, enhancing their outreach and engagement efforts. The project demonstrated effective use of technology and strategic client management to drive growth and improve client acquisition.
                </p>
                
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
                    <li onClick={() => handleClick('Ecommerce')} className="mb-2">
                      <a className="cursor-pointer text-white hover:underline">
                        Ecommerce
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
    

        {/* Back Side */}
        <div className="rounded-3xl max-w-[960px] bg-text-color-40 text-white flex items-center justify-center">
          <div className="container mx-auto ">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {renderProjectComponent()}
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </>
  );
};

export default ProjectWhem;
