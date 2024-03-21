import {createContext, Dispatch, ReactElement, SetStateAction, useState} from 'react'


interface ContextType {
    months: string[],
    currentDate: Date,
    monthSelectorDate: Date,
    monthSelectorFilterDate: string,
    openMenu: boolean,
    openOptions: boolean,
    filters: string[],
    setMonthSelectorDate: Dispatch<SetStateAction<Date>>,
    setMonthSelectorFilterDate: Dispatch<SetStateAction<string>>
    setOpenMenu: Dispatch<SetStateAction<boolean>>,
    setOpenOptions: Dispatch<SetStateAction<boolean>>,
    setFilters: Dispatch<SetStateAction<string[]>>,
}

export const ContextTransactions = createContext({} as ContextType )

interface TransactionContextProps {
    children?: ReactElement
}

export function TransactionContext(props: TransactionContextProps){
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const currentDate = new Date()
    const [monthSelectorDate, setMonthSelectorDate] = useState(currentDate)
    const [monthSelectorFilterDate, setMonthSelectorFilterDate] = useState(`${months[monthSelectorDate.getMonth()]}, ${monthSelectorDate.getFullYear()}`)
    const [openMenu, setOpenMenu] = useState(false) 
    const [openOptions, setOpenOptions] = useState(false) 
    const [filters, setFilters] = useState([''])

    const contextObject = { months: months,
                            currentDate: currentDate,
                            monthSelectorDate: monthSelectorDate,
                            monthSelectorFilterDate: monthSelectorFilterDate,
                            openMenu: openMenu,
                            openOptions: openOptions,
                            filters: filters,
                            setMonthSelectorDate: setMonthSelectorDate,
                            setMonthSelectorFilterDate: setMonthSelectorFilterDate,
                            setOpenMenu: setOpenMenu,
                            setOpenOptions: setOpenOptions,
                            setFilters: setFilters,
                        }

    return <ContextTransactions.Provider value={contextObject}>
        {props.children}
    </ContextTransactions.Provider>
}