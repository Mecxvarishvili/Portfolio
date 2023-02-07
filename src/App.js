import './App.css';
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
  const location = useLocation()
  return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname} >
          <Route path={HOME_PAGE} element={<AnimatedRoutes children={<Main/>} />} />
          <Route path={ABOUT_PAGE} element={<AnimatedRoutes children={<AboutPage />} />} />
          <Route path={PROJECTS_PAGE} element={<AnimatedRoutes children={<ProjectsPage/>} />} />
          <Route path={RESUME_PAGE} element={<AnimatedRoutes children={<ResumePage />} />} />
          <Route path={CONTACT_PAGE} element={<AnimatedRoutes children={<ContactPage />} />} />
        </Routes>
      </AnimatePresence>
  );
}

export default App;
