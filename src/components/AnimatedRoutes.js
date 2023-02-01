import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ABOUT_PAGE, CONTACT_PAGE, HOME_PAGE, PROJECTS_PAGE, RESUME_PAGE} from './routes'
import Main from '../pages/home/Home';
import ProjectsPage from '../pages/projects/ProjectsPage';
import AboutPage from '../pages/about/AboutPage';
import ContactPage from '../pages/contact/ContactPage';
import ResumePage from '../pages/resume/ResumePage';

const AnimatedRoutes = ({setTransition}) => {
    const location = useLocation()

    /* useEffect(() => {
        setTransition()

    }, [location.pathname]) */

    return (
        <Routes location={location} key={location.pathname} >
          <Route exact path={HOME_PAGE} element={<Main/>} />
          <Route path={ABOUT_PAGE} element={<AboutPage />} />
          <Route path={PROJECTS_PAGE} element={<ProjectsPage/>} />
          <Route path={RESUME_PAGE} element={<ResumePage />} />
          <Route path={CONTACT_PAGE} element={<ContactPage />} />
        </Routes>
    );
};

export default AnimatedRoutes;