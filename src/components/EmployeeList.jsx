import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './emp.css';

export const EmployeeList = () => {

    const [user, setUser] = useState([]);

    const getData = () => {
        axios.get('http://localhost:8080/employee').then((res) => {

        setUser(res.data);
        console.log(res.data);
        });
    };

    useEffect(() => {
        getData();
    },[]);

    return (
      <div className="list_container">
        {/* On clicking this card anywhere, user goes to user details */}
        {user[0] && user.map((e) => (
            <div key={e.id} className="employee_card">
                <Link to={`/employee/${e.id}`}>
                    <img src={e.image}  className="employee_image" />
                    <span className="employee_name">Employee Name: {e.employee_name}</span> <br />
                    <span className="employee_title">Title: {e.title}</span>
                </Link>
          </div>
        ))}
      </div>
    );
  };
