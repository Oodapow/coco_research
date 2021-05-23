import React from "react";
import './UserTaggedImageEntry.css';
import {Card} from "react-bootstrap";
const UserTaggedImageEntry = (props) => {
    const elem = props.element;
    return (
        <>
            <Card style={{ width: '15rem' }} className={"taggedImageUserCard"}>
                <Card.Img variant="top" src={elem !== undefined? elem.src:""} />
                <Card.Body>
                    <Card.Title>{elem !== undefined? elem.name :""}</Card.Title>
                    <Card.Text>
                        Regions<br/>
                        {elem !== undefined? elem.regions.map(x=> x.cls): ""}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
export default UserTaggedImageEntry;
