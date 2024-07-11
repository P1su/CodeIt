import styled from "styled-components"

const Button = (props) => {
    return(
        <StyledButton type="button">{props.name}</StyledButton>
    )
}
const StyledButton = styled.button`
    width: 20%;
    margin: 0.1rem;
    padding: 1rem;
`


export default Button