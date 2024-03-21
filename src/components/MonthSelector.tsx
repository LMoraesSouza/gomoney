import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import styles from './MonthSelector.module.css'
import { useContext } from 'react'
import { IconButton } from './core components/IconButton'
import { Button } from './core components/Button'
import { ContextTransactions } from './context providers/TransactionsContext'



export function MonthSelector() {
    const {months, currentDate, monthSelectorDate, setMonthSelectorDate, monthSelectorFilterDate, setMonthSelectorFilterDate} = useContext(ContextTransactions)
    
    function setCurrentDate() {
        setMonthSelectorDate(new Date())
        setMonthSelectorFilterDate(`${months[currentDate.getMonth()]}, ${currentDate.getFullYear()}`)
    }


    function increaseMonth() {
        const auxDate = monthSelectorDate
        if (auxDate.getMonth() === 11){
            auxDate.setMonth(0);
            auxDate.setFullYear(auxDate.getFullYear()+1)
        } else {
            auxDate.setMonth(monthSelectorDate.getMonth()+1)
        }
        setMonthSelectorDate(monthSelectorDate)
        setMonthSelectorFilterDate(`${months[auxDate.getMonth()]}, ${auxDate.getFullYear()}`)
    }

    function decreaseMonth() {
        const auxDate = monthSelectorDate
        if (auxDate.getMonth() === 0){
            auxDate.setMonth(11);
            auxDate.setFullYear(auxDate.getFullYear()-1)
        } else {
            auxDate.setMonth(monthSelectorDate.getMonth()-1)
        }
        
        setMonthSelectorDate(monthSelectorDate)
        setMonthSelectorFilterDate(`${months[auxDate.getMonth()]}, ${auxDate.getFullYear()}`)
    }
    return (
        <div className={styles.month}>
            <div className={styles.monthSelector}>
                <IconButton onClick={decreaseMonth} icon={<CaretLeft size={14} />} size='sm' variant='terciary'/>
                
                    <p>{monthSelectorFilterDate}</p>
                
                <IconButton  onClick={increaseMonth} icon={<CaretRight size={14}/>} size='sm' variant='terciary'/>
                
                

            </div>
            {monthSelectorDate.getMonth() !== currentDate.getMonth() || monthSelectorDate.getFullYear() !== currentDate.getFullYear() ?

                <Button onClick={setCurrentDate} label='Este Mês' variant='secondary' size='md' />
                
                : <></>
            }
        </div>
    )
}