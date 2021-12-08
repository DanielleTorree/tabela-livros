import React from "react";

const TabelaBody = (props) => {
    return ( 
        <>
            <tbody>
                {props.livros.map((valor) => (
                    <tr key={valor.id}>
                        <td>{valor.id}</td>
                        <td>{valor.titulo}</td>
                        <td>{valor.autor}</td>
                        <td>
                            <button 
                                className="botao remover"
                                onClick={() => props.removerLinha(valor.id)}    
                            >Remover</button>
                        </td>
                    </tr>
                ))}      
            </tbody>
        </>
    );
}

export default TabelaBody;