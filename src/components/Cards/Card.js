import React from "react";
import { CardContainer, CardFooter, CardContent } from "./style";




function Card (props) {
    const titulo = props.nome
    const preco = props.valor
    const imagem = props.imagem


    
    return (
        <CardContainer>
            <h3>{titulo}</h3>
            <CardContent>    
                 <img width="100px" src={imagem} alt={'ok'}/>   
            </CardContent>
            <CardFooter>
                <h3>Valor: R${preco},00</h3>                
            </CardFooter>
                <button onClick={'produtosNoCarrinho'}>Adicionar ao carrinho</button>
        </CardContainer>
    
    )

    
}

export default Card