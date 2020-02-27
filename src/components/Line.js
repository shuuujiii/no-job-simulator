import { Line } from 'react-chartjs-2';
import React, { Component } from 'react'

export default class LineGraph extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            labels: this.props.labels,
        }
    }

    render() {
        const data = {
            labels: this.props.labels,
            datasets: [
                {
                    type: 'line',
                    label: '資産',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(40, 44, 52, 1)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,

                    data: this.props.data,
                }
            ],
        };

        const options = {
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: true,
                        color: 'gray',
                    },
                    scaleLabel: {
                        display: true,
                        labelString: '月'
                    }
                }],
                yAxes: [{
                    display: true,
                    gridLines: {
                        display: true,
                        color: 'gray',
                        zeroLineColor: 'red',

                    },
                    scaleLabel: {
                        display: true,
                        labelString: '資産'
                    }
                }]
            }
        }
        return (
            <div>
                <div style={{ backgroundColor: "#282c34" }}>
                    <h2 className="h2-title">資産推移</h2>
                    <Line data={data} options={options} />
                </div>
            </div>
        )
    }
}

