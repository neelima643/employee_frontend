import InputField from "../components/inputField";
import TextField from "../components/TextField";
import InputSelect from "../components/inputSelect";
import { useEffect, useState } from 'react';
import '../stylepages/createEmployee.css';
import Navbar from '../components/navbar';
import kv_logo from '../images/kv_logo.png';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { useCreateEmployeeMutation } from '../services/baseapi';
import { useNavigate } from 'react-router-dom';
//import Nunito Sans from 'https://fonts.googleapis.com/css?family=Nunito Sans';

const CreateEmployee = () => {
    const [state, setState] = useState({
        empname: "",
        empid: "",
        empdate: "",
        emprole: "",
        empstatus: "",
        empexp: "",
        empaddress1: "",
        empaddress2: "",
        city: "",
        state: "",
        country: "",
        zipcode: "",

    });

  
   
      const navigate = useNavigate();
    const goToNextPage= (url) => {
        navigate(url);
    }

    const [createEmp, result] = useCreateEmployeeMutation('employee');
    console.log(result);


    useEffect( () => {
        if(result.isSuccess) {
            goToNextPage('/list')
        }
      
      }, [result]);

    const roleSelection = [
        {key: 'Admin', val: 'Admin'},
        {key: 'SuperAdmin', val: 'SuperAdmin'},
        {key: 'Trainee', val: 'Trainee'}
    ]

    const statusSelection = [
        {key: 'Active', val: 'Active'},
        {key: 'Probation', val: 'Probation'},
        {key: 'Inactive', val: 'Inactive'}
    ]

    const onChangeValue = (key, value) => {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        
        <body className="body1">
            
            <header>
                <img className="key" src={ kv_logo }/>
            </header>
            <div className="maindiv">
            
            <Navbar/>
        <main>
        <div className="div1" >Create Employee</div>
            <div className="formdiv" name="empform">
                        
                            {/* <label for="empname">Employee Name</label><br/>
                            <input className="text" type="text" id="empnam" placeholder="Employee Name"/> */}
                            {/* <TextField label={'Employee Name'}/> */}
                            <InputField divname="box" type="text" fieldValue={state.empname} id="empname" placeHolder={"Employee Name"} label={"Employee name"} onchange ={(value) => onChangeValue("empname", value)} />
                        
                        
                            {/* <label for="empid">Employee Id</label><br/>
                            <input className="text" type="text" id="empid" placeholder="Employee ID"/> */}
                            
                            
                       
                     
                            {/* <label for="join">Joining Date</label><br/>
                            <input className="text" type="text" id="join" placeholder="Joining Date"/> */}
                     
                            <InputField divname="box" type="text" className="text" fieldValue={state.empdate} id="empdate" placeHolder={"Joining Date"} label={"joining Date"} onchange ={(value) => onChangeValue("empdate", value)} />
                    
                            <InputSelect divname="box" label={'Role'}  options={roleSelection}  onchange ={(value) => onChangeValue("emprole", value)}  /> 

                        {/* <div className="box">onChangeonChange
                            <label for="role">Role</label><br/>
                            <select name="role" id="role">
                                <option value="r1">Choose Role</option>
                                <option value="r2">Role2</option>
                                <option value="r3">Role3</option>
                                <option value="r4">Role4</option>
                            </select>
                        </div> */}
             
                            <InputSelect divname="box" label={'Status'} id="empstatus" options={statusSelection}  onchange={(value) => onChangeValue("empstatus", value)}/> 
                 
                        {/* <div className="box">
                            <label for="status">Status</label><br/>
                            <select name="status" id="status">
                                <option value="s1">Status</option>
                                <option value="r2">Role2</option>
                                <option value="r3">Role3</option>
                                <option value="r4">Role4</option>
                            </select>
                        </div> */}
                        
                    
                            {/* <label for="experience">Experience</label><br/>
                            <input className="text" type="text" id="exp" placeholder="Experience"/> */}
               
                            <InputField type="text" className="text" divname="box" fieldValue={state.empexp} id="empexp" placeHolder={"Experience"} label="Experience" onchange ={(value) => onChangeValue("empexp", value)} />
               

                            {/* <label for="address">Address</label><br/>
                            <input className="text" type="text" id="empname" placeholder="Address"/> */}
                 
                            
                            <InputField type="text" className="text" divname="box" fieldValue={state.empaddress1} id="empaddress1" placeHolder={"Address Lane 1"} label="Address Lane 1" onchange ={(value) => onChangeValue("empaddress1", value)} />
                            <InputField type="text" className="text" divname="box" fieldValue={state.empaddress2} id="empaddress2" placeHolder={"Address Lane 2"} label={"Address Lane 2"} onchange ={(value) => onChangeValue( "empaddress2", value)}/>

                            <InputField type="text" className="text" divname="box" fieldValue={state.city} id="empaddress1" placeHolder={"City"} label="City" onchange ={(value) => onChangeValue("city", value)} />
                            <InputField type="text" divname="box" fieldValue={state.state} id="empaddress1" placeHolder={"State"} label={"State"} onchange ={(value) => onChangeValue( "state", value)}/>
                            <InputField type="text" className="text" divname="box" fieldValue={state.country} id="country" placeHolder={"Country"} label="Country" onchange ={(value) => onChangeValue("country", value)} />
                            <InputField type="text" divname="box" fieldValue={state.zipcode} id="zipcode" placeHolder={"Zipcode"} label={"Zipcode"} onchange ={(value) => onChangeValue( "zipcode", value)}/>
                            
                        <div className="box">
                        <label> Id</label>
                            <div className="filebox">
                                <input type="file" id="file" className="inputfile"/>
                                {/* <InputField type="file" id="file" className="inputile"/> */}
                                <label htmlFor="file" className="labelfile">
                                  <span id="fname" className="filename">Choose a file</span>
                                  <span className="file-button">
                                    Browse
                                  </span>
                                </label>  
                        </div>


                        </div>
                        <div className="box1">
                        <input type="submit" className="buttons" id="b1" value="Create" onClick={() => createEmp({
                            name: state.empname,
                            id: state.empid,
                            join_date: state.empdate,
                            role: state.emprole,
                            status: state.empstatus,
                            experience: Number(state.empexp),
                            username : "neelima542",
                            passsword : "nee542",
                            departmentId : "c7b15c07-6b4f-4546-878f-b8ccf78a6aef",
                            address : {
                                addressLane1: state.empaddress1,
                                addressLane2: state.empaddress2,
                                city: state.city,
                                state: state.state,
                                country: state.country,
                                pincode: state.zipcode
                            }
                        })}/>
                        <input type="submit" className="buttons" id="b2" value="Cancel"/>
                    </div>
            </div>
            
        </main>
            </div>
        
        </body>
        
    )

        
        
    

}

export default CreateEmployee;


