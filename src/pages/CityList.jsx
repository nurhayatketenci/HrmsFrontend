import { Icon, Dropdown, Menu, Table } from 'semantic-ui-react'
import React, { useState, useEffect } from "react";
import CityService from '../services/cityService';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
export default function CityList() {

    const [citys, setCitys] = useState([])
    useEffect(() => {
        let cityService = new CityService()
        cityService.getCity().then(result => setCitys(result.data.data))
    })

    return (
        <div>
            {/* <FormControl className="city" >

                <InputLabel id="demo-simple-select-label">ŞEHİRLER</InputLabel>
                <Select className="citySelect"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"

                >
                    {
                        citys.map(city => (
                            <MenuItem key={city.id}>{city.name}</MenuItem>
                        ))

                    }
                </Select>
            </FormControl> */}
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell> Name</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        citys.map(city => (
                            <Table.Row key={city.id}>
                                <Table.Cell>{city.name}</Table.Cell>
                            </Table.Row>
                        ))
                    }


                </Table.Body>


            </Table>
        </div>
    )
}
