import { BankCell } from './BankCell';
import { OriginCell } from './OriginCell';
import { StatusCell } from './StatusCell';
import styles from './TransactionTableRow.module.css'
import { ValueCell } from './ValueCell';
import { statusTypes } from './core components/StatusCircle/styles';



interface PropsType {
    data: {
        date: Date;
        originData: {
            origin: string;
            description: string;
        };
        status: statusTypes;
        bankData: {
            bank: string;
            bankId: number;
            description: string;
        };
        valueData:{
            value: number;
            type: string;
        }
    }
}

export function TransactionTableRow({data}: PropsType) {
    

    return (<>
                <tr className={styles.tableRow}>
                    <td className={styles.dateCell}>
                        <p>
                            {data.date.toLocaleString('pt-BR').split(',')[0].replace('/202', '/2')}
                        </p>
                    </td>
                    <OriginCell data={data.originData}/>
                    
                    <StatusCell status={data.status}/>
                   
                    <BankCell data={data.bankData}/>
                    
                    <ValueCell data={data.valueData}/>
                </tr>
    </>)
}