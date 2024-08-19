'use client';
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/umar.png";
import github from "../../public/github.svg";
import linkedin from "../../public/linkedin.svg";
import mail from "../../public/mail.svg";
import ReactCardFlip from "react-card-flip";
import About from "../About"; // Import About component

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front Side */}
      <div className="rounded-3xl max-w-full sm:max-w-[320px] md:max-w-[480px] lg:max-w-[640px] xl:max-w-[960px] m-auto border-2 border-text-color-10 bg-text-color-40 text-white flex items-center justify-center p-4 sm:p-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2">
              <div className="flex justify-start md:justify-start">
                <Image className="cursor-pointer w-16 h-18" src={logo} alt="Logo" />
              </div>
              <h1 className="text-4xl md:text-6xl pt-4 font-Jost text-start md:text-left">WELCOME.</h1>
              <p className="mt-5 text-lg font-light font-Jost text-start md:text-left">
                Turning vision into reality with code and design
              </p>
              <p className="mt-8 text-sm font-Jost text-start md:text-left">
                My name is Umar Shaikh, I'm a front-end developer based in Andheri, Mumbai, India. I have developed many types of front-ends from Ecommerce to well-known portfolios.
              </p>
              <p className="mt-4 text-sm font-Jost text-start md:text-left">
                I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.
              </p>
            </div>
            <div className="md:w-1/2 flex flex-col items-center md:items-end mt-10 md:mt-0">
              <ul className="list-none flex gap-4 justify-center md:justify-end">
                <li>
                  <a href="/" className="cursor-pointer text-white hover:underline">
                    <Image className="cursor-pointer object-cover w-7 h-7" src={github} alt="GitHub" />
                  </a>
                </li>
                <li>
                  <a href="/" className="cursor-pointer text-white hover:underline">
                    <Image className="cursor-pointer object-cover w-7 h-7" src={linkedin} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer text-white hover:underline">
                    <Image className="cursor-pointer object-cover w-7 h-7" src={mail} alt="Mail" />
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer text-white hover:underline" onClick={handleFlip}>
                    About ME
                  </a>
                </li>
              </ul>
              <div className="github-stats mt-4">
                <p>
                  <img className="mb-10" src="https://github-readme-stats.vercel.app/api/top-langs?username=umar-webdev&show_icons=true&locale=en&layout=compact" alt="GitHub Stats" />
                </p>
              </div>
              <p className="mt-4 text-sm text-center md:text-right font-Jost">
                &copy; 2024 umars.io
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back Side (About Component) */}
      <div>
        <About />
        <button className="text-text-color-40 mt-4 underline ml-4 px-6 py-2 rounded" onClick={handleFlip}>
          Bored! Let's get back to home
        </button>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
