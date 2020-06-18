import React,{useState} from 'react'
import './FormPrice.css';
import {getToken, isAuthenticated} from '../../services/auth';
import api from   '../../services/api';


export default function FormPrice() {
    const [price, setPrice] = useState('');

    const { token } = getToken();
    


    const handleChange = event =>{
        setPrice( event.target.value);
    };

    const clickSubmit = (event) =>{
        event.preventDefault();
        api.post('price/create', price,{
            headers:{
            Accept:'application/json',
            "Content-Type":"application/json",
             Authorization:`Bearer ${token}`
            }
        });
        // createPrice(token, price)
        // .then(data =>console.log(data))
        // .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <div className="pricebox">
                <form onSubmit={clickSubmit}>
                    <p>Preço</p>
                     <input 
                     type="number"
                      onChange={handleChange} 
                      value={price}
                      step="0.01" 
                      min="0.00"/>
                     <input 
                     type='submit' 
                     value="adicionar"
                     
                     />
                </form>
            </div>
            
        </div>
    )
}
