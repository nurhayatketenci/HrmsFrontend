import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import JobAdvertisementAdd from '../pages/JobAdvertisementAdd'
import JobAdvertisementConfirmation from '../pages/JobAdvertisementConfirmation'


import { Route } from "react-router";
export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow className="main">
                    <GridColumn width={4}>
                        <Route exact path="/" component={JobAdvertisementList} />
                    </GridColumn>
                    <GridColumn width={11}>
                        <Route exact path="/jobAdd" component={JobAdvertisementAdd} />
                    </GridColumn>
                    <GridColumn width={11}>
                        <Route exact path="/jobList" component={JobAdvertisementConfirmation} />
                    </GridColumn>
                </GridRow>
            </Grid>

        </div>
    )
}
