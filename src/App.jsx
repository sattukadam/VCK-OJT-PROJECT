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
// import Header from './componets/Headers/Header'
// import HomePage from "./pages/HomePage";
// import ContactPage from "./pages/ContactPage";
// import AboutPage from "./pages/AboutPage";
// import CoursesPage from "./pages/CoursesPage";
// import AdmissionsPage from "./pages/AdmissionsPage";
// import NotFoundPage from "./pages/NotFoundPage";
// import ChatbotComponent from "./componets/Chatbot/chatbotComponent";



const App = () =>
{
  return(
    <Router>
      <div className="main-layout">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
           <Route path="/admissions" element={<AdmissionsPage />} />
           <Route path="*" element={<NotFoundPage />} />
        </Routes>
        < ChatbotComponent/>
      </div>
    </Router>
  )
}


// const App = () =>{
//   return(
//     <Router>
//       <div className="main-layout">

// <Header/>
      
//   <Routes>
//            <Route path="/" element={<HomePage />} />
//            <Route path="/contact" element={<ContactPage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/courses" element={<CoursesPage />} />
//             <Route path="/admissions" element={<AdmissionsPage />} />
            
//             <Route path="*" element={<NotFoundPage />} />
           

//         </Routes>
//       < ChatbotComponent/>

//       </div>

      


//     </Router>
//   )
// }
export default App;

