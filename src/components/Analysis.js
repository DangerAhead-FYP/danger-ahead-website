import React from 'react'
import Navbar from "../components/Navbar"
import Card_Warnings from './Card_Warnings'
import Card_Accidents from './Card_Accidents'

export default function Analysis(props) {
  return (
    <div>
      <Navbar active={props.active} />
      <Card_Warnings />
      <Card_Accidents />
    </div>
  )
}
