import styled from "styled-components";
import Card from "react-bootstrap/Card";

export const StyledCard = styled(Card)`
  width: 18rem;
  margin: 10px 0;
  cursor: pointer;
  border: .2rem solid #d1eecc;
  &:hover {
    transform: scale(1.025);
    transition: all .25s;
  }
`
export const StyledCardTitle = styled.div`
  color: #57a99a;
`
