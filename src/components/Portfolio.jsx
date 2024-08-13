import React from 'react';
import pythonIcon from '../assets/python.png';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import TailwindIcon from '../assets/tailwind.png';
import nodeIcon from '../assets/node.png';
import expressIcon from '../assets/express.png';
import fastapiIcon from '../assets/fastapi.png';
import mongodbIcon from '../assets/mongodb.png';
import sqlIcon from '../assets/sql.png';
import gitIcon from '../assets/git.png';
import linuxIcon from '../assets/linux.png';
import vscodeIcon from '../assets/vscode.png';
import mailIcon from '../assets/about/mail.png';
import githubIcon from '../assets/about/image.png';
import linkedIcon from '../assets/about/linkedin.png';
import leetcodeIcon from '../assets/about/leetcode.png';
import codechefIcon from '../assets/about/codechef.png';

const Portfolio = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-slate-100 to-cyan-100 animate-fade-in">
      <header className="p-4 rounded-md shadow-lg mb-6 bg-gradient-to-r from-cyan-500 to-teal-500">
        <h1 className="text-5xl font-extrabold text-white text-center">Challari Naga Srinu</h1>
        <p className="text-center text-white mt-2 text-lg">Full Stack Developer</p>
      </header>

      <section className="mb-10">
        <div className="flex justify-center gap-4">
          <a href="mailto:email@example.com" target="_blank">
            <img src={mailIcon} alt="Mail Icon" className="w-10 h-10 transition-transform transform hover:scale-110" />
          </a>
          <a href="https://github.com/nagasrinu289" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" className="w-10 h-10 transition-transform transform hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/challari-naga-srinu-5a55b2280/" target="_blank">
            <img src={linkedIcon} alt="LinkedIn Icon" className="w-10 h-10 transition-transform transform hover:scale-110" />
          </a>
          <a href="https://leetcode.com/u/nagasrinu289/" target="_blank">
            <img src={leetcodeIcon} alt="LeetCode Icon" className="w-10 h-10 transition-transform transform hover:scale-110" />
          </a>
          <a href="https://www.codechef.com/users/nagasrinu289" target="_blank">
            <img src={codechefIcon} alt="CodeChef Icon" className="w-10 h-10 transition-transform transform hover:scale-110" />
          </a>
        </div>
      </section>

      <section className="mb-10">
  <h2 className="text-3xl font-semibold text-slate-700 mb-6">Projects</h2>

  <div className="bg-white p-6 rounded-lg shadow-lg mb-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
    <h3 className="text-2xl font-bold">E-commerce Website</h3>
    <p className="text-slate-600 mt-2">Collaborated to develop a Product Shopping Website to provide an online platform for users to browse, search, and purchase products.</p>
    <p className="text-slate-600 mt-1">Technologies used: React.js, Node.js, Express.js, MongoDB</p>
    <div className="mt-3">
      <a href="https://shopping-app-sooty-three.vercel.app/" className="text-cyan-600 hover:underline">Live URL</a> | <a href="https://github.com/nagasrinu289/Ecommerce" className="text-cyan-600 hover:underline">GitHub Repo</a>
    </div>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
    <h3 className="text-2xl font-bold">Grocery List Website</h3>
    <p className="text-slate-600 mt-2">Developed a Grocery List application with user authentication to manage grocery items efficiently.</p>
    <p className="text-slate-600 mt-1">Technologies used: React.js, Node.js, Express.js, MongoDB</p>
    <div className="mt-3">
      <a href="https://grocery-listapp.vercel.app/" className="text-cyan-600 hover:underline">Live URL</a> | <a href="https://github.com/nagasrinu289/groceryListapp" className="text-cyan-600 hover:underline">GitHub Repo</a>
    </div>
  </div>
</section>


      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-slate-700 mb-6">Skills</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-wrap gap-16">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="flex gap-4">
                <img src={htmlIcon} alt="HTML Icon" className="w-16 h-16 border-4 border-teal-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-12" />
                <img src={cssIcon} alt="CSS Icon" className="w-16 h-16 border-4 border-teal-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-12" />
                <img src={jsIcon} alt="JavaScript Icon" className="w-16 h-16 border-4 border-teal-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-12" />
                <img src={reactIcon} alt="React Icon" className="w-16 h-16 border-4 border-teal-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-12" />
                <img src={TailwindIcon} alt="Tailwind CSS Icon" className="w-16 h-16 border-4 border-teal-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-12" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="flex gap-4">
                <img src={nodeIcon} alt="Node.js Icon" className="w-16 h-16 border-4 border-teal-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-12" />
                <img src={expressIcon} alt="Express.js Icon" className="w-16 h-16 border-4 border-teal-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-12" />
                <img src={fastapiIcon} alt="FastAPI Icon" className="w-16 h-16 border-4 border-teal-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-12" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Database</h3>
              <div className="flex gap-4">
                <img src={mongodbIcon} alt="MongoDB Icon" className="w-16 h-16 border-4 border-teal-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-12" />
                <img src={sqlIcon} alt="SQL Icon" className="w-16 h-16 border-4 border-teal-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-12" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Others</h3>
              <div className="flex gap-4">
                <img src={gitIcon} alt="Git Icon" className="w-16 h-16 border-4 border-teal-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-12" />
                <img src={linuxIcon} alt="Linux Icon" className="w-16 h-16 border-4 border-teal-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-12" />
                <img src={vscodeIcon} alt="VSCode Icon" className="w-16 h-16 border-4 border-teal-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-12" />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Programming</h3>
            <div className="flex gap-4">
              <img src={pythonIcon} alt="Python Icon" className="w-16 h-16 border-4 border-teal-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-12" />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-slate-700 mb-6">Education</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold">B.Tech in Computer Science</h3>
            <p className="text-slate-600 mt-2">Sasi Institute of Technology and Engineering (8.1 CGPA)</p>
            <p className="text-slate-600 mt-1">Nov 2021 - Ongoing</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold">Intermediate in MPC</h3>
            <p className="text-slate-600 mt-2">Aditya Junior College (96.8%)</p>
            <p className="text-slate-600 mt-1">Jun 2019 - Mar 2021</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold">Secondary School of Education</h3>
            <p className="text-slate-600 mt-2">Nava Jyothi E.M. High School (9.5 CGPA)</p>
            <p className="text-slate-600 mt-1">2019</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-slate-700 mb-6">Achievements</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold">Competitive Programming</h3>
          <p className="text-slate-600 mt-2">Solved 300+ problems on CodeChef, achieving a 2-star rating. Current rating: 1480.</p>
          <p className="text-slate-600 mt-1">Solved 100+ problems on LeetCode, with a rating of 1500+.</p>
          <div className="mt-3">
            <a href="https://www.codechef.com/users/nagasrinu289" className="text-cyan-600 hover:underline">CodeChef Profile</a> | <a href="https://leetcode.com/u/nagasrinu289/" className="text-cyan-600 hover:underline">LeetCode Profile</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
