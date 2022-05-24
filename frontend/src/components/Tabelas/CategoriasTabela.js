import React from "react";

export default function Tabela(props){



    function getLinhas(){
        const arrayDados = props.dados;



        return arrayDados.map((item, i) => {
            <tr>
                <td>{item.id}</td>
                <td>{item.cat_descricao}</td>
                
            </tr>
        })
    }
    return (
        <div className="tabela">
            <table id="tablea" className="table table-hover">
                <thead id="cabecalho_rel">
                    <tr style={{textAling: 'left'}}>
                        <th scope="col">CÓDIGO</th>
                        <th scope="col">DESCRIÇÃO</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas}
                </tbody>
            </table>

        </div>
    )
    
    
}
