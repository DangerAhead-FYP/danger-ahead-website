import React from 'react'
import Navbar from "../components/Navbar"

export default function Analysis(props) {
  return (
    <div>
      <Navbar active={props.active}/>
    </div>
  )
}
