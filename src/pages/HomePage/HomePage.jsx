import NavBar from "../../components/HomePageComponents/NavBar/NavBar";
import HeroSection from "../../components/HomePageComponents/HeroSection/HeroSection";
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page-container" >
      <NavBar />
      <HeroSection />
    </div>
  )
}

export default HomePage