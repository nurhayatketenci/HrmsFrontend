import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import CityList from '../pages/CityList'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import JobPositionList from '../pages/JobPositionList'
export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow >
                    <GridColumn width={4}>
                    <CityList/>
                    </GridColumn>
                    <GridColumn width={12}>
                    <JobAdvertisementList/>
                    </GridColumn>
                </GridRow>
            </Grid>
           
        </div>
    )
}
