import axios from 'axios';
import {useState, useEffect} from 'react';
export const Admin = () => {
    
    const [emp, setEmp] = useState({
        employee_name: "",
        employee_id: "",
        title: "",
        salary: "",
        image: "",
        username: "",
        password: "",
        tasks: "",
        status: "",
        team: "",        
    });

    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmp({
            ...emp,
            [name]: value,
        });
        console.log(e.target);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, emp]);

        axios.post('http://localhost:8080/employee', emp).then(() => {
            alert("Data submit");
            setEmp({
                employee_name: "",
                employee_id: "",
                title: "",
                salary: "",
                image: "",
                username: "",
                password: "",
                tasks: "",
                status: "",
                team: "",        
            })
        });
    };

    useEffect(() => {
        getData();
    },[]);

   const getData = () => {
       axios.get('http://localhost:8080/employee').then((res) => {

       setData(res.data);
       console.log(res.data);
       });
   };




    return (
      <form className="createEmployee" onSubmit={handleSubmit}>
        <input value={emp.employee_name} onChange={handleChange} type="text" placeholder="Employee Name" name="employee_name" /> <br />
        <input value={emp.employee_id} onChange={handleChange} type="text" placeholder="Employee id" name="employee_id" /> <br />
        <select value={emp.title} onChange={handleChange} name="title"> 
          <option value="intern">Intern</option>
          <option value="Jr Software Developer">Jr Software Developer</option>
          <option value="Sr Software Developer">Sr Software Developer</option>
          <option value="Team Lead">Team Lead</option>
        </select> <br />
        <input value={emp.salary} onChange={handleChange} type="number" placeholder="Salary" name="salary" /> <br />
        <input value={emp.image} onChange={handleChange} type="text" placeholder="Image" name="image" /> <br />
        <input value={emp.username} onChange={handleChange} type="text" placeholder="User Name" name="username" /> <br />
        <input value={emp.password} onChange={handleChange} type="password" placeholder="Password" name="password" /> <br />
        <input
          value={emp.tasks}
          onChange={handleChange}
          type="text"
          placeholder="Enter tasks separated by commas"
          name="tasks"
        /> <br />
        <select value={emp.status} onChange={handleChange} name="status" id="status">
          <option value="">Select Status</option>
          <option value="terminated">Terminated</option>
          <option value="working">Working</option>
        </select> <br />
        <select value={emp.team} onChange={handleChange} name="team" id="team">
          <option value="">Select team</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="qa">QA</option>
        </select> <br />
        <input className="createUser" type="submit" value={"submit"} /> <br />
      </form>
    );
  };