import styles from './EmptyTransactions.module.css'
import { ArrowsDownUp } from '@phosphor-icons/react'

export function EmptyTransactions(){
    return (
        <div className={styles.emptyTransactions}>
            <ArrowsDownUp size={32} />
            <p>
                Não existem transações para serem exibidas
            </p>
        </div>
    )
}