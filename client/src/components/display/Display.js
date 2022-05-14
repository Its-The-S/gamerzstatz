import React from "react";
import Card from "react-bootstrap/Card";

const canine = {
  name: "Spot",
  description: "The best boy",
  id: 1,
};

export default function Display() {
  return (
    <div>
      <Card
        name={canine.name}
        description={canine.description}
        id={canine.id}
      />
    </div>
  );
}
