import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";

export const ChartComponent = (items) => {
	let data = items.items.items.history;
	let grafico = [];
	data.map((datos) => grafico.push({ uv: parseFloat(datos).toFixed(4) }));

	// console.log(grafico)
	// const data = [{ uv: 400}, { uv: 4040}, { uv: 4003}, ]

	return (
		<ResponsiveContainer width="100%" height="100%">
			<LineChart className="grafico" data={grafico} >
				<Line type="monotone" dataKey="uv" stroke="#8884d8" dot={true} />
				<CartesianGrid stroke="#ccc" />
				<XAxis />
				<YAxis tickCount={1000}/>
			</LineChart>
			</ResponsiveContainer>
			
	);
};
