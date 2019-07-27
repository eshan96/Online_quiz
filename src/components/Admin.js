import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
class Admin extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userName: "",
             password: "",
              
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        //this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //   handleSuccessfulAuth(data){
    //         this.props.history.push("/addQuestions")
    //   }

    handleSubmit(event) {
        if(this.state.userName === 'davpublicschool' && this.state.password === 'abc'){
            this.props.history.push("/addQuestions")
            console.log('Successful')
            
            
        }else{
            console.log('Not Successful')
            alert('Invalid Username or Password')
        }

        event.preventDefault()
    }
    render() {
        return (
            <Container>
               <h2>Admin Page</h2>
            <Form onSubmit = {this.handleSubmit}>
  <Form.Group controlId="formBasicUserName">
    <Form.Control type="text" name="userName" placeholder="User Name" value={this.state.userName} onChange={this.handleChange} required/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>        

        )
    }
}

export default Admin
