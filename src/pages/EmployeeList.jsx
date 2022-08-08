import Button from "../components/Button"
import { useNavigate } from 'react-router-dom';
import '../stylepages/employeeList.css';
import '../stylepages/createEmployee.css';
import Navbar from '../components/navbar';
import kv_logo from '../images/kv_logo.png';
import { useGetEmployeeQuery } from '../services/baseapi';
import ellipse from '../images/Ellipse 1.png';
import { useDeleteEmployeeMutation, useUpdateEmployeeMutation } from "../services/baseapi";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'


const EmployeeList = () => {
    
    
    const navigate = useNavigate();
    const goToNextPage= (url) => {
        //zconsole.log(data.data)
        navigate(url);
    }
    let { id } = useParams();
        console.log(id);
    const { data, error, isLoading } = useGetEmployeeQuery('employee')
    const [ deleteEmp, result ] = useDeleteEmployeeMutation(id) 

    const { data: updatedetails, error1, isLoading1 } = useGetEmployeeQuery('employee')
    const [ updateEmp, result1 ] = useUpdateEmployeeMutation(id) 

    var els = document.getElementsByClassName('status2');
    var tdv = document.getElementsByClassName('tdv');
    

    /*const empArr = [
        {name:  'Employee Name', id: 'Employee id', date: 'Joing Date', role: 'Role', e_status: 'Status', exp: 'Experience' }
    ]*/
    
    return (

    <div className="body1">
        <header>
            <img className="key" src={ kv_logo }/>
        </header>
        <div className="maindiv">
            
            <Navbar/>
    <main>
        {/* <Button label="next" handleClick={} /> */}
        <div className="div1">
            <div className="list">Employee List</div>
            <div className="filterby">
               <div className="filter">Filter By</div> 
                <div className="status1">Status</div>
            </div>
            <div className="create">
                <button className="plusbtn" onClick={ () => goToNextPage(`/create`)}>+</button>
                <div className="emp">Create Employee</div>
            </div>   
            
            </div>
        <table >
             <tr className="head1">
                <th>Employee Name</th>
                <th>Employee Id</th>
                <th>Joining Date</th>
                <th>Role</th>
                <th>Status</th>
                <th>Experience</th>
                <th>Action</th>
            </tr>
           
           

           
               {data?.data?.map(element => (
                <tr className="head" onClick={() => goToNextPage(`/${element.id}/details/`)}>
                    <td>{element.name}</td>
                    <td>{element.id} </td> 
                    <td>{element.join_date} </td>
                    <td>{element.role} </td>
                    <td className="tdv"><div className={element.status} id="statusid">{element.status}</div></td> 
                    <td>{element.experience} years</td>
                    <td>
                    <button 
                        
                        onClick={(e) => {
                            e.stopPropagation()
                             deleteEmp(element.id)} 
                        }
                            
                    >
                        </button>
                       
                        
                        <button 
                        
                        onClick={(e) => {
                            e.stopPropagation()
                            goToNextPage(`/${element.id}/update/`)} }
                    >
                        <FontAwesomeIcon icon="faSolid faPencil" /></button>
                        </td>
                </tr>
                
            ))} 
          

        </table>

        
            

        
            
    </main>

    </div>
    </div>
    )

}
export default EmployeeList;