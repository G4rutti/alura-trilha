import React from 'react'
import { useDadosProfissionais } from '../../hooks/useDadosProfissionais'
import Card from './Card/Card'
import styled from 'styled-components'

const SecaoCard = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`

const Avaliacao = () => {
    const profissionais = useDadosProfissionais()
    return (
        <SecaoCard>
            {profissionais?.map(profissionais => (
                <Card profissional={profissionais}/>
            ))}
        </SecaoCard>
    )
}

export default Avaliacao