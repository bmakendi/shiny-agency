import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import { useEffect, useState } from 'react'
import { Loader } from '../../utils/styles/Atoms'

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const CardContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`
const TitleBox = styled.div`
    text-align: center;
    margin: 0.5rem 0;
    & .subtitle {
        color: ${colors.secondary};
        font-size: 1.4rem;
    }
`
const Freelances = () => {
    const [freelancers, setFreelancers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:8000/freelances')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data.freelancersList)
                setFreelancers(data.freelancersList)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <ContentContainer>
            <TitleBox>
                <h1>Trouvez votre prestataire</h1>
                <h2 className='subtitle'>
                    Chez Shiny nous réunissions les meilleurs profils pour vous.
                </h2>
            </TitleBox>
            {loading ? (
                <Loader />
            ) : (
                <CardContainer>
                    {freelancers.map(({ id, name, job, picture }) => {
                        return (
                            <Card
                                key={id}
                                label={job}
                                title={name}
                                picture={picture}
                            />
                        )
                    })}
                </CardContainer>
            )}
        </ContentContainer>
    )
}

export default Freelances
