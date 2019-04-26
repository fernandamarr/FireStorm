import React from "react";
import "./style.css";
import { Container, Row, Col, Thumbnail } from "../CardGrid";

export function Cards({
    thumbnail = "https://placehold.it/300x300",
    thumbnail1 = "https://www.sciencemag.org/sites/default/files/styles/inline__450w__no_aspect/public/cat_16x9.jpg?itok=Tzd9Welk",
    thumbnail2 = "https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F941716%252Fffe3b23f-3f72-4b1f-a436-c87a6c3f9c83.jpg%252F950x534__filters%253Aquality%252890%2529.jpg?signature=i2_mVJoalmxheefzNz5xjXpVHN0=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com",
    thumbnail3 = "https://www.catster.com/wp-content/uploads/2017/10/A-kitten-meowing-with-his-mouth-open.jpg",
    thumbnail4 = "http://www.aspca.org/sites/default/files/meowing-and-yowling.jpg"
}) {
    return(
    <div>
        <li className="list-group-item">
        <Container>
            <Row>
                <Col size="xs-4 sm-2">
                <Thumbnail src={thumbnail1}/>
                </Col>
                <Col size="xs-6 sm-9">
            <h3>Hector Benitez</h3>
            <p>info here</p>
            <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/hector-benitez/">LinkedIn | </a>
            <a rel="noreferrer noopener" target="_blank" href="https://github.com/h-Benitez13"> GitHub</a>
                </Col>
            </Row>
        </Container>
        </li>
       
        <li className="list-group-item">
        <Container>
            <Row>
                <Col size="xs-4 sm-2">
                <Thumbnail src={thumbnail2}/>
                </Col>
                <Col size="xs-6 sm-9">
            <h3>Cesar Marroquin</h3>
            <p>info here</p>
            <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/cesar-a-marroquin-gozalo-16964b52/">LinkedIn | </a>
            <a rel="noreferrer noopener" target="_blank" href="https://github.com/cesarmarroquin22"> GitHub</a>
                </Col>
            </Row>
        </Container>
        </li> 
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                    <Thumbnail src={thumbnail3}/>
                    </Col>
                    <Col size="xs-6 sm-9">
                    <h3>Fernanda Marroquin</h3>
                    <p>info here</p>
                    <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/fernandamarroquin/">LinkedIn | </a>
                    <a rel="noreferrer noopener" target="_blank" href="https://github.com/fernandamarr"> GitHub</a>
                    </Col>
                </Row>
            </Container>
        </li>
        <li className="list-group-item">
        <Container>
            <Row>
                <Col size="xs-4 sm-2">
                <Thumbnail src={thumbnail4}/>
                </Col>
                <Col size="xs-6 sm-9">
            <h3>Myk Duffy</h3>
            <p>info here</p>
            <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/mykola-duffy-56577932/">LinkedIn | </a>
            <a rel="noreferrer noopener" target="_blank" href="https://github.com/mpduffy82"> GitHub</a>
                </Col>
            </Row>
        </Container>
        </li>
    </div>
    ) 
}