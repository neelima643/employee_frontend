import InputField from "../components/inputField";
import TextField from "../components/TextField";
import InputSelect from "../components/inputSelect";
import { useEffect, useState } from 'react';
import '../stylepages/createEmployee.css';
import Navbar from '../components/navbar';
import kv_logo from '../images/kv_logo.png';
import '../stylepages/employeeDetails.css';
import edit from '../images/Path 327.png'
import { useParams }  from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useGetEmployeeByIdQuery } from '../services/baseapi';


//import Nunito Sans from 'https://fonts.googleapis.com/css?family=Nunito Sans';


const EmployeeDetails = () => {
  
    const navigate = useNavigate();
    const goToNextPage= (url) => {
        navigate(url);
    }

    let { id } = useParams();
    console.log(id);

    const { data, error, isLoading } = useGetEmployeeByIdQuery(id)
    console.log(data);

    

    return (
        
        <body className="body1">
            
            <header>
                        <img className="key" src={ kv_logo }/>
                </header>
            <div className="maindiv">
            
            <Navbar/>
        <main>
        <div className="div1">
        <div className="list">Employee Details</div>
            <div className="edit" onClick={() => goToNextPage(`/${id}/update/`)}>
                <button className="editbtn" onClick={() => goToNextPage(`/${id}/update/`)}>
                    <img src= { edit } onClick={() => goToNextPage(`/${id}/update/`)}/>
                </button>
                <div className="empedit" onClick={() => goToNextPage(`/${id}/update/`)}>Edit Employee</div>
            </div>
        </div>
            <div className="detailbox">
                        
                            {/* <label for="empname">Employee Name</label><br/>
                            <input className="text" type="text" id="empnam" placeholder="Employee Name"/> */}
                            {/* <TextField label={'Employee Name'}/> */}
                            <TextField label="Employee Name" text={ data?.data?.name }/>
                            {/* <InputField fieldValue={state.empname} id="empname" placeHolder={"Employee Name"} label={"Employee name"} onchange ={(value) => onChangeValue("empname", value)} /> */}
                        
                            <TextField label="Employee Id" text={id}/>
                            <TextField label="Joining Date" text={ data?.data?.join_date }/>
                            <TextField label="Role" text={ data?.data?.role }/>
                            <div className="boxdetail">
                            <label className="label1">Status</label> <br/>
                            <label className="label2 statuslabel">{ data?.data?.status }</label>
                            
                             
                            </div>
                            
                            <TextField label="Experience" text={data?.data?.experience}/>
                            <TextField label="Address Lane1" text={data?.data?.address.addressLane1}/>
                            <TextField label="Address Lane2" text={data?.data?.address.addressLane2}/>
                            <TextField label="City" text={data?.data?.address.city}/>
                            <TextField label="State" text={data?.data?.address.state}/>
                            <TextField label="Country" text={data?.data?.address.country}/>
                            <TextField label="Zipcode" text={data?.data?.address.pincode}/>
                  
            </div>
            
        </main>
            </div>
        
        </body>
        
    )

        
        
    

}

export default EmployeeDetails;


