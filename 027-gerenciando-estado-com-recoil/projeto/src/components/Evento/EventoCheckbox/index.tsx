import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import useAtualizarEvento from '../../../state/hooks/useAtualizarEvento';

const EventoCheckbox: React.FC<{ evento: IEvento}> = ({ evento }) => {

  const atualizaEvento = useAtualizarEvento();

  const AlteraStatus = () => {
    atualizaEvento(evento);
  }

  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={estilos.join(' ')} onClick={() => AlteraStatus()}></i>)
}

export default EventoCheckbox