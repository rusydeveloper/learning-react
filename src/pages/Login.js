import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { login } from "../actions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Masuk</Card.Title>
          <Card.Text>
            <label>email: </label>
            <br />
            <input
              type="email"
              onChange={event => setEmail(event.target.value)}
              placeholder="email"
              required
            />
            <br />
            <label>Password:</label>
            <br />
            <input
              type="password"
              onChange={event => setPassword(event.target.value)}
              placeholder="password"
              required
            />
            <br />
          </Card.Text>
          <Button
            type="submit"
            value="Submit"
            onClick={() => dispatch(login(email, password))}
          >
            Kirim
          </Button>
        </Card.Body>
        <h4> </h4>
      </Card>
    </div>
  );
}

export default Login;
