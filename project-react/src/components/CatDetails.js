import React, { useState } from "react";
import { useLocation } from "react-router-dom";
function CatDetails() {
  const location = useLocation();
  const { item } = location.state;

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.image} alt={`Bild på ${item.name}`} />
      <p>Age: {item.age}</p>
      <p>Breed: {item.breed}</p>
      <p>About: {item.about}</p>
    </div>
  );
}

export default CatDetails;
