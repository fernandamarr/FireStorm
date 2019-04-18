import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Input, FormBtn } from "../components/Input";
import SignUpBtn from "../components/SignUp";

class Login extends Component {
    state = {

        email: "",
        password: ""

    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    // HI CESAR!!!
    // This function is just in place to NOT throw an error
    // re-format/edit as you want

    handleFormSubmit = e => {
        e.preventDefault();
        if (this.state.email && this.state.password) {
            API.savePlayer({

                email: this.state.email,
                password: this.state.password
            })
                .then(res => res.json())
                .catch(err => console.log(err));

        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Welcome! Please login to play!  </h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="Email (required)"
                            />
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                placeholder="Password (MOST DEF REQUIRED SON!)"
                            />
                            <Link to="/signup">
                                <SignUpBtn>
                                    Sign Up!
                                </SignUpBtn>
                            </Link>
                            <Link to="/game">
                                <FormBtn
                                    disable={!(this.state.email && this.state.password)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Ready to Play!
                            </FormBtn>
                            </Link>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Login;