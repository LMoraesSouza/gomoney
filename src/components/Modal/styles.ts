import styled, { css } from "styled-components";

interface ModalProps {
    display: boolean
}


export const ModalDiv = styled.div`
    z-index: 5;
    min-width: 400px;
    
`

export const BluredBackground = styled.div<ModalProps>`
    ${props => {
        if(!props.display){
            return css`
                visibility: hidden;
            `
        }
    }};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalHeader = styled.div`
    background-color: ${props => props.theme["gray-050"]};
    padding: 2rem 2rem 1.5rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 16px 16px 0 0;

    h3{
        margin: 0;
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 25.2px;
    }

    button{
        position: relative;
        top: -0.5rem;
        left: 0.5rem;
    }
`

export const ModalContent = styled.div `
    
    padding: 0.75rem 2rem 0.5rem 1.5rem;
    background-color: ${props => props.theme.background};
`

export const ModalFooter = styled.div`
    border-radius: 0 0 16px 16px;
    padding: 0.5rem 2rem 1.5rem 1.5rem;
    background-color: ${props => props.theme.background};

    display: flex;
    gap: 0.5rem;
    flex-direction: row;
    
    button{
        flex: 1;
        
    }
`