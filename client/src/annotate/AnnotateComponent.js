import ReactImageAnnotate from "react-image-annotate"
import React from "react";

const AnnotateComponent = () => (
    <ReactImageAnnotate
        selectedImage="https://example.com/image1.png"
        taskDescription="# Draw region around each animal."
        images={[{src: "localhost:5000/get_image", name: "Image 1"}]}
        regionClsList={["Dog", "Cat"]}
    />
)
export default AnnotateComponent;
