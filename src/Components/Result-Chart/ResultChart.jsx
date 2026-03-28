import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const ResultChart = () => {

    const studentsResult = [
        { "id": 1, "name": "Rahim", "math": 85, "chemistry": 78, "physics": 82 },
        { "id": 2, "name": "Karim", "math": 75, "chemistry": 85, "physics": 69 },
        { "id": 3, "name": "Ayesha", "math": 92, "chemistry": 88, "physics": 91 },
        { "id": 4, "name": "Fatima", "math": 98, "chemistry": 84, "physics": 86 },
        { "id": 5, "name": "Hasan", "math": 70, "chemistry": 72, "physics": 68 },
        { "id": 6, "name": "Nusrat", "math": 95, "chemistry": 90, "physics": 93 },
        { "id": 7, "name": "Jamal", "math": 60, "chemistry": 65, "physics": 63 },
        { "id": 8, "name": "Salma", "math": 82, "chemistry": 79, "physics": 85 },
        { "id": 9, "name": "Imran", "math": 77, "chemistry": 74, "physics": 76 },
        { "id": 10, "name": "Tania", "math": 89, "chemistry": 86, "physics": 88 }
    ]
    return (
        <div>
            <LineChart className='mt-28' width={1000} height={400} data={studentsResult}>
            <Tooltip></Tooltip>
            <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>
            <Line dataKey={"math"}></Line>
            <Line dataKey={"chemistry"} stroke='#F13E93'></Line>
            <Line dataKey={"physics"} stroke='#000000'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;