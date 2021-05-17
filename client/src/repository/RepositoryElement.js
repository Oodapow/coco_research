import {Button, Modal} from "react-bootstrap";
import React, {useState} from "react";
import './RepositoryElement.css';
const RepositoryElement = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <tr onClick={handleShow}>
                <td className={props.element.current?"currentElement":""}>
                    {props.element.id}
                </td>
                <td>
                    {props.element.repoName}
                </td>
                <td>
                    {props.element.description.length>50?props.element.description.substring(0,20)+'...':props.element.description}
                </td>
                <td>
                    {props.element.numberOfImages}
                </td>
            </tr>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modify image cluster {props.element.id} : {props.element.repoName} </Modal.Title>
                </Modal.Header>
                <Modal.Body>Cluster description : {props.element.description} <br/> Number of images : {props.element.numberOfImages}</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default RepositoryElement;
