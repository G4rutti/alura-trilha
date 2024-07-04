import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { useDadosProfissionais } from '../../hooks/useDadosProfissionais'
import { useDadosConsulta } from '../../hooks/useDadosConsultas';
import { useDadosGraficos } from '../../hooks/useDadosGrafico';
import { IDados } from '../../interfaces/IDados';
import styled from 'styled-components';

const SectionEstilizada = styled.section`
    background-color: var(--branco);
    border-radius: 16px;
`

const Grafico = () => {
    const profissionais = useDadosProfissionais();
    const consultas = useDadosConsulta();
    const dados: Array<IDados> = useDadosGraficos({ profissionais, consultas })
    return (
        <SectionEstilizada>
            <ResponsiveContainer width={"100%"} height={350}>
                <BarChart layout='vertical' data={dados} margin={{ top: 25, right: 40, left: 40, bottom: 20 }}>
                    <XAxis type="number"></XAxis>
                    <YAxis type='category' dataKey={"nome"}></YAxis>
                    <Bar dataKey={"consultas"} fill='#083860' barSize={30}></Bar>
                </BarChart>
            </ResponsiveContainer>
        </SectionEstilizada>
    )
}

export default Grafico