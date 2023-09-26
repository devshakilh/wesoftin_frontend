import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FetchUserList, Removeuser } from "../Redux/Action";

const UserProfile = (props) => {
    useEffect(() => {
        props.loaduser();
    }, [])
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

                <div>
                    <div className="card">

                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td>Code</td>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Phone</td>
                                        <td>  </td>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.user.userlist && props.user.userlist.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td><Link to={`/userDetails/${item.id}`} className=''><button className='btn-primary px-5 py-2 rounded-md'> Details</button></Link></td>

                                            </tr>
                                        )
                                    }

                                </tbody>

                            </table>
                        </div>

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