import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import CoursesPage from "./Pages/CoursesPage";
import AdmissionsPage from "./Pages/AdmissionsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import ChatbotComponent from "./Components/Chatbot/ChatbotComponent";

 import "./styles/pages.css";
import DeveloperInfoPopup from "./Components/DeveloperInfo/DeveloperInfoPopup";
import { useState } from "react";

const App = () =>
{
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <>
    <Router>
      <div> 
        <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Satish Bhausaheb kadam"
          studentPhotoUrl="/images/my image.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
        <Header/>
        <div className="main-layout">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
           <Route path="/admissions" element={<AdmissionsPage />} />
           <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </div>
        < ChatbotComponent/>
      </div>
      
    </Router>
    </>
  )
}
export default App;

