import InputField from "../components/inputField";
import TextField from "../components/TextField";
import InputSelect from "../components/inputSelect";

const createEmployee= () => {
    
    const roleSelection = [
        {key: 1, val: 'role1'},
        {key: 1, val: 'role2'},
        {key: 1, val: 'role3'}
    ]

    const statusSelection = [
        {key: 1, val: 'status1'},
        {key: 1, val: 'status2'},
        {key: 1, val: 'status3'}
    ]

    return (
        <div>
            <form name="empform" action="#">
                        <div className="box">
                            {/* <label for="empname">Employee Name</label><br/>
                            <input className="text" type="text" id="empnam" placeholder="Employee Name"/> */}
                            <TextField label={'Employee Name'}/>
                            <InputField className="text" fieldValue={''} placeHolder={"Employee Name"}/>
                        </div>
                        <div className="box">
                            {/* <label for="empid">Employee Id</label><br/>
                            <input className="text" type="text" id="empid" placeholder="Employee ID"/> */}
                            <TextField label={'Employee Id'}/>
                            <InputField className="text" fieldValue={''} placeHolder={"Employee ID"}/>
                        </div>
                        <div className="box">
                            {/* <label for="join">Joining Date</label><br/>
                            <input className="text" type="text" id="join" placeholder="Joining Date"/> */}
                            <TextField label={'Joining Date'}/>
                            <InputField className="text" fieldValue={''} placeHolder={"Joining Date"}/>
                        </div>
                        <div className="box">
                            <TextField label={'Role'} />
                            <InputSelect label={'Role'} options={roleSelection} /> 
                        </div>
                        {/* <div className="box">onChangeonChange
                            <label for="role">Role</label><br/>
                            <select name="role" id="role">
                                <option value="r1">Choose Role</option>
                                <option value="r2">Role2</option>
                                <option value="r3">Role3</option>
                                <option value="r4">Role4</option>
                            </select>
                        </div> */}
                        <div className="box">
                            <TextField label={'Status'} />
                            <InputSelect label={'Status'} options={statusSelection} /> 
                        </div>
                        {/* <div className="box">
                            <label for="status">Status</label><br/>
                            <select name="status" id="status">
                                <option value="s1">Status</option>
                                <option value="r2">Role2</option>
                                <option value="r3">Role3</option>
                                <option value="r4">Role4</option>
                            </select>
                        </div> */}
                        
                        <div className="box">
                            {/* <label for="experience">Experience</label><br/>
                            <input className="text" type="text" id="exp" placeholder="Experience"/> */}
                            <InputField className="text" fieldValue={''} placeHolder={"Experience"}/>
                        </div>
                        <div className="box">
                            {/* <label for="address">Address</label><br/>
                            <input className="text" type="text" id="empname" placeholder="Address"/> */}
                            <TextField label={'Address'}/>
                            <InputField className="text" fieldValue={''} placeHolder={"Address"}/>
                        </div>
                        <div className="box">
                            <label for="choosefile">Upload ID proof</label><br/>
                            <div className="filebox">
                                <input type="file" id="file" className="inputfile"/>
                                <label for="file">
                                  <span id="fname" className="filename">Choose a file</span>
                                  <span className="file-button">
                                    Browse
                                  </span>
                                </label>  
                        </div>


                        </div>
                        <div class="box1">
                        <input type="submit" class="buttons" id="b1" value="Create" onClick="f()"/>
                        <input type="submit" class="buttons" id="b2" value="Cancel"/>
                    </div>
            </form>
            
        </div>
    )

        
        
    

}

export default createEmployee;


