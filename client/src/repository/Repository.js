import React, {useState} from 'react';
import './Repository.css';
import {Table} from "react-bootstrap";
import RepositoryElement from "./RepositoryElement";

const repositoryTable = [
    {id: 1, repoName: 'Macaroane', description: 'Macaroane', numberOfImages: 200, current: false},
    {id: 2, repoName: 'Macaroane', description: 'Macaroane', numberOfImages: 200, current: false},
    {id: 3, repoName: 'Macaroane', description: 'Macaroane', numberOfImages: 200, current: false},
    {id: 4, repoName: 'Macaroane', description: 'Macaroane', numberOfImages: 200, current: false},
    {id: 5, repoName: 'Macaroane', description: 'Macaroane', numberOfImages: 200, current: false},
    {id: 6, repoName: 'Macaroane', description: 'Macaroane', numberOfImages: 200, current: false},
    {id: 7, repoName: 'Macaroane', description: 'Macaroane', numberOfImages: 200, current: false},
    {
        id: 8,
        repoName: 'Macaroane',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has' +
            ' been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley' +
            'of type and scrambled it to make a type specimen book. It has survived not only five centuries, but ' +
            'also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the ' +
            '1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ' +
            'desktop publishing software like Aldus PageMaker inc',
        numberOfImages: 200,
        current: true
    }
];
const Repository = () => {

    return (
        <div className='repository-table-container'>
            <Table striped bordered hover size='sm'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Repository</th>
                    <th>Task Description</th>
                    <th>Number of Images</th>
                </tr>
                </thead>
                <tbody>
                {
                    repositoryTable.map(x => {
                        return x.current ? <RepositoryElement element={x}/> : <></>
                    })
                }
                {
                    repositoryTable.map(x => {
                        return !x.current ? <RepositoryElement element={x}/> : <></>
                    })
                }
                </tbody>
            </Table>
        </div>
    )
}
export default Repository;
