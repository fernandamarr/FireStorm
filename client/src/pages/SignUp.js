import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import SignUpBtn from "../components/SignUp";

class SignUp extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    };

    // HEY CESAR IF YOU ARE LOOKING AT THIS AND WANT TO ADJUST
    // GO AHEAD :)
    handleFormSubmit = e => {
        e.preventDefault();
        if (this.state.firstName && this.state.lastName && this.state.email && this.state.password) {
            API.savePlayer({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
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
                            <h1 className="heading-primary"> Sign-Up  </h1>
                        </Jumbotron>
                        <form>
                            <Input
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                            name="firstName"
                            placeholder="First Name (sort of required)"
                            />
                            <Input
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                            name="lastName"
                            placeholder="Last Name (just do it)"
                            />
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
                                <SignUpBtn>
                            <Link to="/">
                                    Sign Up!
                            </Link>
                                </SignUpBtn>

                            {/* HEY IDK IF WE SHOULD ADD THIS BUT ITS UP TO YOU! I GUES WE CAN 
                            DO EITHER OR LIKE REDIRECT TO LOGIN IN OR NOT */}
                            {/* <Link to="/game">
                                <FormBtn
                                    disable={!(this.state.email && this.state.password)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Ready to Play!
                            </FormBtn>
                            </Link> */}
                        </form>
                    </Col>
                </Row>
            </Container>
            



        )
    }
}
export default SignUp;