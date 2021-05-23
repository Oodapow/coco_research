import React, {useState} from 'react';
import './Repository.css';
import {Col, Table} from "react-bootstrap";
import RepositoryElement from "./RepositoryElement";
import COCOIEComponent from "../import_export/CocoImportComponent";

const repositoryTable = [
    {id: 1, repoName: 'instances_val2014', description: 'instances_val2014', numberOfImages: 200, current: false},
    {id: 2, repoName: 'instances_val2015', description: 'instances_val2015', numberOfImages: 200, current: false},
    {id: 3, repoName: 'instances_val2016', description: 'instances_val2016', numberOfImages: 200, current: false},
    {id: 4, repoName: 'instances_val2017', description: 'instances_val2017', numberOfImages: 200, current: false},
    {id: 5, repoName: 'instances_val2018', description: 'instances_val2018', numberOfImages: 200, current: false},
    {id: 6, repoName: 'instances_val2019', description: 'instances_val2019', numberOfImages: 200, current: false},
    {id: 7, repoName: 'instances_val2020', description: 'instances_val2020', numberOfImages: 200, current: false},
    {
        id: 8,
        repoName: 'instances_val2020',
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

            <Col md={12} className={"mb-4 mt-2"}>
                <COCOIEComponent/>
            </Col>
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
