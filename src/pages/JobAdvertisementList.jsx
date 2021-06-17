import JobAdvertisementConfirmationService from '../services/jobAdvertisementConfirmationService';
import React, { useState, useEffect } from "react";
import { Table } from 'semantic-ui-react'

export default function JobAdvertisementConfirmation() {
    const [jobadvertisementConfirmations, setjobadvertisementConfirmations] = useState([])

    useEffect(() => {
        let jobAdvertisementConfirmationService = new JobAdvertisementConfirmationService()
        jobAdvertisementConfirmationService.getJobAdvertisementConfimation().then(result => setjobadvertisementConfirmations(result.data.data))
    }, [])



    return (
        <div>
            <Table celled className='dashboard' color="blue">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Employee</Table.HeaderCell>
                        <Table.HeaderCell>Job Position</Table.HeaderCell>
                        <Table.HeaderCell>Application Deadline</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Number</Table.HeaderCell>
                        <Table.HeaderCell>Min Salary</Table.HeaderCell>
                        <Table.HeaderCell>Max Salary</Table.HeaderCell>
                        <Table.HeaderCell>Employment Type</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        jobadvertisementConfirmations.map(jobadvertisementConfirmation => (
                            <Table.Row key={jobadvertisementConfirmation.id}>
                                <Table.Cell>{jobadvertisementConfirmation.employee.firstName}</Table.Cell>
                                <Table.Cell>{jobadvertisementConfirmation.jobAdvertisement.jobPosition.jobTitle}</Table.Cell>
                                <Table.Cell>{jobadvertisementConfirmation.jobAdvertisement.applicationDeadline}</Table.Cell>
                                <Table.Cell>{jobadvertisementConfirmation.jobAdvertisement.description}</Table.Cell>
                                <Table.Cell>{jobadvertisementConfirmation.jobAdvertisement.numberOfPeople}</Table.Cell>
                                <Table.Cell>{jobadvertisementConfirmation.jobAdvertisement.minSalary}</Table.Cell>
                                <Table.Cell>{jobadvertisementConfirmation.jobAdvertisement.maxSalary}</Table.Cell>
                                <Table.Cell>{jobadvertisementConfirmation.jobAdvertisement.employmentType?.name}</Table.Cell>
                                <Table.Cell>{jobadvertisementConfirmation.jobAdvertisement.employer.phoneNumber}</Table.Cell>
                                <Table.Cell>{jobadvertisementConfirmation.jobAdvertisement.employer.companyName}</Table.Cell>

                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>

        </div>
    )
}
