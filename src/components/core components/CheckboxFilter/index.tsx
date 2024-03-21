import { ReactElement, useContext, useState, MouseEvent } from 'react'
import { CheckFat } from '@phosphor-icons/react'
import { ContextTransactions } from '../../context providers/TransactionsContext';
import { BoxContainer, CheckboxDiv } from './styles';


interface PropsType {
    label: string;
    id: string;
    icon?: ReactElement;
}

export function CheckboxFilter(props: PropsType) {
    const {filters, setFilters} = useContext(ContextTransactions)
    const [value, setValue] = useState(filters.indexOf(props.id)>-1)

    function handleClick(e: MouseEvent<HTMLElement>) {
        e.preventDefault()
        if (value){
            let auxFilters = [...filters]
            auxFilters = auxFilters.filter(filter => {return filter !== 'props.id'})

            setFilters(auxFilters)
        } else {
            setFilters([...filters, props.id])
        }
        setValue(!value)
    }

    return (
    <CheckboxDiv checked={value} onClick={handleClick} >
        
        <Checkbox value={value} />
        {props.icon}
        <p>
            {props.label}
        </p>
    </CheckboxDiv>

        
    )
}

function Checkbox ({value} : {value: boolean}) {
    return (
    <BoxContainer checked={value} >
        {value &&
            <CheckFat size={8} color='white' weight='fill' />
        
        }
    </BoxContainer>

    )
}