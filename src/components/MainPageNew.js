import React, { Component } from 'react'
import axios from 'axios'
import Questions from './Questions';
import Pagination from './Pagination';

export class MainPageNew extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            questions: [
                {
                    content: '',
                    options: []
                }
            ],
            loading: false,
            currentPage: 1,
            questionsPerPage: 1
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        axios.get("http://localhost:3002/test")
        .then(response => {
            console.log('Response data for questions', response)
            for(var i = 0; i < response.data.length; i++){
                
                this.setState({
                    questions: [{content: response.data[i].content, options: response.data[i].options}, ...this.state.questions]
                       
                 })
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
            <div>
                <Questions questions={currentQuestions} loading={this.state.loading} />
            <Pagination questionsPerPage={this.state.questionsPerPage} totalQuestions={this.state.questions.length} paginate={paginate}/>
              <button>Submit</button>
            </div>
        )
    }
}

export default MainPageNew
