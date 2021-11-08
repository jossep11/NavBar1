import React from "react";
import CardItems from "./CardItems";
import {
  ServicesContainter,
  Header_ParrafoServic,
  Wrapper,
  CardContainter,
  Cards__items,
} from "./Services.elements";

function Services() {
  return (
    <ServicesContainter id="serv1">
      <Header_ParrafoServic> Check out these places!</Header_ParrafoServic>

      <CardContainter>
        <Wrapper>
          <Cards__items>
            <CardItems
              src="images/img-9.jpg"
              text="Explore the hidden waterfall asd as dasd  deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItems
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
          </Cards__items>

          <Cards__items>
            <CardItems
              src="images/img-9.jpg"
              text="Explore the hidden waterfall asd as dasd  deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItems
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />

            <CardItems
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
          </Cards__items>
        </Wrapper>
      </CardContainter>
    </ServicesContainter>
  );
}

export default Services;
