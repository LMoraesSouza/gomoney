import styled from 'styled-components'






export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-radius: 20px;
    
    padding: 1rem;
    border: 1px solid ${props => props.theme["gray-200"]};
    background-color: ${props => props.theme["gray-100"]};
`


export const AccountSettings = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    h2{
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.4;
        margin: 0;
        color: ${props => props.theme["gray-600"]};
    }
`


export const BankInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    div{
        display: flex;
        gap: 0.5rem;
        align-items: center;

        span {
            display: flex;
            align-items: center;
            height: 1.5rem;
            color: ${props=> props.theme["gray-500"]};
            padding: 0 0.75rem;
            border-radius: 999px;
            font-size: 0.625rem;
            font-style: normal;
            font-weight: 700;
            line-height: 140%; 
            background-color: ${props => props.theme["gray-250"]};
        }
    }
`


export const AccountBalance = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0;
    p{
        font-size: 0.75rem;
        margin: 0;
        font-weight: 400;
        line-height: 1.4;
        color: ${props => props.theme["gray-500"]};
    }

    h3{
        font-size: 0.875rem;
        font-weight: 700;
        margin: 0;
        line-height: 1.4;
        color: ${props => props.theme["gray-500"]};
    }
`
