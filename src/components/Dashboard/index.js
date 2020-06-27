import React from 'react';
import FormPrice from  '../FormPrice/index'
import './Dashboard.css'
import {singout} from  '../../auth/index';
import {useHistory} from 'react-router-dom'

 function Dashboard() {

    const history =  useHistory();
    
     return(
         <div>
             <input type="checkbox" id="menu"/>
             <nav>
                 <label >Dashboard</label>
                 <ul>
                     <li><a href="#" onClick={()=> singout(()=>{
                         history.push('/')
                     })}><i className="fa fa-sign-out"></i>Sair</a></li>
                 </ul>
                 <label htmlFor="menu" className="menu-bar">
                     <i className="fa fa-bars"></i>
                 </label>
             </nav>
             <div className="side-menu">
                 <a href="#"><i className="fa fa-user"></i><span>Adicionar Preço</span></a>
                 <a href="#"><i className="fa fa-envelope"></i><span>Últimos preços</span></a>
                 <a href="#"><i className="fa fa-calendar"></i><span>Preços</span></a>
                 <a href="#"><i className="fa fa-user"></i><span>Preços</span></a>
                 <a href="#"><i className="fa fa-user"></i><span>Preços</span></a>
             
                 <a href="#" className="logout"><i className="fa fa-sign-out"></i><span>Logout</span></a>
             
             </div>
             <div className="data">
                 <FormPrice/>
             </div>
         </div>
     )
}

export default Dashboard;