import React from "react";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Tabela from "../Tabelas/CategoriasTabela.js";

import './Categorias.css'


function Categorias() {

  const [categorias, setCategorias] = useState([])

  useEffect(()=>{
    api.get('categorias')
      .then(response=> setCategorias(response.data))
  }, []
  )

  return (
    <div id="idCategorias" className="categorias">
      <div id="corpo_rel" className="tabelaParams"></div>
        <Tabela dados = {categorias} registros = {categorias.length}
        ></Tabela>
        
    </div>
  );
}

export default Categorias;