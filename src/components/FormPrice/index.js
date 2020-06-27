import React,{useState} from 'react'
import './FormPrice.css';



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
                <form onSubmit={clickSubmit}>
                    <p>Preço</p>
                     <input 
                     type="text"
                      value={price}
                      onChange={e => setPrice(e.target.value)} 
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
