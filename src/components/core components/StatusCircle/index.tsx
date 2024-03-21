
import { Status, statusTypes } from './styles';


interface PropsType {
    status: statusTypes;
}

export function StatusCircle({status}: PropsType){

    return <Status status={status}> </Status>
}