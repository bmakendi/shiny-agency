import Button from '../../components/Button'
import illustration from '../../assets/home-illustration.svg'
import styled from 'styled-components'

const HeroStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.7rem;
    line-height: 1.5;
    margin-top: 5rem;
`
const HeroButton = styled(Button)`
    margin-left: 0;
    padding: 0.9rem 2rem;
`
const Home = () => {
    return (
        <HeroStyled>
            <div>
                <h1>
                    Repérez vos besoins,
                    <br />
                    on s'occupe du reste,
                    <br />
                    aves les meilleurs talents
                </h1>
                <HeroButton to='/survey/1' $isFullLink>
                    Faire le test
                </HeroButton>
            </div>
            <div>
                <img src={illustration} alt="Illustration d'une fiche" />
            </div>
        </HeroStyled>
    )
}

export default Home
