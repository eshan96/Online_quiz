import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import "./style.css";

class Add_Questions extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            clazz: "",
            subject: "",
            questions: [{
                question: "",
                first_option: "",
                second_option: "",
                third_option: "",
                fourth_option: "",
                answer: ""
            }]
         }
        
    }
    handleNameChange = evt => {
        this.setState({ 
          [evt.target.name]: evt.target.value
        });
      };
    
      handleQuestionNameChange = idx => evt => {
        const newQuestions = this.state.questions.map((question, sidx) => {
          if (idx !== sidx) return question;
          return { ...question, [evt.target.name]: evt.target.value };
        });
    
        this.setState({ questions: newQuestions });
      };
    
      handleAddQuestion = () => {
        this.setState({
          questions: this.state.questions.concat([{ question: "", first_option: "", second_option: "", third_option: "", fourth_option: "" }])
        });
        
      };
    
       handleRemoveQuestion = idx => () => {
         this.setState({
           questions: this.state.questions.filter((s, sidx) => idx !== sidx)
         });
       };
    

    handleSubmit = evt => {
        console.log('Submitted')
        const { clazz, subject, questions } = this.state;
       var questionss = []
       console.log(this.state)
        for (var i = 0; i < this.state.questions.length; i++){
           var question = {
                content: this.state.questions[i].question,
                value: [this.state.questions[i].first_option, this.state.questions[i].second_option, this.state.questions[i].third_option, this.state.questions[i].fourth_option],
                answer_value: this.state.questions[i].answer
            }

                questionss.push(question)
        }
        axios.post("http://13.233.61.180:3002/admins", { 
            data:{
                
                   clazz_name: this.state.clazz,    
                   name: this.state.subject,
                   content: questionss
                }
        }).then(response => {
        console.log('Response success', response)
        evt.preventDefault()
    }).catch(error => {
        console.log('Registration Error', error)
        evt.preventDefault()
    })
    alert('Test has been prepared')
    evt.preventDefault()
}
render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter Class"
          name = "clazz"
          value={this.state.clazz}
          onChange={this.handleNameChange}
        />

        <input
          type="text"
          placeholder="Enter Subject"
          name = "subject"
          value={this.state.subject}
          onChange={this.handleNameChange}
        />

        <h4>Questions and Their Options</h4>

        {this.state.questions.map((question, idx) => (
          <div className="question">
            <input
              type="text"
              placeholder={`Question-${idx + 1}`}
              name = "question"
              value={question.question}
              onChange={this.handleQuestionNameChange(idx)}
            />

            <input
              type="text"
              placeholder={`First Option`}
              name = "first_option"
              value={question.first_option}
              onChange={this.handleQuestionNameChange(idx)}
            />

            <input
              type="text"
              placeholder={`Second Option`}
              name = "second_option"
              value={question.second_option}
              onChange={this.handleQuestionNameChange(idx)}
            />

            <input
              type="text"
              placeholder={`Third Option`}
              name = "third_option"
              value={question.third_option}
              onChange={this.handleQuestionNameChange(idx)}
            />

            <input
              type="text"
              placeholder={`Fourth Option`}
              name = "fourth_option"
              value={question.fourth_option}
              onChange={this.handleQuestionNameChange(idx)}
            />

            <input
              type="text"
              placeholder={`Answer`}
              name = "answer"
              value={question.answer}
              onChange={this.handleQuestionNameChange(idx)}
            />

             <button
              type="button"
              onClick={this.handleRemoveQuestion(idx)}
              className="small"
            >
              Delete
            </button> 
          </div>
        ))}
        <button
          type="button"
          onClick={this.handleAddQuestion}
          className="small"
        >
          Add Question
        </button>
        <button>Prepare Test</button>
      </form>
    );
  }
}

export default Add_Questions