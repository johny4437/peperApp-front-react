import React,{useState} from 'react'
import './FormPrice.css';
import axios from 'axios';


export default function FormPrice() {
    const [values, setValues] = useState('');


    

    

   
    


    const handleChange = event =>{
        
        setValues(event.target.value);
    };

   
    const clickSubmit = async (event) =>{
        event.preventDefault();
        let token =  JSON.parse(localStorage.getItem('jwt'));
        console.log( typeof values)
        await fetch('http://localhost:4000/price/create',{
            method:"POST",
            headers:{
                 Accept: 'application/json',
                'Content-Type': 'application/json',
                "x-auth-token":token,
                
               
                
            },
            body:JSON.parse(values)

        }).then(response =>{
            response.json().then(result=>{
                console.log(result)
            })
        })
        
    
    }

    return (
        <div className="container">
            <div className="pricebox">
                <form onSubmit={clickSubmit}>
                    <p>Preço</p>
                     <input 
                     type="text"
                      onChange={handleChange} 
                      value={values}
                      step="0.01" 
                      min="0.00"/>
                     <input 
                     type='submit' 
                     value="adicionar"
                     
                     />
                </form>
            </div>

            {values}
            
        </div>
    )
}
