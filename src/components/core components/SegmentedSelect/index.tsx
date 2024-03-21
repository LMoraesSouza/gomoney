import {  MouseEvent, ReactNode, useContext, useEffect } from "react";
import { SegmentedDiv, SegmentedItem } from "./styles";
import { ContextSegmentedSelect, SegmentedSelectContext } from "../../context providers/SegmentedSelectContext";

interface SegmentedSelectProps {
    children: ReactNode
    defaultSelectedId?: string
}

function SegmentedSelect(props: SegmentedSelectProps) {
    return (
        <SegmentedSelectContext>
            <SegmentedDiv >
                {props.children}
            </SegmentedDiv>

        </SegmentedSelectContext>
    )
}


interface ItemProps {
    title: string
    id: string
    default?: boolean
}

function Item(props: ItemProps) {
    const {idActive, setIdActive} = useContext(ContextSegmentedSelect)

    useEffect(() => {
        props.default && setIdActive(props.id)
    }, [props.default, setIdActive, props.id])

    function handleClick(e: MouseEvent<HTMLElement>){
        if((e.target as HTMLButtonElement).id)
            setIdActive((e.target as HTMLButtonElement).id)
    }

    return(
        <SegmentedItem active={props.id === idActive} id={props.id} onClick={handleClick}>
            {props.title}
        </SegmentedItem>
    )
}

SegmentedSelect.Item = Item

export {SegmentedSelect}
