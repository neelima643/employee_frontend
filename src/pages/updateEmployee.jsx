import InputField from "../components/inputField";
import TextField from "../components/TextField";
import InputSelect from "../components/inputSelect";
import { useEffect, useState } from 'react';
import '../stylepages/createEmployee.css';
import Navbar from '../components/navbar';
import kv_logo from '../images/kv_logo.png';
import { useParams } from 'react-router-dom';
import { useGetEmployeeQuery } from '../services/baseapi'; 
import { useUpdateEmployeeMutation, useGetEmployeeByIdQuery  } from "../services/baseapi";
import { useNavigate } from 'react-router-dom';
//import Nunito Sans from 'https://fonts.googleapis.com/css?family=Nunito Sans';


const UpdateEmployee = () => {
    
        const [state, setState] = useState({
            name: "",
            id: "",
            join_date: "",
            role: "",
            status: "",
            experience: "",
            addresslane1: "",
            addresslane2: "",
            city: "",
            state: "",
            country: "",
            pincode: "",
    
        });

        console.log("state is: " ,state);

        const navigate = useNavigate();
    const goToNextPage= (url) => {
        navigate(url);
    }
    
        let { id } = useParams();
        console.log(id);
    
        
    const { data: empdetails, error, isLoading } = useGetEmployeeByIdQuery(id);
    console.log(empdetails);

    const [updateEmp, result] = useUpdateEmployeeMutation(id);
    console.log(result);
    


    useEffect( () => {
        if(empdetails?.data) {
            setState({
                ...empdetails.data,
                addressLane1: empdetails.data.address.addressLane1,
                addressLane2: empdetails.data.address.addressLane2,
                city: empdetails.data.address.city,
                state: empdetails.data.address.state,
                country: empdetails.data.address.country,
                pincode: empdetails.data.address.pincode,
            });
        }
        
      
      }, [empdetails]);

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
        <div className="div1">Update Employee</div>
            <div className="formdiv" name="empform">
                        
                            {/* <label for="empname">Employee Name</label><br/>
                            <input className="text" type="text" id="empnam" placeholder="Employee Name"/> */}
                            {/* <TextField label={'Employee Name'}/> */}
                            <InputField divname="box" type="text" fieldValue={state.name} id="empname" placeHolder={"Employee Name"} label={"Employee name"} onchange ={(value) => onChangeValue("name", value)} />
                        
                        
                            {/* <label for="empid">Employee Id</label><br/>
                            <input className="text" type="text" id="empid" placeholder="Employee ID"/> */}
                            
                            
                       
                     
                            {/* <label for="join">Joining Date</label><br/>
                            <input className="text" type="text" id="join" placeholder="Joining Date"/> */}
                     
                            <InputField divname="box" type="text" className="text" fieldValue={state.join_date} id="empdate" placeHolder={"Joining Date"} label={"joining Date"} onchange ={(value) => onChangeValue("join_date", value)} />
                    
                            <InputSelect divname="box" label={'Role'}  options={roleSelection}  onchange ={(value) => onChangeValue("role", value)}  /> 

                        {/* <div className="box">onChangeonChange
                            <label for="role">Role</label><br/>
                            <select name="role" id="role">
                                <option value="r1">Choose Role</option>
                                <option value="r2">Role2</option>
                                <option value="r3">Role3</option>
                                <option value="r4">Role4</option>
                            </select>
                        </div> */}
             
                            <InputSelect divname="box" label={'Status'} id="empstatus" options={statusSelection}  onchange={(value) => onChangeValue("status", value)}/> 
                 
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
               
                            <InputField divname="box" type="text" className="text" fieldValue={state.experience} id="empexp" placeHolder={"Experience"} label="Experience" onchange ={(value) => onChangeValue("experience", value)} />
               

                            {/* <label for="address">Address</label><br/>
                            <input className="text" type="text" id="empname" placeholder="Address"/> */}
                 
                            
                            <InputField divname="box" type="text" className="text" fieldValue={state?.ddressLane1} id="empaddress1" placeHolder={"Addresslane 1"} label="Addresslane 1" onchange ={(value) => onChangeValue("addressLane1", value)} />
                            <InputField divname="box" type="text" fieldValue={state?.addressLane2} id="empaddress1" placeHolder={"Addresslane 2"} label={"Addresslane 2"} onchange ={(value) => onChangeValue( "addressLane2", value)}/>

                            <InputField divname="box" type="text" className="text" fieldValue={state?.city} id="empaddress1" placeHolder={"City"} label="City" onchange ={(value) => onChangeValue("city", value)} />
                            <InputField divname="box" type="text" fieldValue={state?.state} id="empaddress1" placeHolder={"State"} label={"State"} onchange ={(value) => onChangeValue( "state", value)}/>
                            <InputField divname="box" type="text" className="text" fieldValue={state?.country} id="coumtry" placeHolder={"Country"} label="Country" onchange ={(value) => onChangeValue("country", value)} />
                            <InputField divname="box" type="text" fieldValue={state?.zipcode} id="zipcode" placeHolder={"Zipcode"} label={"Zipcode"} onchange ={(value) => onChangeValue( "zipcode", value)}/>
                            
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
                        <input type="submit" className="buttons" id="b1" value="Update" onClick={() => updateEmp({
                            name: state.name,
                            id: id,
                            join_date: state.join_date,
                            role: state.role,
                            status: state.status,
                            experience: Number(state.experience),
                            username : "neelima542",
                            passsword : "nee542",
                            departmentId : "c7b15c07-6b4f-4546-878f-b8ccf78a6aef",
                            address : {
                                addressLane1: state.address.addressLane1,
                                addressLane2: state.address.addressLane2,
                                city: state.address.city,
                                state: state.address.state,
                                country: state.address.country,
                                pincode: state.address.pincode
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

export default UpdateEmployee;


