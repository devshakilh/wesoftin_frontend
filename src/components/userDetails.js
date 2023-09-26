import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import userDetails from './userData.json'
const UserDetails = () => {
    const { id } = useParams();
    const data = userDetails.find(user => user.id === parseInt(id))
    console.log(data);

    const history = useNavigate();
    return (
        <div className=' bg-white min-h-screen lg:pt-24  text-black font-semibold  '>
            <div className=' lg:ml-[500px]  py-4 px-4 justify-center items-center mx-auto'>
                <h3>Name: {data.name}</h3>
                <p>UserName: {data.username}</p>
                <p>Phone: {data.phone}</p>
                <p>Email: {data.email}</p>
                <p>Website: {data.website}</p>
                <p>CompanyName: {data?.company.name}</p>
                <p>CatchPhrase: {data?.company.catchPhrase}</p>




            </div>
            <div className='lg:ml-[520px]  d-flex flex-row py-2 justify-content-center '>
                <button className=' btn btn-primary py-2 ' onClick={() => history("/userprofile")}>Redirect Back Page</button>
            </div>


        </div>
    );
};

export default UserDetails;