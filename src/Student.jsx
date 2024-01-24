import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <h3>PROPS in React - Bro Code example</h3>
            <a href="https://www.youtube.com/watch?v=uvEAvxWvwOs">Bro Code - PROPS in REACT</a>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student