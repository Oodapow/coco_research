import ReactImageAnnotate from 'react-image-annotate';
import React, {useEffect, useState} from 'react';
import './AnnotateComponent.css';
import {Spinner} from "react-bootstrap";

const superagent = require('superagent');

const AnnotateComponent = () => {
    const [count, setCount] = useState(0);
    const [testImages, setTestImages] = useState(undefined);
    useEffect(
        () =>
            superagent
                .get('http://localhost:8082/annotate/data/get/instances')
                .set('Content-Type', 'application/json')
                .end((err, res) => {
                    console.log(res)
                    setTestImages(res.body)
                })
        , []);

    return (
        <div className='annotator'>
            {testImages === undefined
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
                    }}
                    regionClsList={testImages.regionList}
                />}
        </div>
    )
}
export default AnnotateComponent;
