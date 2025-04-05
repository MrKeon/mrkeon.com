import React, { useRef } from "react";
import { motion } from "framer-motion";
import profilePic from "./assets/profile.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Hero({ aboutRef, projectsRef, contactRef }) {
  return (
    <motion.section
      className="bg-gradient-to-br from-teal-600 to-teal-900 py-20 px-6 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={fadeIn}
    >
      <div className="flex flex-col items-center gap-4">
        <img
          src={profilePic}
          alt="Keon Willis Sadatian"
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
        />
        <h1 className="text-5xl font-bold text-white">Keon Willis Sadatian</h1>
        <p className="text-xl text-teal-100 mb-6">Senior Frontend Engineer | React + TypeScript</p>
        <div className="flex gap-4 flex-wrap justify-center">
          <button onClick={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })} className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-200 transition">About</button>
          <button onClick={() => projectsRef.current.scrollIntoView({ behavior: "smooth" })} className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-200 transition">Projects</button>
          <button onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })} className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-200 transition">Contact</button>
        </div>
      </div>
    </motion.section>
  );
}

function About({ innerRef }) {
  return (
    <motion.section
      ref={innerRef}
      className="max-w-4xl mx-auto py-20 px-6 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      variants={fadeIn}
    >
      <h2 className="text-3xl font-bold mb-6 text-teal-800">About Me</h2>
      <p className="text-lg text-gray-700">
        I’m a frontend engineer with 8+ years of experience building React/Redux apps with TypeScript. Passionate about clean code, beautiful interfaces, and performance. I enjoy building products that people love using.
      </p>
    </motion.section>
  );
}

function Projects({ innerRef }) {
  return (
    <motion.section
      ref={innerRef}
      className="bg-gradient-to-br from-teal-600 to-teal-900 py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      variants={fadeIn}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
        <ul className="grid gap-6 md:grid-cols-2">
          <li className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-xl font-semibold mb-2"><a href="https://www.amberarendas.net/blog/2025/3/27/building-a-science-first-ingredient-interpreter" className="text-teal-700 hover:underline">Cosmetology Chat App</a></h3>
            <p className="text-gray-600">An app for simplifying the science in cosmetic ingredients.</p>
          </li>
          <li className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-xl font-semibold mb-2"><a href="https://www.achaemenidbrothers.com/" className="text-teal-700 hover:underline">Achaemenid Brothers</a></h3>
            <p className="text-gray-600">A static website for Achaemenid Brothers carpentry business.</p>
          </li>
          <li className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-xl font-semibold mb-2"><a href="https://github.com/MrKeon/converter" className="text-teal-700 hover:underline">m3u8 to MP4</a></h3>
            <p className="text-gray-600">A ts-node app that can convert a .m3u8 url to a local MP4 file using FFmpeg.</p>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}

function Contact({ innerRef }) {
  return (
    <motion.section
      ref={innerRef}
      className="py-20 px-6 text-center bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      variants={fadeIn}
    >
      <h2 className="text-3xl font-bold mb-6 text-teal-800">Contact</h2>
      <p className="text-lg text-gray-700 mb-4">Let's connect!</p>
      <div className="space-x-4">
        <a href="https://github.com/yourusername" className="text-teal-700 hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" className="text-teal-700 hover:underline">LinkedIn</a>
        <a href="mailto:mrkeon.com@gmail.com" className="text-teal-700 hover:underline">Email</a>
      </div>
    </motion.section>
  );
}

export default function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <Hero aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
      <About innerRef={aboutRef} />
      <Projects innerRef={projectsRef} />
      <Contact innerRef={contactRef} />
    </main>
  );
}