import React, {useEffect, useState} from 'react';
import './User.css';
import UserTaggedImageTable from "./UserTaggedImageTable";
import {Card, Col, Container, Row, Spinner} from "react-bootstrap";
import COCOIEComponent from "../import_export/CocoImportComponent";

const imageUrl = "https://media-exp1.licdn.com/dms/image/C4E03AQFXYEtSj4j0-A/profile-displayphoto-shrink_200_200/0/1570664194027?e=1626307200&v=beta&t=nYS31zD5tvCN3-vuUTGt4aqJJoK0sF4GF7KJrxIl9Hg";

const superagent = require('superagent');

const db = "instances_val2014";

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
    const [testImages, setTestImages] = useState(undefined);

    useEffect(
        () =>
            superagent
                .get('http://localhost/api/tagging-service/annotate/data/get/'+db)
                .set('Content-Type', 'application/json')
                .end((err, res) => {
                    console.log(res)
                    if (res !== undefined) {
                        setTestImages(res.body);
                    }
                })
        , []);


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
                    {testImages === undefined || testImages === null || testImages.annotateImageModelList == null
                        ?
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                        :<UserTaggedImageTable userTaggedImages={testImages.annotateImageModelList}/>}

                </Col>
            </Row>
        </Container>
    )
}
export default User;
