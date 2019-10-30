import React, { Component } from "react";

// Redux
import { connect } from "react-redux";

// Others
import Card from "react-bootstrap/Card";
import {StyledCard, StyledCardTitle} from "./styled"



class CardItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <StyledCard >
        <Card.Img variant="top" src="https://daily.sevenfifty.com/app/uploads/2017/11/SFD_48hrs_Vancouver2_CR_iStock_2520x1420.jpg" />
        <Card.Body>
          <StyledCardTitle>{data.location.cityName}</StyledCardTitle>
          <Card.Text>
          {data.code}
          </Card.Text>
        </Card.Body>
      </StyledCard>
    );
  }
}
export default connect()(CardItem)

