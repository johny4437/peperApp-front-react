import React from 'react'
import './Dashboard.css';
import FormPrice from './FormPrice';

export default function Dashboard() {

    const headerDash = () =>(
        <div className="menu">
            <ul>
                <li>Sair</li>
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
