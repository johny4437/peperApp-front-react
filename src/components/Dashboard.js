import React from 'react'
import './Dashboard.css';
import FormPrice from './FormPrice';
import { useHistory } from "react-router-dom";
import {singout, isAuthenticated} from '../auth/index';

export default function Dashboard() {
    const history = useHistory();

    const headerDash = () =>(
        <div className="menu">
            <ul>
                {isAuthenticated && 
                <li onClick={()=>singout(()=> history.push('/singin'))}>Sair</li>}
                <li>Dados</li>
            </ul>
        </div>
    ) 
    const titleDashboard = () =>(
        <div className="title">
                <div className="logo">
                    Dashboard de  <span>Preço</span>
                </div>
        </div>
        
    )

    return (
        <div>
            {headerDash()}
            {titleDashboard()}
            <FormPrice/>
        </div>
    )
}
