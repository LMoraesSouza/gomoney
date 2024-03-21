import {  DotsThreeOutline } from "@phosphor-icons/react";
import { IconButton } from "../core components/IconButton";
import { AccountBalance, AccountSettings, BankInfo, Card } from "./styles";
import { FakeDataType } from "../AccountContent";
import { useState } from "react";
import { Modal } from "../Modal";
import { Button } from "../core components/Button";
import { Input } from "../core components/Input";


interface PropsType{
    data: FakeDataType
}

interface DataProps {
    teste: string,
    teste_dois: string,
    teste_tres: string
}

export function AccountCard(props: PropsType){
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState<DataProps>({
        teste: '',
        teste_dois: '',
        teste_tres: ''
    })

    function handleOpenModal(id: number) {
        if (id > 0) {
            setData({
                teste: 'teste',
                teste_dois: 'teste 2',
                teste_tres: 'teste 3'
            })
        }
        setShowModal(true)
    }

    function handleCloseModal(){
        console.log(showModal)
        setShowModal(false)
    }

    function handleChange(e: InputEvent) {
        e.preventDefault
    }

    return(
        <div>
            <Modal display={showModal}>
                <Modal.Header title='Criar conta' onClose={handleCloseModal}/>

                <Modal.Body>
                    <Input label='teste' value={data.teste} onChange={handleChange}/>
                    <Input label='teste teste' value={data.teste_dois} onChange={handleChange}/>
                    <Input label='teste teste teste' value={data.teste_tres} onChange={handleChange}/>
                </Modal.Body>

                <Modal.Footer>
                    <Button label='Cancelar' variant='secondary' onClick={handleCloseModal}/>
                    <Button label='Salvar' />
                </Modal.Footer>
            </Modal>
            <Card>
                <AccountSettings >
                    <BankInfo>
                        {props.data.bank.icon}
                        <div>
                        {props.data.main ?
                            <span>PRINCIPAL</span>
                            : <></>}
                            <IconButton icon={<DotsThreeOutline size={16}/>} id='accountSettingsButton' variant='terciary' onClick={() => {handleOpenModal(1)}}/>
                        </div>
                    </BankInfo>
                    <h2>{props.data.bank.name}</h2>
                </AccountSettings>
                <AccountBalance>
                    <p>saldo</p>
                    <h3>R$ 364,42</h3>
                </AccountBalance>
            </Card>

        </div>

    )
}