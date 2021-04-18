import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function DoughnutChart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sales for 2020 (M)',
                data: [3, 2, 2, 1, 5],
                backgroundColor: [
                    'red',
                    'yellow',
                    'blue',
                    'green',
                    'cyan'
                ],
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Doughnut Chart'
        }
    }

    return (
        <div style={{ width: '50%', margin: '0 auto' }}>
            <Doughnut data={data} options={options} />
        </div>
    );
}

export default DoughnutChart;