import { Bank } from '@phosphor-icons/react';
import { ContainerSize, TagContainer } from './styles';


interface PropsType {
    size: ContainerSize;
    type?: string;
}

export function AccountTag({size, type = 'none' }: PropsType) {
    const iconSize = (size == 'sm'? 12 :  size=='lg'  ? 32 : 20)
    
    return (
        <TagContainer type={type} size={size}>
            <Bank size={iconSize} />
        </TagContainer>

    )
}