import React from "react"
import { IVenda } from "../Context/DataContext"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"



const dadosGraficos = [
    {
        data: '2023-05-03',
        pago: 3000,
        processando: 2000,
        falha: 1000,
    },
    {
        data: '2023-01-02',
        pago: 5000,
        processando: 7000,
        falha: 2000,
    }
]
const GraficoVendas = ({data}: {data: IVenda}) => {


    return (
        <ResponsiveContainer width={"99%"} height={400}>
            <LineChart 
        width={400}
        height={400}
        data={dadosGraficos}
        
        >
            <XAxis dataKey="data" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5"/>
            <Line type="monotone" dataKey="pago" stroke="#ff7300" strokeWidth={3}/>
            <Line type="monotone" dataKey="processando" stroke="#387908" strokeWidth={3}/>
            <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3}/>
        </LineChart>
    
        </ResponsiveContainer>
        
        
    )
}


export default GraficoVendas