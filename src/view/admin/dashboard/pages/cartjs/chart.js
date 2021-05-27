import React from 'react';
import { Chart, registerables } from 'chart.js';

import { get } from './../../../../../lib/axios.js';


class chart extends React.Component{

        async componentDidMount(){

            var getMhs = await get(`${process.env.REACT_APP_BASE_URL}api/mhs-statistik`);

            console.log(getMhs)

            var crnYears = new Date().getFullYear(); 

            var ctx = document.getElementById('myChart').getContext('2d');
            
            Chart.register(...registerables)
            
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: getMhs.data.label,

                    datasets: [{
                        label: 'Mahasiswa',
                        data: getMhs.data.mahasiswa,
                        backgroundColor: [
                            '#add8e6'
                        ],
                        borderColor: [
                            '#add8e6'
                        ],
                        borderWidth: 1,
                        fill: true,
                    }]
                },

                options: {
                    responsive: true,
                    interaction: {
                      mode: 'index',
                      intersect: false
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

        }

    
    render(){
        return (
                <canvas id="myChart" width="100%"></canvas>
       )
    }
}

export default chart;