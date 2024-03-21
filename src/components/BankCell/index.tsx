import { AccountTag } from '../core components/AccountTag'
import { Bank, Cell, Description, InfoDiv } from './styles'



interface BankPropsType {
    data: {
        bank: string,
        description: string,
    }
}


export function BankCell ({data}: BankPropsType) {
    return(
        <Cell >
            <AccountTag size='sm' type='credit'/>
            <InfoDiv >
                <Bank>
                    {data.bank}
                </Bank>
                <p><Description>
                    {data.description}
                </Description></p>

            </InfoDiv>
        </Cell>
    )
}