import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const Statistics = () => {
    const topics = useLoaderData().data;
    console.log(topics[0])
    return (
        <div className='flex justify-center items-center my-10'>
            <ResponsiveContainer width="80%" height={400}>
                <LineChart
                    width={500}
                    height={300}
                    data={topics}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="total" />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="total"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;