import { BalanceInfoCard } from '../components/BalanceInfoCard'
import { EmptyTransactions } from '../components/EmptyTransactions'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { TransactionFilters } from '../components/TransactionFilters'
import { TransactionsTable } from '../components/TransactionsTable'
import { TransactionContext } from '../components/context providers/TransactionsContext'
import styles from './Transactions.module.css'


export function Transactions() {
    return ( 
        <div className={styles.page}>
            <NavBar />

            <div className={styles.component}>
                <Header title='Transações' />

                <div className={styles.content}>
                    <div className={styles.registers}>
                        <TransactionContext>
                            <>
                                <TransactionFilters />
                                    

                                { false && <EmptyTransactions />}

                                <TransactionsTable />
                            </>

                        </TransactionContext>

                    </div>
                    <div className={styles.balanceInfoCards}>

                        <BalanceInfoCard type='balance' value={100} main/>
                        <BalanceInfoCard type='revenue' value={1000}/>
                        <BalanceInfoCard type='expense' value={900} />
                    </div>
                </div>
            </div>
        </div>
    )
}