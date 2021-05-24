import ReactImageAnnotate from 'react-image-annotate';
import React, {useEffect, useState} from 'react';
import './AnnotateComponent.css';
import {Spinner} from "react-bootstrap";

const superagent = require('superagent');

const db = "instances_val2014";

const AnnotateComponent = () => {
    const [count, setCount] = useState(0);
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
        <div className='annotator'>
            {testImages === undefined || testImages === null || testImages.annotateImageModelList == null
                ?
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                :
                <ReactImageAnnotate
                    selectedImage={count}
                    taskDescription="# Draw region around each animal."
                    images={testImages.annotateImageModelList}
                    onNextImage={
                        (e) => {
                            if (count === e.images.size - 1) {
                                setCount(0);
                            } else {
                                setCount(count + 1);
                            }
                            console.log(e);
                        }}
                    onPrevImage={
                        (e) => {
                            if (count === 0) {
                                setCount(0);
                            } else {
                                setCount(count - 1);
                            }
                            console.log(e);
                        }
                    }
                    onExit={(e) => {
                        console.log(e)
                        superagent
                            .post('http://localhost/api/tagging-service/annotate/data/post/'+db)
                            .send(e.images)
                            .set('Content-Type', 'application/json')
                            .end((err, res) => {
                                console.log(res)
                            })
                    }}
                    regionClsList={testImages.regionList}
                />}
        </div>
    )
}
export default AnnotateComponent;
