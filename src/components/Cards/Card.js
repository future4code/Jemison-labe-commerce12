import React from "react";
import styled from "styled-components"
import { CardContainer, CardFooter, CardContent } from "./style";

function Card (props) {
    const titulo = (props.nome)
    const preco = (props.preco)
    
    
    return (
        <CardContainer>
            <CardContent>
                 <h3>{titulo}</h3>    
                 <h2 src={props.img} alt={'ok'}/>   
            </CardContent>
            <CardFooter>
                <h3>{preco}</h3>
            </CardFooter>
        </CardContainer>
    
    )

    
}

export default Card