import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/menu/Main';
import ProjectsPage from './pages/projects/ProjectsPage';
import { Home, Projects} from './components/routes'
import Header from './layouts/header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path={Home} element={<Main/>} />
          <Route path={Projects} element={<ProjectsPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
