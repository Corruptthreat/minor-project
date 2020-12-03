import React, { Component, useRef , useState } from "react";
import { Form, Card, Button, Container,Alert} from "react-bootstrap";
import {useAuth} from '../context/AuthContext'
import {fireDb} from '../FirebaseLogin'
import {Link , useHistory} from 'react-router-dom'

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const {login} = useAuth();
  const [error, seterror] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  async function handleSubmit(e){
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
    return seterror('Password do not match')
    }
    try{
      seterror('')
      setLoading(true)
      await login(emailRef.current.value,passwordRef.current.value)
      // role login
      fireDb.
      child("users/")
      .orderByChild("email")
      .equalTo(emailRef.current.value)
      .on("value", function(snapshot) {
        snapshot.forEach(function(data) {
          localStorage.setItem("key", data.key);
          console.log(data.key);
        });
        localStorage.setItem(
          "userrole",
          snapshot.val()[localStorage.getItem("key")].role
        );

        if (snapshot.val()[localStorage.getItem("key")].role == "admin") {
          history.push("/Signup")
        } else {
          history.push("/home")
        }
      });
      //role login
    } catch{
      seterror('Failed to sign in')
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
          <h2 className="text-center mb-4">Sign In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} type="submit" className="w-100">
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-3">
      <Link to="/forgot-password">Forgot Password?</Link>
      </div>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/Signup">Sign Up</Link>
      </div>
       </div>
    </Container>
  );
}
