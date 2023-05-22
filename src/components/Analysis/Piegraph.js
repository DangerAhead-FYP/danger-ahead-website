import React from 'react'
import {Doughnut,Pie} from "react-chartjs-2"
import { Chart as ChartJS } from 'chart.js/auto'
import "../../stylesheets/Analysis/Piegraph.css"

export default function Piegraph() {
    return (
        <div>
            <div className="pie-row row">
            
            <br/>
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                    <h4 className="poppins pie-acc-title f-40">Deaths Analysis</h4>
                    <Doughnut
                        className="doughnut pie"
                        data = {{
                        labels: ['No Helmet', 'No SeatBelts', 'Potholes',"No Lights"],
                        datasets: [
                            {
                            label: '# of Votes',
                            data: [20, 40, 15, 25 ],
                            borderWidth: 1,
                            backgroundColor:  [
                                '#ff0000',
                                '#ff5252',
                                '#ff7b7b',
                                '#ffbaba'
                              ],
                            width: 1,
                            beginAtZero:"false"
                        },
                        ],
                        }}
                        height={300}
                        width={300}
                        
                        
                        />
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                    <h4 className="poppins pie-acc-title f-40">Injured Analysis</h4>
                    <Pie
                        className="pie"
                        data = {{
                        labels: ['Carelessness', 'Traffic Problems', 'Helmets',"No Lights"],
                        datasets: [
                            {
                            label: '# of Votes',
                            data: [40, 10, 30, 20 ],
                            borderWidth: 1,
                            backgroundColor:  [
                                '#ff0000',
                                '#ff5252',
                                '#ff7b7b',
                                '#ffbaba'
                              ],
                            width: 1,
                            beginAtZero:"false"
                        },
                        ],
                        }}
                        height={400}
                        width={400}
                        
                        
                        />
                </div>
                
            </div>
        </div>
    )
}
