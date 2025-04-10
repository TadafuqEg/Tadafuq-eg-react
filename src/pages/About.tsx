import { motion } from 'framer-motion';
import img1 from "../../puplic/assets/arrow-right2.png"
import img2 from "../../puplic/assets/img19.png"
import img3 from "../../puplic/assets/img18.png"
import img4 from "../../puplic/assets/2.svg"
import img40 from "../../puplic/assets/img13.png"
import img5 from "../../puplic/assets/img14.png"
import img6 from "../../puplic/assets/img15.png"
import img7 from "../../puplic/assets/users.png"
import img8 from "../../puplic/assets/14.svg"
import img9 from "../../puplic/assets/img25.png"
import img10 from "../../puplic/assets/image (3).png"
import img11 from "../../puplic/assets/image (4).png"
import { AnimatedSection } from '../components/AnimatedSection';
import Form from "../components/form"

const About = () => {
  return (
    <div className='about'>
      <div className='about-sec1 flex'>
        <div className='about-left'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <div className='left-top'>
              <p>We craft innovative digital solutions that transform ideas into exceptional experiences.</p>
              <img src={img1} />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <div className='left-bottom'>
              <div className="left-bottom-h flex">
                <h5>Our Services</h5>
                <img src={img2} />
              </div>
              <div className="group-imgs">
                <img src={img3} />
              </div>
            </div>
          </motion.div>
        </div>
        <div className='about-right'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <div className='rigth-top'>
              <div className="right-top-users flex">
                <div className="about-users">
                  <h5>4500+</h5>
                  <p>New Users</p>
                </div>
                <div className="about-users-imgs relative flex">
                  <img className="about-img1" src={img40} />
                  <img className="about-img2" src={img5} />
                  <img className="about-img3" src={img6} />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <div className='right-bottom'>
              <div className="about-us flex">
                <img src={img7} />
                <h5>About Us</h5>
              </div>
              <p>
                At Tadafuq Information Technology, we specialize in delivering cutting-edge technology solutions designed to simplify
                and enhance everyday experiences. As a dynamic and innovative company, we bring together a team of passionate professionals
                dedicated to creating user-centered designs, intuitive applications, and impactful digital products. <br /><br />

                Whether you're a startup looking to establish your digital presence or a large enterprise in need of scalable systems,
                Tadafuq is your trusted partner for transformative technology. Let's innovate, collaborate, and shape the future together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* what we do */}
      <div className='what-we'>
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }} // Controls how and when the animation triggers
            className="we-do"
          >
            <div className='we-left'>
              <p className='we-h'>What we do?</p>
              <p className='we-p'>
                At Tadafuq, we craft user-focused web designs, develop robust websites, and build impactful brand identities.
                Our mission is to empower businesses with innovative digital solutions that drive growth.
              </p>
            </div>
            <div className='we-right'>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="we-btn bg-white text-[#0B5394] inline-flex items-center group"
              >
                Explore Services
                <span className="ml-2 group-hover:translate-x-1 transition-transform">↗</span>
              </motion.button>
            </div>
          </motion.div>
          <AnimatedSection>
            <div className='we-cards'>

              <div className='we-card'>
                <img src={img4} />
                <h5>Web Design & Development</h5>
                <p>Web Design & Development is one of our core services, where we create visually stunning, user-friendly websites tailored to meet your business needs. From concept to launch, we ensure a seamless and engaging online experience.</p>
              </div>

              <div className='we-card'>
                <img src={img4} />
                <h5>UX Design</h5>
                <p>UX Design is one of our key services, where we focus on creating intuitive and seamless user experiences. By understanding user behavior and needs, we design digital interfaces that are both functional and visually appealing, ensuring satisfaction and engagement.</p>
              </div>

              <div className='we-card'>
                <img src={img4} />
                <h5>ERP System</h5>
                <p>ERP System is one of our core services, where we provide businesses with integrated solutions to streamline operations, improve efficiency, and enhance decision-making. Our ERP systems help manage resources, finances, inventory, and more, all in one seamless platform.</p>
              </div>

              <div className='we-card'>
                <img src={img4} />
                <h5>E-commerce Marketing</h5>
                <p>E-commerce Marketing is one of our key services, where we help online businesses drive traffic, increase conversions, and maximize sales. Through targeted strategies, we optimize product listings, run effective ad campaigns, and enhance the overall shopping experience.</p>
              </div>

              <div className='we-card'>
                <img src={img4} />
                <h5>Digital Marketing</h5>
                <p>Digital Marketing is one of our key services, where we help businesses reach their target audience through strategic online campaigns. We optimize your digital presence to drive traffic, engagement, and conversions across various platforms.</p>
              </div>

              <div className='we-card'>
                <img src={img4} />
                <h5>Content Creation</h5>
                <p>Content Creation is one of our essential services, where we produce engaging and high-quality content that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand presence and drive meaningful connections.</p>
              </div>
              <div className='we-card'>
                <img src={img4} />
                <h5>E-commerce Marketing</h5>
                <p>E-commerce Marketing is one of our key services, where we help online businesses drive traffic, increase conversions, and maximize sales. Through targeted strategies, we optimize product listings, run effective ad campaigns, and enhance the overall shopping experience.</p>
              </div>

              <div className='we-card'>
                <img src={img4} />
                <h5>Digital Marketing</h5>
                <p>Digital Marketing is one of our key services, where we help businesses reach their target audience through strategic online campaigns. We optimize your digital presence to drive traffic, engagement, and conversions across various platforms.</p>
              </div>

              <div className='we-card'>
                <img src={img4} />
                <h5>Content Creation</h5>
                <p>Content Creation is one of our essential services, where we produce engaging and high-quality content that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand presence and drive meaningful connections.</p>
              </div>


            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
      {/* Our Mission */}
      <AnimatedSection>
        <div className='our-mission'>
          <AnimatedSection>
            <img src={img8} />
          </AnimatedSection>
          <div className='our-mission-text'>
            <AnimatedSection>
              <h5>Our Mission</h5>
            </AnimatedSection>
            <AnimatedSection>
              <p>
                We aim to empower businesses by creating meaningful connections between brands and their audiences. By combining creativity
                with technology, we help our clients stand out, engage, and grow in an ever-evolving digital landscape.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Our vission */}
      <AnimatedSection>
        <div className='our-vission'>
          <div className='our-vission-text'>
            <AnimatedSection>
              <h5>Our Vision</h5>
            </AnimatedSection>
            <AnimatedSection>
              <p>
                To lead the future of technology innovation by crafting seamless digital experiences that empower businesses, inspire
                creativity, and connect people to limitless possibilities. We strive to be a trusted global partner, shaping a smarter
                and more connected world through user-centered solutions and cutting-edge technologies.
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection>
            <img src={img9} />
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* why-choose-us */}
      <AnimatedSection>
        <div className='about-choose'>
          <h5 className='choose-h'>Why Choose Us?</h5>
          <p className='choose-p'>
            At Tadafuq, we are a forward-thinking digital agency dedicated to crafting innovative solutions in web design, development,
            and branding. Our mission is to empower businesses with impactful digital experiences that drive growth and success. With
            creativity and expertise, we turn ideas into reality.
          </p>
          <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <div className='title-img-left'>
              <img src={img10} />
              <h5>Client-Centric Approach</h5>
              <p style={{fontSize:"24px"}}>
              Your success is our priority. We listen, collaborate, and adapt to ensure every project meets your goals.
              </p>
            </div>
            <div className='title-img-right'>
              <img src={img11} />
              <h5>Proven Results</h5>
              <p style={{fontSize:"24px"}}>
              With a track record of delivering impactful solutions, we’re trusted by businesses of all sizes to achieve real outcomes.
              </p>
            </div>

          </div>
          </AnimatedSection>
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

export default About;