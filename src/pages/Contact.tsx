import { motion } from 'framer-motion';
import Form from "../components/form"
import img1 from "../../puplic/assets/9.svg"
import { AnimatedSection } from '../components/AnimatedSection';
import img10 from '../../puplic/assets/10.svg'
import img11 from '../../puplic/assets/image11.png'

const Contact = () => {
  return (
    <div className='contact'>
      <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=""
          >
      <div className='contact-sec1'>
        
        <img src={img1} />
        
        <h5>LET’S <span>GET IN</span> TOUCH</h5>
      </div>
      </motion.div>

      {/* latest Clients */}
      <AnimatedSection>
      <div className='latest'>
        <p>
          Our latest clients at Tadafuq trust us to deliver cutting-edge digital solutions that elevate their online presence
          and drive business growth.
        </p>
        <div className='latest-flex flex'>
          <h5>LATEST CLIENTS</h5>
          <img src={img10} />
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="left-btn bg-white text-[#0B5394] inline-flex items-center group"
          >
            <a href='#'>
              Let's work
              <span className="ml-2 group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </motion.button>
        </div>
      </div>
      </AnimatedSection>

      {/* clients */}
      <AnimatedSection>
      <div style={{marginBottom:"50px"}} className='clients pt-5 flex'>
        <img src={img11} />
        <img src={img11} />
        <img src={img11} />
        <img src={img11} />
        <img src={img11} />
        <img src={img11} />
      </div>
      </AnimatedSection>


      {/* form */}
      <AnimatedSection>
        <div className='form'>
          <Form />
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact;