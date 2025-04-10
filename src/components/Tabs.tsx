import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from "../../puplic/assets/4.svg"
import img2 from "../../puplic/assets/image (3).png"
import img3 from "../../puplic/assets/image (4).png"
import img4 from "../../puplic/assets/img10.png"
import img5 from "../../puplic/assets/arrow-right.png"
import { AnimatedSection } from '../components/AnimatedSection';

export default function Tabs() {
    const [activeTab, setActiveTab] = useState(0);

    const renderContent = () => {
        switch (activeTab) {
            case 0:
                return (
                    <div>
                        <AnimatedSection>
                            <div className='title-img'>
                                <img src={img1} />
                                <h5>Web Design & Development</h5>
                                <p>
                                    Web Design & Development is one of our core services, where we create visually stunning,
                                    user-friendly websites tailored to meet your business needs. From concept to launch, we
                                    ensure a seamless and engaging online experience.
                                </p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                                <div className='title-img-left'>
                                    <img src={img2} />
                                    <h5>Content Creation</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>
                                <div className='title-img-right'>
                                    <img src={img3} />
                                    <h5>UX Design</h5>
                                    <p>
                                        UX Design is one of our key services, where we focus on creating intuitive and seamless user experiences.
                                        By understanding user behavior and needs, we design digital interfaces that are both functional and
                                        visually appealing, ensuring satisfaction and engagement.
                                    </p>
                                </div>

                            </div>
                        </AnimatedSection>
                        <AnimatedSection>
                            <div className='title-img-bottom'>
                                <img src={img4} />
                                <h5>Web Design & Development</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae, tempora ut sequi animi placeat
                                    assumenda doloremque repellendus adipisci, cupiditate nisi quas
                                </p>
                                <div className='cover'>
                                    <a className='duration-300' href='#'>
                                        <div>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                className="circle"
                                            >
                                                <a href='#'>
                                                    <span className="group-hover:translate-x-1 transition-transform"><img src={img5} /></span>
                                                </a>
                                            </motion.button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <AnimatedSection>
                            <div className='title-img'>
                                <img src={img1} />
                                <h5>Web Design & Development</h5>
                                <p>
                                    Web Design & Development is one of our core services, where we create visually stunning,
                                    user-friendly websites tailored to meet your business needs. From concept to launch, we
                                    ensure a seamless and engaging online experience.
                                </p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                                <div className='title-img-left'>
                                    <img src={img2} />
                                    <h5>Content Creation</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>
                                <div className='title-img-right'>
                                    <img src={img3} />
                                    <h5>UX Design</h5>
                                    <p>
                                        UX Design is one of our key services, where we focus on creating intuitive and seamless user experiences.
                                        By understanding user behavior and needs, we design digital interfaces that are both functional and
                                        visually appealing, ensuring satisfaction and engagement.
                                    </p>
                                </div>

                            </div>
                        </AnimatedSection>
                        <AnimatedSection>
                            <div className='title-img-bottom'>
                                <img src={img4} />
                                <h5>Web Design & Development</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae, tempora ut sequi animi placeat
                                    assumenda doloremque repellendus adipisci, cupiditate nisi quas
                                </p>
                                <div className='cover'>
                                    <a className='duration-300' href='#'>
                                        <div>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                className="circle"
                                            >
                                                <a href='#'>
                                                    <span className="group-hover:translate-x-1 transition-transform"><img src={img5} /></span>
                                                </a>
                                            </motion.button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <AnimatedSection>
                            <div className='title-img'>
                                <img src={img1} />
                                <h5>Web Design & Development</h5>
                                <p>
                                    Web Design & Development is one of our core services, where we create visually stunning,
                                    user-friendly websites tailored to meet your business needs. From concept to launch, we
                                    ensure a seamless and engaging online experience.
                                </p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                                <div className='title-img-left'>
                                    <img src={img2} />
                                    <h5>Content Creation</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>
                                <div className='title-img-right'>
                                    <img src={img3} />
                                    <h5>UX Design</h5>
                                    <p>
                                        UX Design is one of our key services, where we focus on creating intuitive and seamless user experiences.
                                        By understanding user behavior and needs, we design digital interfaces that are both functional and
                                        visually appealing, ensuring satisfaction and engagement.
                                    </p>
                                </div>

                            </div>
                        </AnimatedSection>
                        <AnimatedSection>
                            <div className='title-img-bottom'>
                                <img src={img4} />
                                <h5>Web Design & Development</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae, tempora ut sequi animi placeat
                                    assumenda doloremque repellendus adipisci, cupiditate nisi quas
                                </p>
                                <div className='cover'>
                                    <a className='duration-300' href='#'>
                                        <div>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                className="circle"
                                            >
                                                <a href='#'>
                                                    <span className="group-hover:translate-x-1 transition-transform"><img src={img5} /></span>
                                                </a>
                                            </motion.button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <AnimatedSection>
                            <div className='title-img'>
                                <img src={img1} />
                                <h5>Web Design & Development</h5>
                                <p>
                                    Web Design & Development is one of our core services, where we create visually stunning,
                                    user-friendly websites tailored to meet your business needs. From concept to launch, we
                                    ensure a seamless and engaging online experience.
                                </p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                                <div className='title-img-left'>
                                    <img src={img2} />
                                    <h5>Content Creation</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>
                                <div className='title-img-right'>
                                    <img src={img3} />
                                    <h5>UX Design</h5>
                                    <p>
                                        UX Design is one of our key services, where we focus on creating intuitive and seamless user experiences.
                                        By understanding user behavior and needs, we design digital interfaces that are both functional and
                                        visually appealing, ensuring satisfaction and engagement.
                                    </p>
                                </div>

                            </div>
                        </AnimatedSection>
                        <AnimatedSection>
                            <div className='title-img-bottom'>
                                <img src={img4} />
                                <h5>Web Design & Development</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae, tempora ut sequi animi placeat
                                    assumenda doloremque repellendus adipisci, cupiditate nisi quas
                                </p>
                                <div className='cover'>
                                    <a className='duration-300' href='#'>
                                        <div>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                className="circle"
                                            >
                                                <a href='#'>
                                                    <span className="group-hover:translate-x-1 transition-transform"><img src={img5} /></span>
                                                </a>
                                            </motion.button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="tabs-content">
            <AnimatedSection>
                <h5 className='our-work'>Our Work</h5>
            </AnimatedSection>
            <AnimatedSection>
                <div className="tabbs flex space-x-2 p-2 rounded-xl">
                    <button
                        onClick={() => setActiveTab(0)}
                        className={`duration-300 ${activeTab === 0 ? 'ay' : ''
                            }`}
                    >
                        ERP System
                    </button>

                    <button
                        onClick={() => setActiveTab(1)}
                        className={`duration-300 ${activeTab === 1 ? 'ay' : ''
                            }`}
                    >
                        Graphics & Motion
                    </button>

                    <button
                        onClick={() => setActiveTab(2)}
                        className={`duration-300 ${activeTab === 2 ? 'ay' : ''
                            }`}
                    >
                        Market Analysis
                    </button>

                    <button
                        onClick={() => setActiveTab(3)}
                        className={`duration-300 ${activeTab === 3 ? 'ay' : ''
                            }`}
                    >
                        CRM Marketing
                    </button>
                </div>
            </AnimatedSection>

            <div className="mt-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="p-4 bg-white rounded-xl shadow-md"
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
