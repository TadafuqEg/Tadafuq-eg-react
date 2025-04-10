import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import img1 from "../../puplic/assets/img12.png";
import "../index.css"
import Form from '../components/form';
import img2 from "../../puplic/assets/img13.png"
import img3 from "../../puplic/assets/img14.png"
import img4 from "../../puplic/assets/img15.png"
import img5 from "../../puplic/assets/8.svg"
import WorksTabs from '../components/WorksTabs';

const Works = () => {
  return (
    <div className='works'>
      <div className='work relative overflow-hidden'>
        <img className='work-abs' src={img5} />
        <div className='works-sec1'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <img src={img1} />
          </motion.div>
        </div>
        <div className="new-user">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <div className="users-numbers">
              <span>4500+</span>
              <p>New Users</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <div className="users-imgs flex">
              <img className="img-1" src={img2} />
              <img className="img-2" src={img3} />
              <img className="img-3" src={img4} />
            </div>
          </motion.div>
        </div>
        <h4 className="works-h">Our Works</h4>
      </div>
      {/* Works-tabs */}
      <div className='works-tabs'>
        <WorksTabs />
      </div>
      {/* form */}
      <AnimatedSection>
        <div className='works-form'>
          <Form />
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Works;