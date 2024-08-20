"use client";
import Image from "next/image";
import logo from "../../public/umar.png";
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";

// Import project components
import Link from "next/link";
import ProjectNsbigmedia from "./ProjectNsbigmedia";
import ProjectWhem from './ProjectWhem';
import ProjectCoachAvtar from './ProjectCoachAvtar';
import ProjectNMPL from './ProjectNMPL';

type ProjectName = 'Nsbigmedia' | 'Whem' | 'CoachAvtar' | 'NMPL';

const ProjectEcommerce: React.FC = () => {
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
        <div className="flex flex-col md:flex-row justify-between items-center max-w-full sm:max-w-[320px] md:max-w-[480px] lg:max-w-[640px] xl:max-w-[960px] m-auto">
          <div className="md:w-1/2 mt-10 md:mt-0">
            {/* <Image
              className="cursor-pointer object-cover w-20 h-24"
              src={logo}
              alt=""
            /> */}
            <h1 className="text-3xl sm:text-4xl font-Jost pb-12">ECOMMERCE.</h1>
            <p className="mt-4 text-sm sm:text-base font-Jost leading-5">
              In the <Link href="/" className="underline">Ecommerce</Link> platform I developed, I implemented an automated invoice generator that streamlines the billing process. This functionality automatically generates and sends detailed invoices to customers upon purchase, reducing manual errors and saving time. It integrates seamlessly with the order management system to ensure accuracy and consistency in invoicing, while also providing customers with prompt and professional documentation of their transactions.
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex flex-col items-center md:items-end">
            <div className="projects-list">
              <h2 className="text-2xl font-bold mb-4">Projects</h2>
              <ul className="list-none">
                <li onClick={() => handleClick('Nsbigmedia')} className="mb-2">
                  <a className="cursor-pointer text-white hover:text-text-color-30 underline">
                    Nsbigmedia
                  </a>
                </li>
                <li onClick={() => handleClick('Whem')} className="mb-2">
                  <a className="cursor-pointer text-white hover:text-text-color-30 underline">
                    Whem
                  </a>
                </li>
                <li onClick={() => handleClick('CoachAvtar')} className="mb-2">
                  <a className="cursor-pointer text-white hover:text-text-color-30 underline">
                    CoachAvtar
                  </a>
                </li>
                <li onClick={() => handleClick('NMPL')} className="mb-2">
                  <a className="cursor-pointer text-white hover:text-text-color-30 underline">
                    NMPL
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="rounded-3xl max-w-full sm:max-w-[320px] md:max-w-[480px] lg:max-w-[640px] xl:max-w-[960px] bg-text-color-40 text-white flex items-center justify-center m-auto">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {renderProjectComponent()}
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </>
  );
};

export default ProjectEcommerce;
