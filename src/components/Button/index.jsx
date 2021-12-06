import colors from '../../utils/styles/colors'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    padding: 15px;
    margin-left: 1.5rem;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${props =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

export default StyledLink
