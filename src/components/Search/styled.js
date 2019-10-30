import styled from "styled-components";
import { Row, Col, Button, Breadcrumb } from "react-bootstrap";
import Container from "react-bootstrap/Container";



export const StyledWrapper = styled(Container)`
  padding: 40px;
  h1 {
    text-align: center;
  }
`;

export const StyledBtGoCol = styled(Col)`
  text-align: center;
  margin-top: 10px;
`;

export const StyledGoButton = styled(Button)`
  background: #76dbd1;
  cursor: pointer;
  border: none;
  margin-top: 35px;
  &:hover {
    background: #ecf4f3;
    color: #76dbd1;
  }
  &:active {
    background: #ecf4f3 !important;
    color: #76dbd1;
  }
  @media (max-width: 768px) {
    margin: 20px 0;
  }
}
`;

export const StyledTitle = styled.div`
  margin: 40px 0;
  padding: 8px 8px;
  cursor: pointer;
  font-size: 20px;
`;

export const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledUpdateButton = styled(Button)`
  margin-top: 0;
  margin-left: 14px;
  background: #76dbd1;
  border: none;
  &:hover {
    background: #ecf4f3;
    color: #76dbd1;
  }
  &:active {
    background: #ecf4f3 !important;
    color: #76dbd1;
  }
  @media (max-width: 768px) {
    text-align: center;
    margin: 10px 0;
  }
`;

export const StyledInfo = styled.h2`
  display: flex;
  justify-content: start;
  font-size: 20px;
  align-items: center;
  font-weight: 100;
  svg {
    margin-right: 8px;
  }
  span {
    margin-left: 8px;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const StyledRow = styled(Row)`
  align-items: center;
  margin-top: 40px;
  border-radius: 10px;
  padding: 2rem;
  border: 0.2rem solid #ececec;
  box-shadow: -1px 2px 7px 0px #00000014;
  background: white;
  border-radius: 10px;
  transition: 0.3s ease box-shadow, 0.3s ease transform;
`;

export const StyledBreadcrumb = styled(Breadcrumb)`
  ol {
    background: transparent;
  }
`;