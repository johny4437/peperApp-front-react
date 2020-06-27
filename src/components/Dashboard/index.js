import React from 'react'
import './Dashboard.css';
import FormPrice from '../FormPrice';
import { useHistory } from "react-router-dom";
import {singout, isAuthenticated} from  '../../auth/index';


 function Dashboard() {
    const history = useHistory();

    const headerDash = () =>(
        <div class="container">
        <nav>
            <div class="logo">
                Admin<span>Panel</span>
            </div>
            <ul id="menu">
                <li><a href=""><i className="fa fa-fw fa-home"></i>Home</a></li>
                <li><a onclick="changeUrl()"><i class="fa fa-product-hunt"></i>Produtos</a></li>
                <li><a href=""><i className="fa fa-fw fa-user"></i>Clientes</a></li>
                <li><a href=""><i className="fa fa-fw fa-wrench"></i>Serviços</a></li>
                <li><a href=""><i className="fa fa-fw fa-envelope"></i>Contatos</a></li>
            </ul>
        </nav>
        <header>
            <div id="links">
                <a href=""><i className="logout"></i>Logout</a>
            </div>
        </header>

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