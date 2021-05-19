import React from 'react';
import './User.css';
import UserTaggedImageTable from "./UserTaggedImageTable";
import {Card, Col, Container, Row} from "react-bootstrap";

const imageUrl = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg?resize=750px:*";

const userData = {
    userName: "Estella",
    userImage: imageUrl,
    userTaggedImages: (() => {
        var i;
        var arr = [];
        for (i = 0; i < 30; i++) {
            arr.push(
                {
                    src: imageUrl,
                    name: "Image " + i,
                    regions: []
                }
            )
        }
        return arr;
    })()
}
const User = () => {
    return (
        <Container className={"fluid d-flex justify-content-left user-container"}>
            <Row>
                <Col md={5} >
                    <Card className={"user-card-container"}>
                        <Card.Img variant="top" src={userData.userImage}/>
                        <Card.Body>
                            <Card.Title>{userData.userName}</Card.Title>
                            <blockquote className="blockquote mb-0 card-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.
                                </p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={7}>
                        <Card className={"user-details-container"}>
                        <Card.Body>
                            <Card.Title>User Information</Card.Title>
                            <blockquote className="blockquote mb-0 card-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.
                                </p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12}>
                    <Container className={"fluid d-flex justify-content-center"}>
                        <span className={"tagged-images-title-container"}>Your Tagged Images</span>
                    </Container>
                </Col>
                <Col md={12}>
                    <UserTaggedImageTable userTaggedImages={userData.userTaggedImages}/>
                </Col>
            </Row>
        </Container>
    )
}
export default User;
