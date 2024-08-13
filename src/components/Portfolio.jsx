import React from 'react';
import pythonIcon from '../assets/python.png';
import htmlIcon from '../assets/html.png'
import cssIcon from '../assets/css.png'
import jsIcon from '../assets/javascript.png'
import reactIcon from '../assets/react.png'
import TailwindIcon from '../assets/tailwind.png'
import nodeIcon from '../assets/node.png'
import expressIcon from '../assets/express.png'
import fastapiIcon from '../assets/fastapi.png'
import mongodbIcon from '../assets/mongodb.png'
import sqlIcon from '../assets/sql.png'
import gitIcon from '../assets/git.png'
import linuxIcon from '../assets/linux.png'
import vscodeIcon from '../assets/vscode.png'
import mailIcon from '../assets/about/mail.png'
import githubIcon from '../assets/about/image.png';
import linkedIcon from '../assets/about/linkedin.png';
import leetcodeIcon from '../assets/about/leetcode.png';
import codechefIcon from '../assets/about/codechef.png';


const Portfolio = () => {
  return (
    <div className="bg-slate-100 min-h-screen p-6">
      <header className="bg-cyan-500 p-4 rounded-md shadow-md mb-6">
        <h1 className="text-4xl font-bold text-white text-center">Challari Naga Srinu</h1>
        <p className="text-center text-white mt-2">Full Stack Developer</p>
      </header>

      <section>
        <div className='flex justify-center'>
        <a href="mailto:email@example.com" target="_blank"><img src={mailIcon} alt="Python Icon" className="w-10 h-10 bg-gray-50 border-gray-400 mr-2" /></a>
        <a href="https://github.com/nagasrinu289" target="_blank"><img src={githubIcon} alt="Python Icon" className="w-10 h-10 bg-gray-50 border-gray-400 mr-2" /></a>
        <a href="https://www.linkedin.com/in/challari-naga-srinu-5a55b2280/" target="_blank"><img src={linkedIcon} alt="Python Icon" className="w-10 h-10 bg-gray-50 border-gray-400 mr-2" /></a>
        <a href="https://leetcode.com/u/nagasrinu289/" target="_blank"><img src={leetcodeIcon} alt="Python Icon" className="w-10 h-10 bg-gray-50 border-gray-400 mr-2" /></a>
        <a href="https://www.codechef.com/users/nagasrinu289" target="_blank"><img src={codechefIcon} alt="Python Icon" className="w-10 h-10 bg-gray-50 border-gray-400 mr-2" /></a>


      </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">Projects</h2>
        
        <div className="bg-white p-4 rounded-md shadow-md mb-4">
          <h3 className="text-xl font-semibold">E-commerce Website</h3>
          <p>Collaborated to develop a Product Shopping Website to provide an online platform for users to browse, search, and purchase products.</p>
          <p>Technologies used: React.js, Node.js, Express.js, MongoDB</p>
          <a href="https://shopping-app-sooty-three.vercel.app/" className="text-cyan-600">Live URL</a> | <a href="https://github.com/nagasrinu289/Ecommerce" className="text-cyan-600">GitHub Repo</a>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold">Grocery List Website</h3>
          <p>Developed a Grocery List application with user authentication to manage grocery items efficiently.</p>
          <p>Technologies used: React.js, Node.js, Express.js, MongoDB</p>
          <a href="https://grocery-listapp.vercel.app/" className="text-cyan-600">Live URL</a> | <a href="https://github.com/nagasrinu289/groceryListapp" className="text-cyan-600">GitHub Repo</a>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">Skills</h2>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold">Programming</h3>
          <div className="flex items-center">
            <img src={pythonIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />
          </div>

          <h3 className="text-xl font-semibold mt-4 mb-4">Frontend</h3>
          <div className='flex gap-2'>
          <img src={htmlIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />
          <img src={cssIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />
          <img src={jsIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />
          <img src={reactIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />
          <img src={TailwindIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />

          </div>
          <h3 className="text-xl font-semibold mt-4">Backend</h3>
          <div className='flex mt-4 gap-4'>
          <img src={nodeIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />
          <img src={expressIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />
          <img src={fastapiIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />

          </div>

          <h3 className="text-xl font-semibold mt-4">Database</h3>
          <div className='flex gap-4 mt-5'>
          <img src={mongodbIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />
          <img src={sqlIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />

          </div>

          <h3 className="text-xl font-semibold mt-4">Others</h3>
          <div className='flex gap-4 mt-4'>
          <img src={gitIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />
          <img src={linuxIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />
          <img src={vscodeIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />

          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">Education</h2>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold">B.Tech in Computer Science</h3>
          <p>Sasi Institute of Technology and Engineering (8.1 CGPA)</p>
          <p>Nov 2021 - Ongoing</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md mt-4">
          <h3 className="text-xl font-semibold">Intermediate in MPC</h3>
          <p>Aditya Junior College (96.8%)</p>
          <p>Jun 2019 - Mar 2021</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md mt-4">
          <h3 className="text-xl font-semibold">Secondary School of Education</h3>
          <p>Nava Jyothi E.M. High School (9.5 CGPA)</p>
          <p>2019</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">Achievements</h2>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold">Competitive Programming</h3>
          <p>Solved 300+ problems on CodeChef, achieving a 2-star rating. Current rating: 1480.</p>
          <p>Solved 100+ problems on LeetCode, with a rating of 1500+.</p>
          <a href="https://www.codechef.com/users/nagasrinu289" className="text-cyan-600">CodeChef Profile</a> | <a href="https://leetcode.com/u/nagasrinu289/" className="text-cyan-600">LeetCode Profile</a>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
