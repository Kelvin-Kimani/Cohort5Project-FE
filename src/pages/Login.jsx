import React, { useEffect } from 'react'
import './Login.css'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import authService from '../services/authService'

const Login = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const navigate = useNavigate();

    const login = (data) =>{
        authService.loginUser(data)
                    .then( () => {
                        console.log("Login successful");
                        navigate("/dashboard");        
                    })
                    .catch(console.log(errors));
    }

    useEffect(() => {

        window.addEventListener('popstate', function (event) {
            navigate("/")
        })

    }, [])
    

    return (
        <div className="container d-flex flex-column">
            <div className="row align-items-center justify-content-center g-0 min-vh-100">
                <div className="col-12 col-md-8 col-lg-6 col-xxl-4 py-8 py-xl-0">
                    
                    {/* Card */}
                    <div className="card border-0 smooth-shadow-md">
                        {/* Card body */}
                        <div className="card-body p-4 m-2">
                            <div className="mb-4">
                                <h3><a href="" className="text-decoration-none text-black fw-bold">Meeting Planner</a></h3>
                                <p className="mb-4 text-muted">
                                Please enter your user information.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit((data) => {login(data)})}>
                            
                            <div className="form-floating mb-3">
                                <input {...register("username", { required: true,
                                                                    minLength: {value: 2, message: "Enter a valid email address"}})} type="email" className="form-control" id="floatingAdminInput" placeholder="Email Address" autoFocus/>
                                <label htmlFor="floatingAdminInput" className="text-muted">Email Address</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input {...register("password", { required: true, minLength: {value: 3, message: "Password too short"}})} type="password" className="form-control" id="password" placeholder="Password"/>
                                <label htmlFor="password" className="text-muted">Password</label>
                                {errors.password && <p className="text-muted fs-6">{errors.password.message}</p>}
                            </div>
                                
                            
                            <div className="d-lg-flex justify-content-between align-items-center mb-4">
                                <div className="form-check custom-checkbox">
                                    <input type="checkbox" className="form-check-input " id="rememberme"/>
                                    <label className="form-check-label text-muted" htmlFor="rememberme">Remember me</label>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div>
                            
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Sign In</button>
                                </div>

                                <div className="d-md-flex justify-content-between mt-4">
                                    <div className="mb-2 mb-md-0">
                                        <Link to="user_registration" className="text-decoration-none">Create An Account</Link>
                                    </div>
                                    <div>
                                        <Link to="/forgot_password" className="text-decoration-none fw-bold">Forgot your password?</Link>
                                    </div>

                                </div>

                            </div>


                            </form>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
