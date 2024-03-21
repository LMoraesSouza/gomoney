import { Funnel, SlidersHorizontal } from '@phosphor-icons/react'
import styles from './TransactionFilters.module.css'
import { MonthSelector } from './MonthSelector'
import { IconButton } from './core components/IconButton'
import { FiltersMenu } from './FiltersMenu'
import {  useContext } from 'react'
import { Accordion } from './core components/Accordion'
import { CheckboxFilter } from './core components/CheckboxFilter'
import { ContextTransactions } from './context providers/TransactionsContext'



export function TransactionFilters () {
    const {openMenu, setOpenMenu, 
           openOptions, setOpenOptions} = useContext(ContextTransactions)
    const contas = [{nome: 'C6', id: 1}]


    function handleClickFiltersMenu() {
      setOpenMenu(!openMenu)
    }

    function handleClickOptionsMenu() {
        console.log('oi')
        setOpenOptions(!openOptions)
      }

    return(
        <div className={styles.div}>
            <MonthSelector />

            <div className={styles.filterButtons}>
                <IconButton 
                    id='filterButton'
                    icon={<Funnel size={16} id='filterButton' />} 
                    variant={openMenu? 'secondary' : 'terciary'}
                    onClick={handleClickFiltersMenu}
                />
                <IconButton 
                    id='optionsButton'
                    icon={ <SlidersHorizontal size={16} id='filterButton' />} 
                    variant={openOptions? 'secondary' : 'terciary'}
                    onClick={handleClickOptionsMenu}
                />
               
            </div>

            <FiltersMenu openMenu={openOptions} setOpenMenu={setOpenOptions} title='Opções' id='optionsButton' >
                <Accordion title='Agrupamento'>
                    <CheckboxFilter label='Agrupar por semana' id='weeklyGrouping' />
                    <CheckboxFilter label='Agrupar por dia' id='dailygrouping' />
                    <CheckboxFilter label='Não Agrupar' id='noGrouping' />
                </Accordion>
                <Accordion title='listagem'>
                    <CheckboxFilter label='Listar transações futuras' id='futureTransactions' />
                    <CheckboxFilter label='Listar transações no crédito' id='creditTransactions'/>
                    <CheckboxFilter label='Fixar transações em atraso' id='fixOverdue'/>
                </Accordion>
            </FiltersMenu>
          
            <FiltersMenu openMenu={openMenu} setOpenMenu={setOpenMenu} title='Filtros' id='filtersButton'>
                <Accordion title='TIPO DE TRANSAÇÃO'>
                    <CheckboxFilter label='Despesa' id='outcome'/>
                    <CheckboxFilter label='Receita' id='income'/>
                    <CheckboxFilter label='Transferência' id='transfer' />
                    <CheckboxFilter label='Crédito' id='credit' />
                    <CheckboxFilter label='Recorrente' id='recurrent' />
                </Accordion>
                <Accordion title='STATUS'>
                    <CheckboxFilter label='Pendente' id='pending' />
                    <CheckboxFilter label='Efetivado' id='effected' />
                    <CheckboxFilter label='Atrasado' id='overdue' />
                </Accordion>
                <Accordion title='CATEGORIAS'>
                    <CheckboxFilter label='Alimentação' id='food' />
                    <CheckboxFilter label='Assinaturas' id='subscriptions' />
                    <CheckboxFilter label='Investimento' id='investment' />
                    <CheckboxFilter label='Lazer' id='happy' />
                    <CheckboxFilter label='Pets' id='pets' />
                    <CheckboxFilter label='Transoporte' id='transoport  ' />
                </Accordion>
                <Accordion title='CONTAS'>
                    {contas.map(() => {
                        return <CheckboxFilter label={'C6'} id={'c6Account'}  />
                    })}
                    <CheckboxFilter label='Nubank' id='nubankAccount' />
                    <CheckboxFilter label='Inter' id='interAccount' />
                </Accordion>
                <Accordion title='CARTÔES'>
                    <CheckboxFilter label='Nubank' id='nubankCard' />
                    <CheckboxFilter label='C6' id='c6Card' />
                   
                </Accordion>
            </FiltersMenu>
            
        </div>
    )
}