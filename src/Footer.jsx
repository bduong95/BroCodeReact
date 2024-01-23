
function Footer(){

    return(
        <footer>
            {/* {} stores js code. getFullYear() will return current year */}
            <p>&copy; {new Date().getFullYear()} Your website name</p>
        </footer>
    );
}

export default Footer