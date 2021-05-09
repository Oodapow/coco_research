import ReactImageAnnotate from "react-image-annotate";
import React, {useState} from 'react';

var testImages = [{
    src: "data:image/jpeg;base64,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",
    name: "Image 1",
    regions: []
}, {
    src: "data:image/jpeg;base64,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",
    name: "Image 2",
    regions: []
}, {
    src: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg?resize=750px:*",
    name: "Image 3",
    regions: []
}]
const AnnotateComponent = () => {
    const [count, setCount] = useState(0);
    return (
        <ReactImageAnnotate
            selectedImage={count}
            taskDescription="# Draw region around each animal."
            images={testImages}
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
            onExit={(e)=>{console.log(e)}}
            regionClsList={["Dog", "Cat"]}
        />
    )
}
export default AnnotateComponent;
