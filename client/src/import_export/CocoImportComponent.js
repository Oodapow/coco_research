import React, {useState} from 'react';
import {Form, Container, Button, FormLabel} from "react-bootstrap";

const superagent = require('superagent');

const COCOIEComponent = () => {
    const [file, setFile] = useState(null);
    return (
        <Container className={"fluid user-container pb-2 pt-2"}>
            <Form>
                <Form.Row>
                    <Form.File type={"file"} custom className={"col-11"}>
                        <Form.File.Label>Import Coco Dataset File!</Form.File.Label>
                        <Form.File.Input onChange={(e) => setFile(e.target.files[0])}/>
                    </Form.File>
                    <div className={"col-1"}>
                        <Button
                            disabled={file === undefined || file === null || file.type !== "application/json"}
                            onClick={() => {
                                let fileName = file.name === undefined ? 'instances' : file.name.substring(0, file.name.length - 5);
                                superagent
                                    .post('http://localhost:8082/data/import/' + fileName)
                                    .send(file)
                                    .set('Content-Type', 'application/json')
                                    .end((err, res) => {
                                        console.log(res)
                                    })
                            }}>Send
                        </Button>
                    </div>
                </Form.Row>
            </Form>
        </Container>
    )
};

export default COCOIEComponent;
