import React from "react";

// reactstrap components
import {
  Button,
  Container,
} from "reactstrap";
// reactstrap components
export default function PageHeader() {
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
