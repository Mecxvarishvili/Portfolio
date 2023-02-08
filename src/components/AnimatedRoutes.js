import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../layouts/header/Header';
import Footer from '../layouts/footer/Footer';
const AnimatedRoutes = ({children}) => {
    const [ animation, setAnimation ] = useState(true)
    const [ animate, setAnimate ] = useState(true)
    const [ mainVisible, setMainVisible ] = useState(true)
    const [ bar, setBar ] = useState("hideBar")
    const firstRenderRef = useRef(true)

    
    const handleBar = () => {
        if(bar === "visibleBar") {
            setBar("hideBar")
        } else {
            setBar("visibleBar")
        }
    }

    useEffect(() => {
        if (firstRenderRef.current) {
          firstRenderRef.current = false;
        } else {
            setAnimate(false)
            setTimeout(() => {setAnimate(true);  handleBar(); setMainVisible((c) => !c)}, 100)
            console.log("action")
        }
        
    }, [animation])

    const variants = {
        start: {
            opacity: 0,
            transition: {delay: .1}
        },
        stop: {
            opacity: 1,
            transition: {delay: .1}

        },
    }
    
    return (
        <motion.div
            variants={variants}
            initial={{opacity: 0}}
            animate={animate ? "stop" : "start"}
            exit={{opacity: 0}}
            transition={{delay: .1}}
        >
            <Header viewBar={bar} setBar={setBar} setAnimation={setAnimation} setMainVisible={setMainVisible} />
            <div className="mainCont">
                {mainVisible &&
                <div className="container">
                    {children}
                    <Footer/>
                </div>
                }
            </div>
        </motion.div>
    );
};

export default AnimatedRoutes;