import { CaretDown } from "@phosphor-icons/react";
import {  ReactNode, useState } from "react";
import { AccordionContent, Header, HeaderStatus, ContentHide, Content } from './styles.ts'


interface PropsType {
    title: string;
    children?: ReactNode;
}



export function Accordion (props: PropsType) {
    const[shrink, setShrink] = useState(true)

    return (
        <AccordionContent >
            <Header  onClick={() => {setShrink(!shrink)}}>
                <h3>
                    {props.title}
                </h3>
                <HeaderStatus>
                    <CaretDown size={16} />
                </HeaderStatus>
            </Header>
            {shrink? <ContentHide>
                {props.children}
            </ContentHide> :
            <Content>
                {props.children}
            </Content>
            }
            
        </AccordionContent>
    )
}