import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import { useEffect, useState } from 'react';
import AnimatedRoutes from './components/AnimatedRoutes';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [ isVisible, setVisible ] = useState(true)
  const [ tr, setTr ] = useState("activetr")
  const [ transition, setTransition ] = useState(false)

  const transparent = () => {
    setTr("activetr")
    setTimeout(() => {
      setTr("")
    }, 500)
  }

  const transitionHandler = () => {
    setTransition((current) => !current)
    console.log("handler")
  }

  useEffect(() => {
    transparent()
    console.log(window.location.pathname)
    
  }, [transition])
  
  return (
    <AnimatePresence>
      <div className={"transparent-website " + tr}>
        <Router>
          <Header /* setTransition={transitionHandler} */ setVisible={setVisible} />
            <div className='mainCont'>
              {isVisible ? 
              <div className="container">
                <AnimatedRoutes setTransition={transitionHandler}/>
                 <Footer />
              </div>
               : <></>}
            </div>
        </Router>
      </div>
    </AnimatePresence>
  );
}

export default App;
