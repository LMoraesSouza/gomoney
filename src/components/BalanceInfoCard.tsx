import { ArrowDown, ArrowUp, ArrowsDownUp } from "@phosphor-icons/react";
import styles from './BalanceInfoCard.module.css'
import { ReactElement } from "react";

interface PropsType{
    value: number,
    type: 'balance' | 'revenue' | 'expense',
    main?: boolean,
}

type DataTypes = {
    title: string,
    icon: ReactElement
}

interface DataProps {
    balance: DataTypes,
    revenue: DataTypes,
    expense: DataTypes,
}

export function BalanceInfoCard (props: PropsType) {
    const data: DataProps = {
        balance: {
            title: 'BALANÇO MENSAL',
            icon: <ArrowsDownUp size={16} className={styles.arrowDownUp}/>
        },
        revenue: {
            title: 'RECEITAS',
            icon: <ArrowUp size={16} className={styles.arrowUp}/>
        },
        expense: {
            title: 'DESPESAS',
            icon: <ArrowDown size={16} className={styles.arrowDown}/>
        },
    }
    
    return (
    <div className={styles.balanceInfoCard +(props.main? ' ' +styles.main : '' )}>
        <h3 className={styles.title}>
            {data[props.type].title}
        </h3>

        <div className={styles.valueDiv}>
            <div className={styles.iconDiv}>
                {data[props.type].icon}

            </div>
            <p>R$ <span>{props.value.toLocaleString("pt-BR", {style: "currency", currency: "BRL", minimumFractionDigits: 2}).substring(3)}</span></p>
        </div>
    </div>)
    
    
}