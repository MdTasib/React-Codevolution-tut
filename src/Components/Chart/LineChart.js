import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sales for 2020 (M)',
                data: [3, 2, 2, 1, 5],
                borderColor: ['rgba(51,255,204,0.2)'],
                backgroundColor: ['rgba(51,255,204,0.2)'],
                pointBorderColor: ['rgba(51,255,204,0.2)'],
                pointBackground: ['rgba(51,255,204,0.2)'],
            },
            {
                label: 'Sales for 2019 (M)',
                data: [1, 3, 2, 2, 3],
                borderColor: ['rgba(255,51,51,0.2)'],
                backgroundColor: ['rgba(255,51,51,0.2)'],
                pointBorderColor: ['rgba(255,51,51,0.2)'],
                pointBackground: ['rgba(255,51,51,0.2)'],
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Line Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 6,
                        stepSize: 1
                    }
                }
            ]
        }
    }

    return (
        <div style={{ width: '50%', margin: '0 auto' }}>
            <Line data={data} options={options} />
        </div>
    );
}

export default LineChart;