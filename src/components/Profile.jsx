import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../contexts/MContext';


const Profile = () => {

    const { currentUserDetails } = useContext(UserContext);

    return (
        <div className='container mt-5'>
            <div className="card">
                <div className="card-body">
                    <h2 className='fw-bold'>Profile</h2>

                    <div className='row'>

                        <div className='col'>
                            <h5>First Name</h5>
                            <p>{currentUserDetails.employeeFirstName}</p>
                        </div>
                        
                        <div className='col'>
                            <h5>Last Name</h5>
                            <p>{currentUserDetails.employeeLastName}</p>
                        </div>

                        <div className='col'>
                            <h5>Role</h5>
                            <p>{currentUserDetails.userRole}</p>
                        </div>

                    </div>

                    <div className="row">
                        <h4>Contact Details</h4>
                        <div className="col">
                             <h5>Email Address</h5>
                            <p>{currentUserDetails.employeeEmailAddress}</p>
                        </div>
                        <div className="col">
                            <h5>Phone Number</h5>
                            <p>{currentUserDetails.employeePhoneNumber}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
