import React, { useEffect, useState } from 'react'
import { TERipple } from "tw-elements-react";


import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../AuthContext/AuthContext';



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const usenavigate = useNavigate();



    useEffect(() => {
        sessionStorage.clear();
    }, []);




    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            // console.log('proceed');
            fetch("http://localhost:8000/user/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                //console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp.password === password) {
                        toast.success('Success');
                        sessionStorage.setItem('username', username);

                        usenavigate('/')
                    } else {
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }





    const ProceedLoginusingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            // console.log('proceed');
            let inputobj = {
                "username": username,
                "password": password
            };
            fetch("https://localhost:/8000/user", {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(inputobj)
            }).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Login failed, invalid credentials');
                } else {
                    toast.success('Success');
                    sessionStorage.setItem('username', username);

                    usenavigate('/userprofile')
                }

            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }



    // validate username and password

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }






    const handleLogin = () => {
        // Implement your authentication logic here
        const userData = { username, password };
        login(userData);
    };




    const history = useNavigate();





    return (
        <>

            <section className="h-screen">
                <div className="h-full">

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
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">

                            {/* <!--Sign in section--> */}
                            <div className="flex flex-row items-center justify-center lg:justify-start">
                                <p className="mb-0 mr-4 text-lg">Sign in with</p>


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


                            {/* form  start */}

                            <form onSubmit={ProceedLogin}>

                                <div className="mb-3 col-lg-6" controlId="formBasicEmail">

                                    <input
                                        value={username} onChange={e => setUsername(e.target.value)}
                                        type="name" name='name'

                                        placeholder="Enter your user Name" />
                                </div>

                                <div className="mb-3 col-lg-6" controlId="formBasicPassword">

                                    <input type="password" name='password'

                                        value={password} onChange={e => setPassword(e.target.value)}
                                        placeholder="Password" />
                                </div>
                                <button variant="primary" onClick={handleLogin} className='px-5 py-2 font-bold text-black'
                                    //  onClick={addData}
                                    style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                    Login
                                </button>
                            </form>

                            {/* form end */}





                            <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                New to register?{" "}
                                <Link
                                    to="/register"
                                    className="text-danger link transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                >
                                    Register
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

export default Login;