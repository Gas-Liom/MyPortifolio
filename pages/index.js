import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import { BsFillMoonStarsFill } from "react-icons/bs";

import alex from "../public/alex.jpeg";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";

import Hymns from "../public/Hymns.png";
import MzuniSDAChurch from "../public/MzuniSDAChurch.png";
import BlockchainLtrs from "../public/BlockchainLtrs.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Alexinard Simbeye</title>
        <meta name="description" content="Alexinard Simbeye Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        {/* ================= HERO SECTION ================= */}
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">ALEXINARD SIMBEYE</h1>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              ALEXINARD SIMBEYE
            </h2>

            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Engineer
            </h3>

            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Software engineer with a passion for building impactful digital
              solutions. Skilled in full-stack development, problem-solving, and
              collaborating on innovative projects.
            </p>

            {/* Social Links */}
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/Gas-Liom" target="_blank" rel="noreferrer">
                <AiFillGithub className="hover:text-black dark:hover:text-white" />
              </a>

              <a href="https://web.facebook.com/alex.simbeye.12" target="_blank" rel="noreferrer">
                <AiFillFacebook className="hover:text-blue-600" />
              </a>

          <a
                href="https://docs.google.com/document/d/1KoH_ksKzjWgLjAnpindyL6wPpBEC7RZ5/edit"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 cursor-pointer text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors"
              >
                <HiDocumentText size={28} />
                <span className="text-sm font-medium">My CV</span>
          </a>

            </div>

            {/* Profile Image */}
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image
                src={alex}
                alt="Alexinard Simbeye"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section>
          <h3 className="text-3xl py-1 dark:text-white">Services I Offer</h3>

          <p className="text-md py-4 leading-8 text-gray-800 dark:text-gray-200">
            I am an <span className="text-teal-500">ambitious software engineer</span> and
            pending graduate of <span className="text-teal-500">Mzuzu University</span>,
            focused on building scalable, impactful, real-world digital solutions.
          </p>

          <div className="lg:flex gap-10">
            {/* Design */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="Design" />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p>Figma, Lunacy, Photoshop, Illustrator</p>
            </div>

                                {/* Development */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                      <Image src={code} width={100} height={100} alt="Development" />

                      <h3 className="text-lg font-medium pt-8 pb-4">Development</h3>

                      {/* Frontend */}
                      <h4 className="text-teal-600 font-semibold pt-4">Frontend</h4>
                      <p className="text-gray-800 py-1">
                        React, Next.js, Vite, Tailwind CSS, HTML, CSS, JavaScript
                      </p>

                      {/* Backend */}
                      <h4 className="text-teal-600 font-semibold pt-4">Backend</h4>
                      <p className="text-gray-800 py-1">
                        Node.js, Express, Python, FastAPI, Java
                      </p>

                      {/* Database */}
                      <h4 className="text-teal-600 font-semibold pt-4">Database</h4>
                      <p className="text-gray-800 py-1">
                        MySQL, PostgreSQL, MongoDB
                      </p>

                      {/* Other Tools */}
                      <h4 className="text-teal-600 font-semibold pt-4">Other Technologies</h4>
                      <p className="text-gray-800 py-1">
                        Git, GitHub, Docker, REST APIs, CI/CD, FASTAPI
                      </p>
            </div>


            {/* Consulting */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="Consulting" />
              <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
              <p>Agile, UML, DevOps, Project Guidance</p>
            </div>
          </div>
        </section>

        {/* ================= PORTFOLIO ================= */}
<section className="py-10">
  <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
  <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
    A selection of projects showcasing my skills in full-stack software
    development and problem-solving.
  </p>

  <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">

    {/* ================= PROJECT 1 ================= */}
    <div className="basis-1/3 flex-1 shadow-lg rounded-xl p-5 dark:bg-white">
      <Image
        src={Hymns}
        alt="Hymns Application"
        className="rounded-lg"
        style={{ width: "100%", height: "auto" }}
      />

      <h4 className="text-xl font-semibold mt-4">Hymns Application</h4>
      <p className="text-gray-700 py-2">
        A digital hymns application designed for easy access to church hymns.
      </p>

      <div className="flex justify-between mt-4">
        <a
          href="https://github.com/Gas-Liom/Hymns"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 font-medium hover:underline"
        >
          GitHub
        </a>

        <a
          href="https://hymns-demo-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 font-medium hover:underline"
        >
          Live Demo
        </a>
      </div>
    </div>

    {/* ================= PROJECT 2 ================= */}
    <div className="basis-1/3 flex-1 shadow-lg rounded-xl p-5 dark:bg-white">
      <Image
        src={MzuniSDAChurch}
        alt="Mzuni SDA Church Management System"
        className="rounded-lg"
        style={{ width: "100%", height: "auto" }}
      />

      <h4 className="text-xl font-semibold mt-4">
        Mzuni SDA Church System
      </h4>
      <p className="text-gray-700 py-2">
        A church management system for member records, events, and communication.
      </p>

      <div className="flex justify-between mt-4">
        <a
          href="https://github.com/Gas-Liom/MzuniSDAChurch"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 font-medium hover:underline"
        >
          GitHub
        </a>

        <a
          href="https://mzuni-church-demo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 font-medium hover:underline"
        >
          Live Demo
        </a>
      </div>
    </div>

    {/* ================= PROJECT 3 ================= */}
    <div className="basis-1/3 flex-1 shadow-lg rounded-xl p-5 dark:bg-white">
      <Image
        src={BlockchainLtrs}
        alt="Blockchain Loan Tracking System"
        className="rounded-lg"
        style={{ width: "100%", height: "auto" }}
      />

      <h4 className="text-xl font-semibold mt-4">
        Blockchain Loan Tracking System
      </h4>
      <p className="text-gray-700 py-2">
        A blockchain-based loan tracking and repayment system for university
        students.
      </p>

      <div className="flex justify-between mt-4">
        <a
          href="https://github.com/Gas-Liom/heslgb-system"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 font-medium hover:underline"
        >
          GitHub
        </a>

        <a
          href="https://heslgb-system.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 font-medium hover:underline"
        >
          Live Demo
        </a>
      </div>
    </div>

  </div>
</section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="py-6 bg-teal-600 text-white text-center">
        <p>© {new Date().getFullYear()} Alexinard Simbeye. All rights reserved.</p>
        <div className="flex justify-center gap-8 text-3xl mt-3">
          <AiFillGithub />
          <AiFillFacebook />
        </div>
      </footer>
    </div>
  );
}
