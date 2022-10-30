import React from 'react';
import logincss from '../styles/Login.module.css'

function Login(){
    return(
        <form className='container-fluid'>
            <div className='offset-md-2 col-md-8'>
                <img class="mb-4" src="./Assets/logo/logoMenu.png" alt="" width="72" height="57"/>
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
            
                <div className={logincss}>
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
                </div>
                <div className={logincss}>
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
                </div>
            
                <div className='checkbox'>
                <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>

            </div>
      </form>
    );
}
export default Login;