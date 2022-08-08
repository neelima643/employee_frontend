import list_logo from '../images/list.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

const navigate = useNavigate();
const goToNextPage= (url) => {
    navigate(url);
}

    return (
        
                
                        <nav>
                            <div className="emp-div" onClick={() => goToNextPage(`/list`)}>
                                <a href="#">
                                    <div className="circle">
                                    <img src={ list_logo } className="icon"/>
                                </div>
                                <p>Employee list</p></a>
                                         
                            </div>
                        </nav>
       

    )

}

export default Navbar;


