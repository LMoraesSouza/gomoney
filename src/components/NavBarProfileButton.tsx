
import styles from './NavBarProfileButton.module.css'
import avatar from '../assets/Avatar.png'
import { Gear, Moon, PaintRoller, SignOut, Sun } from '@phosphor-icons/react';
import { DropdownItem } from './DropdownItem';
import { DropdownButton, DropdownItems, Dropdown } from './Dropdown';
import { Theme } from '../App';
import { useContext } from 'react';

interface profileButtonProps {
  hideNavBar: boolean;
}

export function NavBarProfileButton({hideNavBar}: profileButtonProps) { 
  const {lightMode} = useContext(Theme)
  return (
    <div className={hideNavBar ? styles.menuContainer : styles.menuContainerHide} >
      <Dropdown>
        <>
          <DropdownButton  showIcon={hideNavBar}>
            <div   className={hideNavBar ? styles.menuTrigger : styles.menuTriggerHide} >
            
              <img src={avatar} /> 
              {hideNavBar ?  <p>James Lubin</p> : '' }
              
            </div>

          </DropdownButton>
          

          <DropdownItems>
            <>
              <Dropdown>
                <div className={styles.submenuContainer }>
                  <DropdownButton showIcon>
                    <div className={styles.menuTrigger}  >
                      <DropdownItem icon={<PaintRoller size={20} />} title='Tema' hasSubmenu />

                    </div>

                  </DropdownButton>

                  <DropdownItems >
                    <>
                      <DropdownItem icon={<Sun size={20} weight={lightMode ? 'fill': 'regular'} />} title='Tema Claro' themeButton themeOption={'light'}/>
                      <DropdownItem icon={<Moon size={20} weight={!lightMode ? 'fill': 'regular'}/>} title='Tema Escuro' themeButton themeOption={'dark'}/>   
                    </>
                  </DropdownItems>
                </div>
              </Dropdown>


              <DropdownItem icon={<Gear size={20} />} title='Configurações'/>
              <DropdownItem icon={<SignOut size={20} />} title='Sair' />   
            </>



              
          </DropdownItems>

        </>

      </Dropdown>

      
    </div>
  )
}

