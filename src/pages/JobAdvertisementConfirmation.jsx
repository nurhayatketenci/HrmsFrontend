import React from 'react'
import JobAdvertisementList from './JobAdvertisementList'
import { Button } from 'semantic-ui-react'


export default function JobAdvertisementConfirmation() {
    return (
        <div>
            <JobAdvertisementList />
            <Button content='Add' primary />
            {/* <Button content='Remove' secondary /> */}

        </div>
    )
}
