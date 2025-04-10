import { motion } from 'framer-motion';
import img1 from '../../puplic/assets/1.svg'
import img2 from '../../puplic/assets/users.png'
import img3 from '../../puplic/assets/arrow.png'
import img4 from '../../puplic/assets/2.svg'
// import img5 from '../../puplic/assets/2.svg'
// import img6 from '../../puplic/assets/3.svg'
// import img7 from '../../puplic/assets/4.svg'
// import img8 from '../../puplic/assets/5.svg'
// import img9 from '../../puplic/assets/6.svg'
import img10 from '../../puplic/assets/10.svg'
import img11 from '../../puplic/assets/image11.png'
import Tabs from "../components/Tabs"
import FAQ from '../components/Faq';
import Form from "../components/form"
import { AnimatedSection } from '../components/AnimatedSection';

const Home = () => {
  return (
    <div className="home min-h-screen relative overflow-hidden">
      {/* sec-1 */}
      <div className="px-6 sec-1">
        <div className="sec1-content" style={{}}>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=""
          >
          <img src={img1} className='bac-1' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sec1-left"
          >
            <p className="left-p">
              Tadafuq is a digital agency delivering innovative solutions in web design, development, and branding to empower businesses.
            </p>
            <div className="let-work flex justify-between items-center">
              <h3 className="left-h text-white">
                Digital
              </h3>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="left-btn bg-white text-[#0B5394] inline-flex items-center group"
              >
                Let's work
                <span className="ml-2 group-hover:translate-x-1 transition-transform">↗</span>
              </motion.button>
            </div>
            <p className='agency'>Innovation Agency</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 relative sec1-bottom"
          >
            <div className='users flex items-center'>
              <img src={img2} />
              <p>About Us</p>
            </div>
            <p className='bot-p'>
              At Tadafuq, we are a forward-thinking digital agency dedicated to crafting innovative solutions in web design,
              development, and branding. Our mission is to empower businesses with...<a href='#'>see more</a>
            </p>
            <div className='arrow'>
              <div className='arrow-img'>
                <img src={img3} />
              </div>
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


          </div>
          </AnimatedSection>
          </AnimatedSection>
        </div>

      {/* Tabs */}
      <div className='tabs'>
        
        <Tabs />
        
      </div>

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
      <div className='clients pt-5 flex'>
        <img src={img11} />
        <img src={img11} />
        <img src={img11} />
        <img src={img11} />
        <img src={img11} />
        <img src={img11} />
      </div>
      </AnimatedSection>

      {/* Faq */}

      <div className='faq'>
        <FAQ />
      </div>


      {/* form */}
      <AnimatedSection>
        <div className='form'>
          <Form />
        </div>
      </AnimatedSection>



    </div>
  );
};

export default Home;