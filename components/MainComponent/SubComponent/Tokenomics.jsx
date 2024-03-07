"use client"

import { useEffect } from "react"
import { Chart } from "chart.js";

function Tokenomics() {

  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [80, 20],
                borderColor: [
                  "rgb(	0, 130, 255)",
                  "rgb(250,160,2)"
                ],
                backgroundColor: [
                  "rgb(	0, 130, 255)",
                  "rgb(250,160,2)"
                ],
                borderWidth: 4,
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    display: false,
                }],
                yAxes: [{
                    display: false,
                }],
            }
        },

    });
}, [])
      
  return (
    <div className="h-full">
            <h1 className="text-black text-2xl font-bold mb-4">Tokenomics</h1>

            <div>
                  <h1 className="text-black text-lg font-bold mb-4">Initial Distribution</h1>
            </div>

            <div className="flex items-center my-6">

                  <div className="lg:w-[300px] flex items-center">
                        <canvas id='myChart'></canvas>
                  </div>
                  <div>
                        <div className="flex items-center">         
                          <div className="bg-[#0082FF] w-3 h-3 rounded-full mr-1.5"></div>
                          <h1>Crowdsale investors: 80%</h1>
                        </div>
                        <div className="flex items-center">
                          <div className="bg-[#FAA002] w-3 h-3 rounded-full mr-1.5"></div>
                          <h1>Foundation: 20%</h1>
                        </div>
                  </div>
            </div>

            <div>
                  <p>Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.</p>
            </div>
    </div>
  )
}

export default Tokenomics