import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"




interface ContextType {
    idActive: string
    setIdActive: Dispatch<SetStateAction<string>>
}
interface SegmentedSelectcontextProps {
    children?: ReactNode

}

export const ContextSegmentedSelect = createContext({} as ContextType)


export function SegmentedSelectContext(props: SegmentedSelectcontextProps){
    const [idActive, setIdActive] = useState('1')

    const contextObject = {
        idActive, setIdActive
    }

    return(
        <ContextSegmentedSelect.Provider value={contextObject}>
        {props.children}
    </ContextSegmentedSelect.Provider>
    )
}
