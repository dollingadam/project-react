import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function FetchComp() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="whole">
      {data.map((item) => (
        <Card className="cards" border="primary" style={{ width: "18rem" }}>
          <Card.Img className="images" variant="top" src={item.image} />
          <Card.Body border="primary" className="cards2">
            <div className="cards">
              <Card.Title className="title">
                {item.name}, {item.age}
              </Card.Title>
              <Card.Text className="ras">Ras: {item.breed}</Card.Text>
              <Card.Text className="om">{item.about}</Card.Text>
              <Link
                className="book"
                to={{ pathname: "/form", state: { item } }}
              >
                Boka besök
              </Link>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
export default FetchComp;
