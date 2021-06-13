import { Table } from 'semantic-ui-react'
import React, { useState, useEffect } from "react";
import EmployerService from '../services/employerService';

export default function Employers() {
    const [employers, setEmployers] = useState([])
    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers().then(result => setEmployers(result.data.data))
    })
    return (
        <div>
            <Table >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirketler</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {employers.map(employer => (
                        <Table.Row key={employer.id}>
                            {console.log(employer.companyName)}
                            <Table.Cell>{employer.companyName}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
