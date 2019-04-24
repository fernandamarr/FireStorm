import React, { Component } from "react";

import axios from 'axios';
import { Col, Row, Container } from "../components/SignUpGrid";
import Jumbotron from "../components/Jumbotron";

import { Input } from "../components/Input";


class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }

    onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    axios.post('/api/player/signup', { name, email, password })
        .then((result) => {
            this.props.history.push("/login"); 
            alert("You are signed up!")          
        }).catch(error => console.log(error));
    }

    render() {
        const { name, email, password } = this.state;
        return (
            <Container fluid>
                <Row>
                    <Col size="md-3 sm-12">
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1 className="heading-primary text-white"> Sign-Up </h1>
                        </Jumbotron>
                        <form className="form-signin" onSubmit={this.onSubmit}>
                            <Input
                                value={name}
                                onChange={this.onChange}
                                name="name"
                                placeholder="Enter Your Name"
                            />
                            <Input
                                value={email}
                                onChange={this.onChange}
                                name="email"
                                placeholder="Email (required)"
                                required
                            />
                            <Input
                                value={password}
                                onChange={this.onChange}
                                name="password"
                                placeholder="Password (required)"
                                required
                            />
                            
                           
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                       
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default SignUp;