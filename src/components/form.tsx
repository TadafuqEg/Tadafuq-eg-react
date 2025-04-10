import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <div className="form flex items-center justify-center">
      <h2 className="form-h">LET’S <br /><span>GET IN</span> <br />TOUCH</h2>
      <div className="inputs p-10 rounded-2xl relative overflow-hidden">
        <form className="space-y-6 form-inputs">
          <div>
            <input type="text" placeholder='Full Name' className="w-full bg-transparent border-b outline-none" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <input type="email" placeholder='E-mail' className="w-full bg-transparent border-b outline-none" />
            </div>
            <div>
              <input type="tel" placeholder='Phone' className="w-full bg-transparent border-b outline-none" />
            </div>
          </div>
          <div>
            <input type="text" placeholder='Message' className="w-full bg-transparent border-b outline-none" />
          </div>
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center border border-#E8E8E8 text-white py-3 rounded-full text-lg mt-4 hover:bg-white hover:text-black transition"
          >
            Submit Message <span className="message ml-2">→</span>
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
