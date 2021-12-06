import ErrorLogo from '../../assets/404.svg'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const ErrorBox = styled.div`
    text-align: center;
    background-color: ${colors.backgroundLight};
    padding: 1rem;
    margin-top: 2rem;
    font-weight: bold;
    font-size: 1.4rem;
    border-radius: 1rem;
    & .error-img {
        max-width: 35em;
        margin-bottom: 3rem;
    }
    & .error-text--top {
        margin-bottom: 3rem;
    }
`
const Error = () => {
    return (
        <ErrorBox>
            <p className='error-text--top'>Oups...</p>
            <img src={ErrorLogo} alt='Erreur 404' className='error-img' />
            <p>Il semblerait qu'il y ait un problème</p>
        </ErrorBox>
    )
}

export default Error
