import { Link } from 'react-router-dom'
import styled from 'styled-components'
import darkLogo from '../../assets/dark-logo.png'
import Button from '../../components/Button'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
`

const StyledLogo = styled.img`
    max-width: 10rem;
`

const Header = () => {
    return (
        <StyledHeader>
            <Link to='/'>
                <div>
                    <StyledLogo src={darkLogo} alt='Logo' />
                </div>
            </Link>
            <nav>
                <Button to='/'>Accueil</Button>
                <Button to='/freelances'>Profils</Button>
                <Button to='/survey/1' $isFullLink={true}>
                    Faire le test
                </Button>
            </nav>
        </StyledHeader>
    )
}

export default Header
