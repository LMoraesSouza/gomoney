import styles from './OriginCell.module.css'
import { CategoryTag } from './core components/CategoryTag'


export interface OriginPropsType {
    data: {
        description: string,
        origin: string,
    }
}

export function OriginCell ({data}: OriginPropsType) {
    return (<td className={styles.originCell}>
        <CategoryTag iconId={139} size='md' color='red'/>
        <div className={styles.originCellDescription}>
            <h5>{data.description}</h5>
            <p>{data.origin}</p>
        </div>
    </td>)
}