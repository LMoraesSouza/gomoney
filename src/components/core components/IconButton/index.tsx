import { ButtonHTMLAttributes, ReactElement } from 'react'
import { IconBtn, IconBtnSizes, IconBtnVariants } from './styles'



interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: ReactElement,
    size?: IconBtnSizes,
    id: string,
    variant?: IconBtnVariants,
    onClick?: ()=> void,
}

export function IconButton ({icon, size = 'md', id, variant = 'primary', onClick}: PropsType) {

    function handleClick(){ 
        onClick && onClick() 
    }


    return (
        <IconBtn size={size} variant={variant} onClick={handleClick} id={id} >
            {icon}
        </IconBtn>
    )
}