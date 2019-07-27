import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import axios from 'axios'

class Student_Registration extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: "",
             clazz: "",
             rollNumber: "",
             subject: "select" 
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
         axios.post("http://localhost:3002/student",{
             student: {
                 student_name: this.state.name,
                 student_clazz_name: this.state.clazz,
                 rollno: this.state.rollNumber,
                 student_subject: this.state.subject
             }
         }).then(response => {
             console.log('Response success', response)
         }).catch(error => {
             console.log('Error', error)
         })
     
     
     event.preventDefault()
     this.props.history.push("/test")
    }

    render() {
        return (
            <Container>
                <h3>Please start your test by entering the following details</h3>
               
            <Form onSubmit = {this.handleSubmit}>
  <Form.Group controlId="formBasicName">
    <Form.Control type="text" name="name" placeholder="Enter name" value={this.state.name} onChange={this.handleChange} required/>
  </Form.Group>

  <Form.Group controlId="formBasicClazz">
    <Form.Control type="text" name="clazz" placeholder="Enter Class" value={this.state.clazz} onChange={this.handleChange}/>
  </Form.Group>
  
 <Form.Group controlId="formBasicRollNumber">
    <Form.Control type="number" name="rollNumber" placeholder="Enter Roll No." value={this.state.rollNumber} onChange={this.handleChange}/>
  </Form.Group>

  <Form.Group controlId="formBasicSubject">

<Form.Control as="select" name="subject" value={this.state.subject} onChange={this.handleChange}>
  <option>Maths</option>
  <option>Science</option>
  <option>Social Studies</option>
  <option>English</option>
  <option>Computer</option>
</Form.Control>
</Form.Group>
  
  <Button variant="primary" type="submit">
    Start the test
  </Button>
</Form>
</Container>        

        )
    }
}

export default Student_Registration
