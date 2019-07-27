import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import axios from 'axios'


class Add_Questions extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             clazz: "",
             subject: "select",
             question_1: "",
             first_option_1: "",
             second_option_1: "",
             third_option_1: "",
             fourth_option_1: "",
             question_2: "",
             first_option_2: "",
             second_option_2: "",
             third_option_2: "",
             fourth_option_2: ""
             //answer: "" 
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
        axios.post("http://localhost:3002/admins", { 
            data:{
                
                   clazz_name: this.state.clazz,    
                   name: this.state.subject,
                   content: [this.state.question_1, this.state.question_2],
                   value: [
                   [this.state.first_option_1, this.state.second_option_1, this.state.third_option_1, this.state.fourth_option_1],
                   [this.state.first_option_2, this.state.second_option_2, this.state.third_option_2, this.state.fourth_option_2]
                ]
                //    content: this.state.question_2,
                //    value: [this.state.first_option_2, this.state.second_option_2, this.state.third_option_2, this.state.fourth_option_2]
                }
        }).then(response => {
        console.log('Response success', response)
    }).catch(error => {
        console.log('Registration Error', error)
    })
    event.preventDefault()
}
    render() {
        return (
            <Container>
            <h3>Add Questions for the test</h3>
           
        <Form onSubmit = {this.handleSubmit}>
<Form.Group controlId="formBasiClazz">
<Form.Control type="text" name="clazz" placeholder="Enter Class" value={this.state.clazz} onChange={this.handleChange} required/>
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


<Form.Group controlId="formBasicQuestion_1">
<Form.Control type="text" name="question_1" placeholder="Enter Question" value={this.state.question_1} onChange={this.handleChange}/>
</Form.Group>

 <Form.Group controlId="formBasicFirstOption_1">
 <Form.Control type="text" name="first_option_1" placeholder="1st option" value={this.state.first_option_1} onChange={this.handleChange}/>
 </Form.Group>

 <Form.Group controlId="formBasicSecondOption_1">
 <Form.Control type="text" name="second_option_1" placeholder="2nd option" value={this.state.second_option_1} onChange={this.handleChange}/>
 </Form.Group>

 <Form.Group controlId="formBasicThirdOption_1">
 <Form.Control type="text" name="third_option_1" placeholder="3rd option" value={this.state.third_option_1} onChange={this.handleChange}/>
 </Form.Group>

 <Form.Group controlId="formBasicFourthOption_1">
 <Form.Control type="text" name="fourth_option_1" placeholder="4th option" value={this.state.fourth_option_1} onChange={this.handleChange}/>
 </Form.Group> 

 <br />
 <br />


<Form.Group controlId="formBasicQuestion_2">
<Form.Control type="text" name="question_2" placeholder="Enter Question" value={this.state.question_2} onChange={this.handleChange}/>
</Form.Group>

  <Form.Group controlId="formBasicFirstOption_2">
 <Form.Control type="text" name="first_option_2" placeholder="1st option" value={this.state.first_option_2} onChange={this.handleChange}/>
 </Form.Group>

 <Form.Group controlId="formBasicSecondOption_2">
 <Form.Control type="text" name="second_option_2" placeholder="2nd option" value={this.state.second_option_2} onChange={this.handleChange}/>
 </Form.Group>

 <Form.Group controlId="formBasicThirdOption_2">
 <Form.Control type="text" name="third_option_2" placeholder="3rd option" value={this.state.third_option_2} onChange={this.handleChange}/>
 </Form.Group>

 <Form.Group controlId="formBasicFourthOption_2">
 <Form.Control type="text" name="fourth_option_2" placeholder="4th option" value={this.state.fourth_option_2} onChange={this.handleChange}/>
 </Form.Group> 

 {/* <Form.Group controlId="formBasicAnswer">
<Form.Control type="text" name="answer" placeholder="Enter answer" value={this.state.answer} onChange={this.handleChange}/>
</Form.Group>  */}

<Button variant="primary" type="submit">
Create Question
</Button>
</Form>
</Container>        

        )
    }
}

export default Add_Questions