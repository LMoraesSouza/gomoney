import { icons } from "../../../utils/consts";

interface IconProps{   
    iconId: number,
    size: string;
}

export function Icon (props: IconProps)  {  
    const sizeNumber = (props.size === 'lg' ? 24 : props.size === 'sm' ? 16 : 14)  
    const Icon = icons[props.iconId];
    return (
    
        <Icon size={sizeNumber} weight='fill'/>
    )
}
