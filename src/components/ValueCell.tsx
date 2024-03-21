import styles from './ValueCell.module.css'
import { BalanceTag } from './core components/BalanceTag'



interface ValuePropsType {
    data: {
        type: string,
        value: number,
    }
}


export function ValueCell({data}: ValuePropsType) {
    return (
        <td className={styles.valueCell}>
            <BalanceTag type={data.type}/>
        
            <p>
                R$
                <span>
                    {(data.value).toLocaleString("pt-BR", {style: "currency", currency: "BRL", minimumFractionDigits: 2}).substring(3)}
                </span>
            </p>
        </td>
    )
}