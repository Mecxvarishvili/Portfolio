import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
const AnimatedRoutes = ({children}) => {
    const location = useLocation()
    // const careers = useLoaderData()

    useEffect(() => {
        // setTransition()
    }, [location.pathname])

    return (
        <motion.div
        initial={{opacity: 0, y: "-100%"}}
        animate={{opacity: 1}}
        exit={{opacity: 0, y: "-100%"}}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedRoutes;