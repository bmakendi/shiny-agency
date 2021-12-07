import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import { Loader } from '../../utils/styles/Atoms'

const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7rem;
`

const QuestionTitle = styled.h2`
    text-decoration: underline;
    text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
    margin: 30px;
`

const LinkWrapper = styled.div`
    padding-top: 30px;
    & a {
        color: black;
    }
    & a:first-of-type {
        margin-right: 20px;
    }
`

const Survey = () => {
    const [questions, setQuestions] = useState({})
    const [loading, setLoading] = useState(false)
    const { questionNumber } = useParams()
    const prevQuestion = questionNumber <= 1 ? 1 : parseInt(questionNumber) - 1
    const nextQuestion = parseInt(questionNumber) + 1

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:8000/survey')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setQuestions(data.surveyData)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <QuestionContent>
                        {questions[questionNumber]}
                    </QuestionContent>

                    <LinkWrapper>
                        <Link to={`/survey/${prevQuestion}`}>Précédente</Link>
                        {Object.keys(questions).length <= questionNumber ? (
                            <Link to='/results'>Résultats</Link>
                        ) : (
                            <Link to={`/survey/${nextQuestion}`}>Suivante</Link>
                        )}
                    </LinkWrapper>
                </>
            )}
        </SurveyContainer>
    )
}

export default Survey
