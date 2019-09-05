import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Questions from './Questions';
import Pagination from './Pagination';

const MainPage = () => {

    const [questions, setQuestions] = useState([{content: '', options: []}])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [questionsPerPage] = useState(1)

    useEffect(() => {
       const fetchQuestions = async () => {
           setLoading(true)
           const response = await axios.get('http://localhost:3002/test')
           console.log('response', response)
           for(var i = 0; i < response.data.length; i++){
           setQuestions(questions.concat({content: response.data[i].content, options: response.data[i].options}))
           }
           setLoading(false)
       }

       fetchQuestions()
    }, [])

    console.log('value of questions', questions)

    // Get Current Questions
    const indexOfLastQuestion = currentPage * questionsPerPage
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage
    const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion)

    //change Page

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            <Questions questions={currentQuestions} loading={loading} />
            <Pagination questionsPerPage={questionsPerPage} totalQuestions={questions.length} paginate={paginate}/>
        </div>
    )
}



export default MainPage
