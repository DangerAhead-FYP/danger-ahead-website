import React from 'react'
import Navbar from "../components/Navbar"
import Maps from './Maps'
export default function Accidents(props) {
  return (
    <div>
      <Navbar active={props.active} />
      <Maps />
    </div>
  )
}
