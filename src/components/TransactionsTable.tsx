import { useContext, useEffect, useState } from 'react'
import { TransactionTableRow } from './TransactionTabelRow'
import styles from './TransactionsTable.module.css'
import { ContextTransactions } from './context providers/TransactionsContext';
import { statusTypes } from './core components/StatusCircle/styles';


interface DataInterface {
    id: number;
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
    valueData: {
        value: number;
        type: string;
    };
}

export function TransactionsTable(){
    const [grouping] = useState<string>('daily')
    const {filters} = useContext(ContextTransactions)
    useEffect(() => {
        console.log(filters)
    }, [filters])

    const arrData: DataInterface[] = [{
        id: 1,
        date: new Date('12/22/2023'),
        originData: {
            origin: 'Cartão C6',
            description: 'Fatura Outubro',
        },
        status: 'effected',
        bankData: {
            bank: 'Nubank',
            bankId: 1,
            description: 'fatura novembro',
        },
        valueData: {
            value: 1700,
            type: 'credit',
        },
    },
    {
        id: 2,
        date: new Date('11/13/2023'),
        originData: {
            origin: 'Cartão C6',
            description: 'Fatura Outubro',
        },
        status: 'effected',
        bankData: {
            bank: 'Nubank',
            bankId: 1,
            description: 'fatura novembro',
        },
        valueData: {
            value: 1700,
            type: 'credit',
        },
    },
    {
        id: 3,
        date: new Date('11/09/2023'),
        originData: {
            origin: 'Cartão C6',
            description: 'Fatura Outubro',
        },
        status: 'overdue',
        bankData: {
            bank: 'Nubank',
            bankId: 1,
            description: 'fatura novembro',
        },
        valueData: {
            value: 1700,
            type: 'credit',
        },
    },
    {
        id: 4,
        date: new Date('11/09/2023'),
        originData: {
            origin: 'Cartão C6',
            description: 'Fatura Outubro',
        },
        status: 'effected',
        bankData: {
            bank: 'Nubank',
            bankId: 1,
            description: 'fatura novembro',
        },
        valueData: {
            value: 1700,
            type: 'credit',
        },
    }]


    function weeklyGrouping(){
        const weeklyData = [...arrData]


        return weeklyData
    }

    function dailyGrouping() {
        let dailyData = []
        let sameDay = false
        console.log(arrData)
        for (const item of arrData){
            const idx = arrData.indexOf(item)
            if (sameDay && (arrData[idx-1].date) !== (item.date)){
                console.log(idx)
                sameDay = false
            }
            if(isFutureDate(item.date) && !sameDay){
                console.log('oi')
                dailyData.push({date: 'futura', data: [item]})
                sameDay = true
            } else if (!sameDay){
                dailyData.push({date: item.date, data: [item]})
                sameDay = true
            }
        }
        dailyData = dailyData
        return dailyData
    }

    function noGrouping() {
        const noGroupingData = [...arrData]


        return noGroupingData
    }

    function preProcessData(){
        let data
        
        switch(grouping) {
            case 'weekly': data = weeklyGrouping();
                break;
            case 'daily': data = dailyGrouping();
                break;
            case 'none': data = noGrouping();
        }

        return data
    }

    console.log(preProcessData())

    function isFutureDate(date: Date){
        if (Date.parse(date.toString()) > Date.parse(new Date().toString()))
            return true
        else return false
    }



    return(
        
            <table className={styles.table}>
                {/* week section */}
                

                {arrData.map((data, index) => {
                    
                    if (index === arrData.length - 1){
                        return <TransactionTableRow data={data} key={data.id}/> 
                    } 
                    
                    if(isFutureDate(data.date)){   
                        if (index > 0){
                            return (
                                <>
                                    <h3 className={styles.tableHeader}>FUTURAS</h3>
                                    <TransactionTableRow data={data} key={data.id}/>
                                </>
                            )
                        } else 
                        return (
                            <>
                                <h3 className={styles.tableHeader}>FUTURAS</h3>
                                <TransactionTableRow data={data} key={data.id}/>
                            </>
                        )
                    } else if (Date.parse(data.date.toString()) === Date.parse(new Date().toString()) ){
                        return (<>
                            <h3 className={styles.tableHeader}>FUTURAS</h3>
                            <TransactionTableRow data={data} key={data.id}/>
                        </>)
                    }
                    else return <TransactionTableRow data={data} key={data.id}/>
                })}
                
            </table>
    )

}


