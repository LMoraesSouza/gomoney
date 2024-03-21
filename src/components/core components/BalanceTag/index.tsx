import { Credit, Expense, Income, Transfer } from './styles';


interface PropsType {
    type: string;
}

export function BalanceTag(props: PropsType){
    
        
    switch(props.type){
        case 'expense': return <Expense/> ;
        case 'transfer': return <Transfer />;
        case 'income': return <Income />
        case 'credit': return <Credit />;
    }
    


}