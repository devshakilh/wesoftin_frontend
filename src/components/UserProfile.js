import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FetchUserList, Removeuser } from "../Redux/Action";
import { useAuth } from "../AuthContext/AuthContext";






const UserProfile = (props) => {
    useEffect(() => {
        props.loaduser();
    }, [])



    const { user, } = useAuth();


    const handledelete = (code) => {
        if (window.confirm('Do you want to remove?')) {
            props.removeuser(code);
            props.loaduser();
            toast.success('User removed successfully.')
        }
    }




    return (
        props.user.loading ? <div><h2>Loading...</h2></div> :
            props.user.errmessage ? <div><h2>{props.user.errmessage}</h2></div> :

                <div className="lg:px-16">

                    <div className="text-center py-8 text-2xl">
                        {user ? (
                            <div>
                                <span className="mr-2">Hello, {user.username}!</span>

                            </div>
                        ) : null}
                    </div>


                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <td>Code</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Phone</td>
                                    <td>Details</td>


                                </tr>
                            </thead>
                            <tbody>

                                {
                                    props.user.userlist && props.user.userlist.map(item =>
                                        <tr key={item.id}>
                                            <td className="border px-4 py-2">{item.id}</td>
                                            <td className="border px-4 py-2">{item.name}</td>
                                            <td className="border px-4 py-2">{item.email}</td>
                                            <td className="border px-4 py-2">{item.phone}</td>
                                            <td className="border px-4 py-2"><Link to={`/userDetails/${item.id}`} className=''><button className='btn-primary px-5 py-2 rounded-md'> Details</button></Link></td>

                                        </tr>
                                    )
                                }




                            </tbody>
                        </table>
                    </div>


                </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loaduser: () => dispatch(FetchUserList()),
        removeuser: (code) => dispatch(Removeuser(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);