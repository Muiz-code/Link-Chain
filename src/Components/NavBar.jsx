import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/LinkChain logo.png";
import bell from "../assets/notificationBell.png";
import share from "../assets/share.png";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary place-items-center">
        <div className="container">
          <Navbar.Brand href="#home" className="w-[10%]">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text" href="#home">
                Template
              </Nav.Link>
              <Nav.Link className="text" href="#link">
                Discover
              </Nav.Link>
              <Nav.Link className="text" href="#home">
                Features
              </Nav.Link>
              <Nav.Link className="text" href="#link">
                Learn
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto d-flex gap-3 justify-content-center w-[30%]">
              <Nav.Link className="w-[15%] icon rounded-full" href="#home">
                <img src={bell} className="w-[100%]" alt="" />
              </Nav.Link>
              <Nav.Link
                className="w-[15%] icon rounded-full"
                href="#home"
              ></Nav.Link>
              <button className="bg-[#7d3c98] flex text-white py-2 justify-center place-items-center text-[20px] gap-2 rounded-xl w-[30%]">
                share <img src={share} className="w-[17%]" />
              </button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="border-[0.5px] border-[#7d3c98] h-[0.1vh] w-screen"></div>
    </div>
  );
};

export default NavBar;
