import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'terciary'
export type ButtonSize = 'lg' | 'md'

interface ButtonContainerProps {
    variant: ButtonVariant,
    size: ButtonSize
}

interface LabelDivProps {
    size: ButtonSize
}

const buttonColors = {
    primary: 'gray-100',
    secondary: 'gray-700',
    terciary: 'gray-500',
}

const buttonColorsHover = {
    primary: 'gray-200',
    secondary: 'gray-700',
    terciary: 'gray-500',
}

const buttonBackgrounds = {
    primary: 'gray-900',
    secondary: 'gray-200',
    terciary: 'background',
}

const buttonBackgroundsHover = {
    primary: 'gray-700',
    secondary: 'gray-250',
    terciary: 'gray-100',
}

const buttonSize = {
    lg: {
        height: '2.375rem',
        padding: '0.5rem',
        gap: 0.25,
    },
    md: {
        height: '2rem',
        padding: '0.5rem',
        gap: 0.12,
    }
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease;

    height: ${props => buttonSize[props.size].height};
    padding: ${props => buttonSize[props.size].padding};
    gap: ${props => buttonSize[props.size].gap};
    
    color: ${props => props.theme[buttonColors[props.variant]]};
    background: ${props => props.theme[buttonBackgrounds[props.variant]]};
   
    
    &:hover{
        color: ${props => props.theme[buttonColorsHover[props.variant]]};
        background: ${props => props.theme[buttonBackgroundsHover[props.variant]]};
    }

    p {
        line-height: 1.4;
        font-weight: bold;
        font-size: ${props => props.size === 'lg' ? '0.875rem' : '0.75rem'};
    }
        
    /* const size = (props.size == 'lg'? ' '+styles.lg :  ' '+styles.md) */
`

export const LabelDiv = styled.div<LabelDivProps>`
    padding-inline: ${props => props.size === 'lg' ? '0.38rem' : '0.25rem'};

`
