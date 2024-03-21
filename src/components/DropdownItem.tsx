// import {  CaretRight } from '@phosphor-icons/react';
import styles from './DropdownItem.module.css'
import {  ReactNode, ReactElement, useContext  } from 'react'
import {Theme} from '../App'
import { Check } from '@phosphor-icons/react';


export interface dropdownItemProps {
    title: string;
    icon: ReactNode;
    id?: string;
    hasSubmenu?: boolean;
    themeButton?: boolean;
    children?: ReactElement;
    themeOption?: string;
}


export function DropdownItem (props: dropdownItemProps) {
    const {lightMode, setLightMode} = useContext(Theme)
    

    return (
        props.themeButton ? 
        (props.themeOption == 'light' ? 
        <button className={lightMode ? styles.lightModeSelected : styles.darkModeSelected} onClick={() => {setLightMode(true)}} >
            <li className={styles.dropdownItem}>
                {props.icon}
                <a>{props.title}</a>
                {lightMode && <Check size={16}/>}
            </li>
            
        </button> 
        :
        <button className={(props.themeOption == 'dark' ) && lightMode ? (styles.darkModeSelected) : styles.lightModeSelected} onClick={() => {setLightMode(false)}} >
            <li className={styles.dropdownItem}>
                {props.icon}
                <a>{props.title}</a>
                {!lightMode && <Check size={16}/>}
            </li>

        </button>
        )
        
        :
        <div  className={props.hasSubmenu ? styles.dropdownItemSubmenu : styles.dropdownItemDiv}>
            <li className={styles.dropdownItem}>
                {props.icon}
                <a>{props.title}</a>
            </li>
        
        </div>
        
        
           

        
   
    )
}