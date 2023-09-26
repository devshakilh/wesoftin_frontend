
import React from 'react';
import userData from './userData.json'
import { Link } from 'react-router-dom';
const User = () => {
    console.log(userData);
    return (
        <div className='bg-white py-4 '>
            {
                userData.map(userData => {
                    return (
                        <div className='flex  justify-between py-3 px-4 '>
                            <h3 className='text-black'>{userData.name}    </h3>
                            <Link to={`/userDetails/${userData.id}`} className=''><button className='btn-primary px-5 py-2 rounded-md'> Details</button></Link>
                        </div>
                    )

                })
            }

        </div>
    );
};

export default User;