import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import Particles from '../design/design.js';

function Intro() {
  return (
    <>
    <Particles/>
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Rayen</span><br/> Full-Stack Developer </span>
            <p className='introPara'>
                I'am a skilled Full-Stack Developer with experience in creating<br/> visually appealing and user friendly websites. 
            </p>
            <button className='btn' onClick={() =>{ 
            document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
            <img className='btnImg' src={btnImg} alt="hireme"  /> <span className='hiremee'>Hire Me</span></button>
            
        </div>


        <img className='bg' src={bg} alt="profinle" />


    </section>
    </>
  )
}

export default Intro