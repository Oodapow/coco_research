import React, {useState} from 'react';
import {Form, Container, Button, FormLabel} from "react-bootstrap";
import {Input} from "@material-ui/core";

const superagent = require('superagent');

const COCOIEComponent = () => {
    const [file, setFile] = useState(null);
    return (
        <Container className={"fluid user-container pb-2 pt-2"}>
            <Form >
                <Form.Row>
                    <Form.File type={"file"} custom className={"col-11"}>
                        <Form.File.Label>Import Coco Dataset File!</Form.File.Label>
                        <Form.File.Input onChange={(e) => setFile(e.target.files[0])} />
                    </Form.File>
                    <div className={"col-1"}>
                        <Button
                            disabled={file === undefined || file === null || file.type !== "application/json"}
                            onClick={() =>
                                superagent
                                    .post('http://localhost:5000/data/import/instances')
                                    .send(file)
                                    .set('Content-Type', 'application/json')
                                    .end((err, res) => {
                                        console.log(res)
                                    })}>Send
                        </Button>
                    </div>
                </Form.Row>
            </Form>
        </Container>
    )
};

export default COCOIEComponent;
