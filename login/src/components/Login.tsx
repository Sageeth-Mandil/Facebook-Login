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
        <div className="full-height d-flex justify-content-center align-items-center bg-body-secondary">
            <Container>
                <div className="card p-4" style={{background: "none", border: "none", boxShadow: "none", borderRadius: "none", alignItems: "center"}}>
                    <img
                        style={{margin: "-44px 0 -4px 0", width: "240px", border: "0"}}
                        src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                        alt="Facebook"
                        className="mb-4"
                    />
                </div>
                
                <div className="row justify-content-center"style={{alignItems: "center"}}>
                    <div className="col-lg-6">
                        <div className="card p-4" style={{borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, .1) 0 8px 16px rgba(0, 0, 0, .1)", margin:"auto", padding: "0 0 14px 0", width: "396px"}}>

                            <h2 className="text-center mb-4" style={{fontSize: "18px", lineHeight: "22px"}}>Log in to Facebook</h2>

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
                                variant="primary"
                                type="submit"
                                // block
                                className="login-button"
                                >
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
