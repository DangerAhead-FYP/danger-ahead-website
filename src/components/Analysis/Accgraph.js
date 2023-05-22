import React from 'react'
import {Bar} from "react-chartjs-2"
import { Chart as ChartJS } from 'chart.js/auto'
import "../../stylesheets/Analysis/Accgraph.css"
export default function Accgraph() {
  return (
    <div>
      <h4 className="poppins acc-title f-40">Accidents in 2022</h4>
      <br/>
      <Bar 
        className="bar"
        data = {{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
            label: '# of Votes',
            data: [12875, 19457, 347536, 575842, 212547, 336258,12425, 194758, 31423, 51254, 26325, 30047],
            borderWidth: 1,
            backgroundColor: '#E6432D',
            width: 1,
            beginAtZero:"false"
          },
        ],
        }}
        height={400}
        width={400}
        options={{
          maintainAspectRatio:false,
          scales: {
            y: {
                suggestedMin: 10000,
                suggestedMax: 70000
            }
        }
        }}
        
        />
      

    </div>
  )
}

