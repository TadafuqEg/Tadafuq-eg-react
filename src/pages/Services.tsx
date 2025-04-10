import { motion } from 'framer-motion';
import img1 from "../../puplic/assets/6.svg"
import img2 from "../../puplic/assets/img20.png"
import img3 from "../../puplic/assets/img19.png"
import img4 from "../../puplic/assets/2.svg"
import { AnimatedSection } from '../components/AnimatedSection';
import Form from "../components/form"

const Services = () => {
  return (
    <div className='services'>
      <div className='services1'>
        <div className='services-sec1'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <img src={img1} />
          </motion.div>

          <div className='services-text'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=""
            >
              <h5>Transforming Ideas into<br /> Reality with Innovative<br /> Technology Solutions.</h5>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=""
            >
              <p>
                We offer a comprehensive range of services, including UI/UX design, software development,
                and technology consulting, tailored to meet your unique needs and drive innovation.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
      {/* why choose us */}
      <AnimatedSection>
      <div className='why-choose'>
        <h5>Why Choose Us?</h5>
        <p>
          At Tadafuq, we are a forward-thinking digital agency dedicated to crafting innovative solutions in web design, development,
          and branding. Our mission is to empower businesses with impactful digital experiences that drive growth and success. With
          creativity and expertise, we turn ideas into reality.
        </p>
        <AnimatedSection>
        <img src={img2} />
        </AnimatedSection>
      </div>
      </AnimatedSection>
      {/* our services */}
      <AnimatedSection>
      <div className='our-services'>
        <h5 className='our-h'>Services</h5>
        <p className='our-p'>
          At Tadafuq, we are a forward-thinking digital agency dedicated to crafting innovative solutions in web design,
          development, and branding. Our mission is to empower businesses with impactful digital experiences that drive
          growth and success. With creativity and expertise, we turn ideas into reality.
        </p>
        <AnimatedSection>
        <div className='our-services-content flex'>
          <div className='services-content-left'>
            <img src={img2} />
            <h5>Content Creation</h5>
            <p>
              Content Creation is one of our essential services, where we produce engaging and high-quality content that resonates
              with your audience. From blogs to videos, we craft compelling stories that enhance brand presence and drive meaningful
              connections.
            </p>
          </div>
          <div className='services-content-right'>
            <div className='services-right-top'>
              <img src={img2} />
              <h5>Content Creation</h5>
              <p>
                Content Creation is one of our essential services, where we produce engaging and high-quality content that
                resonates with your audience.
              </p>
            </div>
            <div className='services-right-bottom flex'>
              <h5>Our<br /> Services</h5>
              <img src={img3} />
            </div>
          </div>
        </div>
        </AnimatedSection>
      </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className='we-cards'>

          <div className='we-card' style={{ height: "470px" }}>
            <img src={img2} />
            <h5>ERP System</h5>
            <p style={{ fontSize: "17px", fontWeight: "400" }}>Content Creation is one of our essential services, where we produce engaging and high-quality content that resonates with your audience.</p>
          </div>
          <div className='we-card' style={{ height: "470px" }}>
            <img src={img2} />
            <h5>ERP System</h5>
            <p style={{ fontSize: "17px", fontWeight: "400" }}>Content Creation is one of our essential services, where we produce engaging and high-quality content that resonates with your audience.</p>
          </div>
          <div className='we-card' style={{ height: "470px" }}>
            <img src={img2} />
            <h5>ERP System</h5>
            <p style={{ fontSize: "17px", fontWeight: "400" }}>Content Creation is one of our essential services, where we produce engaging and high-quality content that resonates with your audience.</p>
          </div>
          <div className='we-card' style={{ height: "470px" }}>
            <img src={img2} />
            <h5>ERP System</h5>
            <p style={{ fontSize: "17px", fontWeight: "400" }}>Content Creation is one of our essential services, where we produce engaging and high-quality content that resonates with your audience.</p>
          </div>
          <div className='we-card' style={{ height: "470px" }}>
            <img src={img2} />
            <h5>ERP System</h5>
            <p style={{ fontSize: "17px", fontWeight: "400" }}>Content Creation is one of our essential services, where we produce engaging and high-quality content that resonates with your audience.</p>
          </div>
          <div className='we-card' style={{ height: "470px" }}>
            <img src={img2} />
            <h5>ERP System</h5>
            <p style={{ fontSize: "17px", fontWeight: "400" }}>Content Creation is one of our essential services, where we produce engaging and high-quality content that resonates with your audience.</p>
          </div>


        </div>
      </AnimatedSection>

      {/* form */}
      <AnimatedSection>
        <div className='form'>
          <Form />
        </div>
      </AnimatedSection>
    </div >
  );
};

export default Services;