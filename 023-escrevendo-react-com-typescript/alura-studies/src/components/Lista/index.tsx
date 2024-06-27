import React from 'react';

import style from './lista.module.scss'
import Item from './Item/Item';

import ITarefa from '../../Interface/Itarefa';



interface Props {
  tarefas: Array<ITarefa>;
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

const Lista = ({tarefas, selecionaTarefa}: Props )=> {
  return (
    <aside>
        <h2>Estudos do dia</h2>
        <ul className={style.listaTarefas}>
            {tarefas?.map((i, index) => (
                <Item 
                selecionaTarefa = {selecionaTarefa}
                key={index}
                {...i}
                /> 
            ))}
        </ul>
    </aside>
  )
}

export default Lista;