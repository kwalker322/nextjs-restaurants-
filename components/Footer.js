import styles from'./Footer.module.scss'
import Container from './Container'
import Paragraph from './Paragraph'

const Footer = () => {
    return <footer className={styles.footer}> 
    <Container>
        <Paragraph>Copyright 2022-23, Syracuse Restaraunts. </Paragraph>
    </Container>
    </footer>
}

export default Footer