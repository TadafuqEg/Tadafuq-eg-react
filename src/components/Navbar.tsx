import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, Info, BookOpen, Phone, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../../puplic/assets/Logo.png';
import arrow from '../../puplic/assets/arrow-right.png';

const navItems = [
  { path: '/', name: 'Home'},
  // , icon: <Home className="w-5 h-5" /> 
  { path: '/about', name: 'About'},
  { path: '/services', name: 'Services'},
  { path: '/works', name: 'Works' },
  { path: '/contact', name: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed nav">
      <div className="pp">
        <div className="plus flex justify-between items-center">
          {/* logo */}
          <div className="nav-logo flex items-center">
            <motion.h1 
              className="text-2xl font-bold text-indigo-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href='/'><img src={img1} alt='logo' style={{width:"240px" , height:"70px"}}/></a>
            </motion.h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center menu-items">
            
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `ittems flex items-center transition-colors duration-200
                  ${isActive ? 'act' : ''}`
                }
              >
                {/* {item.icon} */}
                <span className=''>{item.name}</span>
              </NavLink>
            ))}
          </div>
          {/* contact-btn */}
          <div className='contact-us flex items-center'>
          <motion.h1 
              className="text-2xl font-bold text-indigo-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
            <a className='flex items-center' href='/contact-us'>
              <button>Contact Us</button> 
              <img src={arrow} alt='arrow-right' style={{width:"32px" , height:"32px"}} />
            </a>
            </motion.h1>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium
                      ${isActive
                        ? 'text-indigo-600 bg-indigo-50'
                        : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                      }`
                    }
                  >
                    {/* {item.icon} */}
                    <span>{item.name}</span>
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;