import Container from "react-bootstrap/Container";
import { Breadcrumb } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";


export const StyledWrapper = styled(Container)`
  padding: 40px;
  h1 {
    text-align: center;
  }
`;

export const StyledBreadcrumb = styled(Breadcrumb)`
  ol {
    background: transparent;
  }
`;

export const StyledAirlineData = styled.p`
  font-size: 12px;
  text-align: center;
  line-height: 16px;
`;

export const StyledFlightInfoWrapper = styled.div`
  text-align: center;
  svg {
    margin-right: 8px;
  }
`;

export const StyledFlightInfoDate = styled.p`
  font-size: 15px;
  margin: 0px;
`;

export const StyledFlightInfoTime = styled.p`
  font-size: 35px;
  font-weight: 500;
  padding-top: 5px;
  margin: 0px;
`;

export const StyledFlightInfoAirport = styled.p`
  padding: 12px 0 5px;
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;

export const StyledWrapperLink = styled(Link)`
  color: #616161;
  &:hover {
    color: #616161;
    text-decoration: none;
  }
`;