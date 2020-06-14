import {API}from "../Config/API";

export const singin = user =>{
    return fetch(`${API}/user/singin`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => console.log(err))
}
export const authenticate = (data, next) =>{
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt', JSON.stringify(data));
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
    }
}