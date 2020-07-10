import React,{useState} from 'react';
import './FormPrice.css';
import {API} from '../../Config/API'
import CurrencyInput from './PriceInput/index';





export default function FormPrice() {
    const [price, setPrice] = useState("");
    const [sucess, setSucess] = useState(false);
    const [error,setError] = useState(false);


    const clickSubmit = async event =>{
        event.preventDefault();
       
        let token =  JSON.parse(localStorage.getItem('jwt'));
        console.log(typeof price)
        const formatedPrice = price.replace("R$ ", "")
        console.log(price)

        await fetch(`${API}/price/create`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Accept":"application/json",
                "x-auth-token":token,
                
               
                
            },
            body:JSON.stringify({price: formatedPrice})

        }).then(data =>{
            if(data.error){
                setError(true)
            }else{
                setSucess(true);
                setPrice("")
            }
            })
        
        
    
    }

    const showSuccess = () =>(
        <div className="alert" style={{display: sucess  ? '' : 'none'}}>
            <h2> Preço inserido</h2>
        </div>
    )


    return (
        <div className="container">
        
            <div className="pricebox">
                
           
                <p>Preço</p>
                <form onSubmit={clickSubmit}>
                   <CurrencyInput type="text"  placeholder="R$ 0,00" value={price} onChange={e => setPrice(e.target.value)}  required/>
                     
                     <input 
                     
                     type='submit' 
                     value="adicionar"
                     
                     />

                </form>
                {showSuccess()}
            </div>
        </div>
    )
}
