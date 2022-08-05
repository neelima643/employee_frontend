import Button from "../components/Button"
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {
    const navigate = useNavigate();
    const goToNextPage= () => {
        navigate('/create');
    }

    const empArr = [
        {name:  'Employee Name', id: 'Employee id', date: 'Joing Date', role: 'Role', e_status: 'Status', exp: 'Experience' }
    ]
    const empElementArr = [
        {empName: 'A', empId: 1, joinDate: '12/03/2022', empRole: 'trainee', empStatus: 'active', empExp: 1},
        {empName: 'A', empId: 1, joinDate: '12/03/2022', empRole: 'trainee', empStatus: 'active', empExp: 1},
        {empName: 'A', empId: 1, joinDate: '12/03/2022', empRole: 'trainee', empStatus: 'active', empExp: 1},
        {empName: 'A', empId: 1, joinDate: '12/03/2022', empRole: 'trainee', empStatus: 'active', empExp: 1},

    ]
        
    return (

       
    <div>
        <Button label="next" handleClick={goToNextPage} />
        <div>
            {empArr.map(elem => (
            <div>
                {elem.name}
                {'    '}
                {elem.id} {'   '} {' '}
                {elem.date} {'   '}
                {elem.role} {'   '}
                {elem.e_status} {'   '}
                {elem.exp} {'    '}
                </div>

            ))}
        </div>

        <div>
            {empElementArr.map(element => (
                <div>
                    {element.empName} {element.empId} {element.joinDate} {element.empRole} {element.empStatus} {element.empExp}
                </div>
                
            ))}

        </div>
            
    </div>
    )
}
export default EmployeeList;