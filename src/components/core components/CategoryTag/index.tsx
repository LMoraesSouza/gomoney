import { CategoryTagDiv, ContainerSize, StyledIcon } from './styles'


interface PropsType {
    iconId: number,
    size: ContainerSize,
    color?: string,
}

export function CategoryTag (props :PropsType){
    const color = props.color ? (props.color + '-background') : 'gray-200'
   
    // const sizeNumber = (props.size === 'lg' ? 24 : props.size === 'sm' ? 16 : 14)

    // const renderIcon = (icon: any) => {
    //     const Icon = icons[icon];
    //     return (
         
    //       <Icon size={sizeNumber} className={styles.icon} weight='fill'/>
    //     )
    //    }

    return (
        <CategoryTagDiv color={color} size={props.size}>
            {/* {renderIcon(props.iconId)} */}
            <StyledIcon size={props.size} iconId={props.iconId}/>
        </CategoryTagDiv>
    )
}