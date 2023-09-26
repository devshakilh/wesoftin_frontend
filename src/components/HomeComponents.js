import React from 'react';
import illustrationIntro from '../assets/illustration-intro.svg';
import { Link } from 'react-router-dom';





const HomeComponents = () => {
    return (
        <div>





            {/* <User /> */}

            <section id='hero' className='border-t- border-black'>
                {/* Flex Container */}
                <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
                    {/* Left Item */}
                    <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
                        <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
                            Bring everyone together to build better products
                        </h1>
                        <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
                            Manage makes it simple for software teams to plan day-to-day tasks
                            while keeping the larger team goals in view.
                        </p>
                        <div className='flex justify-center md:justify-start'>
                            <Link
                                to='/userprofile'
                                className='p-3 btn-primary px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
                            >
                                User Details Page
                            </Link>
                        </div>
                    </div>
                    {/* Image */}
                    <div className='md:w-1/2'>
                        <img src={illustrationIntro} alt='' />
                    </div>
                </div>
            </section>





        </div>
    );
};

export default HomeComponents;