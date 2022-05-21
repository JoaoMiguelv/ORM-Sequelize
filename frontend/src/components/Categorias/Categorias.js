import React from "react";
import { useEffect, useState } from "react";
import api from "../../services/api";

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
      <legend>Registros de categorias cadastrados</legend>      
    </div>
  );
}

export default Categorias;