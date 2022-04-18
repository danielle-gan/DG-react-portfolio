import React from "react";
import Nav from "../Navigation"

function Header({ currentPage, handlePageChange }){

    return (
    
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand text-white" href="/">
               <h3>Danielle Gan</h3>
            </a>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            
        </div>
    </nav>
    
    )
};

export default Header