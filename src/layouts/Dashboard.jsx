import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import CityList from '../pages/CityList'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import JobPositionList from '../pages/JobPositionList'
import CandidateList from '../pages/CandidateList'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow >
                    <GridColumn width={6}>
                        <CandidateList />
                    </GridColumn>
                    <GridColumn width={6}>
                        <CityList />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn width={6}>
                        <JobAdvertisementList />
                    </GridColumn>
                    <GridColumn width={6}>
                        <JobPositionList />
                    </GridColumn>
                </GridRow>
            </Grid>

        </div>
    )
}
