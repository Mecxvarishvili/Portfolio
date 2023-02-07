import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../layouts/header/Header';
import Footer from '../layouts/footer/Footer';
const AnimatedRoutes = ({children}) => {
    const [ mainVisible, setMainVisible ] = useState(true)
    
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ delay: 0.2 }}
        >
            <Header setMainVisible={setMainVisible} />
            <div className="mainCont">
                {mainVisible ?
                <div className="container">
                    {children}
                    <Footer/>
                </div> : <></>
                }
            </div>
        </motion.div>
    );
};

export default AnimatedRoutes;