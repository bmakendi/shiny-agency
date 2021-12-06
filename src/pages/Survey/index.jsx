import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const Survey = () => {
    const { questionNumber } = useParams()
    const prevQuestion = questionNumber <= 1 ? 1 : parseInt(questionNumber) - 1
    const nextQuestion = parseInt(questionNumber) + 1
    return (
        <div>
            <h1>Questionnaire</h1>
            <h2>Question {questionNumber}</h2>
            <Link to={`/survey/${prevQuestion}`}>Précédent</Link>
            {questionNumber >= 10 ? (
                <Link to='/results'>Résultats</Link>
            ) : (
                <Link to={`/survey/${nextQuestion}`}>Suivant</Link>
            )}
        </div>
    )
}

export default Survey
