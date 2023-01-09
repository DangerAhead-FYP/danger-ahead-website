import React from 'react'
import Navbar from "../components/Navbar"
import Card_Warnings from './Card_Warnings'
// import Card from './Card_Accidents'
import Hero from './Hero'

export default function Home(props) {
  return (
    <div>
        <Navbar active={props.active}/>
        <Hero/>
        <Card_Warnings/>
    </div>
  )
}
