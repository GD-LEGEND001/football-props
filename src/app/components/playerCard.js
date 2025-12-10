"use client";

import Card from "react-bootstrap/Card";

export default function PlayerCard({
  name = "Unknown Player",
  team = "Unknown Team",
  nationality = "Unknown",
  jerseyNumber = "N/A",
  age = "N/A",
  imageUrl = "https://via.placeholder.com/150"
}) {
  return (
    <Card style={{ width: "18rem", margin: 20 }}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br/>
          <strong>Nationality:</strong> {nationality} <br/>
          <strong>Jersey Number:</strong> {jerseyNumber} <br/>
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
