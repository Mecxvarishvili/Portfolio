import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../layouts/header/Header';
import Footer from '../layouts/footer/Footer';
const AnimatedRoutes = ({children}) => {
    const location = useLocation()
    // const careers = useLoaderData()

    useEffect(() => {
        // setTransition()
    }, [location.pathname])

    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <Header />
            <div className="mainCont">
                <div className="container">
                    {children}
                    <Footer/>
                </div>
            </div>
        </motion.div>
    );
};

export default AnimatedRoutes;