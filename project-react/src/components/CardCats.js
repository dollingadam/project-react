import React from "react";
import Card from "react-bootstrap/Card";
function CardCats() {
  return (
    <div className="whole">
      <Card className="cards" border="primary" style={{ width: "18rem" }}>
        <Card.Img className="images" variant="top" src="/image/katt2.jpg" />
        <Card.Body border="primary">
          <div className="cards">
            <Card.Title className="title center">Amos</Card.Title>
          </div>
        </Card.Body>
      </Card>
      <Card className="cards" border="primary" style={{ width: "18rem" }}>
        <Card.Img className="images" variant="top" src="/image/katt6.jpg" />
        <Card.Body border="primary">
          <div className="cards">
            <Card.Title className="title center">Sam</Card.Title>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardCats;
