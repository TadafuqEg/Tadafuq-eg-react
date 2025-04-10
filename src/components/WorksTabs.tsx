import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from "../../puplic/assets/4.svg"
import img2 from "../../puplic/assets/image (3).png"
import img3 from "../../puplic/assets/image (4).png"
import img4 from "../../puplic/assets/img10.png"
import img5 from "../../puplic/assets/arrow-right.png"
import { AnimatedSection } from '../components/AnimatedSection';

export default function WorksTabs() {
    const [activeTab, setActiveTab] = useState(0);

    const renderContent = () => {
        switch (activeTab) {
            case 0:
                return (
                    <div>
                        <AnimatedSection>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                                <div className='title-img-left work-title-img-left'>
                                    <img src={img2} />
                                    <h5>ERP System</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>
                                <div className='title-img-right work-title-img-right'>
                                    <img src={img3} />
                                    <h5>ERP System</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>

                            </div>
                        </AnimatedSection>
                        <AnimatedSection>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                                <div className='title-img-left'>
                                    <img src={img2} />
                                    <h5>ERP System</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>
                                <div className='title-img-right'>
                                    <img src={img3} />
                                    <h5>ERP System</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>

                            </div>
                        </AnimatedSection>

                    </div>
                );
            case 1:
                return (
                    <div>
                        <AnimatedSection>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                                <div className='title-img-left work-title-img-left'>
                                    <img src={img2} />
                                    <h5>ERP System</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>
                                <div className='title-img-right work-title-img-right'>
                                    <img src={img3} />
                                    <h5>ERP System</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>

                            </div>
                        </AnimatedSection>
                        <AnimatedSection>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                                <div className='title-img-left'>
                                    <img src={img2} />
                                    <h5>ERP System</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>
                                <div className='title-img-right'>
                                    <img src={img3} />
                                    <h5>ERP System</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>

                            </div>
                        </AnimatedSection>

                    </div>
                );
            case 2:
                return (
                    <div>
                        <AnimatedSection>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                                <div className='title-img-left work-title-img-left'>
                                    <img src={img2} />
                                    <h5>ERP System</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>
                                <div className='title-img-right work-title-img-right'>
                                    <img src={img3} />
                                    <h5>ERP System</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>

                            </div>
                        </AnimatedSection>
                        <AnimatedSection>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                                <div className='title-img-left'>
                                    <img src={img2} />
                                    <h5>ERP System</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>
                                <div className='title-img-right'>
                                    <img src={img3} />
                                    <h5>ERP System</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>

                            </div>
                        </AnimatedSection>

                    </div>
                );
            case 3:
                return (
                    <div>
                        <AnimatedSection>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                                <div className='title-img-left work-title-img-left'>
                                    <img src={img2} />
                                    <h5>ERP System</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>
                                <div className='title-img-right work-title-img-right'>
                                    <img src={img3} />
                                    <h5>ERP System</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>

                            </div>
                        </AnimatedSection>
                        <AnimatedSection>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                                <div className='title-img-left'>
                                    <img src={img2} />
                                    <h5>ERP System</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>
                                <div className='title-img-right'>
                                    <img src={img3} />
                                    <h5>ERP System</h5>
                                    <p>
                                        Content Creation is one of our essential services, where we produce engaging and high-quality content
                                        that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                        presence and drive meaningful connections.
                                    </p>
                                </div>

                            </div>
                        </AnimatedSection>

                    </div>
                );

            case 4:
                return (
                    <div>
                    <AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                            <div className='title-img-left work-title-img-left'>
                                <img src={img2} />
                                <h5>ERP System</h5>
                                <p>
                                    Content Creation is one of our essential services, where we produce engaging and high-quality content
                                    that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                    presence and drive meaningful connections.
                                </p>
                            </div>
                            <div className='title-img-right work-title-img-right'>
                                <img src={img3} />
                                <h5>ERP System</h5>
                                <p>
                                    Content Creation is one of our essential services, where we produce engaging and high-quality content
                                    that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                    presence and drive meaningful connections.
                                </p>
                            </div>

                        </div>
                    </AnimatedSection>
                    <AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                            <div className='title-img-left'>
                                <img src={img2} />
                                <h5>ERP System</h5>
                                <p>
                                    Content Creation is one of our essential services, where we produce engaging and high-quality content
                                    that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                    presence and drive meaningful connections.
                                </p>
                            </div>
                            <div className='title-img-right'>
                                <img src={img3} />
                                <h5>ERP System</h5>
                                <p>
                                    Content Creation is one of our essential services, where we produce engaging and high-quality content
                                    that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                    presence and drive meaningful connections.
                                </p>
                            </div>

                        </div>
                    </AnimatedSection>

                </div>
                );

            case 5:
                return (
                    <div>
                    <AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                            <div className='title-img-left work-title-img-left'>
                                <img src={img2} />
                                <h5>ERP System</h5>
                                <p>
                                    Content Creation is one of our essential services, where we produce engaging and high-quality content
                                    that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                    presence and drive meaningful connections.
                                </p>
                            </div>
                            <div className='title-img-right work-title-img-right'>
                                <img src={img3} />
                                <h5>ERP System</h5>
                                <p>
                                    Content Creation is one of our essential services, where we produce engaging and high-quality content
                                    that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                    presence and drive meaningful connections.
                                </p>
                            </div>

                        </div>
                    </AnimatedSection>
                    <AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                            <div className='title-img-left'>
                                <img src={img2} />
                                <h5>ERP System</h5>
                                <p>
                                    Content Creation is one of our essential services, where we produce engaging and high-quality content
                                    that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                    presence and drive meaningful connections.
                                </p>
                            </div>
                            <div className='title-img-right'>
                                <img src={img3} />
                                <h5>ERP System</h5>
                                <p>
                                    Content Creation is one of our essential services, where we produce engaging and high-quality content
                                    that resonates with your audience. From blogs to videos, we craft compelling stories that enhance brand
                                    presence and drive meaningful connections.
                                </p>
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
                <h5 className='our-work'>Works</h5>
            </AnimatedSection>
            <AnimatedSection>
                <div className="tabbs tabbs-2 flex space-x-2 p-2 rounded-xl">
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
                        UX Design
                    </button>


                    <button
                        onClick={() => setActiveTab(3)}
                        className={`duration-300 ${activeTab === 3 ? 'ay' : ''
                            }`}
                    >
                        CRM Marketing
                    </button>

                    <button
                        onClick={() => setActiveTab(4)}
                        className={`duration-300 ${activeTab === 4 ? 'ay' : ''
                            }`}
                    >
                        Digital Marketing
                    </button>

                    <button
                        onClick={() => setActiveTab(5)}
                        className={`duration-300 ${activeTab === 5 ? 'ay' : ''
                            }`}
                    >
                        Market Analysis
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
                        className="pt-6 bg-white rounded-xl"
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
