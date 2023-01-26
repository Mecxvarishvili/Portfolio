import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/home/Home';
import ProjectsPage from './pages/projects/ProjectsPage';
import { ABOUT_PAGE, CONTACT_PAGE, HOME_PAGE, PROJECTS_PAGE, RESUME_PAGE} from './components/routes'
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import ResumePage from './pages/resume/ResumePage';
import { useState } from 'react';

function App() {
  const [ isVisible, setVisible ] = useState(true)
  
  return (
    <Router>
      <Header setVisible={setVisible} />
        <div className='mainCont'>
          {isVisible ? 
          <div className="container">
            <Routes>
              <Route exact path={HOME_PAGE} element={<Main/>} />
              <Route path={ABOUT_PAGE} element={<AboutPage />} />
              <Route path={PROJECTS_PAGE} element={<ProjectsPage/>} />
              <Route path={RESUME_PAGE} element={<ResumePage />} />
              <Route path={CONTACT_PAGE} element={<ContactPage />} />
            </Routes>
             <Footer />
          </div>
           : <></>}
        </div>
    </Router>
  );
}

export default App;
