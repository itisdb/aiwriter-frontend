import React from "react";
import classnames from "classnames";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  CustomInput,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// reactstrap components
import { HashLink as Link } from "react-router-hash-link";

export default function PageHeader() {
  function handleClick(evt) {
    document.querySelector('[id="#purchase"]').scrollIntoView();
  };
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">AI• Writer</h1>
          <h3>
            <span>A way to change the world. Provide the inputs, AI writes the blog.
          <h2><br></br>Its that simple.</h2></span>
          </h3>
          <Button color="primary" type="button" href="\ai">
              Go to AI
          </Button>
          <Button color="default" href="/purchase">Buy Premium</Button>
        </div>
      </Container>
    </div>
  );
}
