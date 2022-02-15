import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/MContext';
import UserService from '../services/UserService';

const Users = () => {

    const { currentUserDetails, users, setUsers } = useContext(UserContext)
    
    const navigate = useNavigate()
    const [admin, setAdmin] = useState(false)

    const getSystemUsers = () =>{
        UserService.getUsers()
                    .then( res => setUsers(res.data))
    }

    const viewUser = userId =>{
        navigate(`/dashboard/users/${userId}`)
    }

    useEffect(() =>{

        //set current user admin
        if (currentUserDetails.userRole == "Admin") {
            setAdmin(true)
        } 
        
        getSystemUsers()
    }, [currentUserDetails]);


    return (
        <Container>
                <div className="my-4 d-flex justify-content-between">
                    <h2 className="text-center">Users List</h2>
                    {/*  */}
                    { admin ? <button className='btn btn-primary'>Add User</button> : null }
                </div>
                <Row>

                    <Table striped bordered hover>
                        
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Address</th>
                                <th>Phone Number</th>
                                <th>Role</th>
                                
                                { admin ? <th>Actions</th> : null }

                            </tr>
                            
                        </thead>

                        <tbody>
                            {users.length > 0 && (
                                users.map((user) => (
                                    <tr key = {user.userId}>
                                        <td>{user.employeeFirstName}</td>
                                        <td>{user.employeeLastName}</td>
                                        <td>{user.employeeEmailAddress}</td>
                                        <td>{user.employeePhoneNumber}</td>
                                        <td>{user.userRole}</td>
                                       
                                        { admin ? (
                                        <td className='d-flex justify-content-between'>
                                            <button className='btn btn-sm btn-info' onClick={() =>viewUser(user.userId)}>View</button>
                                            <button className='btn btn-sm btn-danger'>Delete</button>
                                        </td>) : null }
   
                                    </tr>
                                )))}

                        </tbody>
                        
                    </Table>
                </Row>

        </Container>
    )
}

export default Users
