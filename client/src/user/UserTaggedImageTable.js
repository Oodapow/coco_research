import React, {useState} from 'react';
import './UserTaggedImageTable.css';
import UserTaggedImageEntry from "./UserTaggedImageEntry";
import {CardColumns, Container, Pagination} from "react-bootstrap";

const numberOfElements = 12;

const nextSize = (ar, currentSize) => {
    return ar.length > currentSize + numberOfElements ? currentSize + numberOfElements : ar.length
}
const divide = (y, x) => {
    let quotient = Math.floor(y / x);
    const remainder = y % x;
    if (remainder !== 0) {
        quotient += 1;
    }
    return quotient;
}
const getLast = (start, size) => {

    let quotient = Math.floor(size / numberOfElements);
    return quotient * numberOfElements;
}
const getPrev = (start) => {
    if (start === 0) {
        return -1
    }
    return 0 > start - numberOfElements ? 0 : start - numberOfElements
}
const getNext = (start, size) => {
    if (start + numberOfElements > size) {
        return -1;
    }
    return size > start + numberOfElements ? start + numberOfElements : size;
}
const getCurrent = (start) => {
    return divide(start, numberOfElements);
}
const UserTaggedImageTable = (props) => {
    const [start, setStart] = useState(0);
    return (
        <>
            <>
                <Container className={"d-flex justify-content-center"}>
                    <CardColumns>
                        {props.userTaggedImages.slice(start, nextSize(props.userTaggedImages, start)).map(x => (
                            <UserTaggedImageEntry element={x}/>))}
                    </CardColumns>
                </Container>
            </>
            <Container className={"d-flex justify-content-center"}>
                <Pagination>
                    <Pagination.First onClick={() => setStart(0)}/>
                    <Pagination.Ellipsis/>
                    {(() => {
                        if (getPrev(start) !== -1) {
                            return (<Pagination.Prev
                                onClick={() => setStart(getPrev(start))}
                            />)
                        }
                    })()}
                    <Pagination.Item>{getCurrent(start) + 1}</Pagination.Item>
                    {(() => {
                        if (getNext(start, props.userTaggedImages.length) !== -1) {
                            return (<Pagination.Next
                                onClick={() => setStart(getNext(start, props.userTaggedImages.length))}/>)
                        }
                    })()}

                    <Pagination.Ellipsis/>
                    <Pagination.Last onClick={() => setStart(getLast(start, props.userTaggedImages.length))}/>
                </Pagination>
            </Container>
        </>
    )
}
export default UserTaggedImageTable;
