import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const EmployeeDetails = () => {

    const {id} = useParams();
    const [user, setUser] = useState({});
    const {isAuth} = useContext(AuthContext);

    useEffect(() => {
        axios.get(`http://localhost:8080/employee/${id}`).then((res) => {
            setUser(res.data);
        })
    },[]);

    if(!isAuth){
        return <Navigate to={'/login'} />;
    }



    return (
      <div className="user_details">
        <img src={user.image}className="user_image" />
        <h4 className="user_name">{user.username}</h4>
        <span className="user_salary">${user.salary}</span>
        <span className="tasks">
          <li className="task">{user.tasks}</li>
        </span>
        Status: <b className="status">{user.status}</b>
        Title: <b className="title">{user.title}</b>
        {/* Show this button only if user is not already terminated (users status is working) */}
        <button className="fire">Fire Employee</button>
        {/* Show this button only if user is not already team lead or terminated */}
        <button className="promote">promote</button>
      </div>
    );
  };