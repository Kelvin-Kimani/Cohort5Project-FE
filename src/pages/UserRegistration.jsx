import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './UserRegistration.css'
import authService from '../services/authService'



const UserRegistration = () => {

    const { register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();

    const saveUser = (data) =>{
        authService.createUser(data).then((res) =>{
            console.log(data)
            navigate("/");
        })
    }

    //Get the errors
    console.log("Errors =", errors)

    return (
        <div className="container d-flex flex-column">
            <div className="row align-items-center justify-content-center g-0 min-vh-100">
                <div className="col-12 col-md-8 col-lg-8 py-8 py-xl-0">
                   <div className="card border-0">
                        <div className="card-header bg-transparent border-0">
                            <h1 className="card-title fw-bold text-center p-3">Sign up:- Register User</h1>
                        </div>
                        <div className="card-body p-4">

                        <form onSubmit={handleSubmit((data) =>{saveUser(data)})}>

                                    <div className="row">
                                    
                                        <div className="col">
                                            <div className="form-floating mb-3">
                                                <input {...register("employeeFirstName", {required: {value: true, message:"First Name is required"}})} type="text" className="form-control" id="firstName" placeholder="First Name" autoFocus/>
                                                <label htmlFor="firstName" className="text-muted">First Name</label>

                                                {errors.employeeFirstName && <p className='text-danger validation-errors'>{errors.employeeFirstName.message}</p>}
                                            </div>
                                        </div>

                                        <div className="col">

                                            <div className="form-floating mb-3">
                                                <input {...register("employeeLastName" , {required: {value: true, message:"Last Name is required"}})} type="text" className="form-control" id="lastName" placeholder="Last Name"/>
                                                <label htmlFor="lastName" className="text-muted">Last Name</label>
                                                {errors.employeeLastName && <p className='text-danger validation-errors'>{errors.employeeLastName.message}</p>}
                                            </div>
                                        </div>
                                    

                                    </div>

                                    <div className="row">

                                        <div className="col">

                                            <div className="form-floating mb-3">
                                                <input {...register("employeeEmailAddress")} type="email" className="form-control" id="emailAddress" placeholder="Email Address"/>
                                                <label htmlFor="emailAddress" className="text-muted">Email Address</label>
                                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                            </div>

                                        </div>


                                        <div className="col">

                                            <div className="form-floating mb-3">
                                                <input {...register("employeePhoneNumber")} type="text" className="form-control" id="phoneNumber" placeholder="Phone Number"/>
                                                <label htmlFor="phoneNumber" className="text-muted">Phone Number</label>
                                            </div>
                                            
                                        </div>

                                    </div>


                                    <div className="row">

                                        <p className='text-muted text-center'>Already have an account?<Link to="/" className='text-decoration-none'>Login</Link></p>
                                        <button type="submit" className='btn btn-primary'>Register</button>

                                    </div>

                                </form>

                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default UserRegistration
