import React, { Component } from 'react'
import axios from 'axios'
import Questions from './Questions';
import Pagination from './Pagination';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'

export class MainPageTest extends Component {

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
            answers: [],
            modalShow: false,
        }

        this.handleOptionChange = this.handleOptionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.buildRadioButtons = this.buildRadioButtons.bind(this);
    }


    handleOptionChange(e) {
        const id = e.target.name
        const answer = { id, answer: e.target.value }
        let answers
        if(this.state.answers.some(answer => answer.id === id)) {
            answers = [...this.state.answers.filter(answer => answer.id !== id, answer)]
        }else{
            answers = [...this.state.answers, answer]
        }
        this.setState({
            answers: answers
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
      // 
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

    var count = 0
    for(var i = 0; i < this.state.selectedOption.length; i++) {
         if(this.state.selectedOption[i] === this.state.questions[i].answer) {           
              count = count + 1
         }
    }
        return (
            //<form onSubmit={this.handleSubmit}>
            <div>
                <Questions questions={currentQuestions} loading={this.state.loading} handleOptionChange={this.handleOptionChange} selectedOption={this.state.selectedOption}/>
            <Pagination questionsPerPage={this.state.questionsPerPage} totalQuestions={this.state.questions.length} paginate={paginate}/>
            <ButtonToolbar>
      <Button variant="primary" onClick={() => this.setState({modalShow: true})}>
        Submit Test
      </Button>

      <MyVerticallyCenteredModal
        count={count}
        show={this.state.modalShow}
        onHide={() => this.setState({modalShow: false})}
      />
    </ButtonToolbar>
            </div>
            //</form>
        )
    }
}

export default MainPageTest
