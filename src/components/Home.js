import React from 'react'
import Navbar from "../components/Navbar"
import Hero from './Hero'

export default function Home(props) {
  return (
    <div>
        <Navbar active={props.active}/>
        <Hero/>
    </div>
  )
}
