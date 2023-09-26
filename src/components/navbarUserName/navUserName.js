// import React, { useEffect, useState } from 'react'

// import { useNavigate } from 'react-router-dom'

// const NavUserName = () => {

//     const [logindata, setLoginData] = useState([]);


//     const history = useNavigate();

//     const [show, setShow] = useState(false);

//     var todayDate = new Date().toISOString().slice(0, 10);


//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const Birthday = () => {
//         const getuser = localStorage.getItem("user_login");
//         if (getuser && getuser.length) {
//             const user = JSON.parse(getuser);

//             setLoginData(user);


//             const userbirth = logindata.map((el, k) => {
//                 return el.date === todayDate
//             });

//             if (userbirth) {
//                 setTimeout(() => {
//                     console.log("ok");
//                     handleShow();
//                 }, 3000)
//             }
//         }
//     }

//     const userlogout = () => {
//         localStorage.removeItem("user_login")
//         history("/");
//     }

//     useEffect(() => {
//         Birthday();
//     }, [])

//     return (
//         <>
//             {
//                 logindata.length === 0 ? "No user Login" :
//                     <>

//                         <div className='d-flex justify-content-center'>

//                             <button onClick={userlogout} className="btn btn-primary">Primary</button>
//                             <button >LogOut</button>
//                         </div>



//                     </>
//             }
//         </>
//     )
// }

// export default NavUserName;

