var style = {
    backgroundColor: "lightgrey",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
};

const Footer = () => {
    return (
        <div style={style}>
            <p>&copy; First Team Project - Erin, Tracey, Harry</p>
        </div>
    );
}

export default Footer;