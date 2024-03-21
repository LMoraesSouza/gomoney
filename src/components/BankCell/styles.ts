import styled from 'styled-components'

export const Cell = styled.td`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0.5rem;

`
export const Bank = styled.p`
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 0.6;
    color: ${props => props.theme['gray-600']};
`

export const Description = styled.span`
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0; /* 0.875rem */
    text-transform: uppercase;
    color: ${props => props.theme['gray-600']};
`

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0rem;
`