"use client"
import Image from "next/image";
import logo from "../../public/umar.png";
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";

// Import project components
import ProjectEcommerce from './ProjectEcommerce';
import ProjectWhem from './ProjectWhem';
import ProjectCoachAvtar from './ProjectCoachAvtar';
import ProjectNMPL from './ProjectNMPL';
import Link from "next/link";

type ProjectName =  'E-commerce' | 'Whem' | 'CoachAvtar' | 'NMPL';

const ProjectNsbigmedia: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectName | null>(null);

  const handleClick = (project: ProjectName) => {
    setSelectedProject(project);
    setIsFlipped(true);
  };

  const renderProjectComponent = () => {
    switch (selectedProject) {
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

            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-1/2 mt-10 md:mt-0">
              <h1 className="text-4xl font-Jost pb-12">NSBIGMEDIA.</h1>
                <p className="mt-4 text-sm font-Jost leading-5">
                <Link href='/' className="underline ">NSBIGMEDIA PVT LTD</Link> is a dynamic digital agency specializing in innovative web development and digital marketing solutions. With a focus on leveraging the latest technologies and trends, NSBIGMEDIA delivers customized strategies to drive online growth and enhance brand presence. Their team of experts is dedicated to providing exceptional service and results-driven outcomes for clients across various industries.
                </p>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0 flex flex-col items-end">
                <div className="projects-list">
                  <h2 className="text-2xl font-bold mb-4">Projects</h2>
                  <ul className="list-none">
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

export default ProjectNsbigmedia;
