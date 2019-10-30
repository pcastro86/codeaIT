import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import {
  getDestinationRequest,
  isFinish,
  deselectedOrigin,
  updateOrigin
} from "../../store";

// Components
import CardItem from "../Card/index";

// Others
import { MdLocationSearching, MdPlace } from "react-icons/md";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import {
  StyledWrapper,
  StyledBtGoCol,
  StyledGoButton,
  StyledTitle,
  StyledCardWrapper,
  StyledUpdateButton,
  StyledInfo,
  StyledRow,
  StyledBreadcrumb
} from "./styled"

class Search extends Component {
  state = {
    departure: "",
    arrive: "",
    fromCityCode: "",
    toCityCode: "",
  };

  handleOriginFlight = (value, name) => {
    const { getDestinationRequest } = this.props;
    getDestinationRequest(value);
    this.setState({ departure: name, fromCityCode: value });
  };

  handleDestinationFlight = (value, name) => {
    const { isFinish } = this.props;
    this.setState({ arrive: name, toCityCode: value });
    isFinish();
  };

  handlechangeValue = () => {
    const { deselectedOrigin, updateOrigin } = this.props;
    this.setState({ departure: "", arrive: "" });
    deselectedOrigin();
    updateOrigin();
  };

  render() {
    const { routes, destinations, finish, selectedOrigin } = this.props;
    const { departure, arrive, fromCityCode, toCityCode } = this.state;

    return (
      <StyledWrapper>
        <StyledBreadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/search">Search</Breadcrumb.Item>
        </StyledBreadcrumb>
        <h1>Search Page</h1>
        <hr />
        <StyledRow>
          <Col xs={12} sm={12} md={12} lg={5}>
            <StyledInfo>
              <MdLocationSearching />
              Flying from: <span>{departure}</span>
            </StyledInfo>
          </Col>
          <Col xs={12} sm={12} md={12} lg={2}>
            {selectedOrigin ? (
              <StyledUpdateButton
                onClick={this.handlechangeValue}
              >
                Modificar
              </StyledUpdateButton>
            ) : null}
          </Col>
          <Col xs={12} sm={12} md={12} lg={5}>
            <StyledInfo>
              <MdPlace />
              To: <span>{arrive}</span>
            </StyledInfo>
          </Col>
          <Col lg={12}>
            <Row>
              <StyledBtGoCol xs={12} sm={12} md={12} lg={12}>
                <Link to={{pathname: `/flights/${fromCityCode}/${toCityCode}`, state : { arrive: arrive , fromCityCode: fromCityCode, toCityCode: toCityCode, departure: departure} }}
                >
                  {finish ? (
                    <StyledGoButton size="lg" variant="primary">
                      Start your journey!
                    </StyledGoButton>
                  ) : null}
                </Link>
              </StyledBtGoCol>
            </Row>
          </Col>
        </StyledRow>
        {!selectedOrigin ? (
          <section>
            <StyledTitle> Select the city you are flying from : </StyledTitle>
            <Row>
              {routes.map((element, index) => (
                <Col key={index}>
                  <StyledCardWrapper
                    onClick={() =>
                      this.handleOriginFlight(element.code, element.location.cityName)
                    }
                  >
                    <CardItem data={element} />
                  </StyledCardWrapper>
                </Col>
              ))}
            </Row>
          </section>
        ) : null}

        {selectedOrigin ? (
          <section>
            <StyledTitle> Select the city you are flying to : </StyledTitle>
            <Row>
              {destinations.map((item, index) =>
                item.map((element, subindex) => (
                  <Col key={subindex}>
                    <StyledCardWrapper
                      onClick={() =>
                        this.handleDestinationFlight(
                          element.code,
                          element.location.cityName
                        )
                      }
                    >
                      <CardItem data={element} />
                    </StyledCardWrapper>
                  </Col>
                ))
              )}
            </Row>
          </section>
        ) : null}
      </StyledWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    routes: state.routes,
    destinations: state.destinations,
    selectedOrigin: state.selectedOrigin,
    finish: state.finish,
    fromCityCode: state.fromCityCode,
    toCityCodeAction: state.toCityCodeAction
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getDestinationRequest: value => dispatch(getDestinationRequest(value)),
    isFinish: () => dispatch(isFinish()),
    deselectedOrigin: () => dispatch(deselectedOrigin()),
    updateOrigin: () => dispatch(updateOrigin())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
