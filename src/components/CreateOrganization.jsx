import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import UserService from '../services/UserService'


const CreateOrganization = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, formState : {errors} } = useForm()

    const saveOrganization = (organization) =>{
        UserService.createOrganization(organization)
                    .then(navigate("/dashboard"))
    }

    return (
        <div>
                <div className="container">
                    <div className="card col-md-6 offset-md-3 offset-md-3 my-4">
                        <div className="card-body">
                            <h1 className='fw-bold'>Create Organization</h1>
                            <div className="card-body">
                                <form onSubmit={handleSubmit((organization) => saveOrganization(organization))}>

                                    <div className="form-group my-3">
                                        <label>Organization Name</label>
                                        <input {...register("organizationName", { required: { value: true, message: "Organization name is required"}})} placeholder="Organization Name" className="form-control"/>
                                        {errors.organizationName && <p className='text-danger validation-errors'>{errors.organizationName.message}</p>}
                                    </div>

                                    <div className="form-group my-3">
                                        <label>Organization Description</label>
                                        <input {...register("organizationDescription" , { required: { value: true, message: "Organization Description is required"}})} placeholder="Organization Description" className="form-control"/>
                                        {errors.organizationDescription && <p className='text-danger validation-errors'>{errors.organizationDescription.message}</p>}
                                    </div>

                                    <div className="d-flex justify-content-between">

                                        <button className="btn btn-success" type="submit">Save</button>
                                    
                                        <Link to="/dashboard">
                                            <button className="btn btn-primary">Cancel</button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CreateOrganization
