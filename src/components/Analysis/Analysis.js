import React from 'react'
import Navbar from "../Layout/Navbar"
import DeathReports from './DeathReports'
import  '../../stylesheets/Analysis/DeathReports.css'
import Accgraph from './Accgraph'

export default function Analysis(props) {
  return (
    <div>
      <Navbar active={props.active} />
      <DeathReports/>
      <Accgraph/>
    </div>
  )
}
