import './App.css';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import { useEffect, useState } from 'react';
import AnimatedRoutes from './components/AnimatedRoutes';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ABOUT_PAGE, CONTACT_PAGE, HOME_PAGE, PROJECTS_PAGE, RESUME_PAGE} from './components/routes'
import Main from './pages/home/Home';
import ProjectsPage from './pages/projects/ProjectsPage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import ResumePage from './pages/resume/ResumePage';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [ isVisible, setVisible ] = useState(true)
  const [ tr, setTr ] = useState("activetr")
  const [ transition, setTransition ] = useState(false)
  const location = useLocation()

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
  function asd () {
    return true
  }
  
  return (
      /* <div className={"transparent-website " + tr}>
          <Header /* setTransition={transitionHandler} * setVisible={setVisible} />
            <div className='mainCont'>
              {isVisible ? 
              <div className="container">
                <AnimatePresence>
                <Routes location={location} key={location.pathname} >
                  <Route index exact path={HOME_PAGE} loader={asd()} element={<AnimatedRoutes children={<Main/>} />} />
                  <Route path={ABOUT_PAGE} element={<AnimatedRoutes children={<AboutPage />} />} />
                  <Route path={PROJECTS_PAGE} element={<AnimatedRoutes children={<ProjectsPage/>} />} />
                  <Route path={RESUME_PAGE} element={<AnimatedRoutes children={<ResumePage />} />} />
                  <Route path={CONTACT_PAGE} element={<AnimatedRoutes children={<ContactPage />} />} />
                </Routes>
                 <Footer />
                </AnimatePresence>
              </div>
               : <></>}
            </div>
      </div> */
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname} >
          <Route index exact path={HOME_PAGE} loader={asd()} element={<AnimatedRoutes children={<Main/>} />} />
          <Route path={ABOUT_PAGE} element={<AnimatedRoutes children={<AboutPage />} />} />
          <Route path={PROJECTS_PAGE} element={<AnimatedRoutes children={<ProjectsPage/>} />} />
          <Route path={RESUME_PAGE} element={<AnimatedRoutes children={<ResumePage />} />} />
          <Route path={CONTACT_PAGE} element={<AnimatedRoutes children={<ContactPage />} />} />
        </Routes>
      </AnimatePresence>
  );
}

export default App;
