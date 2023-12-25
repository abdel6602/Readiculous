import React from 'react';
import { PieChart, Pie, Cell} from 'recharts';

const DonutChart = ({ percentage }) => {
    const data = [
        { name: 'Done', value: percentage },
        { name: 'Remaining', value: 100 - percentage },
    ];
    const COLORS = ['#00BFFF', '#eee']; // Blue for 'Done', grey for 'Remaining'

    // Custom label component
    const renderCustomLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, percent, index
    }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius + 10; // Label outward offset
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        
        return (
            <text x={x} y={y} fill="#333" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <PieChart width={300} height={300}>
            <Pie
                data={data}
                cx={150}
                cy={150}
                labelLine={false}
                label={renderCustomLabel}
                outerRadius={100}
                innerRadius={70}
                fill="#8884d8"
                dataKey="value"

            >
                {
                    data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))
                }
            </Pie>
        </PieChart>
    );
};

export default DonutChart;
