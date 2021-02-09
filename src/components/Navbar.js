import './Navbar.css'

var style = {
    backgroundColor: "lightgrey",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
    position: "relative",
    left: "0",
    top: "0",
    height: "50px",
    width: "100%",
};
// Function name matches file name
const Navbar = () => {
    // return must have one parent element
    return (
        <div style={style}>
            <nav>
                <h1>Welcome to Earth</h1>
            </nav>
        </div>
    )
}

// Makes it available for import
export default Navbar;