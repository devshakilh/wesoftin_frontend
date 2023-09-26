import React, { useState } from 'react'
import { TEInput, TERipple } from "tw-elements-react";

import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const history = useNavigate();
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [photos, photoschange] = useState("");


    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' Username';
        }

        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }
        if (photos === null || photos === '') {
            isproceed = false;
            errormessage += ' photos';
        }

        if (!isproceed) {
            toast.warning(errormessage)
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

            } else {
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }


    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { id, name, password, email, photos };
        if (IsValidate()) {
            //console.log(regobj);
            fetch("http://localhost:8000/user", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Registered successfully.')
                navigate('/login');
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }
    }







    return (
        <>


            <section className="h-screen">
                <div className="h-full ">
                    {/* <!-- Left column container with background--> */}
                    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="w-full"
                                alt="Sample imge"
                            />
                        </div>

                        {/* <!-- Right column container --> */}
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 shadow-sm px-4 py-4 shadow-white">

                            {/* <!--Sign in section--> */}
                            <div className="flex flex-row items-center justify-center lg:justify-start">
                                <p className="mb-0 mr-4 text-lg">Register in with</p>

                                {/* <!-- Facebook button--> */}
                                <TERipple rippleColor="light">
                                    <button
                                        type="button"
                                        className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    >
                                        {/* <!-- Facebook --> */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mx-auto h-3.5 w-3.5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                        </svg>
                                    </button>
                                </TERipple>

                                {/* <!-- Twitter button --> */}
                                <TERipple rippleColor="light">
                                    <button
                                        type="button"
                                        className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    >
                                        {/* <!-- Twitter --> */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mx-auto h-3.5 w-3.5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </button>
                                </TERipple>

                                {/* <!-- Linkedin button --> */}
                                <TERipple rippleColor="light">
                                    <button
                                        type="button"
                                        className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    >
                                        {/* <!-- Linkedin --> */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mx-auto h-3.5 w-3.5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                        </svg>
                                    </button>
                                </TERipple>
                            </div>

                            {/* <!-- Separator between social media sign in and email/password sign in --> */}
                            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                                    Or
                                </p>
                            </div>


                            <form className='' onSubmit={handlesubmit}>



                                <div className="mb-3 col-lg-6 " >
                                    <TEInput
                                        value={id} onChange={e => idchange(e.target.value)}
                                        placeholder="Enter your username"

                                        className="mb-6"
                                        // onChange={getdata}
                                        size="lg"
                                    ></TEInput>

                                </div>
                                <div className="mb-3 col-lg-6 " >
                                    <TEInput
                                        value={name}
                                        onChange={e => namechange(e.target.value)}
                                        type="text"
                                        placeholder="Enter your Name"
                                        name='name'
                                        className="mb-6"
                                        // onChange={getdata}
                                        size="lg"
                                    ></TEInput>

                                </div>
                                <div className="mb-3 col-lg-6" >
                                    <TEInput
                                        value={email} onChange={e => emailchange(e.target.value)}
                                        type="email"
                                        placeholder="Enter your Email"
                                        name='email'
                                        className="mb-6"
                                        // onChange={getdata}
                                        size="lg"
                                    ></TEInput>

                                </div>



                                <div className="mb-3 col-lg-6" >
                                    <TEInput
                                        value={password} onChange={e => passwordchange(e.target.value)}

                                        type="password"
                                        placeholder="Password"
                                        name='password'
                                        className="mb-6"
                                        // onChange={getdata}
                                        size="lg"
                                    ></TEInput>

                                </div>
                                <div className="mb-3 col-lg-6" >

                                    <input type="file" name="photos" id=""
                                        className="mb-6"
                                        value={photos}
                                        placeholder="Photos"
                                        onChange={e => photoschange(e.target.value)}

                                    />


                                </div>

                                {/* onClick={addData} */}

                                <button className='btn-primary px-4 py-2 rounded-md' style={{ background: "rgb(67, 185, 127)" }} type="submit" >
                                    Submit
                                </button>
                            </form>

                            <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="text-danger link transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>

                </div >
                <ToastContainer />
            </section >



        </>
    )
}

export default Register