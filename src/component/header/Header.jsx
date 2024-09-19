import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    
} from "react-bootstrap";
import { Link } from "react-router-dom";
import menu from "../../../src/Api-json/menu-json/Menu.json";
import company from "../../Api-json/company-json-api/company.json";
const Menu=(item)=>{
    const design=(
        <Link data-bs-dismiss="Nabvar" to={item.item.link} className="nav-link">{item.item.label}</Link>
    );
    return design;
}

const DropdownMenu=({item})=>{
  const design=(
    <>
           <NavDropdown title={item.label} id="basic-nav-dropdown">
            {
              item.DropdownMenu.map((data,index)=>{
                return <Menu item={data} key={index} />
              }
            )}
            </NavDropdown>
    </>
  );
  return design;
}
const Header =()=>{
    const design=(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <img src={company.logo} width="45"/>
        <Navbar.Brand href="#home" className="fw-bold mx-3">{company.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="justify-content-end w-100">
              {
                menu.map((item,index)=>{
                    if(item.isDropdown)
                    {
                        return <DropdownMenu item={item} key={index} />
                    }
                    return <Menu item={item} key={index} />
                })
              }
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
    return design
}
export default Header;