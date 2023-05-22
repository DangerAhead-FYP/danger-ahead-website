import React from 'react'
import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"
import DeathReports from './DeathReports'
import  '../../stylesheets/Analysis/DeathReports.css'
import Accgraph from './Accgraph'
import Piegraph from './Piegraph'

export default function Analysis(props) {
  return (
    <div>
      <Navbar active={props.active} />
      <DeathReports/>
      <div>
      <div className="col-10 m-auto">
        <Accgraph/>
      </div>
      </div>
      <Piegraph/>
      <Footer/>
    </div>
  )
}
