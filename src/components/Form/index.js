import React,{useState} from 'react';
import './Form.css';
import {authenticate, singin} from    '../../auth/index';
import { useHistory} from  'react-router-dom';



export default function Form() {
    const [values, setValues] = useState({
        name:"",
        password:"",
        error:'',
        loading:false,
    });


    const  history = useHistory();

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
                authenticate(data.token, ()=>{
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


            <div>
                <header>
                    <div className="main-header">
                        <h1>Login</h1>
                        <hr/>
                        <h3>Bem Vindo</h3>
                        <p><input 
                            onChange={hadleChange('name')}
                            value={name}
                            type="text" 
                            placeholder="Usuário"
                            /></p>
                        <p><input 
                        type="password"
                         placeholder="Senha"
                         onChange={hadleChange('password')}
                         value={password}/></p>
                        <p><button onClick={clickSubmit}>Entrar</button></p>
                    </div>
                </header>
            </div>

        
            // <div className="container">
            // <div className="loginbox">
            // <img src={logo} className="avatar" alt="avatar"/>
            //     <h1>Login</h1>
            //     <form >
            //         <p>Usuário</p>
            //         <input type="text" id="username" 
            //         placeholder="Digite aqui o seu usuário"
            //         onChange={hadleChange('name')}
            //         value={name}
            //         />
            //         <p>Senha</p>
            //         <input type="password" id="password" 
            //         placeholder="Digite aqui sua senha"
            //         onChange={hadleChange('password')}
            //         value={password}
            //         />
            //         <input  onClick={clickSubmit} type="button"  id="submit" value="Entrar"/>
            //     </form>
               
        //     </div>
            
        // </div>
        
    );

    return (
       <div>
           {showLoading()}
           {showError()}
           {singinForm()}
           {/* {redirectUser()}  */}
       </div>
    )
}
