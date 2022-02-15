import React , { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import jwt_decode from "jwt-decode"
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../components/Home';
import Profile from '../components/Profile';
import SideBar from '../components/SideBar';
import Users from '../components/Users';
import ViewUser from '../components/ViewUser';
import { UserContext } from '../contexts/MContext';
import UserService from '../services/UserService';
import CreateOrganization from '../components/CreateOrganization';


const Dashboard = () => {

    const decoded = jwt_decode(localStorage.getItem("user"));
    const [currentUserDetails, setCurrentUserDetails] = useState({});
    const [users, setUsers] = useState([]);


    const getUserDetails = async() =>{
        await UserService.getUserByEmail(decoded.sub)
                                .then( res => setCurrentUserDetails(res.data));
    }

    useEffect(() => {
        getUserDetails();
    }, [])
    
    return (
            <div>
                <UserContext.Provider value ={{ currentUserDetails, users, setUsers }}>
                    <Header/>
                    <SideBar/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="users" element={<Users/>}/>    
                            <Route path="profile" element={<Profile/>}/>    
                            <Route path="users/:userId" element={<ViewUser/>}/>    
                            <Route path="organization" element={<CreateOrganization/>}/>    
                        </Routes>          
                    <Footer/>
                </UserContext.Provider>     
            </div>
            
        
        
    )
}

export default Dashboard
