import styled from "styled-components";

export const AccordionContent = styled.div`
    width: 100%;
`

export const Header = styled.div`
    padding-inline: 0.5rem;
    margin-inline: auto;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    border-radius: 8px;


    h3 {
        font-size: 0.625rem;
        font-weight: bold;
        line-height: 1.4; 
         color: ${props => props.theme["gray-500"]} ;
        text-transform: uppercase;
    }
    &:hover{
        background: ${props => props.theme["gray-200"]};
    }
`


export const HeaderStatus = styled.div`
    display: flex;
    align-items: center;
    svg {   
       color: ${props => props.theme["gray-400"]};
    }

`

export const ContentHide = styled.div`
    overflow: hidden;
    max-height: 0;
    transform-origin: top; 
    /* transition: max-height 0.2s ease; */
    transition: all 0.2s ease;
`

export const Content = styled.div `
    overflow: hidden;
    max-height: 300px;
    transition: all 0.2s ease;

`






// const shrink = keyframes `
//     1% { 
//         -moz-transform: translateY(-100%); 
//         -webkit-transform: translateY(-100%); 
//         -webkit-transform: translateY(-100%); 
//         }
//     1% { 
//     } 
// ` 

