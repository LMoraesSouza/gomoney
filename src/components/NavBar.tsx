import { SquaresFour,  CalendarBlank, Bank,  CreditCard, Tag, CaretDoubleLeft, CaretDoubleRight, ArrowsDownUp } from '@phosphor-icons/react'
import styles from './NavBar.module.css'
import logo from '../assets/Logo.svg'
import logoHide from '../assets/LogoHide.svg'

import { FormEvent, useState } from 'react'
import { NavBarItem, NavBarItemType } from './NavBarItem'
import { NavBarProfileButton } from './NavBarProfileButton'
// import { Dropdown } from './NavBarProfileButton'

const links: NavBarItemType[]= [
    {
      title: 'Visao Geral',
      icon: <SquaresFour size={20} />,
      href: '/dashboard',
    },
    {
      title: 'Transações',
      icon: <ArrowsDownUp size={20} />,
      href: '/',
    },
    {
      title: 'Planejamento',
      icon: <CalendarBlank size={20} />,
      href: '/planning',
    },
    {
      title: 'Contas',
      icon: <Bank size={20} />,
      href: '/accounts',
    },
    {
      title: 'Cartões',
      icon: <CreditCard size={20} />,
      href: '/cards',
    },
    {
      title: 'Categorias',
      icon: <Tag size={20} />,
      href: '/categories',
    }
]




export function NavBar() {
    const [hideNavBar, setHideNavBar] = useState(true)
 
    
    function handleHideNavBar (e: FormEvent) {
        e.preventDefault()
        setHideNavBar(!hideNavBar)
      }

    return (<div className={hideNavBar ? styles.navBar : styles.navBarHide} >
        <div className={hideNavBar ? styles.navBarItems : styles.navBarItemsHide} >
          <div className={hideNavBar ? styles.navBarHeader : styles.navBarHeaderHide} >
        
            <img className={styles.logo} src={hideNavBar ? logo : logoHide} alt='GoMoney Logo'/>
            <button onClick={handleHideNavBar}>
            {hideNavBar ? <CaretDoubleLeft size={16} /> : <CaretDoubleRight size={16}/>}
            </button>
          </div>
          
          {links.map((item, index) => {
            return <NavBarItem title={item.title} icon={item.icon} key={index} href={item.href}/>
          })}
          
         
        </div>
        
    
        
        <NavBarProfileButton hideNavBar={hideNavBar}/>
        {/* <a className={hideNavBar ? styles.profileLink : styles.profileLinkHide} href=''>
           <img src={avatar} /> 
          {hideNavBar ?  'James Lubin' : '' }
          {hideNavBar ? <CaretRight size={16} /> : <></> }
        </a> */}
      </div>)
}