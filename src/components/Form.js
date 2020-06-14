import React,{useState} from 'react';
import './Form.css';
import {singin, authenticate, isAuthenticated } from  '../auth/index';
import { Redirect } from  'react-router-dom';

export default function Form() {
    const [values, setValues] = useState({
        name:"edgar",
        password:"edgar1234",
        error:"",
        loading:false,
        redirectToReferrer: false
    });

    const { user } = isAuthenticated();

    const {name, password, error, loading, redirectToReferrer} = values;

    const hadleChange = name => event =>{
        setValues({...values, error:false,[name]:event.target.value})
    };

    const clickSubmit = event =>{
        event.preventDefault();
        setValues({...values, error:false, loading:true})
        singin({name, password}).then( data =>{
            if(data.error){
                setValues({...values,error:data.error, loading:false});
            }else{
                authenticate(data, ()=>{
                    setValues({
                        ...values,
                        redirectToReferrer:true
                    })
                })
            }
        })
    };
    const showLoading = () =>(
        loading && (<div className="alert alert-info"><h2>Loading..</h2></div>)
    );
    const redirectUser = ()=>{
        if(redirectToReferrer){
            if(user){
                return  <Redirect to="/dashboard"/>
            }else{
                return <Redirect to="/"/>
            }

        }if(isAuthenticated()){
            return <Redirect to="/dashboard"/>
        }
    }

    const singinForm = () =>(
        
            <div className="container">
            <div className="loginbox">
                <h1>Login</h1>
                <form >
                    <p>Usuário</p>
                    <input type="text" id="username" 
                    placeholder="Digite aqui o seu usuário"
                    onChange={hadleChange('name')}
                    value={name}
                    />
                    <p>Senha</p>
                    <input type="password" id="password" 
                    placeholder="Digite aqui sua senha"
                    onChange={hadleChange('password')}
                    value={password}
                    />
                    <input  onClick={clickSubmit} type="button"  id="submit" value="Entrar"/>
                </form>
               
            </div>
            
        </div>
        
    );

    return (
       <div>
           {showLoading()}
           {singinForm()}
           {redirectUser()}
       </div>
    )
}
