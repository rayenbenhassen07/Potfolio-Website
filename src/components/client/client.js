import React from 'react';
import './client.css';
import client1 from '../../assets/client1.png'
import client2 from '../../assets/zaid.png'
import client3 from '../../assets/client3.png'

function Client() {
  return (
    <section id='clients'>
        <div className='clientsSlog'>WHAT OTHERS SAY</div>
        <div className='clientsTitle'>Testimonials.</div>
        <div className='clientBoxs'>

            <div className='clientBox'>
                 <div className='clientBoxPn'>"</div>
                 <div className='clientBoxTitle'>Incredible work as always. Rayen is an incredible developer and human being. Always working hard.</div>
                 <div className='clientBoxInfo'>
                    <div className='clientBoxInfoTT'>
                        <div className='clientBoxInfoTitle'><span>@</span> Loujain Tkitek</div>
                        <div className='clientBoxInfoSlog'>Client of Upwork Inc.</div>
                    </div>
                    <img className='' src={client3} alt=''/>

                 </div>
            </div>

            <div className='clientBox'>
                 <div className='clientBoxPn'>"</div>
                 <div className='clientBoxTitle'>Rayen is an exceptional developer, known for their unwavering work ethic and consistent delivery of outstanding results. Collaborating with Rayen is always a pleasure.</div>
                 <div className='clientBoxInfo'>
                    <div className='clientBoxInfoTT'>
                        <div className='clientBoxInfoTitle'><span>@</span> Zaid Dridi</div>
                        <div className='clientBoxInfoSlog'>Client of Upwork Inc.</div>
                    </div>
                    <img className='' src={client2} alt=''/>
                    
                 </div>
            </div>

            <div className='clientBox'>
                 <div className='clientBoxPn'>"</div>
                 <div className='clientBoxTitle'>Rayen is a standout developer and a dedicated professional, consistently exceeding expectations with their exceptional work ethic and results-driven approach.</div>
                 <div className='clientBoxInfo'>
                    <div className='clientBoxInfoTT'>
                        <div className='clientBoxInfoTitle'><span>@</span> Youssef Ben Hassine</div>
                        <div className='clientBoxInfoSlog'>Client of Upwork Inc.</div>
                    </div>
                    <img className='' src={client1} alt=''/>

                 </div>
            </div>

        </div>

    </section>
  )
}

export default Client