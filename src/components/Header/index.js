import logo from "../../files/logo.jpg"


export default function Headers(){
    return (
        <div className="header">
            <div><img className="logo" onClick={()=> document.location.href = '/' } width="150" alt="logo" src={logo} /></div>
            <div>
                Menu 1 - Menu 2 - Menu 3
            </div>
        </div>
        
    );    
};