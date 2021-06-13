import { Form, Button, ButtonGroup, Checkbox, Label, Input, TextArea } from 'semantic-ui-react'
import CityList from './CityList'
import { Dropdown } from 'semantic-ui-react'
import React, { useState, useEffect } from "react";
import CityService from '../services/cityService';
import JobAdvertisementService from '../services/jobAdvertisementService';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import JobPositionService from '../services/jobPositionService'
import '../css/JobAdd.css';
import SemanticDatepicker from 'react-semantic-ui-datepickers';

export default function JobAdvertisementAdd() {
    let jobAdvertisementService = new JobAdvertisementService()
    let jobPositionService = new JobPositionService()
    const jobAdvertisementSchema = Yup.object().shape({
        cityId: Yup.number().required("Select City."),
        employementTypeId: Yup.number("Choose the type of work"),
        minSalary: Yup.number().min(0, "Salary must be greater than 0"),
        maxSalary: Yup.number().min(0, "Salary must be greater than 0"),
        numberOfPeople: Yup.number().min(0, "The number of purchases must be greater than 0.")

    });

    const formik = useFormik({
        initialValues: {
            jobPositionId: "",
            cityId: "",
            employmentTypeId: "",
            numberOfPeople: "",
            isRemote: false,
            maxSalary: "",
            applicationDeadline: "",
            minSalary: "",
            description: ""

        },
        validationSchema: jobAdvertisementSchema,
        onSubmit: (values) => {
            let jobAdvertisement = {
                isRemote: values.isRemote,
                applicationDeadline: values.applicationDeadline,
                minSalary: values.minSalary,
                maxSalary: values.maxSalary,
                description: values.description,
                numberOfPeople: values.numberOfPeople,
                city: {
                    id: values.cityId
                },
                jobPosition: {
                    id: values.jobPositionId
                },
                employment: {
                    id: values.employmentTypeId
                },
                employer: {
                    id: 13
                }
            }

            jobAdvertisementService.add(jobAdvertisement).then((result) => console.log(result));
            alert(JSON.stringify(values, null, 2));
        },
    });
    const [citys, setCitys] = useState([])
    const [employmenttypes, setEmploymentTypes] = useState([])
    const [jobPositions, setJobPosition] = useState([])
    useEffect(() => {

        jobPositionService.getJobPosition().then(result => setJobPosition(result.data.data))
    }, [])
    useEffect(() => {
        jobAdvertisementService.getEmploymentType().then(result => setEmploymentTypes(result.data.data))
    }, [])
    useEffect(() => {
        let cityService = new CityService()
        cityService.getCity().then(result => setCitys(result.data.data))
    }, [])

    const cityOptions = citys.map((city, index) => ({
        key: index,
        text: city.name,
        value: city.id
    }))
    const jobposition = jobPositions.map((jobPosition, index) => ({
        key: index,
        text: jobPosition.jobTitle,
        value: jobPosition.id
    }))
    const employementTypes = employmenttypes.map((employmenttype, index) => ({
        key: index,
        text: employmenttype.name,
        value: employmenttype.id
    }))
    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    };

    return (
        <div className="line">

            <Form onSubmit={formik.handleSubmit}>
                <Dropdown
                    placeholder='Select Country'
                    fluid
                    search
                    selection
                    options={cityOptions}
                    onChange={(event, data) => {
                        handleChangeSemantic(data.value, "cityId");
                    }}
                />
                <Dropdown
                    style={{ marginTop: "20px" }}
                    placeholder='Select Employement Types'
                    fluid
                    search
                    selection
                    options={employementTypes}
                    onChange={(event, data) => {
                        handleChangeSemantic(data.value, "employmentTypeId");
                    }}
                />
                <Dropdown
                    style={{ marginTop: "20px" }}
                    placeholder='Select Job Position'
                    fluid
                    search
                    selection
                    options={jobposition}
                    onChange={(event, data) => {
                        handleChangeSemantic(data.value, "jobPositionId");
                    }}
                />
                <Input name='maxSalary' style={{ marginTop: "20px" }} placeholder='Max Salary' onChange={formik.handleChange} />
                <Input name='minSalary' placeholder='Min Salary' onChange={formik.handleChange} />
                <Input name='numberOfPeople' placeholder='Number Of People' onChange={formik.handleChange} />
                <TextArea name='description' placeholder='Description' onChange={formik.handleChange} style={{ minHeight: 100, marginTop: "20px" }} />
                <SemanticDatepicker className="datepicker" name='applicationDeadline' onChange={(event, data) => {
                    handleChangeSemantic(data.value, "applicationDeadline")
                }} />

                <div className="check">
                    <Checkbox toggle name="isRemote" onChange={(event, data) => {
                        handleChangeSemantic(data.checked, "isRemote")
                    }} />
                </div>

                <Button primary type="submit">Primary</Button>


            </Form>
        </div>
    )
}
