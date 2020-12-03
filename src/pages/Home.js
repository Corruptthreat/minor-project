import React from "react";
import { useAuth } from "../context/AuthContext";
import { Card, Alert, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
export default function Home() {
  const { currentUser } = useAuth();
  
  return (
    <>
    <Navbar />
    <div>
      
      <Card>
          <Card.Body>
              
          </Card.Body>
      </Card>
    </div>
    </>
  );
}
