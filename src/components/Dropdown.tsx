import {ReactElement, createContext, useContext, useState, useEffect, useRef} from 'react'

import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import styles from './Dropdown.module.css'

interface DropdownButtonProps {
    children?: ReactElement
    showIcon?: boolean,
}

interface DropdownItemsProps {
    children?: ReactElement
}

interface DropdownProps {
    children?: ReactElement
}

interface DropdownContext {
    open: boolean,
    setOpen: (open: boolean) => void,
}


const DropdownContext = createContext({
    open: false,
    setOpen: () => {}
} as DropdownContext )




export function DropdownButton(props: DropdownButtonProps){
    const {open, setOpen} = useContext(DropdownContext) 
    const [animate, setAnimate] = useState(false)

    const ref = useRef<any>(null);
    const handleClickOutside = (event: any) => {
        const p = 'parentElement'
        const parent = (event.target[p].id ==  'openBtton') || (event.target[p][p].id == 'openButton') || (event.target[p][p][p].id == 'openButton') || (event.target[p][p][p][p].id == 'openButton') ||
        (event.target[p].id ==  'dropdown') || (event.target[p][p].id == 'dropdown') || (event.target[p][p][p].id == 'dropdown') || (event.target[p][p][p][p].id == 'dropdown') 
        

        if (ref.current && !ref.current.contains(event.target) && !parent) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);


    useEffect(() => {
        if (open) {
            setAnimate(true)
        }
    }, [open])

    const icon = open ? <CaretLeft className={styles.open } size={16} /> : <CaretRight className={animate ? styles.close : styles.closeNoAnimation} size={16} />
  




    return <button id='openButton' className={styles.openButton} onClick={() => {setOpen(!open)}} ref={ref}>
        {props.children}
        {props.showIcon && icon}
    </button>
}

export function DropdownItems(props: DropdownItemsProps) {
    const {open} = useContext(DropdownContext)
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        if (open) {
            setAnimate(true)
        }
    }, [open])

    return (<div id='dropdown' className={open? styles.dropdownMenuActive : animate ? styles.dropdownMenuInactive : styles.dropdownMenuInactiveNoAnimation}>
        <ul>
            {props.children}
        </ul>
    </div>
            
            
            )
}

export function Dropdown(props: DropdownProps) {
const [open, setOpen] = useState(false)

    return <DropdownContext.Provider value={{open, setOpen}} >
        {props.children}
    </DropdownContext.Provider>
}