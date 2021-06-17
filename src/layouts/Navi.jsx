import React from 'react'
import { Button, Input, Container, Dropdown, Menu, MenuItem, Icon } from 'semantic-ui-react'
import Logo from '../images/hrms.jpg'
import '../css/Navi.css';


export default function Navi() {
    return (
        <div>
            <Menu fixed="top">
                <Container>
                    <Menu.Item>
                        <img src={Logo} style={{ width: "50px", height: "44px" }} />
                    </Menu.Item>
                    <Menu.Item>
                        <Icon size="small" name="search" />
                        <Input
                            iconPosition='left'
                            placeholder='Arama Yap' />
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item className="menuItem">
                            <Icon className="navi-icon" size="big" name="home" />
                            <span>Home</span>
                            <Icon className="navi-icon" size="big" name=" users" />
                            <span>My Network</span>
                            <Icon className="navi-icon" size="big" name=" envelope" />
                            <span>Jobs</span>
                            <Icon className="navi-icon" size="big" name=" bell" />
                            <span>Messaging</span>
                            <Icon className="navi-icon" size="big" name="user circle outline" />
                            <span>Me</span>

                        </Menu.Item>
                        {/* <Menu.Item>
                            <Button color='blue'>Sign Up</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button color='blue'>Log in</Button>
                        </Menu.Item> */}
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
