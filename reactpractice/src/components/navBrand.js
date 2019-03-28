import React, {component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


class NavBrand extends React.Component{
     
    render(){
        return(
        <div>
          <Navbar>
            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
            </Navbar.Collapse>
         </Navbar>
         </div>
        )
    }
}

export default NavBrand;