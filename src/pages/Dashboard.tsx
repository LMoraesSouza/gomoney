import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import styles from './Dashboard.module.css'


export function Dashboard() {
    return ( 
        <div className={styles.dashboard}>
            <NavBar />

            <div className={styles.component}>
                <Header title='Visão Geral' />
            </div>
        </div>
    )
}