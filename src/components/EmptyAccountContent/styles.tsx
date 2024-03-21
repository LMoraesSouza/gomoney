import styled from 'styled-components'


export const NewAccountDiv = styled.div`
    width: 9.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    svg{
        color: ${props => props.theme['gray-400']};
    }
    p{
        color: ${props => props.theme['gray-500']};
    }

`


export const EmptyData = styled.div`
    display: flex;
    padding: 3rem 0rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    align-self: stretch;
`