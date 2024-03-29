import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const CardContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    max-width: 65%;
    margin: auto;
`
const TitleBox = styled.div`
    text-align: center;
    margin: 2rem 0;
    & .subtitle {
        color: ${colors.secondary};
        font-size: 1.4rem;
    }
`
const Freelances = () => {
    const profiles = [
        {
            name: 'Jane Doe',
            jobTitle: 'Devops',
        },
        {
            name: 'John Doe',
            jobTitle: 'Developpeur frontend',
        },
        {
            name: 'Jeanne Biche',
            jobTitle: 'Développeuse Fullstack',
        },
        {
            name: 'Lauren Ipsum',
            jobTitle: 'UX Designer',
        },
    ]
    return (
        <div>
            <TitleBox>
                <h1>Trouvez votre prestataire</h1>
                <h2 className='subtitle'>
                    Chez Shiny nous réunissions les meilleurs profils pour vous.
                </h2>
            </TitleBox>
            <CardContainer>
                {profiles.map((profile, index) => {
                    return (
                        <Card
                            key={`${profile.name}-${index}`}
                            label={profile.jobTitle}
                            title={profile.name}
                        />
                    )
                })}
            </CardContainer>
        </div>
    )
}

export default Freelances
