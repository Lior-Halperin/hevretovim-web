import styled from 'styled-components';

interface ComponentsProps {
    bgColor: string
}

const StyledWrapper = styled.div<ComponentsProps>`
background-color: ${(props) => props.bgColor || '#007bff'};
`

export default StyledWrapper;