import React from 'react'
import Footer from './pages/Footer'
import FreAskQuestion from './pages/FreAskQuestion'
import SuccessStories from './pages/SuccessStories'
import WeaningNews from './pages/WeaningNews'
import CarrerTran from './pages/CarrerTran'
import ExUniver from './pages/ExUniver'
import Mentor from './pages/Mentor'
import HirePartner from './pages/HirePartner'
import LearnAndEarn from './pages/LearnAndEarn'
import Courses from './pages/Course'
import TrustedUniversities from './pages/TrustedUniversities'
import StatsSection from './pages/StatsSection'
import Header from './pages/Header'
import SearchBar from './pages/SearchBar'
import Navbar from './pages/Navbar'
import Banner from './pages/Banner'
import HeaderMain from './pages/HeaderMain'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registation'
import LogPage from './pages/LogPage'
import WeAreConsultig from './pages/WeAreConsultig'
import FooterNav from './pages/FooterNav'
import Course2 from './pages/Course2'
import ReadyToUp from './pages/ReadyToUp'
const App = () => {

    return (
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <HeaderMain />
          
          <main className="flex-grow">
            <Routes>
              //header routing
              <Route path="/registation" element={<Registration />} />
              <Route path="/login" element={<LogPage></LogPage>} />
              <Route path="/university1" element={<Course2></Course2>} />
              <Route path="/course" element={<Courses></Courses>} />
              <Route path="/" element={
                <>
                  <Banner/>
                  <StatsSection/>
                  <TrustedUniversities/>
                  <Courses/>
                
                  <LearnAndEarn />
                  <HirePartner />
                  <WeAreConsultig></WeAreConsultig>
                  <Mentor />
                  <ExUniver />
                  <CarrerTran />
                  <WeaningNews />
                  <SuccessStories />
                  <ReadyToUp></ReadyToUp>
                  <FreAskQuestion />
                </>
              } />
            </Routes>
          </main>
          <FooterNav></FooterNav>
          <Footer />
         
        </div>
      </Router>
  )
}

export default App