import React from "react";
import "./CardProdutos.css";
import { PlusSquareOutlined } from "@ant-design/icons";
import "./CardProdutos.css";

const CardProdutos = (props) => {
  return (
    <div className="componentes">
      <div className="componente">
        <img className="imagens" src={props.imagens} alt={props.alt} />
        <p className="titulo">{props.Titulo}</p>
        <p className="subtitulo">{props.subTitulo}</p>
        <p className="valor">
          {props.valor}
          <PlusSquareOutlined style={{ color: "blue", float: "right" }} />
        </p>
      </div>
    </div>
  );
};

export default CardProdutos;
