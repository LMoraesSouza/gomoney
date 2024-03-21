import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AccountContent } from "../components/AccountContent";
import { Header } from "../components/Header";
import { Modal } from "../components/Modal";
import { NavBar } from "../components/NavBar";
import { Button } from "../components/core components/Button";
import styles from "./Accounts.module.css";
import { Plus } from "@phosphor-icons/react";
import { Input } from "../components/core components/Input";
import * as zod from "zod";

const newAccountFormValidationSchema = zod.object({
  name: zod.string().min(1),
  amount: zod.number(),
  account: zod.number().min(1, "Escolha a conta"),
});

type NewAccountFormData = zod.infer<typeof newAccountFormValidationSchema>;

export function Accounts() {
  const [showModal, setShowModal] = useState(false);

  const { register, reset } = useForm<NewAccountFormData>({
    resolver: zodResolver(newAccountFormValidationSchema),
    defaultValues: {
      name: "",
      amount: 0,
      account: 0,
    },
  });

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    console.log(showModal);
    setShowModal(false);
  }

  function createNewAccount() {
    console.log("submitou");

    reset();
  }

  return (
    <div className={styles.accounts}>
      <NavBar />

      <div className={styles.component}>
        <Header title="Contas">
          <Button
            label="Nova Conta"
            icon={<Plus size={20} />}
            onClick={handleOpenModal}
          />
        </Header>

        <AccountContent />
      </div>
      <Modal display={showModal}>
        <Modal.Header title="Criar conta" onClose={handleCloseModal} />
        <Modal.Body>
          <Input label="teste" {...register("name")} id="name" />
          <Input
            label="teste teste"
            {...register("amount", { valueAsNumber: true })}
            id="amount"
          />
          <Input
            label="teste teste teste"
            {...register("account", { valueAsNumber: true })}
            id="account"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            label="Cancelar"
            variant="secondary"
            onClick={handleCloseModal}
          />
          <Button label="Salvar" onClick={createNewAccount} />
        </Modal.Footer>
      </Modal>
    </div>
  );
}
