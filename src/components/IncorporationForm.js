import React from "react";
import ReactDOM from "react-dom";

import "./style.css";
class IncorporationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      clazz: "",
      subject: "",
      questions: [{
        question: "",
        first_option: "",
        second_option: "",
        third_option: "",
        fourth_option: ""

        }]
    };
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

  handleSubmit = evt => {
    console.log('Submitted')
    const { clazz, subject, questions } = this.state;
    evt.preventDefault()
    //alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
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

export default IncorporationForm
