import React from 'react'
import Navbar from "../components/Navbar"
import Card from './Card'
import Hero from './Hero'

export default function Home(props) {
  return (
    <div>
        <Navbar active={props.active}/>
        <Hero/>
    </div>
  )
}
