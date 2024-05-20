import React from 'react';
import './work.css';
import hbibna from '../../assets/hbibna.png';
import portfolio from '../../assets/portfolio.png';
import roubly from '../../assets/roubly.png';


function works() {
  return (
    <section id='works'>
        <div className='worksSlog'>MY WORK</div>
        <div className='worksTitle'>Projects.</div>
        <div className='worksDesc'>The following projects reflect my ability to solve complex problems, work with different technologies, and manage projects effectively.</div>
        <div className='worksAll'>

            <a href="https://hbibna.roubly.com" target='_blank'>
                <div className='workBox'>
                    <img className='workBoxImg' src={hbibna} alt='' />
                    <div className='workBoxTitle'><a href='https://www.hbibna.com/' target='_black'>Hbibna.com</a></div>
                    <div className='workBoxDesc'>e-commerce website </div>
                    <div className='workBoxHachtag'>
                        <div className='workBoxHachtag1'>#HTML</div>
                        <div className='workBoxHachtag2'>#CSS</div>
                        <div className='workBoxHachtag3'>#JavaScript</div>
                        <div className='workBoxHachtag4'>#Php</div>
                        <div className='workBoxHachtag5'>#Sql</div>
                    </div>
                </div>
            </a>

            <a href="https://rayenbenhassen.com" target='_blank'>
                <div className='workBox'>
                    <img className='workBoxImg' src={portfolio} alt='' />
                    <div className='workBoxTitle'><a href='www.rayenbenhassen.com/' target='_black'>Rayen Benhassen.com</a></div>
                    <div className='workBoxDesc'>My portfolio website </div>
                    <div className='workBoxHachtag'>
                        <div className='workBoxHachtag1'>#React</div>
                        <div className='workBoxHachtag2'>#CSS</div>
                    </div>
                </div>
            </a>

            <a href="https://roubly.com" target='_blank'>
                <div className='workBox'>
                    <img className='workBoxImg' src={roubly} alt='' />
                    <div className='workBoxTitle'><a href='www.Roubly.com/' target='_black'>Roubly.com</a></div>
                    <div className='workBoxDesc'> Agency website </div>
                    <div className='workBoxHachtag'>
                        <div className='workBoxHachtag1'>#Nextjs</div>
                        <div className='workBoxHachtag2'>#Mongodb</div>
                        <div className='workBoxHachtag3'>#Zustand</div>
                        <div className='workBoxHachtag4'>#Docker</div>
                        <div className='workBoxHachtag5'>#Tailwind</div>
                    </div>
                </div>
            </a>

            

            

            

        </div>
    </section>
  )
}

export default works