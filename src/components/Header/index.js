import logo from "../../files/logo.jpg"
import { Link } from "react-router-dom";

export default function Headers(){
    return (
        <div className="header">
            <div>
                <Link to="/">
                    <img className="logo" width="150" alt="logo" src={logo} />
                </Link>
            </div>
            <div>
                Menu 1 - Menu 2 - Menu 3
            </div>
        </div>
        
    );    
};