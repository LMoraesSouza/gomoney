import { X } from "@phosphor-icons/react";
import { IconButton } from "../core components/IconButton";
import { BluredBackground, ModalContent, ModalDiv, ModalFooter, ModalHeader } from "./styles";
import { ReactNode } from "react";


interface ModalProps{
    display: boolean
    children: ReactNode
}

function Modal(props: ModalProps) {

    return (
        <BluredBackground display={props.display}>
            <ModalDiv>
                {props.children}
            </ModalDiv>
        </BluredBackground>
    )
}

interface HeaderProps{
    title: string
    onClose: () => void
}

function Header(props: HeaderProps){
    return (
        <ModalHeader>
            <h3>{props.title}</h3>
            <IconButton icon={<X size={14} />} id='closeButton' variant='secondary' size='sm' onClick={() => props.onClose()}/>
        </ModalHeader>
    )
}

interface BodyProps {
    children: ReactNode
}

function Body(props: BodyProps) {
    return(
        <ModalContent>
            {props.children}
        </ModalContent>
    )
}

interface FooterProps {
    children: ReactNode
}

function Footer(props: FooterProps) {
    return(<ModalFooter>
        {props.children}
    </ModalFooter>)
}

Modal.Header = Header
Modal.Body = Body
Modal.Footer = Footer

export {Modal}