import React from 'react'
import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap'

import Logout from '../../../assets/logout.svg'
import './header.css'

const Header = () => {
    return (
        <section className='header'>
            <Container >
                <Row>
                    <Col>
                    <div className="header-content">
                        <Card className="header-card">
                            <div className="header-card-left">
                                <CardTitle>Notifications Center</CardTitle>
                                <CardText>You have <b>2</b> unread notifications</CardText>
                            </div>
                            <span className="round-background orange">2</span>
                        </Card>
                        <Card className="header-card">
                            <div className="header-card-left">
                                <CardTitle>Chidimma Nwanya</CardTitle>
                                <CardText>Vanity By Juls</CardText>
                            </div>
                            <span className="round-background blue">
                            <img src={Logout} alt="logo"/>                           
                            </span>
                        </Card>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Header
