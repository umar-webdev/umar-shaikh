"use client";
import Image from "next/image";
import logo from "../../public/umar.png";
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";

// Import project components
import ProjectNsbigmedia from "./ProjectNsbigmedia";
import ProjectCoachAvtar from './ProjectCoachAvtar';
import ProjectEcommerce from "./ProjectEcommerce";
import ProjectWhem from "./ProjectWhem";
import Link from "next/link";

type ProjectName = 'Nsbigmedia' | 'Ecommerce' | 'Whem' | 'CoachAvtar';

const ProjectNMPL: React.FC = () => {
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
      case 'Ecommerce':
        return <ProjectEcommerce />;
      case 'Whem':
        return <ProjectWhem />;
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
            <h1 className="text-4xl sm:text-5xl font-Jost pb-12">NMPL.</h1>
            <p className="mt-4 text-sm sm:text-base font-Jost leading-5">
              <Link className="underline" href="https://dainty-sorbet-98eb2b.netlify.app/">The Nanda Group</Link>, established in 1973, is a distinguished name in the firearms industry, renowned for importing top brands such as Federal, Winchester, and CCI into India. With a recent expansion into manufacturing through a joint venture with Baikal-Russia, the group is set to produce India's most advanced .30 pistol. I developed their website to effectively showcase their legacy, product range, and new manufacturing ventures, enhancing their online presence and client engagement.
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
                <li onClick={() => handleClick('Ecommerce')} className="mb-2">
                  <a className="cursor-pointer text-white hover:text-text-color-30 underline">
                    Ecommerce
                  </a>
                </li>
                <li onClick={() => handleClick('CoachAvtar')} className="mb-2">
                  <a className="cursor-pointer text-white hover:text-text-color-30 underline">
                    CoachAvtar
                  </a>
                </li>
                <li onClick={() => handleClick('Whem')} className="mb-2">
                  <a className="cursor-pointer text-white hover:text-text-color-30 underline">
                    Whem
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

export default ProjectNMPL;
