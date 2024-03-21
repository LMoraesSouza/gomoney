import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import styles from './Cards.module.css'


export function Cards() {

    return ( 
        <div className={styles.cards}>
            <NavBar />

            <div className={styles.component}>
                <Header title='Cartões' />
            </div>
        </div>
    )
}