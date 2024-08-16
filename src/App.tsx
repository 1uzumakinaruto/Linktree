
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe'; // Create this component
import Layout from './components/Layout'; // Import the Layout component
import Background from './components/Background';

function App() {
  return (
    <Router>
      <Background/>
      <Routes>
        <Route path="/" element={<Layout><Hero /></Layout>} />
        <Route path="/about-me" element={<Layout><AboutMe /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
