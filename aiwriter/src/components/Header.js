import propTypes from 'prop-types';
export const Header = (props) => {
    return (
        <div>
            <h1>{props.Title}</h1>
        </div>
    )
}
Header.defaultProps = {
    Title: 'Title'
}
Header.propTypes = {
    Title: propTypes.string.isRequired
}

 