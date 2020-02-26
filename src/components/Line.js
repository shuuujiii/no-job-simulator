import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            type: 'line',
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            // backgroundColor: 'rgba(75,192,192,0.4)',
            backgroundColor: 'rgba(40, 44, 52, 1)',
            // backgroundColor: '#282c34',
            // borderColor: 'rgba(75,192,192,1)',
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

            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ],
};

const options = {
    scales: {
        xAxes: [{
            display: true,
            gridLines: {
                display: true,
                color: 'gray'
            },
            // scaleLabel: {
            //     display: true,
            //     labelString: 'Month'
            // }
        }],
        yAxes: [{
            display: true,
            gridLines: {
                display: true,
                color: 'gray'
            },
            // scaleLabel: {
            //     display: true,
            //     labelString: 'Value'
            // }
        }]
    }
}

const LineExample = () => {
    return (
        <div style={{ backgroundColor: "#282c34" }}>
            <h2>Line Example</h2>
            <Line data={data} options={options} />
        </div>
    )
}
export default LineExample

