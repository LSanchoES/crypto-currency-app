import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

export const ChartComponent = (items) => {

    let data =  items.items.items.history
    let grafico = []   
    data.map(datos => (grafico.push({ uv: parseFloat(datos).toFixed(4)})));


    // console.log(grafico)
        // const data = [{ uv: 400}, { uv: 4040}, { uv: 4003}, ]

		const renderLineChart = (
			<LineChart className="grafico" width={400} height={400} data={grafico}>
				<Line type="monotone" dataKey="uv" stroke="#8884d8" />
				<CartesianGrid stroke="#ccc" />
				<XAxis />
				<YAxis />
			</LineChart>
		);
        
        return <>{renderLineChart}</>;
    };
