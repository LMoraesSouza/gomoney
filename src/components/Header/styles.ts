import styled, { css } from "styled-components";

interface HeaderTitleProps {
    newItem: boolean;
}



export const HeaderTitle = styled.h1<HeaderTitleProps>`
    ${props => {
        if (props.newItem){
            
            return css`
                display: flex;
                justify-content: space-between;
            `
        } else {
            return css`
                display: block;
            `
        }
    }};
    color: var(--gray-800);
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 140%;
    padding: 1.5rem 2.5rem;
    border-bottom: 1px solid var(--gray-100);
`