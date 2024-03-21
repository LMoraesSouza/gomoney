import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import styles from './Planning.module.css'


export function Planning() {
    return ( 
        <div className={styles.planning}>
            <NavBar />

            <div className={styles.component}>
                <Header title='Planejamento' />
            </div>
        </div>
    )
}