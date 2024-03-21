import styled, { css, keyframes } from 'styled-components'

interface SegmentedButtonProps {
    active: boolean;
}

const slide = keyframes`
    from {
        transform: translate(0);
    }
    to {
        transform: translate(100);
    }
`

export const SegmentedDiv = styled.div`
    display: flex;
    flex: 1;
    gap: 0.25rem;
    align-items: center;
`

const slideAnimation = css<SegmentedButtonProps>`
    animation: ${slide} 2s linear;
    background-color: ${props => props.theme['gray-100']};
`

export const SegmentedItem = styled.button<SegmentedButtonProps>`
    display: flex;
    height: 2rem;
    padding: 0rem 0.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    color: ${props => props.theme['gray-500']};
    border: none;


    
    background-color: ${props => props.active ? props.theme['gray-100'] : 'transparent'};
    color: ${props => props.active ? props.theme['gray-700'] : props.theme['gray-500']};
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.4; 
    
    /* ::before{
        ${() => slideAnimation };
    } */

    
    
`
