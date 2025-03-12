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
const App = () => {
  return (
    <div>
      <Header></Header>
      {/* <SearchBar></SearchBar>
      <Navbar></Navbar> */}
      <HeaderMain></HeaderMain>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <TrustedUniversities></TrustedUniversities>
      <Courses></Courses>
      <LearnAndEarn></LearnAndEarn>
     <HirePartner></HirePartner>
      <Mentor></Mentor>
      <ExUniver></ExUniver>
      <CarrerTran></CarrerTran>
      <WeaningNews></WeaningNews>
      <SuccessStories></SuccessStories>
      <FreAskQuestion></FreAskQuestion>
      <Footer></Footer>
    </div>
  )
}

export default App