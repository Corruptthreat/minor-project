import React from "react";
import { useAuth } from "../context/AuthContext";
import { Card, Alert, Buton } from "react-bootstrap";

export default function Home() {
  const { currentUser } = useAuth();
  return (
    <div>
      <Card>
          <Card.Body>
              
          </Card.Body>
      </Card>
    </div>
  );
}
