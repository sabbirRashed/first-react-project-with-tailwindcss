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
        
        const average = ((student.physics + student.chemistry + student.mathematics) / 3).toFixed(2);
        student.avg = average;
        return student;
    })
    console.log(marksChartsData);
    return (
        <div >
            <h2 className='text-2xl text-center p-2 border-b-2 border-b-primary md:max-w-80 mx-auto mb-8'>(Practice Task 2)</h2>
            <BarChart style={{ width: '100%', maxWidth: '800px', maxHeight: '40vh', aspectRatio: 1.618 }} responsive data={marksChartsData}>
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