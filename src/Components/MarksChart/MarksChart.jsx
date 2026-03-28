import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {

    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;
    

    // data processing------------
    const marksChartsData = marksData.map(studentData => {
        const student = {
            id : studentData.id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            mathematics: studentData.marks.math,
        }
        
        const average = (student.physics + student.chemistry + student.mathematics) / 3;
        student.avg = average;
        return student;
    })
    console.log(marksChartsData);
    return (
        <div className='mt-28'>
            <BarChart width={1000} height={300} data={marksChartsData}>
            <Tooltip></Tooltip>
            <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>
            <Bar dataKey={"avg"} fill='#91D06C'></Bar>
            <Bar dataKey={"chemistry"} fill='blue'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;