import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import HeavenDestinations from './component/HeavenDestinations/HeavenDestinations'
import CustomisedTravellers from './component/CustomisedTravellers/CustomisedTravellers'
import TripSwipper from './component/TripSwipper/TripSwipper'
import PopularDestination from './component/PopularDestination/PopularDestination'
import WhyUs from './component/WhyUs/WhyUs'
import TestimonialCard from './component/Testimonals/TestimonalCard'
import Packages from './component/Packages/Packages'
import Footer from './component/Footer/Footer'
import Faq from './component/FAQ/Faq'
import AnimatedWrapper from '../Animatedwrapper'
import ReligiousTourPackages from './component/Religious/ReligiousTourPackages'

const Homepage = () => {
  return (
    <div>
    <Hero />
    <AnimatedWrapper type="fadeRight"><HeavenDestinations /></AnimatedWrapper>
    <AnimatedWrapper type="zoomIn"><CustomisedTravellers /></AnimatedWrapper>
    <AnimatedWrapper type="flip"><TripSwipper /></AnimatedWrapper>
    <AnimatedWrapper type="fadeLeft"><PopularDestination /></AnimatedWrapper>
    <AnimatedWrapper type="fadeRight"><ReligiousTourPackages/></AnimatedWrapper>
    <AnimatedWrapper type='fadeDown'><TestimonialCard /></AnimatedWrapper>
    <AnimatedWrapper type="flip"><Faq /></AnimatedWrapper>
    <AnimatedWrapper type="zoomIn"><Packages /></AnimatedWrapper>
    
  </div>
  )
}

export default Homepage
