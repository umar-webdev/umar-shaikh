import Image from "next/image";
import logo from "../../public/umar.png";
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";

// Import project components
import ProjectNsbigmedia from "./ProjectNsbigmedia";
import ProjectNMPL from './ProjectNMPL';
import ProjectEcommerce from "./ProjectEcommerce";
import ProjectWhem from "./ProjectWhem";
import Link from "next/link";

type ProjectName = 'Nsbigmedia' | 'Ecommerce' | 'Whem' | 'NMPL';

const ProjectCoachAvtar: React.FC = () => {
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
      case 'NMPL':
        return <ProjectNMPL />;
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
            <h1 className="text-3xl sm:text-4xl font-Jost pb-12">COACHAVTAR.</h1>
            <p className="mt-4 text-sm sm:text-base font-Jost leading-5">
              <Link href='https://coachavtar.com' className="underline">CoachAvtar.com</Link> is a platform dedicated to providing personalized coaching and professional development services. It offers a range of coaching programs designed to help individuals and organizations achieve their goals through tailored guidance and expertise. The site features an intuitive design, easy navigation, and comprehensive information on available coaching services, making it accessible and user-friendly for clients seeking growth and improvement in their professional lives.
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
                <li onClick={() => handleClick('NMPL')} className="mb-2">
                  <a className="cursor-pointer text-white hover:text-text-color-30 underline">
                    NMPL
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

export default ProjectCoachAvtar;
