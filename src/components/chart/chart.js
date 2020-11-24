import React, {Component} from 'react'
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap'
import { YearPicker } from 'react-dropdown-date';

import './chart.css'

class chart extends Component {

    constructor(){
        super();
        this.state = {
            year : null,
        }
    }

    render(){
        
        //const { info: { totalPlayBudget, totalPlayBudgetSpent, totalPlayBudgetBalance, totalWorkBudget, totalWorkBudgetSpent, totalWorkBudgetBalance, totalCardsCount, totalCardsInUse, totalCardsInActive} } = this.props
    return (
        <Card>
            <div className="card-top">
                <Row className="card-top-content">
                    <Col>
                        <CardTitle>Annual Play Budget</CardTitle>
                        <CardText>Summary</CardText>
                    </Col>
                    <Col>
                        <YearPicker
                        defaultValue={'This year'}
                        start={2010}                
                        end={2020}                 
                        reverse                    
                        required={true}                         
                        value={this.state.year}  
                        onChange={(year) => {    
                            this.setState({ year });
                            
                        }}
                        id={'year'}
                        name={'year'}
                        classes={'classes'}
                        optionClasses={'option classes'}
                        />
                    </Col>
                </Row>                
                
                
            </div>

            <div className="card-middle">
            <div class="flex-wrapper">
                
                
                <div class="single-chart">
                <svg viewBox="0 0 36 36" class="circular-chart green">
                    <path class="circle-bg"
                    d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path class="circle"
                    stroke-dasharray="60, 100"
                    d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">60%</text>
                </svg>
                </div>
            </div>
            </div>

            <div className="card-bottom">
                <Row>
                    <Col>
                        <CardTitle>Total Play (NGN)</CardTitle>
                        <CardText></CardText>
                    </Col>
                    <Col>
                        <CardTitle>Total Spent (NGN)</CardTitle>
                        <CardText></CardText>
                    </Col>
                </Row>
            </div>

        </Card>
    )
    }
}

export default chart
