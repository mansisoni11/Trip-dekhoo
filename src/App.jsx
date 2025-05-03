
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './Homepage'
import Details from './component/DestinationComman/Details'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import Allpackages from './component/DestinationComman/Allpackages'
import MoodDetails from './component/TripSwipper/MoodDetails'
import ExpandedCustomised from './component/CustomisedTravellers/ExpandedCustomised'


function App() {


  return (
    <>
   
    <BrowserRouter>
 <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/packages/:destination" element={<Details />} />
      <Route path="/mood/:moodName" element={<MoodDetails />} />
      <Route path="/cotravellers/:moodName" element={<ExpandedCustomised />} />
      <Route path="/packages/:destination/:packages" element={<Allpackages />} />
      <Route path="*" element={<h2 className="text-center mt-5">404 - Page Not Found</h2>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
