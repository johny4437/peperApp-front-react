import {API} from '../Config/API';
import axios from  'axios'

export const singin = user =>{
    
   
    return fetch(`${API}/user/singin`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json"

        },
        body:JSON.stringify(user)

    })
    .then(response =>{
        return response.json()
    })
    .catch(err =>console.log(err))
    
   
}
export const authenticate = (data, next) =>{
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt', JSON.stringify(data));
        next();
    }
    
};

export const isAuthenticated = ()=>{
    if(typeof window == 'undefined'){
        return false;
    }
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }else{
        return false;
    }
}
export const singout = (next) =>{
    if(typeof window !=='undefined'){
        localStorage.removeItem('jwt');
        next();
       
        return fetch(`${API}/user/singout`)
        .then(response => console.log(response))
        .catch(err => console.log(err));
    }
}

export const createPrice = (price) =>{
        
    const api = axios.create({
        baseURL:'http://localhost:4000',
        headers:{

            "Content-Type":"application/json; charset=utf-8"
        }
    });

    return api.post('price/create', price)
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
    // return fetch(`${API}/price/create`,{
    //     method:"POST",
    //     headers:{
    //         Accept:'application/json',
    //         "Content-Type":"application/json",
    //         // Authorization:`Bearer ${token}`
    //     },
    //     body:JSON.parse(price)

    // })
    // .then(response => {
    //     return response.json()
    // })
    // .catch(err => console.log(err))
}