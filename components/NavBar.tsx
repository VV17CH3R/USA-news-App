import Link from "next/link";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
    return ( 
        <>
            <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect={true}>
                <Container>
                    <Navbar.Toggle aria-controls="main-navbar"/>
                    <Navbar.Collapse id="main-navbar">
                        <Nav>
                            <Nav.Link as={Link} href="/">Свежие новости</Nav.Link>
                            <Nav.Link as={Link} href="/search">Поиск</Nav.Link>
                            <NavDropdown title="Категории" id="categories-dropdown">
                                <NavDropdown.Item  as={Link} href="/categories/business">Бизнес</NavDropdown.Item>
                                <NavDropdown.Item  as={Link} href="/categories/entertainment">Развлечения</NavDropdown.Item>
                                <NavDropdown.Item  as={Link} href="/categories/general">Общие</NavDropdown.Item>
                                <NavDropdown.Item  as={Link} href="/categories/health">Здоровье</NavDropdown.Item>
                                <NavDropdown.Item  as={Link} href="/categories/science">Наука</NavDropdown.Item>
                                <NavDropdown.Item  as={Link} href="/categories/technology">Технологии</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
     );
}
 
export default NavBar;
<>
</>

