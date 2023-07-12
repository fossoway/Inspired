import { Gender } from './Gender/Gender.jsx'
import { Category } from './Category/Category.jsx'
import { Container } from '../../Layout/Container/Container.jsx'
import { useLocation } from 'react-router-dom'

export const Navigation = ({ list }) => {
    
    return (
        <nav>
            <Container>
                <Gender list={list} />
                <Category list={list} />
            </Container>
        </nav>
    )
}