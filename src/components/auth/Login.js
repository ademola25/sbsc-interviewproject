import React, {Component} from 'react'
import { Link, Redirect} from "react-router-dom";
import { Row, Col, FormGroup, Input,Alert, Button, Container, Spinner } from "reactstrap";

import { login, authenticate } from './authApi'

import Logo from '../../assets/logo.svg'
import './login.css'

class Login extends Component {

    constructor(){
        super();
        this.state = {
            username : '',
            password : '',
            error : '',
            redirectToReferer: false,
            alert: false,
            loading: false
        }
    }

    handleChange = (name) => event =>{
        this.setState({ error: "" })
        this.setState({ [name] : event.target.value })
    }

    
    onSubmit = event => {
        event.preventDefault();
        this.setState({ loading: true });
        const { username, password } = this.state

        const user = {
            username,
            password
        }
         console.log(user);
        login(user).then(data => {
            if(data.error) {
                this.setState({ error: data.error, loading : false })
            }else if(data.verification_status !== true){
                this.setState({alert: true, loading: false})
            }else{
                //authenticate
                authenticate(data, () => {
                    this.setState({redirectToReferer: true})
                })
            
            }

        })
        .catch(err => console.log(err))
    }


    loginForm = (username, password) => (
        <form >
            <FormGroup>
                <Input
                    type="text"
                    placeholder="KTS12562892"
                    value={username}
                    onChange={this.handleChange("username")}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="password"
                    placeholder="KTS12562892"
                    value={password}
                    onChange={this.handleChange("password")}
                />
            </FormGroup>
            <Button onClick={this.onSubmit} className="color-blue" size="lg" block>LOG IN</Button>
        </form>
    )

    render(){
        const { username, password, error, redirectToReferer, loading, alert } = this.state;
        
        if(redirectToReferer){
            return <Redirect to="/dashboard"/>
        }

        
        return (
            <section className="login">
                <Container fluid>

                    <Row>
                    <Col lg='8' md='6' sm='none' className="login-left xs-hidden" >
                    </Col>
                    <Col lg='4' md='6' sm="12" className="login-right">
                        <div className="login-right-content">
                        
                            <div className="brand-container">
                                <img src={Logo} alt="logo"/>
                                <p>Express Lands</p>
                            </div>
                            <h2>Login to <br/> your account</h2>
                            <p>Welcome back!Please login to your account</p>
                            <div 
                            className="alert alert-danger" 
                            style={{display: error ? "" : "none"}}
                            >
                            {error}
                        </div>

                            {
                                alert ? (
                                    <Alert color="primary">
                                        Kindly verify your account
                                    </Alert>
                                ):(
                                    ''
                                )

                            }
                            {
                                loading ? (
                                    <Spinner/>
                                )
                                : 
                                ( " ")
                            }

                            {this.loginForm(username, password)}
                            <Link to="/forgot-password" className="password-text">
                            Forgot Password
                            </Link>
                        </div>
                    </Col>
                </Row>
                </Container>
            </section>
        )
    }
}

export default Login
