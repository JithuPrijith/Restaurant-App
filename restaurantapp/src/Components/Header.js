import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://mcdonough.com/wp-content/uploads/2020/09/starbucks-logo-png-transparent-768x777.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        STARBUCKS
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header