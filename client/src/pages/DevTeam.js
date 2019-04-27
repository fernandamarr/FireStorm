import React from "react";
import {Helmet} from 'react-helmet';
// import { Cards } from "../components/Card";
import Footer from "../components/CardFooter";
import Navbar from "../components/CardNavbar";
import { Container, Row, Col } from "../components/CardGrid";

function DevTeam() {
    return(
        <div>
            <Helmet>
                <style>{'body { background-color: #d6d6d6; }'}</style>
            </Helmet>
            <Navbar/>
            <h1 className="dev-title text-center mt-3">Meet The Team</h1>
            <Container>
                <Row>
                    <Col size="md-3">
                    <div className="list-group-item">
                        <div className="image-area">
                            <div className="img-wrapper">
                                <img src="/assets/images/hector.jpg" alt="Hector Benitez"/>
                                <h2>Hector Benitez<br></br><span className="dev-info">full-stack web developer</span></h2>
                                <ul>
                                <li><a rel="noreferrer noopener" target="_blank" href="https://github.com/h-Benitez13"><i className="fab fa-github"></i></a></li>
                                <li><a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/hector-benitez/"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a rel="noreferrer noopener" target="_blank" href="http://hectorjrbenitez.com/"><i className="fas fa-user-circle"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col size="md-3">
                    <div className="list-group-item">
                        <div className="image-area">
                            <div className="img-wrapper">
                                <img src="/assets/images/cesar.jpg" alt="Cesar Marroquin"/>
                                <h2>Cesar Marroquin<br></br><span className="dev-info">full-stack web developer</span></h2>
                                <ul>
                                <li>
                                <a rel="noreferrer noopener" target="_blank" href="https://github.com/cesarmarroquin22"><i className="fab fa-github"></i></a></li>
                                <li><a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/cesar-a-marroquin-gozalo-16964b52/"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a rel="noreferrer noopener" target="_blank" href="https://cesarmarroquin22.github.io/site/"><i className="fas fa-user-circle"></i></a></li>
                                </ul>
                            </div>  
                        </div>
                    </div>
                    </Col>
                    <Col size="md-3">
                    <div className="list-group-item">
                        <div className="image-area">
                            <div className="img-wrapper">
                                <img src="/assets/images/fernanda.jpeg" alt="Fernanda Marroquin"/>
                                <h2>Fernanda Marroquin<br></br><span className="dev-info">full-stack web developer</span></h2>
                                <ul>
                                    <li><a rel="noreferrer noopener" target="_blank" href="https://github.com/fernandamarr"><i className="fab fa-github"></i></a></li>
                                    <li><a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/fernandamarroquin/"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a rel="noreferrer noopener" target="_blank" href="https://www.fernandamarroquin.com/"><i className="fas fa-user-circle"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col size="md-3">
                    <div className="list-group-item">
                        <div className="image-area">
                            <div className="img-wrapper">
                                <img src="/assets/images/myk.png" alt="Myk Duffy"/>
                                <h2>Myk Duffy<br></br><span className="dev-info">full-stack web developer</span></h2>
                                <ul>
                                    <li><a rel="noreferrer noopener" target="_blank" href="https://github.com/mpduffy82"><i className="fab fa-github"></i></a></li>
                                    <li><a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/mykola-duffy-56577932/"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a rel="noreferrer noopener" target="_blank" href="https://github.com/mpduffy82"><i className="fas fa-user-circle"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default DevTeam;