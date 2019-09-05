import React from 'react'


const Questions = ({ questions, loading}) => {

    if(loading) {
        return <h2>Loading.....</h2>
    }


    return (
        <div>
          
            {questions.map(question => <div key={question.content}>{question.content}
                            <div className = "radio">{question.options.map(option => 
                             <p key={option.value}><input type = "radio"/>
                              {option.value}
                             </p>
            )}</div></div>)}
             
                    </div>
    )
}


export default Questions
