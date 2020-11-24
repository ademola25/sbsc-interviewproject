import React,{ Component } from 'react'
import { Container, Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap'

import Sidebar from '../../layout/sidebar/Sidebar'
import Header from '../../layout/header/Header'
import Chart from '../../chart/chart'

import Settings from '../../../assets/settings.svg'
import tour from '../../../assets/tour.svg'
import request from '../../../assets/request.svg'
import './dashboard.css'

import { playInfo } from '../../../util/api'

class Dashboard extends Component {

    constructor(){
        super();

        this.state = {
            info: []
        }
    }
    componentDidMount = () => {
        playInfo().then(data => {
            if(data.error) {
                console.log(data.error)
            }else {
                this.setState({ info: data})
            }
        })
    }

    render(){

        const { info: {dashboardId, totalPlayBudget, totalPlayBudgetSpent, totalPlayBudgetBalance, totalWorkBudget, totalWorkBudgetSpent, totalWorkBudgetBalance, totalCardsCount, totalCardsInUse, totalCardsInActive} } = this.state
        return (
            <div id="outer-container" className="dashboard">
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                <div id="page-wrap">
                    <Header dashboardId={dashboardId}/>
                    <section className="dashboard-main">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="dashboard-title-left">
                                        <h4>Dashboard</h4>
                                    </div>
                                </Col>
                                <Col>
                                <div className="d-flex flex-row dashboard-title-right">
                                    <img src={Settings} className="mx-3" alt="settings icon"/> <h4>Customize Dashboard</h4>
                                    <hr/>
                                    <p>Mon, Jun 22, 2020</p>
                                </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className=" d-flex justify-content-between second-layer">
                                        <Card className="dark-blue">
                                           <div className="second-layer-card-content">
                                                <CardTitle>Welcome back! Chidimma.</CardTitle>
                                                <CardText>See overview of analytics and reporting metrics and a lot more interesting stuffs you can do here.</CardText>
                                                <Button className="bg-white-color">Take A Tour</Button>
                                           </div>
                                            <img src={tour} className="mx-3" alt="tour icon"/>
                                        </Card>
                                    
                                        <Card className="light-blue">
                                            <div className="second-layer-card-content">
                                                <CardTitle>OPTIMIZED APPLICATION PROCESSING</CardTitle>
                                                <CardText>We’ve optimized the system to process your application as fast as possible. <b>Click on the button below to get started.</b></CardText>
                                                <Button className="bg-blue-color">New Request</Button>
                                            </div>
                                            <img src={request} className="mx-3" alt="request icon"/>
                                        </Card>
                                    </div>    
                                </Col>
                            </Row>
                            <Row className="chart-card-list">
                                <Col>
                                    <div className="chart-card">
                                        <Chart
                                            totalPlayBudget={totalPlayBudget}
                                            totalWorkBudget={totalWorkBudget}
                                            totalPlayBudgetSpent={totalPlayBudgetSpent}
                                            totalCardsCount={totalCardsCount}
                                            totalCardsInActive={totalCardsInActive}
                                            totalCardsInUse={totalCardsInUse}
                                            totalPlayBudgetBalance={totalPlayBudgetBalance}
                                            totalWorkBudgetSpent={totalWorkBudgetSpent}
                                            totalWorkBudgetBalance={totalWorkBudgetBalance}
                                        />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="chart-card">
                                        <Chart/>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="chart-card">
                                        <Chart/>
                                    </div>
                                </Col>
                            </Row>
                            
                        </Container>
                    </section>
                </div>
            </div>
        )
    }
}

export default Dashboard
