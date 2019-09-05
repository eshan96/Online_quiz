import React, { Component } from 'react'
import axios from 'axios';

class Test extends Component {

    constructor(props) {
        super(props)

        this.state = {
                  
            questions: [
                {
                    content: '',
                    options: []
                }
            ],
            selectedOption: ''
        

        }
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    handleOptionChange(e) {
        this.setState({
            selectedOption: e.currentTarget.value
        })

        console.log('Event Selected', e)
    }


    // [
//          {content: 'sckjsndckjsndc', options: ['sdcsdcs', 'sdcsdc', ]}
    // ]

    componentDidMount() {
        
        axios.get("http://localhost:3002/test")
        .then(response => {
            console.log('Response data for questions', response)
            for(var i = 0; i < response.data.length; i++){
                
                this.setState({
                    questions: [...this.state.questions, {content: response.data[i].content, options: response.data[i].options}]
                    
                 })
            }
            
               console.log('state', this.state)
        })
        
    }
    render() {
        return (

            
            <div>
            {/* <div className="row">
            <div className="col-sm-12"> */}
          
            {this.state.questions.map(question => <div>{question.content}
                            <div className = "radio">{question.options.map(option => 
                             <p><input type = "radio" name = "options" 
                             value = {option.value}
                             checked = {this.state.selectedOption === option.value}
                             onChange = {this.handleOptionChange}/>
                              {option.value}
                             </p>
            )}</div></div>)}
             
                    </div>
                    
            // </div>
            // </div>
        )
    }
}

export default Test
