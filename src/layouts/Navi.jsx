import React from 'react'
import { Button, Input, Container, Dropdown, Menu, MenuItem } from 'semantic-ui-react'
import '../css/navi.css'
export default function Navi() {
    return (
        <div>

            <Menu inverted fixed="top">
                <Container>

                    <Menu.Item
                        name='home'

                    />
                    <Menu.Item
                        name='
                        Job Postings'

                    />
                    <Menu.Item>
                        <Input
                            action={{ color: 'blue', content: 'Search' }}
                            icon='search'
                            iconPosition='left'
                            placeholder='
                                    search for a job position'
                        />
                    </Menu.Item>


                    <Menu.Menu position='right'>

                        <Menu.Item>
                            <Button inverted color='blue'>Sign Up</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button inverted color='blue'>Log in</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
