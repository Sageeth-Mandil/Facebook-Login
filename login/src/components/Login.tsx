import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; 

export default function Login(){
    
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Logged in with Facebook');
    };

    return (
        <div className="full-height d-flex justify-content-center align-items-center bg-body-secondary" style={{padding: "80px 0"}}>
            <Container >
                <div className="card p-4" style={{background: "none", border: "none", boxShadow: "none", borderRadius: "none", alignItems: "center"}}>
                    <img
                        style={{margin: "-44px 0 -4px 0", width: "240px", border: "0"}}
                        src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                        alt="Facebook"
                        className="mb-4"
                    />
                </div>
                
                <div className="row justify-content-center" style={{alignItems: "center"}}>
                    <div className="col-lg-6">
                        <div className="card p-4" >

                            <h2 className="text-center mb-4">Log in to Facebook</h2>

                            <Form onSubmit={handleLogin}>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    type="email"
                                    placeholder="Email address or phone number"
                                    className="input-field"
                                    autoComplete="username"
                                />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    className="input-field"
                                    autoComplete="current-password"
                                />
                                </Form.Group>

                                <Button
                                    style={{cursor: "pointer", display: "inline-block", textDecoration: "none", whiteSpace: "nowrap", position: "relative", textAlign: "center", textShadow: "none", verticalAlign: "middle"}}
                                    variant="primary"
                                    type="submit"
                                    className="login-button"
                                    id="facebook-text">
                                        
                                    Log In
                                </Button>
                            </Form>
                            <div className="text-center mt-3">
                                <a
                                href="https://web.facebook.com/recover/initiate/?ars=facebook_login&amp;cancel_lara_pswd=0"
                                className="forgot-password-link"
                                >
                                Forgotten account?
                                </a>{" "}
                                &middot;{" "}
                                <a href="/reg/" className="create-account-link">
                                    Sign up for Facebook
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};
