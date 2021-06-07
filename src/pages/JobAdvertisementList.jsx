import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import React, { useState, useEffect } from "react";
import JobAdvertisementService from '../services/jobAdvertisementService';
import '../css/Dashboard.css'


export default function JobAdvertisementList() {
    const [jobadvertisements, setJobAdvertisement] = useState([])
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisement().then(result => setJobAdvertisement(result.data.data))
    })
    return (
        <div>

          <Table celled className='dashboard'>
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
        </div>
    )
}
