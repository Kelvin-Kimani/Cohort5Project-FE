import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    
    function callLogout(){
        localStorage.removeItem("user");
        console.log("Successfully Logged Out!");
        navigate("/");
    }


    return (
        <div>
            
            <header>    
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark py-3">
                        <div className='container-fluid'>
                            <a href="/dashboard" className="navbar-brand mx-4 fs-3 fw-bold">Meeting Planner</a>
                        </div>
                        <div className="me-auto">
                        </div>
                        <div className='collapse navbar-collapse'>
                           <ul className="navbar-nav me-4 mb-2 mb-lg-0">

                               <Link to="/dashboard/organization" className='text-decoration-none text-info me-4'>Organization</Link>
                               <Link to="/dashboard/profile" className='text-decoration-none text-info me-4'>Profile</Link>
                               <button className='btn btn-sm btn-outline-primary' onClick={() => callLogout()}>Logout</button>
                           </ul>
                        </div>
                    </nav>
            </header>

        </div>
    )
}

export default Header
