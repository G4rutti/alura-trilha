import React from "react";
import style from "./botao.module.scss";


const Botao = ({texto, type = "button", onClick}: {texto: string, type?: "button" | "submit" | "reset" | undefined, onClick?: () => void}) => {
  return (
    <button onClick={onClick} className={style.botao} type={type}>
      {texto}
    </button>
  )
}


export default Botao;