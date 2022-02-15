import React , { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import UserService from '../services/UserService';


const ViewUser = () => {
    console.log("Rendered!")
    const [user, setUser] = useState({});
    const { userId } = useParams();

    const getUser = async() =>{
        await UserService.getUserById(userId)
                    .then(res => setUser(res.data))
    }

    useEffect(() => {
        getUser();        
    }, []);

    console.log(user)

    return (
        <div className='container mt-5'>
            <div className="card">
                <div className="card-body">
                    <h2 className='fw-bold'>User</h2>

                    <div className='row'>

                        <div className='col'>
                            <h5>First Name</h5>
                            <p>{user.employeeFirstName}</p>
                        </div>
                        
                        <div className='col'>
                            <h5>Last Name</h5>
                            <p>{user.employeeLastName}</p>
                        </div>

                        <div className='col'>
                            <h5>Role</h5>
                            <p>{user.userRole}</p>
                        </div>

                    </div>

                    <div className="row">
                        <h4>Contact Details</h4>
                        <div className="col">
                             <h5>Email Address</h5>
                            <p>{user.employeeEmailAddress}</p>
                        </div>
                        <div className="col">
                            <h5>Phone Number</h5>
                            <p>{user.employeePhoneNumber}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <Link to="/dashboard/users">
                                <button className='btn btn-sm btn-primary'>Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewUser
