import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// Redux
import { connect } from "react-redux";

// Others
import { Row, Col, Accordion, Card, Breadcrumb } from "react-bootstrap";
import Moment from "react-moment";
import { MdFlightLand, MdFlightTakeoff, MdAccessTime } from "react-icons/md";
import {
  StyledWrapper,
  StyledBreadcrumb,
  StyledAirlineData,
  StyledFlightInfoWrapper,
  StyledFlightInfoDate,
  StyledFlightInfoTime,
  StyledFlightInfoAirport,
  StyledWrapperLink
} from "./styled";

class Flights extends Component {
  state = {
    availability: false,
    mdz: false,
    cor: false,
    bsasCordoba: [],
    mdzBsas: [],
    time: ""
  };

  componentDidMount() {
    const {fromCityCode, toCityCode } = this.props.location.state;
    const { epaCor, epaMdz } = this.props;

    if (fromCityCode === "MDZ" && toCityCode === "EPA") {
      this.setState({ availability: true, mdz: true });
    }
    if (fromCityCode === "EPA" && toCityCode === "COR") {
      this.setState({ availability: true, cor: true });
    }
    const bsasCordoba = epaCor.filter(
      el => el.destination === fromCityCode
    );
    this.setState({ bsasCordoba });

    const mdzBsas = epaMdz.filter(
      el => el.destination === fromCityCode
    );
    this.setState({ mdzBsas });
  }

  handleView = () => {
    const { mdzBsas, cor, mdz, bsasCordoba, availability } = this.state;
    const { arrive, departure } = this.props.location.state;

    if (availability) {
      if (mdz) {
        return mdzBsas.map((element, index) => (
          <Accordion defaultActiveKey="0" key={index}>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
              >From: {departure} To: {arrive}</Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <StyledWrapperLink to="/checkout">
                  <Card.Body>
                    <Row>
                      <Col lg={6}>
                        <img
                          className="img-thumbnail"
                          src="https://www.planetware.com/photos-large/CDN/canada-vancouver-stanley-park.jpg"
                          alt="canada"
                        />
                      </Col>
                      <Col lg={6} style={{ marginTop: "20px" }}>
                        <StyledAirlineData>
                          Flight Number: {element.flightNo} - {element.carrier}{" "}
                        </StyledAirlineData>
                        <Row>
                          <Col lg={6}>
                            <StyledFlightInfoWrapper>
                              <StyledFlightInfoDate>
                                <Moment format="Do MMMM">
                                  {element.departureDate}
                                </Moment>
                              </StyledFlightInfoDate>
                              <StyledFlightInfoTime>
                                <MdFlightTakeoff />
                                <Moment format="H:mm">
                                  {element.departureDate}
                                </Moment>
                              </StyledFlightInfoTime>
                              <StyledFlightInfoAirport>
                                {element.destination}
                              </StyledFlightInfoAirport>
                              <StyledFlightInfoAirport>
                                {departure}
                              </StyledFlightInfoAirport>
                            </StyledFlightInfoWrapper>
                          </Col>

                          <Col lg={6}>
                            <StyledFlightInfoWrapper>
                              <StyledFlightInfoDate>
                                <Moment format="Do MMMM">
                                  {element.arrivalDate}
                                </Moment>
                              </StyledFlightInfoDate>
                              <StyledFlightInfoTime>
                                <MdFlightLand />
                                <Moment format="H:mm">
                                  {element.arrivalDate}
                                </Moment>
                              </StyledFlightInfoTime>
                              <StyledFlightInfoAirport>
                                {element.origin}
                              </StyledFlightInfoAirport>
                              <StyledFlightInfoAirport>
                                {arrive}
                            </StyledFlightInfoAirport>
                            </StyledFlightInfoWrapper>
                          </Col>
                        </Row>
                        <hr />
                        <Col lg={12}>
                          <StyledFlightInfoWrapper>
                            <StyledFlightInfoDate>
                              Duration
                            </StyledFlightInfoDate>
                            <StyledFlightInfoTime>
                              <MdAccessTime />
                              <Moment
                                duration={element.departureDate}
                                date={element.arrivalDate}
                              />
                            </StyledFlightInfoTime>
                          </StyledFlightInfoWrapper>
                        </Col>
                      </Col>
                    </Row>
                  </Card.Body>
                </StyledWrapperLink>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ));
      }
      if (cor) {
        return bsasCordoba.map((element, index) => (
          <Accordion defaultActiveKey="0" key={index}>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
              >From: {departure} To: {arrive} </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Row>
                    <Col lg={6}>
                      <img
                        className="img-thumbnail"
                        src="https://www.planetware.com/photos-large/CDN/canada-vancouver-stanley-park.jpg"
                        alt="canada"
                      />
                    </Col>
                    <Col lg={6} style={{ marginTop: "20px" }}>
                      <StyledAirlineData>
                        Flight Number {element.flightNo} - {element.carrier}{" "}
                      </StyledAirlineData>
                      <Row>
                        <Col lg={6}>
                          <StyledFlightInfoWrapper>
                            <StyledFlightInfoDate>
                              <Moment format="Do MMMM">
                                {element.departureDate}
                              </Moment>
                            </StyledFlightInfoDate>
                            <StyledFlightInfoTime>
                              <MdFlightTakeoff />
                              <Moment format="H:mm">
                                {element.departureDate}
                              </Moment>
                            </StyledFlightInfoTime>
                            <StyledFlightInfoAirport>
                              {element.destination}
                            </StyledFlightInfoAirport>
                            <StyledFlightInfoAirport>
                              {departure}
                            </StyledFlightInfoAirport>
                          </StyledFlightInfoWrapper>
                        </Col>

                        <Col auto lg={6}>
                          <StyledFlightInfoWrapper>
                            <StyledFlightInfoDate>
                              <Moment format="Do MMMM">
                                {element.arrivalDate}
                              </Moment>
                            </StyledFlightInfoDate>
                            <StyledFlightInfoTime>
                              <MdFlightLand />
                              <Moment format="H:mm">
                                {element.arrivalDate}
                              </Moment>
                            </StyledFlightInfoTime>
                            <StyledFlightInfoAirport>
                              {element.origin}
                            </StyledFlightInfoAirport>
                            <StyledFlightInfoAirport>
                              {arrive}
                            </StyledFlightInfoAirport>
                          </StyledFlightInfoWrapper>
                        </Col>
                      </Row>
                      <hr />
                      <Col auto lg={12}>
                        <StyledFlightInfoWrapper>
                          <StyledFlightInfoDate>Duration</StyledFlightInfoDate>
                          <StyledFlightInfoTime>
                            <MdAccessTime />
                            <Moment
                              duration={element.departureDate}
                              date={element.arrivalDate}
                            />
                          </StyledFlightInfoTime>
                        </StyledFlightInfoWrapper>
                      </Col>
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ));
      }
    } else {
      return (
        <StyledWrapper>
          Oops..! Sorry, we could 't find any results.<a href="/search"> Try Again</a>
        </StyledWrapper>
      );
    }
  };

  render() {
    return (
      <StyledWrapper>
        <StyledBreadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/search">Search</Breadcrumb.Item>
          <Breadcrumb.Item active>Flights Results</Breadcrumb.Item>
        </StyledBreadcrumb>
        <h1>Flights Results</h1>
        <hr />
        {this.handleView()}
      </StyledWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    epaCor: state.epaCor,
    epaMdz: state.epaMdz
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Flights)
);
