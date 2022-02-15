import React, { useState, useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/MContext'
import UserService from '../services/UserService'

const Home = () => {

    const { currentUserDetails } = useContext(UserContext)
    const [usersNumber, setUsersNumber] = useState(0)
    const navigate = useNavigate()


    const getUsers = async() =>{
        await UserService.getUsers().then( (res) =>{
            setUsersNumber(res.data.length)
        })
    }

    useEffect(()=>{
        window.addEventListener('popstate', function (event) {
            navigate("/dashboard")
        })

        getUsers()
    }, []);

    return (
        <Container>

                <div className="my-4 d-flex justify-content-between">
                    <h2 className="text-center">Welcome {currentUserDetails.employeeFirstName}</h2>
                </div>
                <div className='my-4'>
                    <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                                        
                                        <Link to="/dashboard/users" className='text-decoration-none text-black'>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <h4 className='fw-bold'>Users</h4>
                                                            <h4 className='fw-bold'>{usersNumber}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                        </Link>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                                        <a href="" className='text-decoration-none text-black'>
                                            <div className="card">
                                                <div className="card-body">
                                                    <h4 className='fw-bold'>Meetings</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                
                            </div>
                    </div>
                </div>
                
        </Container>
    )
}

export default Home
