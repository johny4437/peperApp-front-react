import React,{useState} from 'react';
import './FormPrice.css';
import CurrencyInput from './PriceInput/index';





export default function FormPrice() {
    const [price, setPrice] = useState("");


    const clickSubmit = async event =>{
        event.preventDefault();
       
        let token =  JSON.parse(localStorage.getItem('jwt'));
        console.log(typeof price)
        console.log(price)

        await fetch('http://localhost:4000/price/create',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Accept":"application/json",
                "x-auth-token":token,
                
               
                
            },
            body:JSON.stringify({price})

        }).then(response =>{
            return  response.json()
            }).catch(err => console.log(err))
        
        
    
    }

    return (
        <div className="container">
        
            <div className="pricebox">
                
           
                <p>Preço</p>
                <form onSubmit={clickSubmit}>
                   <CurrencyInput type="text" placeholder="$0.00" value={price} onChange={e => setPrice(e.target.value)} />
                     
                     <input 
                     
                     type='submit' 
                     value="adicionar"
                     
                     />
                </form>
            </div>
        </div>
    )
}
