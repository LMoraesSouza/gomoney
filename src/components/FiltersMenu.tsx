import { X } from "@phosphor-icons/react";
import { IconButton } from "./core components/IconButton";
import styles from './FiltersMenu.module.css'
import { Button } from "./core components/Button";
import { useRef, useEffect, useState,   ReactNode, ReactElement } from "react";


interface PropsType {
    openMenu: boolean,
    title: string,
    children: ReactElement | ReactElement[] | ReactNode| ReactNode[],
    setOpenMenu: (open: boolean) => void,
    id: string;
}

export function FiltersMenu (props: PropsType){
    const [animate, setAnimate] = useState(false)

    const ref = useRef<any>(null);
    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target) && event.target.id !== props.id ) {
            props.setOpenMenu(false);
        }
    };

    useEffect(() => {
        props.openMenu && setAnimate(true)
    }, [props.openMenu])


    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);



    return(
   

        <div className={(props.openMenu ?styles.sideFiltersMenu :  styles.sideFiltersMenuHide  ) +' ' +( animate? '' : styles.noAnimation) } ref={ref}>
            <div className={styles.header}>
                <h3>
                    {props.title}
                </h3>
                <IconButton icon={<X size={14}/>} size='sm' variant='secondary' onClick={() => {props.setOpenMenu(false)}}/>
            </div>
            <div className={styles.acordionFilters}>
                {props.children}
            </div>

            <div className={styles.buttonsDiv}>
                <Button label="Redefinir" variant='secondary' />
                <Button label="Aplicar" />
            </div>
        </div>
    )
}