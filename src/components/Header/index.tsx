
import { HeaderTitle } from './styles'
import { ReactNode } from 'react'

interface HeaderProps {
    title: string
    children?: ReactNode
}

export function Header({title, children}: HeaderProps) {
    return(<HeaderTitle newItem >
        {title}
        {children}
        
    </HeaderTitle>)
}