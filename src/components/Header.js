import PropTypes from 'prop-types';
import Button from './Button.js'

const Header = (props) => {
    const onClick = () => {
        console.log("Click")
    }
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header
