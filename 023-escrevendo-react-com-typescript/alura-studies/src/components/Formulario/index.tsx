import React from "react";
import Botao from "../Botao";

import style from "./formulario.module.scss"
import ITarefa from "../../Interface/Itarefa";

import { v4 as uuidV4 } from "uuid";

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<Array<ITarefa>>>
}> {

    state = {
        tarefa: "",
        tempo: "00:00"
    };

    addTarefa(e: React.FormEvent): void {
        e.preventDefault();

        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, 
            {...this.state,
                selecionado: false,
                completado: false,
                id: uuidV4()
            }
        ]);
        this.setState({ ...this.state, tempo: "00:00:00", tarefa: "" });


    }

    render(): React.ReactNode {
        return (
            <form className={style.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar"
                        value={this.state.tarefa}
                        onChange={(e) => this.setState({ ...this.state, tarefa: e.target.value })}
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        value={this.state.tempo}
                        onChange={(e) => this.setState({ ...this.state, tempo: e.target.value })}
                        required />
                </div>
                <Botao
                    type="submit"
                    texto="Adicionar"
                />
            </form>
        )
    }
}

export default Formulario;