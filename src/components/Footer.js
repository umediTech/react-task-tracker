import { Link } from 'react-router-dom'

const Footer = props => {
  return (
    <footer>
        <p>Copyright &copy; 2021</p>
        <Link to='/about'>About</Link>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer