
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe'; // Create this component
import Layout from './components/Layout'; // Import the Layout component
import Background from './components/Background';
import Experience from './components/pages/Experience';
import Project from './components/pages/Project';
import Resume from './components/pages/Resume';
import Certificates from './components/pages/Certificates';


function App() {
  return (
    <Router>
      <Background/>

      <Routes>
        <Route path="/" element={<Layout><Hero /></Layout>} />
        <Route path="/about-me" element={<Layout><AboutMe /></Layout>} />
        <Route path="/project" element={<Layout><Project /></Layout>} />
        <Route path="/experience" element={<Layout><Experience /></Layout>} />
        <Route path="/resume" element={<Layout><Resume /></Layout>} />
        <Route path="/certificates" element={<Layout><Certificates /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
