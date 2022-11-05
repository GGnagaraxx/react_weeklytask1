import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Col, Row, Container, Form } from "react-bootstrap";
import { ContactNumValidation, DoBValidation, EmailValidation, isInputEmpty, NameValidation } from "../../../../common/functions/Validator";


function UserForm() {

    const [userInput, setUserInput] = useState({
        name: '',
        email: '',
        contactNum: '',
        desc: ''
    });
    const [errors, setErrors] = useState({
        name: false,
        dob: false,
        email: false,
        contactNum: false,
        desc: false
    });

    const checkValidation = (input, inputType) => {

        return new Promise((resolve, reject) => {
            let resp
            let error = false;
            let isValid = true;

            if (inputType == 'name') {
                resp = NameValidation(input);
                if (!resp.valid) {
                    error = resp.err;
                    isValid = false;
                } else {
                    error = false;
                }

            } else if (inputType == 'dob') {
                resp = DoBValidation(input);
                if (!resp.valid) {
                    error = resp.err;
                    isValid = false;
                } else {
                    error = false;
                }

            } else if (inputType == 'email') {
                resp = EmailValidation(input);
                if (!resp.valid) {
                    error = resp.err;
                    isValid = false;
                } else {
                    error = false;
                }

            } else if (inputType == 'contactNum') {
                resp = ContactNumValidation(input);
                if (!resp.valid) {
                    error = resp.err;
                    isValid = false;
                } else {
                    error = false;
                }

            } else if (inputType == 'desc') {
                resp = isInputEmpty(input);
                if (resp) {
                    error = 'Description is Required';
                    isValid = false;
                } else {
                    error = false;
                }
            }

            setUserInput({
                ...userInput,
                [inputType]: input,
            })
            setErrors({
                ...errors,
                [inputType]: error,
            })

            resolve(isValid);
        })

    }

    const handleChange = (e) => {
        const input = e.target.value;
        const inputType = e.target.name;

        checkValidation(input, inputType)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;

        if (!await checkValidation(userInput.name, 'name')) valid = false;
        if (!await checkValidation(userInput.email, 'email')) valid = false;
        if (!await checkValidation(userInput.contactNum, 'contactNum')) valid = false;
        if (!await checkValidation(userInput.desc, 'desc')) valid = false;

        console.log(valid)
        if (!valid) return;

        console.log("Valid: ", userInput);
        setUserInput({
            name: '',
            email: '',
            contactNum: '',
            desc: ''
        })
    }

    return (
        <Box component="div" className="cust-box p-2 m-2">
            <Typography
                gutterBottom
                className="txt-center comp-title"
                variant='h3'
                component='div'>
                User Form
            </Typography>
            <Form onSubmit={handleSubmit}>
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <TextField
                                className="m-1 fw"
                                id="outlined-name"
                                name="name"
                                label="Name"
                                placeholder="Enter your name"
                                required
                                error={errors.name ? true : false}
                                helperText={errors.name ? errors.name : null}
                                value={userInput.name}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <TextField
                                className="m-1 fw"
                                id="outlined-name"
                                name="contactNum"
                                label="Contact Number"
                                placeholder="Enter your number"
                                inputProps={{ maxLength: 10 }}
                                required
                                error={errors.contactNum ? true : false}
                                helperText={errors.contactNum ? errors.contactNum : null}
                                value={userInput.contactNum}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col xs={12}>
                            <TextField
                                className="m-1 fw"
                                id="outlined-name"
                                name="email"
                                type="email"
                                label="Email"
                                placeholder="Enter your email"
                                required
                                error={errors.email ? true : false}
                                helperText={errors.email ? errors.email : null}
                                value={userInput.email}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col xs={12}>
                            <TextField
                                className="m-1 fw"
                                id="outlined-name"
                                name="desc"
                                label="Description"
                                placeholder="Tell me about yourself"
                                multiline
                                inputProps={{ maxLength: 500 }}
                                minRows={5}
                                maxRows={5}
                                required
                                error={errors.desc ? true : false}
                                helperText={errors.desc ? errors.desc : null}
                                value={userInput.desc}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col className="center" xs={12}>
                            <Button
                                type='submit'
                                className="submit-btn m-2"
                                variant="contained">Add</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </Box>
    )
}

export default UserForm;