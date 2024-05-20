import React from 'react';
import './skills.css';

import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { RiBearSmileFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiPostgresql } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";


function Skills() {
  return (
    <section id='skills'>
        <span className='skillTitle'> What I do </span>
        <span className='skillDescription'> My name is <span>Rayen Ben Hassen</span>. I am a professional and enthusiastic full stack developer with a passion for exploring new technologies and solving complex problems. As the owner of <span><a href='https://www.roubly.com' className='link' target="_blank">Roubly Agency</a></span>, I have led numerous projects to success. My primary expertise lies in <span>JavaScript</span>, with a particular affinity for using <span>React, Next.js, TypeScript, and Zustand</span> to build dynamic web applications. I am also proficient in <span>Tailwind CSS, MongoDB, and AWS</span>, which are integral to my development toolkit. Additionally, I have experience working with <span>PHP, MySQL, PostgreSQL, Docker, Git, and Figma</span>. I am a quick learner with a self-driven attitude, always eager to learn and grow. I am available for any job opportunities that align with my skills and interests.
         </span>
         <div className='skillBars'>

            <div className='skillBar'>
                <RiNextjsFill size={25}/>
                <h5>Next js</h5>
            </div>

            <div className='skillBar'>
                <IoLogoJavascript size={25}/>
                <h5>Javascript</h5>
            </div>

            <div className='skillBar'>
                <FaReact size={25}/>
                <h5>React</h5>
            </div>
            <div className='skillBar'>
                <BiLogoTypescript size={25}/>
                <h5>Typescript</h5>
            </div>
            <div className='skillBar'>
                <RiBearSmileFill size={25}/>
                <h5>Zustand</h5>
            </div>
            <div className='skillBar'>
                <RiTailwindCssFill size={25}/>
                <h5>Tailwind</h5>
            </div>
            <div className='skillBar'>
                <SiMongodb size={25}/>
                <h5>Mongodb</h5>
            </div>
            <div className='skillBar'>
                <FaAws size={25}/>
                <h5>AWS</h5>
            </div>
            <div className='skillBar'>
                <SiPhp size={25}/>
                <h5>PHP</h5>
            </div>
            <div className='skillBar'>
                <GrMysql size={25}/>
                <h5>Mysql</h5>
            </div>
            <div className='skillBar'>
                <SiPostgresql size={25}/>
                <h5>Postgresql</h5>
            </div>

            <div className='skillBar'>
                <FaDocker size={25}/>
                <h5>Docker</h5>
            </div>
            <div className='skillBar'>
                <FaGithub size={25}/>
                <h5>Git</h5>
            </div>
            <div className='skillBar'>
                <FiFigma size={25}/>
                <h5>Figma</h5>
            </div>

         </div>
        



    </section>
  )
}

export default Skills