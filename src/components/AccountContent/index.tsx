import { AccountList, Content } from "./styles";
import { SegmentedSelect } from "../core components/SegmentedSelect";
import { AccountCard } from "../AccountCard";
import { ReactElement } from "react";
import { Bank } from "@phosphor-icons/react";
import { EmptyAccountContent } from "../EmptyAccountContent";


export type FakeDataType = {
    bank: {
        name: string;
        icon: ReactElement;
    };
    balance: number;
    main: boolean;
}

const data: FakeDataType[] = [
    {
       bank:{
           name: 'Nuconta',
           icon: <Bank size={40}/>,
       },
       balance: 364.24,
       main: true,
   },
    {    
       bank:{
           name: 'Inter',
           icon: <Bank size={40}/>,
       },
       balance: 364.24,
       main: false,
   },
   {
       bank:{
           name: 'Picpay',
           icon: <Bank size={40}/>,
       },
       balance: 364.24,
       main: false,
   },
   {
       bank:{
           name: 'Bradesco',
           icon: <Bank size={40}/>,
       },
       balance: 364.24,
       main: false,
   }
]

export function AccountContent(){
    const accountData: FakeDataType[] = data
   


    return (
    <Content>
        <SegmentedSelect defaultSelectedId='ativas'>
            <SegmentedSelect.Item title='Ativas' id='ativas' default/>
            <SegmentedSelect.Item title='Inativas' id='inativas' />
        </SegmentedSelect>
        {accountData.length> 0 ? 
            <AccountList>
                {accountData.map(item => {
                    return <AccountCard data={item} />
                })}
            </AccountList>
            :
            <EmptyAccountContent />
        }
    </Content>)
}