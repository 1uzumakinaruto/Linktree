import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar'; // Import the Sidebar component
import { RightSidebar } from './RightSidebar';

interface LayoutProps {
  children: ReactNode; // Define the type for children
}

function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isAboutMe = location.pathname === '/about-me';
  const isProject = location.pathname === '/project';
  const isExperience = location.pathname === '/experience';
  const isResume = location.pathname === '/resume';
  const isCertificates = location.pathname === '/certificates';


  return (
    <div>
      {!isResume && !isCertificates && !isExperience && !isProject && !isAboutMe && <RightSidebar />}
      {!isResume && !isCertificates && !isExperience && !isProject && !isAboutMe && <Sidebar />} {/* Conditionally render the Sidebar */}
      {!isResume && !isCertificates && !isExperience && !isProject && !isAboutMe && <Header />} {/* Conditionally render the Header */}
      <main>{children}</main>
      {!isResume && !isCertificates && !isExperience && !isProject && !isAboutMe && <Footer />} {/* Conditionally render the Footer */}
      
    </div>
  );
}

export default Layout;
