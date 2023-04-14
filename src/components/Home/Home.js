import React from 'react'
import Navbar from "../Layout/Navbar"
import Card_Warnings from '../Accidents/Card_Warnings'
import ComingSoon from './ComingSoon'
import Footer from '../Layout/Footer'
// import Card from './Card_Accidents'
import Hero from './Hero'
import RoadAccidentsStatus from './RoadAccidentsStatus'

export default function Home(props) {
  return (
    <div>
        <Navbar active={props.active}/>
        <Hero/>
        <RoadAccidentsStatus/>
        <ComingSoon/>
        <Footer/>
    </div>
  )
}
