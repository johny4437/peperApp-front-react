import React,{useState} from 'react';
import './Form.css';
import {singin, authenticate, isAuthenticated } from  '../auth/index';
import { useHistory} from  'react-router-dom';
import logo from '../images/loginP.png';

export default function Form() {
    const [values, setValues] = useState({
        name:"edgar",
        password:"edgar1234",
        error:'',
        loading:false,
    });


    const history = useHistory();

    const {name, password, loading, error} = values;

    const hadleChange = name => event =>{
        setValues({...values, [name]:event.target.value})
    };

    const clickSubmit = event =>{
        event.preventDefault();
        setValues({...values, loading:true})
        singin({name, password}).then( data =>{
            if(data.error){
                setValues({...values,error:data.error, loading:false});
            }else{
                authenticate(data, ()=>{
                    setValues({
                        ...values
                    })
                })
                history.push('/dashboard');
                

            }
        })
    };
    const showLoading = () =>(
        loading && (<h2>Carregando...</h2>)
    );
    

    const showError = () =>(
        <div className="alert alert-danger" style={{display:error ? '' : 'none'}}>

            {error}

        </div>
    )

    const singinForm = () =>(
        
            <div className="container">
            <div className="loginbox">
            <img src={logo} className="avatar"/>
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
           {showError()}
           {singinForm()}
           {/* {redirectUser()} */}
       </div>
    )
}
