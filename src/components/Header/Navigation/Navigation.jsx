import { Gender } from './Gender/Gender.jsx'
import { Category } from './Category/Category.jsx'
import { Container } from '../../Layout/Container/Container.jsx'

export const Navigation = () => {
    return (
        <nav>
            <Container>
                <Gender />
                <Category />
            </Container>
        </nav>
    )
}