import styled  from 'styled-components'

export type IconBtnVariants = 'primary' | 'secondary' | 'terciary'
export type IconBtnSizes = 'lg' | 'md' | 'sm'

interface IconBtnProps {
    variant: IconBtnVariants
    size: IconBtnSizes
}

const sizes = {
    lg: {
        width: '2.375rem',
        height: '2.375rem',
        padding: '0.56rem;',
    },
    md: {
        width: '2rem',
        height: '2rem',
        padding:  '0.5rem',
    },
    sm: {
        width: '1.5rem',
        height:  '1.5rem',
        padding: '0.31rem',
    }
}

const colors = {
    primary: {
        color: 'gray-100',
        background: 'gray-900',
        colorHover: 'gray-200',
        backgroundHover: 'gray-700', 
    },
    secondary: {
        color: 'gray-700',
        background: 'gray-200', 
        colorHover: 'gray-700',
        backgroundHover: 'gray-250', 
    },
    terciary: {
        color: 'gray-500',
        background: 'transparent', 
        colorHover: 'gray-500',
        backgroundHover: 'gray-100', 
    },
}


export const IconBtn = styled.button<IconBtnProps>`
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease;

    color: ${props => props.theme[colors[props.variant].color]};
    background-color: ${props => props.theme[colors[props.variant].background]};

    width: ${props => sizes[props.size].width};
    height: ${props => sizes[props.size].height};
    padding: ${props => sizes[props.size].padding};

    &:hover{
        color: ${props => props.theme[colors[props.variant].colorHover]};
        background-color: ${props => props.theme[colors[props.variant].backgroundHover]};
    }
`


