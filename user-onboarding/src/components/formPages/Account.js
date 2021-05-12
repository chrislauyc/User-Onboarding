import React from 'react';
import {Link} from 'react-router-dom';
function Account(props){
    const {formValues,onChange, isValid} = props;
    return(
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
            <Link to=''>
                <button>Back</button>
            </Link>
            <Link to=''>
                <button disabled={!isValid}>Next</button>
            </Link>
        </div>
    );
}
export default Account;