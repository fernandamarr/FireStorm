import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import axios from 'axios';


class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            message: ""
        };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        axios.post('/api/player/login', { email, password })
            .then((result) => {
                localStorage.setItem('myemail', result.data.email);
                console.log(result.data);
                localStorage.setItem('jwtToken', result.data.token);
                this.setState({ message: '' });
                this.props.history.push('/game');
            }).catch((error) => {
                if (error.response.status === 401) {
                    this.setState({ message: 'Login failed. email or password do not match' });
                }
            });
    }
    

    render() {
        const { email, password, message } = this.state;


        return (
            <Container fluid>
                <Row >
                    <Col size="md-4 sm-12" >

                    </Col>
                    <Col size="md-4 sm-6">
                        <Jumbotron>
                            <h1 className="text-white">Welcome! Please login to play!  </h1>
                        </Jumbotron>
                        <form className="form-signin" onSubmit={this.onSubmit}>
                            {message !== '' &&
                                <div className="alert alert-warning alert-dismissible" role="alert">
                                    {message}
                                </div>
                            }
                            <Input
                                value={email}
                                onChange={this.onChange}
                                name="email"
                                placeholder="Email (required)"
                                required
                            />
                            <Input
                                type="password"
                                value={password}
                                onChange={this.onChange}
                                name="password"
                                placeholder="Password (required)"
                                required
                            />

                            {/* <FormBtn>Log In To Play!</FormBtn> */}
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                            <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                            <p className="text-white">
                                Not a member? <Link to="/signup"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
                            </p>
                        </form>
                    </Col>
                </Row>

            </Container>
        )
    }
}
export default Login;