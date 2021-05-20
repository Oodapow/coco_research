import React, {useState} from 'react';
import {Form, Container, Button} from "react-bootstrap";

const superagent = require('superagent');

const COCOIEComponent = () => {
    const [file, setFile] = useState(null);
    return <Container className={"fluid d-flex justify-content-left user-container"}>
        <Form className={"pt-2 pb-2"}>
            <Form.File id="formcheck-api-regular">
                <Form.File.Input onChange={(e) => setFile(e.target.files[0])}/>
            </Form.File>
        </Form>
        <Button
            disabled={file === undefined || file === null || file.type !== "application/json"}
            onClick={() =>
                superagent
                    .post('http://localhost:5000/data/import/instances')
                    .send(file)
                    .set('Content-Type', 'application/json')
                    .end((err, res) => {
                        console.log(res)
                    })}>
            Send!
        </Button>
    </Container>
};

export default COCOIEComponent;
