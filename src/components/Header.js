import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
    // const onClick = (e) => {
    //     console.log('Click')
    // }
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button 
                    color={showAdd ? 'red' : 'green'} 
                    text={showAdd ? 'Close' : 'Add'} 
                    onClick={onAdd} 
                />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS you can pa ss variable to h1 as a style
// const headingStyle = {
//     color: 'red', 
//     backgroundColor:'black'
// }

export default Header