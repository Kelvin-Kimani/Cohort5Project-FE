import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { CalendarEventFill } from 'react-bootstrap-icons'
import './SideBar.css'


const SideBar = () => {


    return (
        <div className='offcanvas offcanvas-start sidebar-nav bg-dark text-white' 
                tabIndex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
                data-bs-backdrop="true">

            <div className="offcanvas-body p-0 mt-3">
                <nav className='navbar-dark'>
                    <ul className='navbar-nav'>

                        <li>
                            <div className="category-title small text-uppercase fw-bold px-4">
                                Dashboard
                            </div>
                        </li>

                        <li>
                            <a href="#" className="nav-link px-4 active">
                                <span><span><i className="bi bi-house-door-fill mr-1"></i></span> Home</span>
                            </a>
                        </li>


                        <li className="my-4">
                        </li>


                        <li>
                            <div className="category-title small text-uppercase fw-bold px-4">
                                Meetings Management
                            </div>
                        </li>


                        <li>


                            {/* Accordion */}

                            <a className="nav-link px-4 sidebar-link">
                                <span className="me-2"><CalendarEventFill/></span>Meetings
                                <span className="right-icon ms-auto"><i className="bi bi-chevron-down"></i></span>
                            </a>

                            <div className="collapse" >
                                <div>
                                    <ul className="navbar-nav ps-4">
                                        <li>
                                            <a href="#" className="nav-link px-4">
                                                <span className="me-2"><i className="bi bi-calendar3"></i></span>Manage Meetings
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="nav-link px-4">
                                                <span className="me-2"><i className="bi bi-calendar-plus"></i></span>Create Meeting
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                        </li>



                        {/* Break */}

                        <li className="my-4">
                        </li>


                        <li>
                            <div className="category-title small text-uppercase fw-bold px-4">
                                User Management
                            </div>
                        </li>


                        <li>
                            <a className="nav-link px-4 sidebar-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <span className="me-2"><i className="bi bi-people-fill"></i></span>Users
                                <span className="right-icon ms-auto"><i className="bi bi-chevron-down"></i></span>
                            </a>

                            <div className="collapse" id="collapseExample">
                                <div>
                                    <ul className="navbar-nav ps-4">
                                        <li>
                                            <a href="#" className="nav-link px-4">
                                                <span className="me-2"><i className="bi bi-people"></i></span>Manage Users
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="nav-link px-4">
                                                <span className="me-2"><i className="bi bi-person-plus"></i></span>Create User
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                        </li>


                        {/* Break */}

                        <li className="my-4">
                        </li>

                        <li>
                            <div className="category-title small text-uppercase fw-bold px-4">
                                Rooms Management
                            </div>
                        </li>


                        <li>
                            <a className="nav-link px-4 sidebar-link" data-bs-toggle="collapse" href="#boardRoomsDropDown" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <span className="me-2"><i className="bi bi-border-style"></i></span>Board Rooms
                                <span className="right-icon ms-auto"><i className="bi bi-chevron-down"></i></span>
                            </a>

                            <div className="collapse" id="boardRoomsDropDown">
                                <div>
                                    <ul className="navbar-nav ps-4">
                                        <li>
                                            <a href="#" className="nav-link px-4">
                                                <span className="me-2"><i className="bi bi-border-width"></i></span>Manage Rooms
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="nav-link px-4">
                                                <span className="me-2"><i className="bi bi-calendar2-plus"></i></span>Create Room
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                        </li>

                    </ul>
                </nav>
            </div>
            
        </div>
    )
}

export default SideBar
