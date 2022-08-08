import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import '../stylepages/login.css';
import loginicon from '../images/log.png';
import InputField from "../components/inputField";
import { useLoginToMutation } from "../services/baseapi";
import { useEffect, useState } from 'react';
import { setStorage } from "../services/utils/storage";
import kvlogo from '../images/kv_logo.png';

const Login = () => {

    const [state, setState] = useState({
        username : "",
        passsword: ""

    });

    const onChangeValue = (key, value) => {
        setState({
            ...state,
            [key]: value
        })
    }
    const navigate = useNavigate();

    const goToNextPage= () => {
        navigate('/list');
    }

    const[loginDetails, result] = useLoginToMutation('login');

    const onLogin = async () => {
        const response = await loginDetails (state);
        if(response.data) 
        {
            setStorage("idToken", response.data.data.idToken);
            goToNextPage();

        }
    }

    return(
        // <Button label="Next" handleClick={goToNextPage}/>
        
        <div className="maindiv1">
            <div className="subdiv1">
                <img className="image" src= { loginicon }/>
            </div>
            <div className="subdiv2">
            <div className="imgbox">
                <img src={kvlogo}/>
            </div>
            <InputField divname="textbox" fieldvalue="login" className="text1" type="text" placeHolder='Username' onchange ={(value) => onChangeValue("username", value)} /> <br/>
                       
            <InputField  divname="textbox" fieldvalue="passwordval" className="pass" type="password" placeHolder="Password" onchange ={(value) => onChangeValue("passsword", value)}/> <br />

            <div className="textbox">
            <button label="Login" type="submit" className="loginbtn" onClick ={() => onLogin()
                
            }>Login In </button>
            
            </div>
            
            
            </div>
        </div>
        
    )
}

export default Login;