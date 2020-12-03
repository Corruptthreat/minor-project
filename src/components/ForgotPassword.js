import React, { Component, useRef , useState } from "react";
import { Form, Card, Button, Container,Alert} from "react-bootstrap";
import {useAuth} from '../context/AuthContext'
import {Link , useHistory} from 'react-router-dom'

export default function ForgotPassword() {
  const emailRef = useRef();
  const {resetPassword} = useAuth();
  const [error, seterror] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  async function handleSubmit(e){
    e.preventDefault()

    try{
        setMessage('')
      seterror('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('Check your inbox!')
    } catch{
      seterror('Failed to reset password')
    }
    
  }
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "50vh" }}
    >
      <div className="w-100" style={{ maxWidth:"400px"}}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} type="submit" className="w-100">
              Reset Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-3">
      <Link to="/login">Login</Link>
      </div>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/Signup">Sign Up</Link>
      </div>
       </div>
    </Container>
  );
}
