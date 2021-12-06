import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justitfy-content: space-around;
    padding: 1.5rem;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 300px;
    height: 300px;
    cursor: pointer;
    transition: 200ms;
    &:hover {
        box-shadow: 5px 10px 10px #e2e3e9;
    }
    gap: 2.5rem;
`

const CardLabel = styled.span`
    color: #5843e4;
    padding-left: 15px;
    font-size: 22px;
    font-weight: bold;
`

const CardPicture = styled.img`
    height: 150px;
    width: 150px;
    align-self: center;
    border-radius: 50%;
`
const CardTitle = styled.span`
    align-self: center;
    font-size: 1.5rem;
`

const Card = ({ label, title, picture }) => {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardPicture src={picture} alt='freelancer' />
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    )
}

Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture,
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

export default Card
