import React from 'react'
import Hero from '../components-temp/Hero'
import FeaturedDestination from '../components-temp/FeaturedDestination'
import ExclusiveOffers from '../components-temp/ExclusiveOffers'
import Testimonial from '../components-temp/Testimonial'
import NewsLetter from '../components-temp/NewsLetter'
import RecommendedHotels from '../components-temp/RecommendedHotels'
const Home=()=>{
    return(
        <>
            <Hero/>
            <RecommendedHotels/>
            <FeaturedDestination/>
            <ExclusiveOffers />
            <Testimonial/>
            <NewsLetter/>
        </>
    )
}
export default Home