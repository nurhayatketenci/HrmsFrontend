import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import React, { useState, useEffect } from "react";
import JobAdvertisementService from '../services/jobAdvertisementService';
import { useHistory } from "react-router";

export default function JobAdvertisementList() {
    const [jobadvertisements, setJobAdvertisement] = useState([])
    const history = useHistory()
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisement().then(result => setJobAdvertisement(result.data.data))
    })
    function jobAdd() {
        history.push("/jobAdd")
    }
    return (
        <div>

            <Table celled className='dashboard' color="blue">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Job Advertisement</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Number</Table.HeaderCell>
                        <Table.HeaderCell>Min Salary</Table.HeaderCell>
                        <Table.HeaderCell>Max Salary</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        jobadvertisements.map(jobadvertisement => (
                            <Table.Row key={jobadvertisement.id}>
                                <Table.Cell>{jobadvertisement.jobPosition.jobTitle}</Table.Cell>
                                <Table.Cell>{jobadvertisement.city.name}</Table.Cell>
                                <Table.Cell>{jobadvertisement.description}</Table.Cell>
                                <Table.Cell>{jobadvertisement.numberOfPeople}</Table.Cell>
                                <Table.Cell>{jobadvertisement.minSalary}</Table.Cell>
                                <Table.Cell>{jobadvertisement.maxSalary}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
            <button onClick={jobAdd} class="ui positive button">
                add job sign</button>
        </div>
    )
}
