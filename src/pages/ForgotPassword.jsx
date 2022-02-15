import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const ForgotPassword = () => {


    const {register, handleSubmit} = useForm();

    return (
        <div className="container d-flex flex-column">
            <div className="row align-items-center justify-content-center g-0 min-vh-100">
                <div className="col-12 col-md-8 col-lg-6 col-xxl-4 py-8 py-xl-0">
                    
                    {/* Card */}
                    <div className="card border-0 smooth-shadow-md">
                        {/* Card body */}
                        <div className="card-body p-4 m-2">
                            <div className="mb-4">
                                <h3 className="fw-bold">Forgot Password</h3>
                            </div>

                            <form onSubmit={handleSubmit((data) =>{
                                console.log(data)
                            })}>
                                <p>Please provide the email you used when registering.<br/>We will send a link to reset your password.</p>
                                <div className="form-floating mb-4">
                                    <input {...register("email", { required: true })} type="email" className="form-control" id="floatingResetInput" placeholder="Email Address" autoFocus/>
                                    <label htmlFor="floatingResetInput" className="text-muted">Email Address</label>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>


                                <div className="d-md-flex justify-content-between mt-4">
                                    <div className="mb-2 mt-2 mb-md-0">
                                        <Link to="/" className="text-decoration-none fw-bold">Login</Link>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-primary text-uppercase">Reset</button>
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

export default ForgotPassword
