import styles from './StatusCell.module.css'
import { StatusCircle } from './core components/StatusCircle'
import { statusTypes } from './core components/StatusCircle/styles';


interface StatusPropsType {
    status: statusTypes;
}


export function StatusCell(props: StatusPropsType) {
    const status = () => {
        let s = ''
        switch(props.status){
            case 'effected': s = 'efetivado'; break;
            case 'pending': s = 'pendente'; break;
            case 'credit': s = 'crédito'; break;
            case 'overdue': s = 'atrasado'; break;
        }
        return s
    }


    return (
        <td className={styles.statusCell}>
        <div className={styles.statusCellDiv}>
            <StatusCircle status={props.status}/>
            <p>
                {status()}
            </p>
        </div>
    </td>
    )
}