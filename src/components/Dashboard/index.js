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
                     <li onClick={()=> singout(()=>{
                         history.push('/')
                     })}><i className="fa fa-sign-out"></i>Sair</li>
                 </ul>
                 <label htmlFor="menu" className="menu-bar">
                     <i className="fa fa-bars"></i>
                 </label>
             </nav>
             <div className="side-menu">
                 <li><i className="fa fa-user"></i><span>Adicionar Preço</span></li>
                 <li><i className="fa fa-bar-chart"></i><span>Últimos preços</span></li>
                 {/* <li><i className="fa fa-calendar"></i><span>Preços</span></li>
                 <li><i className="fa fa-user"></i><span>Preços</span></li>
                 <li><i className="fa fa-user"></i><span>Preços</span></li> */}
             
                 <li className="logout" 
                  onClick={()=> singout(()=>{
                    history.push('/')
                })}
                 
                 ><i className="fa fa-sign-out"></i><span>Logout</span></li>
             
             </div>
             <div className="data">
                 <FormPrice/>
             </div>
         </div>
     )
}

export default Dashboard;