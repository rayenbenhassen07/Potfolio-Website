import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import facbookicon from '../../assets/facebook-icon.png' 
import twittreicon from '../../assets/twitter.png' 
import youtubeicon from '../../assets/youtube.png' 
import instagramicon from '../../assets/instagram.png'



function Contact() {

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_291lnow', 'template_svyjlcr', form.current, 'EvTd51Pw74-6JZm8A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
        <h1 className='contactTitle'>Contact Me</h1>
        <div className='contactSlog'>Please fill out the form below to dicuss any work opportunities</div>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name="user_name"  required/>
            <input type='email' className='email' placeholder='Your Email' name="user_email" required/>
            <textarea className='msg' rows='5' placeholder='Your Message' name="message"></textarea>
            <button type="submit" value="Send" className='button-85'>Send Message</button>
        </form>
            <div className='links'>
                <a href='https://www.facebook.com/profile.php?id=100038322585073' target='_black'><img src={facbookicon} alt='facebook' className='link'/></a>
                <a href='https://twitter.com/RayenBenhassen' target='_black'><img src={twittreicon} alt='twitter' className='link'/></a>
                <a href='https://www.youtube.com/@znous5896/featured' target='_black'><img src={youtubeicon} alt='youtube' className='link'/></a>
                <a href='https://www.instagram.com/rayenbenhassen12/' target='_black'><img src={instagramicon} alt='instagram' className='link'/></a>

            </div>
        

    </section>
  )
}

export default Contact