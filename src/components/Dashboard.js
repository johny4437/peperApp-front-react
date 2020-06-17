import React from 'react'
import './Dashboard.css';
import FormPrice from './FormPrice';
import { useHistory } from "react-router-dom";
import {singout, isAuthenticated} from '../auth/index';


 function Dashboard() {
    const history = useHistory();

    const headerDash = () =>(
        <div className="menu">
            <div className="logo">
                Dashboard <span>Administrativo</span>
            </div>
            <ul>
                {isAuthenticated && 
                <li onClick={()=>singout(()=> history.push('/'))}>Logout</li>}
                <li>Dados</li>
            </ul>
        </div>
    ) 


    return (
        <div className="container">
            {headerDash()}
            <FormPrice/>
        </div>
    )
}
export default Dashboard;