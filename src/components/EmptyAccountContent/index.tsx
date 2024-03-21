import { Bank, Plus } from "@phosphor-icons/react";
import { EmptyData, NewAccountDiv } from "./styles";
import { Button } from "../core components/Button";


export function EmptyAccountContent() {
    
    
    return(
        <EmptyData>
            <NewAccountDiv>
                <Bank size={32}/>
                <p>Não existem contas para serem exibidas</p>
            </NewAccountDiv>
            <Button label='Nova Conta' icon={<Plus size={20} />} variant='secondary'/>
        </EmptyData>
    )
}