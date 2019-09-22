import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import Select from 'react-select'
import Autocomplete from 'react-autocomplete';

class Student_Registration extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: "",
             autocompleteData: [],
             value: "",
             rollNumber: "",
             subject: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.getItemValue = this.getItemValue.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.retrieveDataAsynchronously = this.retrieveDataAsynchronously.bind(this);
    }  
    
    retrieveDataAsynchronously(searchText){
        let _this = this;

        // Url of your website that process the data and returns a
        let url = `http://13.233.61.180:3002/clazz`;
        
        // Configure a basic AJAX request to your server side API
        // that returns the data according to the sent text
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = () => {
            let status = xhr.status;

            if (status === 200) {
                
                _this.setState({
                    autocompleteData: xhr.response.clazz
                });

                // Show response of your server in the console
                console.log(xhr.response);
            } else {
                console.error("Cannot load data from remote source");
            }
        };

        xhr.send();
    }

    onChange(e){
        this.setState({
            value: e.target.value
        });

        /**
         * Handle the remote request with the current text !
         */
        this.retrieveDataAsynchronously(e.target.value);

        console.log("The Input Text has changed to ", e.target.value);
    }

    onSelect(val){
        this.setState({
            value: val
        });

        console.log("Option from 'database' selected : ", val);
    }
     
    renderItem(item, isHighlighted){
        return (
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.clazz_name}
            </div>   
        ); 
    }

    getItemValue(item){
        // You can obviously only return the Label or the component you need to show
        // In this case we are going to show the value and the label that shows in the input
        // something like "1 - Microsoft"
        return `${item.clazz_name}`;
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    

    handleSubmit(event) {
        console.log(this.state)
         axios.post("http://13.233.61.180:3002/test",{
             test: {
                 student_name: this.state.name,
                 student_clazz_name: this.state.value,
                 rollno: this.state.rollNumber,
                 student_subject: this.state.subject
             }
         }).then(response => {
             console.log('Response success', response)
         }).catch(error => {
             console.log('Error', error)
         })
     
     
     event.preventDefault()
     this.props.history.push("/StartTestButton")
    }

    render() {
       
        
        return (
            <Container>
                <h3>Please Register yoursel for the test!!</h3>
               
            <Form onSubmit = {this.handleSubmit}>
  <Form.Group controlId="formBasicName">
    <Form.Control type="text" name="name" placeholder="Enter name" value={this.state.name} onChange={this.handleChange} required/>
  </Form.Group>

    {/* <Form.Group controlId="formBasicClazz">
     <Form.Control type="text" name="clazz" placeholder="Enter Class" value={this.state.clazz} onChange={this.handleChange}/>
   </Form.Group> */}
   
   <Form.Group controlId="formBasicClass">
   <Form.Control placeholder="Enter Class">
   <Autocomplete  
                      
                    getItemValue={this.getItemValue}
                    items={this.state.autocompleteData}
                    renderItem={this.renderItem}
                    value={this.state.value}
                    onChange={this.onChange}
                    onSelect={this.onSelect}
                />
</Form.Control>
</Form.Group>

   {/* <div>
                <input onChange={this.onTextChanged} type = "text" />
                {this.renderSuggestions()}
            </div> */}


 <Form.Group controlId="formBasicRollNumber">
    <Form.Control type="number" name="rollNumber" placeholder="Enter Roll No." value={this.state.rollNumber} onChange={this.handleChange}/>
  </Form.Group>

  <Form.Group controlId="formBasicSubject">

<Form.Control type="text" name="subject" placeholder="Enter Subject" value={this.state.subject} onChange={this.handleChange}>
</Form.Control>
</Form.Group>
  
  <Button variant="primary" type="submit">
    Start Test
  </Button>
</Form>
</Container>        

        )
    }
}

export default Student_Registration
