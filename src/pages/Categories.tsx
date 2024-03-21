import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import styles from './Categories.module.css'


export function Categories() {
    return ( 
        <div className={styles.categories}>
            <NavBar />

            <div className={styles.component}>
                <Header title='Categorias' />
            </div>
        </div>
    )
}