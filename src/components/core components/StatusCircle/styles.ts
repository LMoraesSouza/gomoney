import styled from "styled-components";

export type statusTypes = 'pending' | 'effected' | 'credit' | 'overdue'

interface StatusCircleProps {
    status: statusTypes
}

const statusSettings = {
    pending: {
        borderColor: 'gray-400',
        background: 'gray-350',
    },
    effected: {
        borderColor: 'lawn-base',
        background: 'lawn-helper',
    },
    credit: {
        borderColor: 'orange-base',
        background: 'orange-helper',
    },
    overdue: {
        borderColor: 'red-base',
        background: 'red-helper',
    },
}

export const Status = styled.div<StatusCircleProps>`
    border-radius: 100%;
    padding: 0;
    margin: 0;
    width: 0.313rem;
    height: 0.313rem;

    border: 1px solid ${props => props.theme[statusSettings[props.status].borderColor]};
    background-color: ${props => props.theme[statusSettings[props.status].background]};

`

