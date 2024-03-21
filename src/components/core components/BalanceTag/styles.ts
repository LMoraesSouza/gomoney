import styled from 'styled-components'
import { ArrowDown, ArrowUp, ArrowUpRight, CreditCard } from '@phosphor-icons/react';


export const Expense = styled(ArrowDown)`
    color: ${props => props.theme['red-base']};
    width: 20px;
    height: 20px;
`
export const Credit = styled(CreditCard)`
    color: ${props => props.theme['red-base']};
    width: 20px;
    height: 20px;
`
export const Transfer = styled(ArrowUpRight)`
    color: ${props => props.theme['purple-base']};
    width: 20px;
    height: 20px;
`
export const Income = styled(ArrowUp)`
    color: ${props => props.theme['green-base']};
    width: 20px;
    height: 20px;
`