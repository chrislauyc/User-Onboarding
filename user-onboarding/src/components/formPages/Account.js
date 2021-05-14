import React from 'react';
import {Link} from 'react-router-dom';
function Account(props){
    const {formValues,onChange,errors} = props;
    const isValid = () =>{
        let errorsFound = Object.keys(errors).filter((key)=>(
            (key==='email'||key==='password'||key==='terms')&&errors[key]!==''
        ));
        return(errorsFound.length===0);
    };
    return(
        <div>
            <div>
                <img src='/assets/account.png' alt='account'></img>
            </div>
            <div>
                <label>
                    Email Address
                    <input type='text' name='email' onChange={onChange} value={formValues.email}></input>
                </label>
                <label>
                    Password
                    <input type='password' name='password' onChange={onChange} value={formValues.password}></input>
                </label>
                <label>
                    Terms of Service
                    <input type='checkbox' name='terms' onChange={onChange} checked={formValues.terms}></input>
                </label>
            </div>
            <div>
                <Link to='/'>
                    <button>Back</button>
                </Link>
                <Link to='/form/personalinfo'>
                    <button disabled={!isValid()}>Next</button>
                </Link>
            </div>
        </div>
    );
}
export default Account;