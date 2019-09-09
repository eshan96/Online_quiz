import React, { Component } from 'react'
import axios from 'axios'
import Questions from './Questions';
import Pagination from './Pagination';

export class MainPageNew extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            questions: [
                // {
                //     content: '',
                //     options: []
                // }
            ],
            loading: false,
            currentPage: 1,
            questionsPerPage: 1,
            selectedOption: []
        }

        this.handleOptionChange = this.handleOptionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleOptionChange(e) {
        
        this.setState({
            selectedOption: [...this.state.selectedOption, e.target.value]
        })
    
        console.log('Event Selected', e)
    }

    handleSubmit(e) {
      
         var count = 0
       for(var i = 0; i < this.state.selectedOption.length; i++) {
            if(this.state.selectedOption[i] === this.state.questions[i].answer) {           
                 count = count + 1
            }
       }

       console.log('Your Score is', count)
         e.preventDefault()
    }
    componentDidMount() {
        this.setState({loading: true})
        axios.get("http://localhost:3002/test")
        .then(response => {
            console.log('Response data for questions', response)
            for(var i = 0; i < response.data.length; i++){
                
                this.setState(prevState => ({
                    questions: [...prevState.questions, {content: response.data[i].content, options: response.data[i].options, answer: response.data[i].answer.answer_value} ]
                       
                }))
            }

            this.setState({loading: false})
            
               console.log('state', this.state)
        })
        
    }

    
    
    render() {
        const indexOfLastQuestion = this.state.currentPage * this.state.questionsPerPage
    const indexOfFirstQuestion = indexOfLastQuestion - this.state.questionsPerPage
    const currentQuestions = this.state.questions.slice(indexOfFirstQuestion, indexOfLastQuestion)

    //change Page

    const paginate = pageNumber => this.setState({currentPage: pageNumber})
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <Questions questions={currentQuestions} loading={this.state.loading} handleOptionChange={this.handleOptionChange} selectedOption={this.state.selectedOption}/>
            <Pagination questionsPerPage={this.state.questionsPerPage} totalQuestions={this.state.questions.length} paginate={paginate}/>
              <button>Submit</button>
            </div>
            </form>
        )
    }
}

export default MainPageNew
