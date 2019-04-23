// import React, { Component } from "react";
// import axios from 'axios';
// import { Col, Row, Container } from "../components/SignUpGrid";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";

// class Home extends Component {

//     constructor() {
//         super();
//         this.state = {
//             name: "",
//             email: "",
//             password: ""
//         }
//     }

//     getPlayer = () => {
//         API.getPlayer().then(res => {
//             this.setState({
//                 player: res.data
//             })
//         }).catch(err => console.log(err))
//     }

//     componenetDidMount() {
//         axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
//         this.getPlayer();
//     }

//     onChange = (e) => {
//         const state = this.state
//         state[e.target.name] = e.target.value;
//         this.setState(state);
//       }

//     onSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, password } = this.state;
//     axios.post('/api/player/signup', { name, email, password })
//         .then((result) => {
//         this.setState({ message: '' });
//         this.props.history.push("/login")
//         });
//     }

//     render() {
//         return (
//             <Container fluid>
//                 <Row>
//                     <Col size="md-6">
//                         <Jumbotron>
//                             {localStorage.getItem('jwtToken')}
//                             <h1 className="heading-primary"> HELLO THIS IS A TEST THIS IS OUR HOME PAGE </h1>
//                         </Jumbotron>
//                     </Col>
//                 </Row>
//             </Container>
//         )
//     }
// }
// export default Home;